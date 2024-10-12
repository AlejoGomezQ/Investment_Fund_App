import mongoose from "mongoose";

const FundSchema = new mongoose.Schema(
  {
    fundId: {
      type: Number,
      required: true,
      unique: true,
      immutable: true,
    },
    name: {
      type: String,
      required: true,
    },
    minAmount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ["FPV", "FIC"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Fund", FundSchema);
