import { asynchandler } from "../utils/asyncHandler.js";

const registerUser = asynchandler (async (req, res ) => {
    return res.status(200).json({
        message: "ok"
    })
})

export {registerUser}