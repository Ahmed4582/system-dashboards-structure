"use server"

import axiosInstance from "./axiosInstance"


export const getHero = async () =>{
     try {
      const res = await axiosInstance.get("/admin/hero-section")
      console.log(res.data.data)
    
      return res.data.data
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
   
}
// export const getCategories = async () => {
//   try {
//     const res = await axiosInstance.get("api/admin/categories")
 
//     return res.data.data
//   } catch (error) {
//     // Handle the error here
//     console.error(error);
//   }
// };

// export const getFeaturesData = async () => {
//     try {
//       const res = await axiosInstance.get("api/admin/features")
   
//       return res.data.data
//     } catch (error) {
//       // Handle the error here
//       console.error(error);
//     }
//   };

//    export const getCourses = async () => {
//     try {
//       const res = await axiosInstance.get("/api/courses")
     
//       return res.data.data
//     } catch (error) {
//       // Handle the error here
//       console.error(error);
//     }
//   };
    
//   export const getCoursesDetails = async (id) => {
//     try {
//       const res = await axiosInstance.get(`/api/admin/courses/${id}`)
//       console.log(res.data)
//       return res.data.data
//     } catch (error) {
//       // Handle the error here
//       console.error(error);
//     }
//   };
//   export const getAboutSection = async () => {
//     try {
//       const res = await axiosInstance.get("api/admin/how-we-are-section")
     
//       return res.data.data
//     } catch (error) {
//       // Handle the error here
//       console.error(error);
//     }
//   };
//   export const getFqs = async () => {
//     try {
//       const res = await axiosInstance.get("api/frequently-asked-questions")
     
//       return res.data.data
//     } catch (error) {
//       // Handle the error here
//       console.error(error);
//     }
//   };

  // export const SubscripePost = async (data) => {
  //   try {
  //     const res = await axiosInstance.post(`/admin/subscribers`,  data)
  //      console.log("subscrripe",res)
  //     return res.data
  //   } catch (error) {
  //     // Handle the error here
      
  //     console.log(error);
  //     // throw("error",error)
  //   }
  // };

//   export const contactUPost = async (data) => {
//     try {
//       const res = await axiosInstance.post(`/api/admin/contact-us`, data)
//     console.log(res)
//       return res.data
//     } catch (error) {
//       // Handle the error here
//       console.error(error);
//     }
//   };
//     export const getReviews = async () => {
//     try {
//       const res = await axiosInstance.get("api/student/reviews/site")
//       return res.data.data
//     } catch (error) {
//       // Handle the error here
//       console.error(error);
//     }
//   };


//   export const getPrices = async () => {
//     try {
//       const res = await axiosInstance.get("/api/admin/prices")
//       console.log(res.data)
     
//       return res.data.data
//     } catch (error) {
//       // Handle the error here
//       console.error(error);
//     }
//   };

//    export const RegisterRequest = async (data) => {
//     try {
//       const res = await axiosInstance.post("api/register", data)
//       console.log(res)
//       return res.data
//     } catch (error) {
//       console.log(error)
//       // Handle the error here
//       // Instead of just logging, throw the error so the UI can catch and display it
//       throw error;
//     }
//   };
//     export const LoginRequest = async (data) => {
//     try {
//       const res = await axiosInstance.post("api/login", data)
//       console.log(res)
//       return res.data
//     } catch (error) {
//       // Handle the error here
//       console.log(error)
//       // Instead of just logging, throw the error so the UI can catch and display it
//       // throw error;
//     }
//   };