import mongoose, { Model, Schema, ObjectId } from "mongoose";
import { ITag } from "../interfaces";

const tagSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);
tagSchema.index({ title: "text", tags: "text" });

const Tag: Model<ITag> =
  mongoose.models?.Tag || mongoose.model("Tag", tagSchema);

export default Tag;
