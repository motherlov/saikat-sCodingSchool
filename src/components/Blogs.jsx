import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogsFetch } from '../Redux/productSlice';
import { Link } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
// import BlogsChild from './BlogsChild';

const Blogs = ({item}) => {
    const [page,setPage]= useState()
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(blogsFetch())
    },[])
    let theToken = localStorage.getItem("token")
      // console.log("token->",theToken)
    const {blogs} = useSelector((state)=>state.product)
    {/*console.log("blogs:==",blogs)*/}
    // {blogs && console.log("-->",blogs)}
    if(!blogs){
      return <Stack sx={{ width: '100%', color: 'grey.500',padding:'3rem',marginTop:'100px' }} spacing={2}>
      <LinearProgress color="secondary"/>
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
      <LinearProgress color="secondary"/>
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
  }
  return (
    
<div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-sm mb-2">
              <img className="card-img-top mb-2" src="img/blog-1.jpg" alt />
              <div className="card-body bg-light text-center p-4">
                <h4 className>{item.title}</h4>
                <div className="d-flex justify-content-center mb-3">
                  <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                  <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                  <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                </div>
                <Link to={`/blogDetails/${item._id}`} >
                    <a href className="btn btn-primary px-4 mx-auto my-2">Read More</a>
                </Link>
              </div>
            </div>
          </div>
    
            
        
  )
}

export default Blogs