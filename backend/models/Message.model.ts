import mongoose, { Schema, Document, Types } from "mongoose";

export interface IMessage extends Document {
  sender: Types.ObjectId;
  receiver: Types.ObjectId;
  session?: Types.ObjectId;
  content: string;
  read: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const MessageSchema: Schema<IMessage> = new Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    receiver: { type: Schema.Types.ObjectId, ref: "User", required: true },
    session: { type: Schema.Types.ObjectId, ref: "LearningSession" },
    content: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IMessage>("Message", MessageSchema);
