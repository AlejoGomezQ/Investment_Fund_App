import mongoose from "mongoose";
import TransactionSchema from "./transaction.mjs";

const UserSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
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
});

export default mongoose.model("User", UserSchema);
