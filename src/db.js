import mongoose from "mongoose";
const MONGO_CONNECTION = "mongodb://localhost:27017/fileUploads";

export default (async function connect() {
  try {
    await mongoose.connect(MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    console.error(err);
  }
})();
