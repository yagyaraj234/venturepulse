import { Schema, model } from "mongoose";

const companySchema = new Schema(
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
    InvestorName: {
      type: String,
    },
    InvestorType: {
      type: String,
    },
    Logo: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Company = model("Company", companySchema);
