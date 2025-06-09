const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { getSignedUrl } = require('@aws-sdk/cloudfront-signer');

const app = express();

// إعداد الوسائط (Middleware)
app.use(cors());
app.use(express.json());

// الاتصال بـ MongoDB Cloud
const uri = process.env.MONGODB_URI || 'mongodb+srv://your-username:your-password@cluster0.mongodb.net/tutorials?retryWrites=true&w=majority';
// استبدلي 'your-username', 'your-password', و'cluster0' بقيم MongoDB Atlas الخاصة بكِ
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
        keyPairId: process.env.CLOUDFRONT_KEY_PAIR_ID || 'YOUR_CLOUDFRONT_KEY_PAIR_ID', // المفتاح الحالي
        privateKey: process.env.CLOUDFRONT_PRIVATE_KEY || `-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEAs5rh6oZvB0Tp4S2qJkFfIJmTSNdj5jDSsG5W+nJsGP5UCy+o\nHNTPuGVF0A4wEWN1A5SkRbesQztwwlnjJ+KIZMDXnl/Ej9yiKV/lP/sBNGbSWnzg\n0Kh5v/2BtPVTYKDk2cSVD7iAg7/qJfot3UnR9su3Nhel3zirOBamsccmTo1Y0GYd\nqYvWZCE2OPwsThHlJWtide2Qyj5u3HOZmqKsEp+cklIU9vD4xlP/behFhH8WqxlZ\nPCF6Zj6QvnHMG8RjsZ14BOK6wFe77AP2xHTvzyzqB0mkJ9VcdZLZA/OXxKcKt1YK\n3BngPHcaegA0DLhcxxlrYtF46K+rvB5tUrn9HwIDAQABAoIBACfDGVLfkkMMua6V\nen7fqBzCgz30GXTDyFExDGaD4HSkEZ0sXs6LOrV7DjqieXfQCf7R8JBSuntj9HHC\njqys1T9hBhtU3mJvGSOJzGoeusSMIvPPg8IOGm4rxIR4b44L8L5ZbBq/4QvJ+B+S\nRIciKa62qQf7skg59oYDVcIz8cIf3obr5DhmRZWDFg9VnBLCTGf55epf+GcudxKx\nlljP/E/RhvycIyz6F6wJHuXYFK4Gmz3uWN4NefLpUS8KsDItF4wh1X0CjohNVasw\nCV6xZQkRGn+J3tN8vs+oxFYG92bv3Tf+GwTUmZ3XfihwhDJglJT53/Ha1E9tsUJ6\nR5NZDkkCgYEA/cz77uMQbbV5o851r3o2jCpA/XXBSPKoTW7YK1sL8adb1yrp+QxH\n73P4+N/JZbqqQ/w3i005j2BzGM/JRYtlfUE+BbfUNgN0sUJTRkyAeJfwhYtwt4QG\nd4Jr2Gjp0JA9aeMmgwbgIkSvn9YYp8zRkWWxf9zabs58XhAeTVNYa4MCgYEAtSlO\nozjX3WuTutBfpT505v6eViy6BUSPOimcwNV8+6u4zwSCNWkYE+NpkMxaJkZyijn6\ni5D2R8oC8LNbu9oVSxhkW7gaeMKJDoAFDd08pyokNcAkQj5KeBz1fiXbiu8MaTwE\nJKxr03xtMY8gFhsU/Nzav//xiBPZMyrRUF3xaTUCgYBVHNsX/7nQsN08G87HrDqC\nwuDMnyLUrdvXK+b+kyfsQG3COLgCNyYgnUnPXG0T2oejCQAvjRRSisvOdFBRLDA6\n0xhTnpRiEMKfd1ip6Jnk1z9n6Z1BTdtFVM2J45UVxmlyCyUtJ68ejt4+wfO+wic9\nlVbzRENUiZaXjNw8nki2tQKBgDvuk25aEsfUnAXUg5/WHrSAjX8ywsOVX9C9DXeZ\n6QQVVkleU3k58FY8CKN3h2dcLO5fqexcI62yPfDFVVa7GgpC4oiZSmCi8taSMZnZ\nlAQ1Y89IZnZnxxkfc3OtMIkw9ikmSrSbOfy4ECOyFspZYUMaCWA1WwFKl7Neuepd\necz1AoGAU6gBZG4Iy2gE6pVsh3z/DaT6MyJnYK62halTwPU4x++WPI7xeoUxOlhD\nthbUb6EWVAKfqdKlKq5Yn6tTn4egNYdr6904M/o4bWJleRP5orHWr4K8UlU371Kn\nK/rElujsxzcoOSAnvaE0QqO0X5nv6ZopaYPgXnDTrvLmPdIot8E=\n-----END RSA PRIVATE KEY-----`, // المفتاح الحالي
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