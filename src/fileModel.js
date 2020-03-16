import { Schema, model } from "mongoose";

const fileSchema = new Schema({
  filename: String,
  mimetype: String,
  path: String
});

export default model("File", fileSchema);
