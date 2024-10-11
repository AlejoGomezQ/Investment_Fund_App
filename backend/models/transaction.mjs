import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    transactionId: {
      type: String,
      required: true,
    },
    fundId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fund",
      required: true,
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
