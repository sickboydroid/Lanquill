import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  enrollment: string;
  phone: string;
  password: string;
  services: Array<{
    serviceId: mongoose.Types.ObjectId;
    priceAtPurchase: number;
  }>;
}

const UserSchema: Schema = new Schema(
  {
    enrollment: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    services: [
      {
        serviceId: {
          type: Schema.Types.ObjectId,
          ref: "Service",
          required: true,
        },
        priceAtPurchase: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model<IUser>("User", UserSchema);
