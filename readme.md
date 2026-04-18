# YouTube REST API Clone

A robust backend service for a video-streaming application, providing a scalable RESTful API. Built with Node.js, Express, and MongoDB, this project includes comprehensive features like secure authentication, media handling, and complex data aggregation.

## 🚀 Key Features

* **Secure Authentication:** Complete registration and login system utilizing JSON Web Tokens (JWT) with dual Access and Refresh token strategies, plus Bcrypt for secure password hashing.
* **Cloud Media Management:** Resilient file upload pipeline that accepts local files via **Multer** and securely stores images and video content in the cloud using **Cloudinary**.
* **Advanced Data Queries:** Utilizes Mongoose aggregation pipelines (`mongoose-aggregate-paginate-v2`) to efficiently paginate and fetch complex relationships, such as user watch histories.
* **RESTful Architecture:** Follows industry-standard API design principles with clear, modular controller and routing structures.

## 💻 Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB & Mongoose ORM
* **Authentication:** JWT (jsonwebtoken), bcrypt, cookie-parser
* **Media Handling:** Cloudinary, Multer

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd youtube_backend_clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add the following configuration:
   ```env
   PORT=8000
   MONGODB_URI=<your_mongodb_connection_string>
   CORS_ORIGIN=*
   
   ACCESS_TOKEN_SECRET=<your_access_token_secret>
   ACCESS_TOKEN_EXPIRY=1d
   REFRESH_TOKEN_SECRET=<your_refresh_token_secret>
   REFRESH_TOKEN_EXPIRY=10d
   
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   *The server will start using nodemon and load your environment variables automatically.*

## 📂 Project Structure Snapshot

```text
src/
├── controllers/    # Route controllers (logics)
├── db/             # Database connection setup
├── middlewares/    # Multer, Auth guards, etc.
├── models/         # Mongoose Schemas (User, Video, etc.)
├── routes/         # Express API routing 
├── utils/          # Cloudinary config, Async handlers, Error classes
└── index.js        # Application entry point
```
