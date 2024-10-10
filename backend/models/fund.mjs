import mongoose from "mongoose";

const FundSchema = new mongoose.Schema({
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
});

export default mongoose.model("Fund", FundSchema);
