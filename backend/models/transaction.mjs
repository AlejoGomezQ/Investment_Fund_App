import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      required: true,
    },
    fundId: {
      type: Number,
      ref: "Fund",
      required: true,
    },
    fundName: {
      type: String,
    },
    type: {
      type: String,
      enum: ["Subscription", "Cancellation"],
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default TransactionSchema;
