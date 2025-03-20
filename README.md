# **Socooo - A Full-Stack Social Media Platform** 🐦  

Socooo is a feature-rich social media platform inspired by Twitter, allowing users to share their thoughts, engage with others, and interact with posts. Built with **Next.js** on the frontend and **Express.js** on the backend, Socooo provides a seamless user experience with authentication, posting, deleting, and many more features.

---

## **Features & Functionalities** 📌  

### **1. User Authentication & Security** 🔐  
- Users can **sign up** using an email and password.  
- **Login system** with JWT-based authentication.  
- **Secure password hashing** using bcrypt.  
- **Session management** to keep users logged in.  
- **Protected routes** ensuring unauthorized users cannot access certain pages.  

---

### **2. Creating & Managing Tweets** ✍️  
- Users can **write tweets** (short text-based posts).  
- Tweets are **stored in MongoDB** and associated with the user who posted them.  
- Tweets **appear in real-time** on the homepage feed.  
- **Character limit enforcement** ensures users don’t exceed a set number of characters (e.g., 280 like Twitter).  

---

### **3. Deleting Tweets** ❌  
- Users can **delete their own tweets** but cannot delete others’ tweets.  
- The deletion request is sent to the backend, where:  
  - It checks if the user requesting deletion is the original author.  
  - If authorized, the tweet is removed from the database.  
  - The frontend updates dynamically to reflect the deletion.  

---

### **4. Commenting on Tweets** 💬  
- Users can **reply to tweets**, allowing conversations to happen.  
- Comments are linked to a specific tweet and stored in the database.  
- Replies are displayed in a **nested format**, making discussions easy to follow.  

---

### **5. Retweeting & Quoting Tweets** 🔄  
- Users can **reshare** tweets by retweeting them.  
- Users can also **add their own thoughts** while resharing (quote tweets).  
- Retweeted posts **retain a reference** to the original tweet in the database.  

---

### **6. Media Upload (Images & Videos)** 📸🎥  
- Users can upload profile pictures.  
- Tweets can include **images and videos**, which are uploaded to **Cloudinary** for storage.  
- The frontend displays media dynamically based on the tweet content.  

---

### **7. User Profiles & Customization** 👤  
- Each user has a **profile page** with:  
  - Display name, username, bio, and profile picture.  
  - A list of tweets posted by the user.  
- Users can **edit their profile** (update bio, change profile picture).  

---

### **8. Real-Time Updates & Feeds** ⚡  
- The homepage feed dynamically updates with new tweets from followed users.  
- Uses **WebSockets** or polling to **fetch new data in real-time**.  
- Optimized for **fast rendering** and **minimal reloads**.  

---

## **Tech Stack** 🛠️  

### **Frontend:**  
- **Next.js** - React framework for SSR and fast performance.  
- **Tailwind CSS** - For styling the UI.  
- **Axios** - For making API requests.  
- **Zustand** - For lightweight state management.  

### **Backend:**  
- **Express.js** - Backend framework for handling requests.  
- **MongoDB & Mongoose** - NoSQL database for storing user and tweet data.  
- **JWT (JSON Web Tokens)** - Secure authentication system.  
- **Cloudinary** - For handling media uploads.  

---

## **Conclusion** ✅  
Socooo is a **fully functional** social media application that offers all the essential features of a modern platform. With a clean and scalable codebase, it ensures a smooth user experience while maintaining security and efficiency.  

Want to contribute? Feel free to fork the repo and submit a pull request! 🚀  
