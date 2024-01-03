

// const mongoose = require('mongoose');

// const mongoURI = 'mongodb://riyagoel037:riyagoel038@ac-8djeo2x-shard-00-00.3djyhoz.mongodb.net:27017,ac-8djeo2x-shard-00-01.3djyhoz.mongodb.net:27017,ac-8djeo2x-shard-00-02.3djyhoz.mongodb.net:27017/foodie?ssl=true&replicaSet=atlas-gvoan5-shard-0&authSource=admin&retryWrites=true&w=majority'; // Replace with your MongoDB connection string

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log('Connected to MongoDB');

//         // Access the 'sample' collection and fetch data
//         const fetchedData = await mongoose.connection.db.collection('sample').find({}).toArray();
//         console.log('Fetched Data:',"");

//         // Store fetched data in a global variable
//         global.sampleData = fetchedData;
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error.message);
//         // Handle error
//     }
// };

// module.exports = mongoDB;

// mongoDB();





const mongoose = require('mongoose');

const mongoURI = 'mongodb://riyagoel037:riyagoel038@ac-8djeo2x-shard-00-00.3djyhoz.mongodb.net:27017,ac-8djeo2x-shard-00-01.3djyhoz.mongodb.net:27017,ac-8djeo2x-shard-00-02.3djyhoz.mongodb.net:27017/foodie?ssl=true&replicaSet=atlas-gvoan5-shard-0&authSource=admin&retryWrites=true&w=majority'; // Replace with your MongoDB connection string

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        // Access the 'sample' collection and fetch data
        const fetched_data = await mongoose.connection.db.collection('sample');
        fetched_data.find({}).toArray(async function(err, data) { // Added the missing closing parenthesis here
            const sample1 = await mongoose.connection.db.collection("sample1");
            sample1.find({}).toArray(function(err, catData) {
                if (err) {
                    console.log(err);
                } else {
                    global.sample = data;
                    global.sample1 = catData;
                }
            });
        });
       
        // console.log('Fetched Data:', "");
        // global.sampleData = fetchedData;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        // Handle error
    }
};

module.exports = mongoDB;

mongoDB();
