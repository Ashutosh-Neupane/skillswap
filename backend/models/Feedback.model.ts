import mongoose, { Schema, Document, Types } from "mongoose";

export interface IFeedback extends Document {
  session: Types.ObjectId;
  rater: Types.ObjectId;
  ratee: Types.ObjectId;
  rating: number; // 1–5
  comment?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const FeedbackSchema: Schema<IFeedback> = new Schema(
  {
    session: { type: Schema.Types.ObjectId, ref: "LearningSession", required: true },
    rater: { type: Schema.Types.ObjectId, ref: "User", required: true },
    ratee: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IFeedback>("Feedback", FeedbackSchema);
