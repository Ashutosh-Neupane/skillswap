import mongoose, { Schema, Document, Types } from "mongoose";

export interface IVideoCall extends Document {
  session: Types.ObjectId;
  roomId: string;
  participants: Types.ObjectId[];
  startedAt?: Date;
  endedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const VideoCallSchema: Schema<IVideoCall> = new Schema(
  {
    session: {
      type: Schema.Types.ObjectId,
      ref: "LearningSession",
      required: true,
    },
    roomId: { type: String, required: true },
    participants: [
      { type: Schema.Types.ObjectId, ref: "User", required: true },
    ],
    startedAt: { type: Date },
    endedAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model<IVideoCall>("VideoCall", VideoCallSchema);
