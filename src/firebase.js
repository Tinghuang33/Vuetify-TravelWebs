import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
  // Firebase 配置
  const firebaseConfig = {
    apiKey: "AIzaSyB9xieFuDacn9YM__jIsM66EMOaMm9VvD8",
    authDomain: "meishan-travelweb.firebaseapp.com",
    databaseURL: "https://meishan-travelweb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "meishan-travelweb",
    storageBucket: "meishan-travelweb.firebasestorage.app",
    messagingSenderId: "259968230651",
    appId: "1:259968230651:web:c53caa4a609a231e31bc5e",
    measurementId: "G-KPBMJKT8CS"
  };
// 初始化 Firebase
const firebaseApp = initializeApp(firebaseConfig);

// 导出实时数据库
const database = getDatabase(firebaseApp);

export { database };