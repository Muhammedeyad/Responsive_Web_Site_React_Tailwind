// import { apiInstance } from './../config/axios'
import type { productAddType } from "../types/modaltype"

export const addProduct= async (data:productAddType )=>{
    // const res = await apiInstance.get("/")
    return {
        success: 1,
        data: data
    }
}