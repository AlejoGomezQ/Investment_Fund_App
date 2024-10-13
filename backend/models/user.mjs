import mongoose from "mongoose";

import TransactionSchema from "./transaction.mjs";

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      unique: true,
      immutable: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    sms: {
      type: String,
    },
    balance: {
      type: Number,
      default: 500000,
    },
    funds: [
      {
        fundId: {
          type: Number,
          ref: "Fund",
        },
        fundName: {
          type: String,
        },
        amount: {
          type: Number,
          required: true,
        },
        notificationPreferences: {
          type: String,
          enum: ["EMAIL", "SMS"],
          required: true,
        },
      },
    ],
    transactions: {
      type: [TransactionSchema],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
