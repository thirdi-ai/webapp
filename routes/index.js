const express = require('express');
const router = express.Router();
// var path = require('path');

// const { Storage } = require("@google-cloud/storage");
// const Multer = require('multer');
// const openAI = require('openai');
// const { GoogleGenerativeAI } = require("@google/generative-ai");
// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-pro"});
// const fs = require('fs');
// // ...
// var staticSrc = path.join(__dirname, "/static/");
// router.use(express.static(staticSrc));

// const OPENAI_TEMPARATURE = 0.25
// const OPENAI_MODEL_NAME = "gpt-4-0125-preview"

// const openai = new openAI({
//   apiKey: process.env.OPENAI_API_KEY,
// })
// // File Reading
// const multer = Multer({
//   storage: Multer.memoryStorage(),
//   limits: {
//     fileSize: 5*1024*1024, // 5MB
//   }
// })
// const storage = new Storage({
//   projectId: "healthy-kayak-408304",
//   keyFilename: staticSrc + "mykey.json",
// });
// const bucket = storage.bucket('grow-data-files-repo');



// var csvData = null
// router.post('/continue', express.json(), (req,res) => {
//   try {
//     csvData = req.body.data;
//     res.status(200).send("Completed");
//   } catch(e) {
    // res.status(500).send(e);
//   }
// });

// router.post('/upload', multer.single('csvFile'), (req,res) => {
//   try {
//     if(req.file) {
//       const allowedMimeTypes = ['text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
//       if (!allowedMimeTypes.includes(req.file.mimetype)) {
//         return res.status(400).send('Please upload a CSV or Excel file.');
//       }
//       const blob = bucket.file(req.file.originalname);
//       const blobStream = blob.createWriteStream();

//       blobStream.on("finish", ()=> {
//         res.status(200).send("Success");
//       });
//       blobStream.end(req.file.buffer);
//     }
//   } catch(e) {
//     console.log(e);
//     res.status(500).send(e);
//   }
// })

// router.post('/upload', multer.single('csvFile'), (req,res) => {
//   try {
//     // console.log("Attempting Upload");
//     if(req.file) {
//       const blob = bucket.file(req.file.originalname);
//       const blobStream = blob.createWriteStream();

//       blobStream.on("finish", ()=> {
//         res.status(200).send("Success");
//       });
//       blobStream.end(req.file.buffer);
//     }
//   } catch(e) {
//     console.log(e);
//     res.status(500).send(e);
//   }
// })

// router.post('/runChatGPT', async (req,res) => {
//   fs.readFile(staticSrc + "basePromptnew.txt", 'utf8', async (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const basePrompt  = data;
//     const completion = await openai.chat.completions.create({
//       messages: [
//         {role: "system", content: "You are a data scientist to analyze datasets. Do not make up information that is not in the dataset. For each analysis, provide the exact and definitive answer and do not provide code or instructions to do the analysis on other platforms"},
//         { role: "user", content: basePrompt }
//       ],
//       temperature: OPENAI_TEMPARATURE,
//       model: OPENAI_MODEL_NAME,
//     });
      
//     console.log("First Level");
//     // console.log(completion.choices[0]);
//     fs.readFile(staticSrc + "schema2.txt", 'utf8', async (err1, data1) => {
//       if (err1) {
//         console.error(err1);
//         return;
//       }
//       const newR = await openai.chat.completions.create({
//         messages: [
//           { role: "user", content: "Schema format is COLUMN_NAME:data_type \n" + data1 }
//         ],
//         temperature: OPENAI_TEMPARATURE,
//         model: OPENAI_MODEL_NAME,
//       });
//       console.log("Second Level");
//       console.log(newR.choices[0]);
//       // const newR1 = await openai.chat.completions.create({
//       //   messages: [
//       //     { role: "user", content: csvData }
//       //   ],
//       //   temperature: OPENAI_TEMPARATURE,
//       //   model: OPENAI_MODEL_NAME,
//       // });

//       console.log("Final");
//       // console.log(newR1.choices[0].message.content);
//       res.status(200).send(
//         // newR1.choices[0].message.content
//         );
//     });
//   });
// });

// router.post('/runChat', async (req,res) => {
//   fs.readFile(staticSrc + "basePrompt.txt", 'utf8', async (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const basePrompt  = data;
//     const { totalTokens } = await model.countTokens(basePrompt);
//     console.log(totalTokens);
//     const chat = model.startChat({
//       history: [
//         {
//           role: "user",
//           parts: "Hello, I have 2 dogs in my house.",
//         },
//         {
//           role: "model",
//           parts: "Great to meet you. What would you like to know?",
//         },
//       ],
//       generationConfig: {
//         maxOutputTokens: 100000,
//       },
//     });
    
//     const result = await chat.sendMessage(basePrompt);
//     const response = await result.response;
//     console.log("First Level");
//     console.log(response.text());
//     fs.readFile(staticSrc + "schema.txt", 'utf8', async (err1, data1) => {
//       if (err1) {
//         console.error(err1);
//         return;
//       }
//       const newR = chat.sendMessage(data1);
//       const res1 = await newR.response;
//       console.log("Second Level");
//       console.log(response);
//       console.log(res1.text());
//       const newR1 = chat.sendMessage(csvData);
//       const res2 = await newR1.response;

//       console.log("Final");
//       console.log(res2.text());
//       res.status(200).send("Complete");
//     });
//     // const result = await model.generateContent(basePrompt);
//     // const response = await result.response;
//     // console.log(response);
//   });
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ThirdI' });
});

module.exports = router;
