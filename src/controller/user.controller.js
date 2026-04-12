import {asyncHandler} from "../utils/asyncHandler.js"
import {apiError} from "../utils/apiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/apiResponse.js"




const registerUser = asyncHandler(async (req , res) => {
    //get user details from the frontend
    //validation , if anything is empty or not
    //check if user already exist : username or email
    //check for images 
    //check for avatar 
    //upload them to cloudinary
    //create user object - create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return res

    const {fullName , email , username , password } = req.body

    //console.log("email : " , email );
    //method 1 : noob
    // if(fullName === ""){
    //     throw new apiError(400 , "Full name is required")
    // }

    // if(email === ""){
    //     throw new apiError(400 , "Email is required")
    // }

    //method 2 : pro

    if ([fullName , email , username , password].some((field) => field?.trim() === "")) {
        throw new apiError(400 , "All fields are required")
    }

    const existedUser = await User.findOne({
        $or: [{username} , {email}]
    })
    
    if(existedUser){
        throw new apiError(409 , "User already exist")
    }

    // console.log(req.files);

    const avatarLocalPath = req.files?.avatar[0]?.path;

    //const coverImageLocalPath = req.files?.coverImage[0]?.path;

    let coverImageLocalPath;

    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalPath = req.files.coverImage[0].path
    }

    if (!avatarLocalPath) {
        throw new apiError(400 , "Avatar is required")
    }

    const avatarUrl = await uploadOnCloudinary(avatarLocalPath)

    const coverImageUrl = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatarUrl){
        console.log(req.file);
        console.log(req.files);
        throw new apiError(400 , "Avatar upload failed")
    }

    const user = await User.create({
        fullname: fullName,
        avatar: avatarUrl,
        coverImage: coverImageUrl || "",
        email,
        username : username.toLowerCase(),
        password,
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if(!createdUser){
        throw new apiError(500 , "something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse("User created successfully" , 201 , createdUser)
    )
})

export {registerUser}
