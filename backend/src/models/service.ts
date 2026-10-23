import mongoose, { Schema, Document } from "mongoose";

export interface IService extends Document {
  name: string;
  price: number;
  icon: string;
}

const ServiceSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    icon: { type: String, default: "default_task_icon.svg" },
  },
  { timestamps: true },
);

export default mongoose.model<IService>("Service", ServiceSchema);
