// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://5dquran.edunezam.com/",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use(async (config) => {
//   let token;
  
//   // Check if we're on the server side
//   if (typeof window === 'undefined') {
//     // Server-side: use next/headers
//     try {
//       const { cookies } = await import("next/headers");
//       const cookieStore = await cookies();
//       token = cookieStore.get('access_token')?.value;
//     } catch (error) {
//       console.warn('Could not access cookies on server side:', error);
//     }
//   } else {
//     // Client-side: use js-cookie
//     try {
//       const Cookies = await import("js-cookie");
//       token = Cookies.default.get('access_token');
//     } catch (error) {
//       console.warn('Could not access cookies on client side:', error);
//     }
//   }

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;

// 'use server';

// import axios from "axios";
// // import Cookies from "js-cookie";
// import { cookies } from "next/headers";

// // const BASE_URL = "https://5dquran.edunezam.com/";

// // if (!BASE_URL) {
// //   throw new Error('NEXT_PUBLIC_API_BASE_URL environment variable is not defined');
// // }

// const axiosInstance = axios.create({
//   baseURL: "https://5dquran.edunezam.com/",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use(async (config) => {
//   const cookieStore = await cookies();
//   const token = cookieStore.get('access_token')?.value;

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;


// omran
// 'use server';

// import axios from "axios";
// import { cookies } from "next/headers";

// const axiosInstance = axios.create({
//   baseURL: "https://5dquran.edunezam.com/",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // إذا أردت الاحتفاظ بـ interceptor بدون منطق
// axiosInstance.interceptors.request.use(async (config) => {
//   const cookieStore = await cookies();
//   const token = cookieStore.get('access_token')?.value;

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// },
//   (error) => {
//     return Promise.reject(error);
//   }
// )
// export default axiosInstance;



// لا حاجة إلى 'use server' هن
'use server';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// إذا أردت الاحتفاظ بـ interceptor بدون منطق
axiosInstance.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('access_token')?.value;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
},
  (error) => {
    console.log(error)
    // return Promise.reject(error);
  }
)
export default axiosInstance;