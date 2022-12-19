import mongoose, { Model, Schema, ObjectId } from "mongoose"
import { IPost } from '../interfaces';

const postSchema = new Schema({
    title:          { type: String, required: true },
    description:    { type: String, required: true },
    cover:         { type: String, required: true},
    slug:           { type: String, required: true, unique: true },
    tags:           [{ type: String }],
    author:         { type: mongoose.Schema.Types.ObjectId, required: true }
},{
    timestamps: true
})

postSchema.index({title: "text", tags: "text"})



const Post: Model<IPost> = mongoose.models?.Post || mongoose.model("Post", postSchema)


export default Post;