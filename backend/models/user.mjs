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
        amount: {
          type: Number,
          required: true,
        },
        notificationPreferences: {
          email: {
            type: String,
          },
          sms: {
            type: String,
          },
          preferredMethod: {
            type: String,
            enum: ["EMAIL", "SMS"],
            required: true,
          },
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
