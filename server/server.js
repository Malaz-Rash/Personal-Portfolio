const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { getSignedUrl } = require('@aws-sdk/cloudfront-signer');

const app = express();

// إعداد الوسائط (Middleware)
app.use(cors());
app.use(express.json());

// الاتصال بـ MongoDB Atlas
const uri = process.env.MONGODB_URI || 'mongodb+srv://admin:HamzaLoza%4025102023@cluster0.65macnn.mongodb.net/tutorials?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Failed to connect to MongoDB Atlas:', err));

// إنشاء نموذج (Schema) للدورات
const tutorialSchema = new mongoose.Schema({
  title: String,
  videoFileName: String, // اسم الملف في S3 (مثل video1.mp4)
});

const Tutorial = mongoose.model('Tutorial', tutorialSchema);

// API لجلب جميع الدورات مع الروابط الموقّعة
app.get('/api/tutorials', async (req, res) => {
  try {
    const tutorials = await Tutorial.find();
    console.log('Tutorials fetched:', tutorials); // سجل للتحقق من البيانات
    const tutorialsWithSignedUrls = tutorials.map(tutorial => {
      const signedUrl = getSignedUrl({
        url: `https://ds94x55ah8o35.cloudfront.net/${tutorial.videoFileName}`,
        keyPairId: process.env.CLOUDFRONT_KEY_PAIR_ID,
        privateKey: process.env.CLOUDFRONT_PRIVATE_KEY,
        dateLessThan: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString() // ساعتين
      });
      return {
        ...tutorial._doc,
        videoUrl: signedUrl
      };
    });
    res.json(tutorialsWithSignedUrls);
  } catch (err) {
    console.error('Error fetching tutorials:', err);
    res.status(500).json({ error: 'Failed to fetch tutorials', details: err.message });
  }
});

// تشغيل الخادم
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});