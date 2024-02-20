import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "./Helper";



export const teamFetch=createAsyncThunk("/team",
    async()=>{
        let res =await axiosInstance.get("https://restapinodejs.onrender.com/api/team")
        // console.log(res.data.TeamMember)
        return res.data.TeamMember
    }
)
export const blogsFetch=createAsyncThunk("/allBlog",
    async()=>{
        let res =await axiosInstance.get("https://restapinodejs.onrender.com/api/allBlog")
        // console.log(res)
        return res.data.data
    }
)
export const blogsDetailsFetch=createAsyncThunk("/Blog",
    async(id)=>{
        let res =await axiosInstance.get(`https://restapinodejs.onrender.com/api/blogdetails/${id}`,id)
        // console.log(res)
        return res.data.data
    }
)
export const LoginApi=createAsyncThunk("/login",
    async(data)=>{
        let res =await axiosInstance.post("https://restapinodejs.onrender.com/api/login",data)
        // console.log(res)
        return res
    }
)

export const pro = createAsyncThunk(
    "/user/profile-details",
  
    async (data) => {
      let res = await axiosInstance.post(`/register`,data);
  
      let resData = res?.data;
  
      return resData;
    }
  );
  export const commentFetch = createAsyncThunk(
    "/commentFetch",
  
    async (id) => {
        console.log(id)
      let res = await axiosInstance.get(`/comment/${id}`);
        console.log(res)
    //   let resData = res?.data;
  
      return res;
    }
  );
    export const commentingApi =createAsyncThunk(
        "CommentingApi",
        async({id,data})=>{
            let res =await axiosInstance.post(`/blog/${id}/comment/create`,data)
            // console.log("commenting ",res
            return res
        }
    )
    export const serviceApi =createAsyncThunk(
        "ServiceApi",
        async()=>{
            let res =await axiosInstance.get(`/service`)
            // console.log("service" ,res)
            return res
        }
    )
    export const categoryApi =createAsyncThunk(
        "Category",
        async()=>{
            let res =await axiosInstance.get(`/showallcategory`)
            // console.log("category" ,res)
            return res
        }
    )
    export const recentPost =createAsyncThunk(
        "recentPost",
        async()=>{
            let res =await axiosInstance.get(`/letest-post`)
            // console.log("recentPost: " ,res)
            return res
        }
    )
    export const contact =createAsyncThunk(
        "contact",
        async(data)=>{
            let res =await axiosInstance.post(`/contact/create`,data)
            console.log("contact: " ,res)

           
            toast(res.data.message)
            
            return res
        }
    )
    export const searchCourse = createAsyncThunk(
        "/search",
      
        async (text) => {
            console.log(text)
          let res = await axiosInstance.get(`/search/${text}`);
            // console.log("search",res)
        //   let resData = res?.data;
      
          return res;
        }
      );




const productSlice = createSlice({
    name: "product",
    initialState:{
        TeamMembers:null,
        blogs:null,
        blogDetail:null,
        loading:false,
        comments:null,
        services:null,
        categories:null,
        recentPosts:null,
        commenting:false
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(teamFetch.pending,(state,{payload})=>{
            
        })
        .addCase(teamFetch.fulfilled,(state,{payload})=>{
            // console.log(payload)
            state.TeamMembers = payload
            console.log(state.TeamMembers)
        })
        .addCase(teamFetch.rejected,(state,{payload})=>{
            // console.log(payload)
            
        })
        .addCase(blogsFetch.pending,(state,{payload})=>{
            state.blogs = null
        })
        .addCase(blogsFetch.fulfilled,(state,{payload})=>{
            // console.log(payload)
            state.blogs = payload
            // console.log(state.blogs)
        })
        .addCase(blogsFetch.rejected,(state,{payload})=>{
            // console.log(payload)
            
        })
        .addCase(LoginApi.pending,(state,{payload})=>{
            state.loading=true
        })
        .addCase(LoginApi.fulfilled,(state,{payload})=>{
            // console.log(payload)
            state.loading=false
            if (payload.status==200){
                // state.loginSuccessRedirect="/login"
                localStorage.setItem("token",payload.data.token)
                console.log(localStorage.getItem(payload.data))
                toast(payload.data.message)

            }
            
        })
        .addCase(LoginApi.rejected,(state,{error})=>{
            // console.log("login payload-- ",error)
            state.loading=false
            toast(error.message)
            
        })
        .addCase(pro.pending,(state,{payload})=>{
            state.loading=true
        })
        .addCase(pro.fulfilled,(state,{payload})=>{
            // console.log(payload)
            state.loading=false
            
            if (payload.success===true){

                localStorage.setItem("token",payload.token)
                toast(payload.message)
            }
        })
        .addCase(pro.rejected,(state,{payload})=>{
            // console.log(payload)
            state.loading=false
            
        })
        .addCase(blogsDetailsFetch.pending,(state,{payload})=>{
            
        })
        .addCase(blogsDetailsFetch.fulfilled,(state,{payload})=>{
            // console.log(payload)
            if (payload){
                state.blogDetail=payload
                // console.log(state.blogDetail)
            }
        })
        .addCase(blogsDetailsFetch.rejected,(state,{payload})=>{
            // console.log(payload)
            
        })
        .addCase(commentFetch.pending,(state,{payload})=>{
            
        })
        .addCase(commentFetch.fulfilled,(state,{payload})=>{
            // console.log("comment fetch:= ",payload)
            if (payload){
             
                state.comments=payload.data.post.comment.comments
                // console.log(state.blogDetail)
            }
        })
        .addCase(commentFetch.rejected,(state,{payload})=>{
            // console.log(payload)
            
        })
        .addCase(commentingApi.pending,(state,{payload})=>{
            state.commenting=true
        })
        .addCase(commentingApi.fulfilled,(state,{payload})=>{
            // console.log("commenting",payload?.data.messege)
            state.commenting=false
            if (payload?.status==201){
                console.log(payload)
                toast(payload.data.message)
                // toast(payload.data.message)
            }
        })
        .addCase(commentingApi.rejected,(state,{payload})=>{
            // console.log(payload)
            state.commenting=false
            
        })
        .addCase(serviceApi.pending,(state,{payload})=>{
            
        })
        .addCase(serviceApi.fulfilled,(state,{payload})=>{
            // console.log("commenting",payload?.data.messege)
            
            if (payload?.status==200){
                // console.log(payload)
                state.services=payload.data.data
                // toast(payload.data.message)
            }
        })
        .addCase(serviceApi.rejected,(state,{payload})=>{
            // console.log(payload)
            
        })
        .addCase(categoryApi.pending,(state,{payload})=>{
            
        })
        .addCase(categoryApi.fulfilled,(state,{payload})=>{
            // console.log("category",payload)
            
            if (payload?.status==200){
                // console.log(payload)
                state.categories=payload.data.data
                // toast(payload.data.message)
            }
        })
        .addCase(categoryApi.rejected,(state,{payload})=>{
            // console.log(payload)
            
        })
        .addCase(recentPost.pending,(state,{payload})=>{
            
        })
        .addCase(recentPost.fulfilled,(state,{payload})=>{
            // console.log("Recent Post ",payload)
            
            if (payload?.status==200){
                // console.log(payload)
                state.recentPosts=payload.data.data
                // toast(payload.data.message)
            }
        })
        .addCase(recentPost.rejected,(state,{payload})=>{
            // console.log(payload)
            
        })
        .addCase(searchCourse.pending,(state,{payload})=>{
            state.blogs=null
        })
        .addCase(searchCourse.fulfilled,(state,{payload})=>{
            // console.log("Recent Post ",payload)
            
            if (payload?.status==200){
                console.log("search result",payload.data)
                state.blogs=payload.data
                // console.log()
                // toast(payload.data.message)
            }
        })
        .addCase(searchCourse.rejected,(state,{payload})=>{
            // console.log(payload)
            
        })
    }
})
export default productSlice;
