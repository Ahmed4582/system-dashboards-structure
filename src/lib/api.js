import { apiHandler } from "./api-hamdler";

export async function getCategories() {
  return apiHandler({
    endPoint: "/admin/prices",
    method: "GET"
  })
}

export async function userLogin(data) {
  return apiHandler({
    endPoint: "/login",
    method: "POST",
    body: data,
  })
}
