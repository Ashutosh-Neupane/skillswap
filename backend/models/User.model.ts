import mongoose, { Schema, Document } from "mongoose";
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  image: string;
  bio?: string;
  location?: {
    city: string;

    country: string;
  };
  profilePicture?: string;
  learningCart?: mongoose.Types.ObjectId[];
  online: boolean;
}
const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String, required: true },
    bio: { type: String },
    location: {
      city: { type: String },
      country: { type: String },
    },
    profilePicture: { type: String },
    learningCart: [{ type: Schema.Types.ObjectId, ref: "User" }],
    online: { type: Boolean, default: false },
  },
  { timestamps: true }
);
export default mongoose.model<IUser>("User", UserSchema);
