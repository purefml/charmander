### **📜 API**  
A Node.js and Express-based API using TypeScript, MongoDB, and Mongoose for handling referrals.  

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)  
![Express.js](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)  
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)  
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)  

---

## **🛠️ Features**  
✅ Create, update, delete, and retrieve referrals  
✅ Uses **Mongoose** for database interactions  
✅ **Express.js** for API routing  
✅ **TypeScript** for type safety  
✅ **Cloudinary** for image storage (if applicable)  
✅ **Dotenv** for environment variables  

---

## **📦 Installation**  

### **1️⃣ Clone the repository**  
```sh
git clone https://github.com/purefml/charmander.git
cd charmander
```

### **2️⃣ Install dependencies**  
```sh
npm install
```

### **3️⃣ Set up environment variables**  
Create a `.env` file in the root directory and add:  
```env
NODE_ENV = 'development'
MONGODB = 'mongodb+srv://delacruzrubenjames:fqX8ImsNk8Osfu6F@charmander.z0a9y.mongodb.net/?retryWrites=true&w=majority&appName=Charmander'
CLOUDINARY_CLOUD_NAME='dxkmfa8ea'
CLOUDINARY_API_KEY='531486551519759'
CLOUDINARY_API_SECRET='3lMHMHHAXEn3lC4pRpHCrhpttlQ'
```

### **4️⃣ Run the project**  

#### **Development Mode (using `ts-node` and `nodemon`)**  
```sh
npm start
```

#### **Production Mode (compiling TypeScript and running with Node.js)**  
```sh
npm run build
node dist/index.js
```

---

## **🛠️ API Endpoints**  

### **📌 Referrals API**
| Method | Endpoint | Description |
|--------|---------|------------|
| `POST` | `/api/referrals` | Add a new referral |
| `GET` | `/api/referrals` | Get all referrals |
| `PUT` | `/api/referrals/:id` | Update a referral by ID |
| `DELETE` | `/api/referrals/:id` | Delete a referral by ID |

---

## **🛠️ Technologies Used**  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB, Mongoose  
- **TypeScript**: Type Safety  
- **Middleware**: Body-parser, Multer  
- **Storage**: Cloudinary (optional)  
- **Environment Variables**: Dotenv  

---

## **📜 License**  
This project is licensed under the **ISC License**.  

---

Let me know if you want any modifications! 🚀🔥
