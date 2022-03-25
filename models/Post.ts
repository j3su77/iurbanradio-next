import mongoose, { Model, model, Schema } from "mongoose"
import { IPost } from '../interfaces';

const postSchema = new Schema({
    title:          { type: String, required: true },
    description:    { type: String, required: true },
    images:         [{ type: String}],
    slug:           { type: String, required: true, unique: true },
    tags:           [{ type: String }],

},{
    timestamps: true
})

postSchema.index({title: "text", tags: "text"})



const Post: Model<IPost> = mongoose.models?.Post || model("Post", postSchema)


export default Post;