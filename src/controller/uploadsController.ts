/* 
* Let us assume we have multiple Upload Controllers, we can just put them all here.
* although we can still be more specific, depending on the requirements and scalability.
*/
import { Request, Response, NextFunction } from "express";
import cloudinary from "../../cloudinaryConfig";
import multer from "multer";
import { UploadApiResponse } from "cloudinary";

// Multer setup (temporary file storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
* Since I have used cloudinary for storing of image, we no longer need to create
* a schema model, this will be the same thing as storing thru S3 Bucket.
* this way it limits additional database table. but if we need to add metadatas to the images uploaded
* then we will be needing a model and table for it.
*/

// Upload function
export const uploadImage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (!req.file) {
        res.status(400).json({ message: "No file uploaded" });
        return; // Ensure function execution stops here
      }
  
      // Convert Cloudinary's upload_stream to a Promise
      const uploadToCloudinary = (): Promise<UploadApiResponse> => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "avatars" },
            (error, uploadedImage) => {
              if (error) {
                reject(error);
                return;
              }
              resolve(uploadedImage);
            }
          );
          stream.end(req.file.buffer);
        });
      };
  
      // Wait for image upload
      const uploadedImage = await uploadToCloudinary();
      res.status(200).json({ imageUrl: uploadedImage.secure_url });
  
    } catch (error) {
      next(error);
    }
  };

// Export Multer middleware & controller function
// Note "file" is the key in form data, you can always rename this i.e "avatar", "profilephoto".
export const uploadMiddleware = upload.single("file"); 

