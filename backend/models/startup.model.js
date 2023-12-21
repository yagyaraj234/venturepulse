import { Schema, model } from "mongoose";

const startUpSchema = new Schema(
  {
    SNo: {
      type: Number,
      required: [true, "Serial number is required"],
      unique: [true, "Serial number must be unique"],
    },
    Date: {
      type: String,
      required: true,
    },
    StartupName: {
      type: String,
      required: [true, "Startup name is required"],
      unique: [true, "Startup already exists"],
    },
    IndustryVertical: {
      type: String,
      required: [true, "Industry name required"],
    },
    SubVertical: {
      type: String,
    },
    CityLocation: {
      type: String,
    },
    InvestorsName: {
      type: String,
    },
    InvestmentType: {
      type: String,
    },
    AmountInUSD: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Startup = model("startup", startUpSchema);
