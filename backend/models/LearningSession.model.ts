import mongoose, { Schema, Document, Types } from "mongoose";

export interface ILearningSession extends Document {
  learner: Types.ObjectId;
  teacher: Types.ObjectId;
  skill: string;
  description?: string;
  image?: string;
  status: "pending" | "scheduled" | "completed" | "cancelled";
  learnerProposedTime?: Date;
  teacherProposedTime?: Date;
  scheduledAt?: Date; // final agreed time
  createdAt?: Date;
  updatedAt?: Date;
}

const LearningSessionSchema: Schema<ILearningSession> = new Schema(
  {
    learner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    teacher: { type: Schema.Types.ObjectId, ref: "User", required: true },
    skill: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    status: {
      type: String,
      enum: ["pending", "scheduled", "completed", "cancelled"],
      default: "pending",
    },
    learnerProposedTime: { type: Date },
    teacherProposedTime: { type: Date },
    scheduledAt: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model<ILearningSession>(
  "LearningSession",
  LearningSessionSchema
);
