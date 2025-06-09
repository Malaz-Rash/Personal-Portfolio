const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { getSignedUrl } = require('@aws-sdk/cloudfront-signer');

const app = express();

// إعداد الوسائط (Middleware)
app.use(cors());
app.use(express.json());

// الاتصال بقاعدة بيانات MongoDB
mongoose.connect('mongodb://localhost:27017/tutorials')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

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
        keyPairId: 'YOUR_CLOUDFRONT_KEY_PAIR_ID', // استبدلي بـ Key Pair ID الخاص بكِ
        privateKey: "-----BEGIN RSA PRIVATE KEY-----\n" +
          "MIIEogIBAAKCAQEAs5rh6oZvB0Tp4S2qJkFfIJmTSNdj5jDSsG5W+nJsGP5UCy+o\n" +
          "HNTPuGVF0A4wEWN1A5SkRbesQztwwlnjJ+KIZMDXnl/Ej9yiKV/lP/sBNGbSWnzg\n" +
          "0Kh5v/2BtPVTYKDk2cSVD7iAg7/qJfot3UnR9su3Nhel3zirOBamsccmTo1Y0GYd\n" +
          "qYvWZCE2OPwsThHlJWtide2Qyj5u3HOZmqKsEp+cklIU9vD4xlP/behFhH8WqxlZ\n" +
          "PCF6Zj6QvnHMG8RjsZ14BOK6wFe77AP2xHTvzyzqB0mkJ9VcdZLZA/OXxKcKt1YK\n" +
          "3BngPHcaegA0DLhcxxlrYtF46K+rvB5tUrn9HwIDAQABAoIBACfDGVLfkkMMua6V\n" +
          "en7fqBzCgz30GXTDyFExDGaD4HSkEZ0sXs6LOrV7DjqieXfQCf7R8JBSuntj9HHC\n" +
          "jqys1T9hBhtU3mJvGSOJzGoeusSMIvPPg8IOGm4rxIR4b44L8L5ZbBq/4QvJ+B+S\n" +
          "RIciKa62qQf7skg59oYDVcIz8cIf3obr5DhmRZWDFg9VnBLCTGf55epf+GcudxKx\n" +
          "lljP/E/RhvycIyz6F6wJHuXYFK4Gmz3uWN4NefLpUS8KsDItF4wh1X0CjohNVasw\n" +
          "CV6xZQkRGn+J3tN8vs+oxFYG92bv3Tf+GwTUmZ3XfihwhDJglJT53/Ha1E9tsUJ6\n" +
          "R5NZDkkCgYEA/cz77uMQbbV5o851r3o2jCpA/XXBSPKoTW7YK1sL8adb1yrp+QxH\n" +
          "73P4+N/JZbqqQ/w3i005j2BzGM/JRYtlfUE+BbfUNgN0sUJTRkyAeJfwhYtwt4QG\n" +
          "d4Jr2Gjp0JA9aeMmgwbgIkSvn9YYp8zRkWWxf9zabs58XhAeTVNYa4MCgYEAtSlO\n" +
          "ozjX3WuTutBfpT505v6eViy6BUSPOimcwNV8+6u4zwSCNWkYE+NpkMxaJkZyijn6\n" +
          "i5D2R8oC8LNbu9oVSxhkW7gaeMKJDoAFDd08pyokNcAkQj5KeBz1fiXbiu8MaTwE\n" +
          "JKxr03xtMY8gFhsU/Nzav//xiBPZMyrRUF3xaTUCgYBVHNsX/7nQsN08G87HrDqC\n" +
          "wuDMnyLUrdvXK+b+kyfsQG3COLgCNyYgnUnPXG0T2oejCQAvjRRSisvOdFBRLDA6\n" +
          "0xhTnpRiEMKfd1ip6Jnk1z9n6Z1BTdtFVM2J45UVxmlyCyUtJ68ejt4+wfO+wic9\n" +
          "lVbzRENUiZaXjNw8nki2tQKBgDvuk25aEsfUnAXUg5/WHrSAjX8ywsOVX9C9DXeZ\n" +
          "6QQVVkleU3k58FY8CKN3h2dcLO5fqexcI62yPfDFVVa7GgpC4oiZSmCi8taSMZnZ\n" +
          "lAQ1Y89IZnZnxxkfc3OtMIkw9ikmSrSbOfy4ECOyFspZYUMaCWA1WwFKl7Neuepd\n" +
          "ecz1AoGAU6gBZG4Iy2gE6pVsh3z/DaT6MyJnYK62halTwPU4x++WPI7xeoUxOlhD\n" +
          "thbUb6EWVAKfqdKlKq5Yn6tTn4egNYdr6904M/o4bWJleRP5orHWr4K8UlU371Kn\n" +
          "K/rElujsxzcoOSAnvaE0QqO0X5nv6ZopaYPgXnDTrvLmPdIot8E=\n" +
          "-----END RSA PRIVATE KEY-----", // استبدلي هذا بالمفتاح الجديد إذا أنشأتِ واحدًا
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
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});