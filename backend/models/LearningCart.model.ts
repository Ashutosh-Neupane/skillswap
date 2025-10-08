import mongoose, { Schema, Document, Types } from "mongoose";

export interface ILearning extends Document {
  user: Types.ObjectId; // The learner
  teacher: Types.ObjectId; // The person teaching
  skill: string;
  description?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const LearningCartSchema: Schema<ILearning> = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    teacher: { type: Schema.Types.ObjectId, ref: "User", required: true },
    skill: { type: String, required: true },
    description: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<ILearning>("LearningCart", LearningCartSchema);
