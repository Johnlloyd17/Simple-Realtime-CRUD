// const express = require("express");
// const bodyParser = require("body-parser");
// const { MongoClient } = require("mongodb"); // Example using MongoDB

// const app = express();
// const port = 3000;

// // MongoDB Connection URL (replace with your actual connection string)
// const mongoURL = "http://192.168.8.181:3000";
// const dbName = "registrationDB";
// const collectionName = "registrations";

// // Middleware to parse JSON request bodies
// app.use(bodyParser.json());

// // Serve static files (HTML, CSS, JS) from a 'public' directory
// app.use(express.static(__dirname)); //put all the front end code into a folder called public

// // API endpoint to handle registration
// app.post("/api/register", async (req, res) => {
//   try {
//     const client = new MongoClient(mongoURL);
//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     // Insert the registration data into the database
//     const result = await collection.insertOne(req.body);
//     console.log("Inserted document:", result.insertedId);

//     res
//       .status(201)
//       .json({ message: "Registration successful", id: result.insertedId });
//     client.close();
//   } catch (error) {
//     console.error("Error registering:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // API endpoint to get all registrations (for the dashboard)
// app.get("/api/registrations", async (req, res) => {
//   try {
//     const client = new MongoClient(mongoURL);
//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     const registrations = await collection.find({}).toArray(); // Get all documents
//     res.json(registrations);
//     client.close();
//   } catch (error) {
//     console.error("Error fetching registrations:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// app.get("/ip", (req, res) => {
//   const ip = req.socket.localAddress.replace("::ffff:", ""); // Get server's IP
//   res.json({ ip: ip });
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
// -------------------------------------------------------

// const express = require("express");
// const bodyParser = require("body-parser");
// const { MongoClient, ObjectId } = require("mongodb"); // Import ObjectId
// const ngrok = require('ngrok');
// const app = express();
// const port = 3000;

// const mongoURL = "mongodb://127.0.0.1:27017";
// const dbName = "registrationDB";
// const collectionName = "registrations";

// app.use(bodyParser.json());
// app.use(express.static('public')); // Serve static files from 'public'

// // API endpoint to handle registration
// app.post("/api/register", async (req, res) => {
//   try {
//     const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);
    
//     const result = await collection.insertOne(req.body);
//     console.log("Inserted document:", result.insertedId);
    
//     res.status(201).json({ message: "Registration successful", id: result.insertedId });
//     await client.close();
//   } catch (error) {
//     console.error("Error registering:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // API endpoint to get all registrations
// app.get("/api/registrations", async (req, res) => {
//     try {
//         const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
//         await client.connect();
//         const db = client.db(dbName);
//         const collection = db.collection(collectionName);
        
//         const registrations = await collection.find({}).toArray();
//         res.json(registrations);
//         await client.close();
//       } catch (error) {
//         console.error("Error fetching registrations:", error);
//         res.status(500).json({ message: "Internal server error" });
//       }
//     });
    
    
    
//     // API endpoint to GET a single registration by ID
//     app.delete("/api/registrations/:id", async (req, res) => {
//       try {
//         const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
//         await client.connect();
//         const db = client.db(dbName);
//         const collection = db.collection(collectionName);
        
//         const id = req.params.id;
//         console.log("Deleting registration with ID:", id); // Add this
        
//         // Use ObjectId to create a proper MongoDB ObjectID
//         const result = await collection.deleteOne({ _id: new ObjectId(id) });
//         console.log("Deletion result:", result); // Add this
        
//         if (result.deletedCount === 0) {
//           res.status(404).json({ message: "Registration not found" });
//         } else {
//           res.status(200).json({ message: "Registration deleted successfully" });
//         }
//         await client.close();
//       } catch (error) {
//         console.error("Error deleting registration:", error);
//         res
//         .status(500)
//         .json({ message: "Internal server error", error: error.message });
//       }
//     });
    
//     // API endpoint to UPDATE a registration
//     app.put("/api/registrations/:id", async (req, res) => {
//       try {
//         const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
//         await client.connect();
//         const db = client.db(dbName);
//         const collection = db.collection(collectionName);

//         const id = req.params.id;
//         const updatedData = req.body;

//         const result = await collection.updateOne(
//           { _id: new ObjectId(id) },
//           { $set: updatedData } // Use $set to update only the provided fields
//         );
        
//         if (result.matchedCount === 0) {
//           res.status(404).json({ message: "Registration not found" });
//         } else {
//           res.status(200).json({ message: "Registration updated successfully" });
//         }
//         await client.close();
//       } catch (error) {
//         console.error("Error updating registration:", error);
//         res.status(500).json({ message: "Internal server error" });
//       }
//     });
    
//     // API endpoint to DELETE a registration
//     app.delete("/api/registrations/:id", async (req, res) => {
//       try {
//         const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
//         await client.connect();
//         const db = client.db(dbName);
//         const collection = db.collection(collectionName);
        
//         const id = req.params.id;
        
//         // Use ObjectId to create a proper MongoDB ObjectID from the string ID
//         const result = await collection.deleteOne({ _id: new ObjectId(id) });
        
//         if (result.deletedCount === 0) {
//           // No document found with that ID
//           res.status(404).json({ message: "Registration not found" });
//         } else {
//           res.status(200).json({ message: "Registration deleted successfully" });
//         }
//         await client.close();
//       } catch (error) {
//         console.error("Error deleting registration:", error);
//         res.status(500).json({ message: "Internal server error", error: error.message }); // Send error details
//       }
//     });
    
    
//     // Route to provide the ngrok URL
//     let ngrokUrl = '';
//     app.get('/ngrok-url', (req, res) => {
//       res.json({ url: ngrokUrl });
// });







// // Start ngrok and the Express server (ASYNC - Moved app.listen INSIDE)
// (async function() {
//   try {
//     ngrokUrl = await ngrok.connect(port);
//     console.log(`ngrok URL: ${ngrokUrl}`);
    
//     app.listen(port, () => { // app.listen is now INSIDE the async function
//       console.log(`Server listening on port ${port}`);
//     });
    
//   } catch (error) {
//     console.error("Error starting ngrok:", error);
//     process.exit(1);
//   }
// })();
// -------------------------------------------------------


const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectId } = require("mongodb"); // Import ObjectId
const ngrok = require("ngrok");
const app = express();
const port = 3000;

const mongoURL = "mongodb://127.0.0.1:27017";
const dbName = "registrationDB";
const collectionName = "registrations";

app.use(bodyParser.json());
app.use(express.static("public")); // Serve static files from 'public'

// API endpoint to handle registration
app.post("/api/register", async (req, res) => {
  try {
    const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertOne(req.body);
    console.log("Inserted document:", result.insertedId);

    res
      .status(201)
      .json({ message: "Registration successful", id: result.insertedId });
    await client.close();
  } catch (error) {
    console.error("Error registering:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// API endpoint to get all registrations
app.get("/api/registrations", async (req, res) => {
  try {
    const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const registrations = await collection.find({}).toArray();
    res.json(registrations);
    await client.close();
  } catch (error) {
    console.error("Error fetching registrations:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// API endpoint to GET a single registration by ID
app.get("/api/registrations/:id", async (req, res) => {
  try {
    const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const id = req.params.id;
    const registration = await collection.findOne({ _id: new ObjectId(id) });

    if (!registration) {
      res.status(404).json({ message: "Registration not found" });
    } else {
      res.status(200).json(registration); // Send the registration data
    }
    await client.close();
  } catch (error) {
    console.error("Error fetching registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// API endpoint to UPDATE a registration
app.put("/api/registrations/:id", async (req, res) => {
  try {
    const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const id = req.params.id;
    const updatedData = req.body;
    // Remove the _id field from the update data, if it exists.  You can *not* update _id.
    delete updatedData._id;

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData } // Use $set to update only the provided fields
    );

    if (result.matchedCount === 0) {
      res.status(404).json({ message: "Registration not found" });
    } else {
      res.status(200).json({ message: "Registration updated successfully" });
    }
    await client.close();
  } catch (error) {
    console.error("Error updating registration:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.toString() });
  }
});

// API endpoint to DELETE a registration
app.delete("/api/registrations/:id", async (req, res) => {
  try {
    const client = new MongoClient(mongoURL, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const id = req.params.id;

    // Use ObjectId to create a proper MongoDB ObjectID from the string ID
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      // No document found with that ID
      res.status(404).json({ message: "Registration not found" });
    } else {
      res.status(200).json({ message: "Registration deleted successfully" });
    }
    await client.close();
  } catch (error) {
    console.error("Error deleting registration:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message }); // Send error details
  }
});

// Route to provide the ngrok URL
let ngrokUrl = "";
app.get("/ngrok-url", (req, res) => {
  res.json({ url: ngrokUrl });
});

// Start ngrok and the Express server (ASYNC)
(async function () {
  try {
    ngrokUrl = await ngrok.connect(port);
    console.log(`ngrok URL: ${ngrokUrl}`);

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting ngrok:", error);
    process.exit(1);
  }
})();