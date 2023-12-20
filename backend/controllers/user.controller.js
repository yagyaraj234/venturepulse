import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import cloudinaryUpload from "../utils/cloudinary.js";
import bcrypt from "bcrypt";

const generateToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Something went wrong while genrating token ");
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, phone } = req.body;

  if ([fullName, email, password].some((val) => val?.trim() === "")) {
    throw new ApiError(400, "All fields are required.");
  }

  const checkUserExistence = await User.findOne({ email });

  if (checkUserExistence) {
    throw new ApiError(409, "User already registered with this email.");
  }
  //
  if (phone) {
    const registeredPhone = await User.findOne({ phone });
    if (registeredPhone)
      throw new ApiError(409, "Moblie number already registered.");
  }

  // upload file
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const avatar = await cloudinaryUpload(avatarLocalPath);

  const user = await User.create({
    fullName,
    email,
    password,
    phone: phone || "",
    avatar: avatar?.url || "",
  });

  const createdUser = await User.findById(user._id).select(
    "-password -phone -avatar -refreshToken -orders -ebooks"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user.");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new ApiError(400, "Email is required");
    } else if (!password) {
      throw new ApiError(400, "Password is required");
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new ApiError(409, "Email is not registered.");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      throw new ApiError(401, "Password does not match.");
    }

    // generate refresh and access token

    const { accessToken, refreshToken } = await generateToken(user._id);
    // send with cookies

    const loggedUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("ventures-pulse-access-token", accessToken, options)
      .cookie("ventures-pulse-refresh-token", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            user: loggedUser,
            accessToken: accessToken,
            refreshToken: refreshToken,
          },
          "Logged In"
        )
      );
  } catch (error) {
    return res.status(400).json(new ApiError(400, {}, "Something went wrong"));
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    await User.findByIdAndUpdate(
      userId,
      { $set: { refreshToken: "" } },
      { new: true }
    );

    const options = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .clearCookie("ventures-pulse-access-token", options)
      .clearCookie("ventures-pulse-refresh-token", options)
      .json(new ApiResponse(200, {}, "User logged Out"));
  } catch (error) {
    throw new ApiError(400, "Something went wrong");
  }
});

export { registerUser, loginUser, logoutUser };
