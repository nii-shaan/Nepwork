import { User } from "../models/user.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const currentUserInfo = asyncHandler(async (req, res) => {
    const data = await User.findById(req.user.id).select("-refreshToken -password").populate("kyc")
    return res
        .status(200)
        .json(new ApiResponse(200, true, true, "Hello test passed", data));
});