import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "./Helper";

export const courseFetch=createAsyncThunk("/Courses",
    async()=>{
        let res =await axiosInstance.get("https://restapinodejs.onrender.com/api/course")
        // console.log(res)
        return res
    }
)
// export const applyCourse=createAsyncThunk("/applyCourse",
//     async(id,data)=>{
//         let res =await axiosInstance.post(`https://restapinodejs.onrender.com/api/course/apply/${id}`,data)
//         console.log(res)
//         // return res
//     }
// )
export const applyCourse=createAsyncThunk("/applyCourse",
    async({id,data})=>{
        // console.log("store->  ",data,id)
        let res =await axiosInstance.post(`https://restapinodejs.onrender.com/api/course/apply/${id}`,data)
        // console.log(res)
        return res
    }
)
export const testimonialFetch = createAsyncThunk(
    "/testimonialFetch",
  
    async () => {
      let res = await axiosInstance.get(`/testimonial`);
        // console.log(res)
      let resData = res?.data;
  
      return resData;
    }
  );
  
// export const blogSearch = createAsyncThunk("/search", async (searchData) => {
//     const res = await axiosInstance.get(`/search/${searchData}`);
//     const resData = res?.data;
//     return resData;
//   });

const courseSlice=createSlice({
    name:"Course",
    initialState:{
        courses:null,
        loading:false,
        comments:null,
        testimonials:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(courseFetch.pending,(state,{payload})=>{
            
        })
        .addCase(courseFetch.fulfilled,(state,{payload})=>{
            // console.log(payload)
            state.courses = payload.data.Courses
            // console.log(state.TeamMembers)
        })
        .addCase(courseFetch.rejected,(state,{payload})=>{
            // console.log(payload)
            
        })
        builder
        .addCase(applyCourse.pending,(state,{payload})=>{
            state.loading=true
        })
        .addCase(applyCourse.fulfilled,(state,{payload})=>{
            // console.log(payload)
            // console.log(state.TeamMembers)
            state.loading=false
            toast(payload.data.message)
        })
        .addCase(applyCourse.rejected,(state,{payload})=>{
            // console.log(payload)
            state.loading=false
            
        })
        .addCase(testimonialFetch.pending,(state,{payload})=>{
            state.loading=true
        })
        .addCase(testimonialFetch.fulfilled,(state,{payload})=>{
            // console.log("testimonial====>",payload)
            // console.log(state.TeamMembers)
            state.testimonials=payload.testimonials
            // toast(payload.data.message)
            state.loading=false
        })
        .addCase(testimonialFetch.rejected,(state,{payload})=>{
            // console.log(payload)
            state.loading=false
            
            
        })
        
        
        
    }
})
export default  courseSlice;

