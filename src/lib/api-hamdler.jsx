// import i18n from "@/lib/i18n"
import axios from "axios"
import Cookies from "js-cookie"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE ||"",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use((config) => {
  const token = Cookies.get("token")
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const apiHandler = async ({
  endPoint,
  method = "GET",
  body,
  // headers = {},
  params,
}) => {
  try {
    const config = {
      method,
      url: endPoint,
      // headers: { ...headers, "accept-language": i18n.language },
      params,
    }

    if (method !== "GET" && body) {
      if (body instanceof FormData) {
        config.headers = config.headers || {}
        config.headers["Content-Type"] = undefined
      }
      config.data = body
    }

    const response = await api.request(config)
    return response.data
  } catch (error) {
    console.log("error", error)
    if (axios.isAxiosError(error)) {
      console.log(error.response.data.error)
      const message = error.response.data.error || "API request failed"
      throw new Error(message)
    }
    throw error
  }
}
