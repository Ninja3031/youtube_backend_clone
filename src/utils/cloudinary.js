import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME?.trim(), 
    api_key: process.env.CLOUDINARY_API_KEY?.trim(), 
    api_secret: process.env.CLOUDINARY_API_SECRET?.trim()
});

console.log("CURRENT CLOUDINARY CONFIG:", {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY ? "EXISTS" : "MISSING",
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //upload the file on clodinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })

        //console.log("File is uploaded on cloudinary" , response.url);
        fs.unlinkSync(localFilePath)
        return response.url;
        
    } catch (error) {
        console.log("CLOUDINARY UPLOAD ERROR: ", error);
        // fs.unlinkSync(localFilePath) // Commented out to debug file presence
        return null;
    }
}

export { uploadOnCloudinary }