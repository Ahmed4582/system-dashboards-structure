import axiosInstance from "./axiosInstanceClient";

 export const SubscripePost = async (data) => {
    try {
      const res = await axiosInstance.post(`/admin/subscribers`,  data)
       console.log("subscrripe",res)
      return res.data
    } catch (error) {
      // Handle the error here
      
      console.log(error);
      // throw("error",error)
    }
  };