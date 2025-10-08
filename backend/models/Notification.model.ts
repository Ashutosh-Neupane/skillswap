import mongoose, { Schema, Document, Types } from "mongoose";

export interface INotification extends Document {
  user: Types.ObjectId; 
  type: string;
  message: string;
  relatedSession?: Types.ObjectId;
  read: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const NotificationSchema: Schema<INotification> = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, required: true },
    message: { type: String, required: true },
    relatedSession: { type: Schema.Types.ObjectId, ref: "LearningSession" },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<INotification>(
  "Notification",
  NotificationSchema
);
