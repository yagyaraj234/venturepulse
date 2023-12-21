import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { Startup } from "../models/startup.model.js";
import { User } from "../models/user.model.js";
const registerStartup = asyncHandler(async (req, res) => {
  const {
    StartupName,
    Date,
    AmountInUSD,
    IndustryVertical,
    SubVertical,
    CityLocation,
    InvestmentType,
    InvestorsName,
  } = req.body;
  const userId = req.user._id;
  console.log(userId);

  if (
    [
      StartupName,
      Date,
      AmountInUSD,
      IndustryVertical,
      SubVertical,
      CityLocation,
      InvestmentType,
      InvestorsName,
    ].some((val) => val?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required.");
  }

  const checkStartupExist = await Startup.findOne({ StartupName });

  if (checkStartupExist) {
    throw new ApiError(
      400,
      `Startup already exists with name : ${StartupName}`
    );
  }
  const startUpList = await Startup.find();

  const newStartup = new Startup({
    StartupName,
    Date,
    AmountInUSD,
    IndustryVertical,
    SubVertical,
    CityLocation,
    InvestmentType,
    InvestorsName,
    SNo: startUpList?.length + 1,
  });

  await newStartup.save().then((savedStartup) => {
    User.findByIdAndUpdate(
      userId,
      { $push: { startup: savedStartup._id } },
      { new: true, useFindAndModify: false }
    ).then((updatedUser) => {
      console.log("User with updated startups:", updatedUser);
    });
  });

  return res
    .status(201)
    .json(new ApiResponse(201, {}, "Startup registered successfully"));
});

const getStartupList = asyncHandler(async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 9;
    console.log({ page, limit });
    const skip = (page - 1) * 10;
    const data = await Startup.find().skip(skip).limit(limit);
    return res.status(200).json(new ApiResponse(200, data, "Success"));
  } catch (error) {
    throw new ApiError(400, "Something went wrong.");
  }
});

const searchStartups = asyncHandler(async (req, res) => {
  try {
    let param = req.params.key;
    console.log(param);

    const startups = await Startup.find({
      $or: [
        { CityLocation: { $regex: new RegExp(param, "i") } },
        { StartupName: { $regex: new RegExp(param, "i") } },
        { InvestorsName: { $regex: new RegExp(param, "i") } },
      ],
    });

    return res.json({ startups });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
});

export { registerStartup, getStartupList, searchStartups };
