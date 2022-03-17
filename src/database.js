// const mongoose = require('mongoose');



// const server = '127.0.0.1:27017'; // REPLACE WITH YOUR OWN SERVER
// const database = 'test';          // REPLACE WITH YOUR OWN DB NAME

// mongoose.connect(`mongodb://127.0.0.1:27017/test`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log('MongoDB connected =) !!');
// }).catch(err => {
//     console.log('Failed to connect to MongoDB', err);
// });
import { connect } from "mongoose";
	import { MONGODB_URI } from "./config";


	// connection to db
	(async () => {
	  try {
	    const db = await connect(MONGODB_URI);
	    console.log("Db connectect to =)", db.connection.name);
	  } catch (error) {
	    console.error(error);
	  }
	})();