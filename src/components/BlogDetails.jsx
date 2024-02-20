import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { blogsDetailsFetch, commentFetch, commentingApi } from '../Redux/productSlice'

import { useForm } from 'react-hook-form'
import CardMedia from '@mui/material/CardMedia'
import TextField from '@mui/material/TextField'

const BlogDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {blogDetail,comments,commenting} = useSelector((state)=>state.product)
    const {register,handleSubmit,formState:{errors}}=useForm()
    // console.log(id)
    useEffect(()=>{
        dispatch(blogsDetailsFetch(id))
        dispatch(commentFetch(id))
    },[commenting])
    const submission=(data)=>{
      dispatch(commentingApi({id,data}))
    }
    // console.log("commento  ",comments)
  return (
    <div style={{paddingInline:'2px'}}>
        <h2>{blogDetail && blogDetail.title}</h2>
        <CardMedia
        sx={{ height: 140 }}
        image={`https://restapinodejs.onrender.com/api/blog/image/${id}`}
        title="green iguana"
      />        <p><strong>Description:</strong></p>
      <p>
        <div
      dangerouslySetInnerHTML={{
                    __html: blogDetail?.postText
      }}/>
      </p>
      <hr/>
      {/* Create comment */}
      <div className="col-lg-5">
          <div className="card border-0">
            <div className="card-header bg-secondary text-center p-4">
              <h1 className="text-white m-0">Comment</h1>
            </div>
            <div className="card-body rounded-bottom bg-light p-5">
              <form>
              <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                    <TextField style={{marginTop:'1rem'}}
                        {...register("name",{
                            required:"Name is required",
                        })}
                        fullWidth
                        label="Name"
                        
                        error={errors.name}
                        helperText={errors.name && errors.name.message}
                        style={{backgroundColor:'white',marginTop:'1rem'}}
                    />
                    </div>
                  </div>
                  
                  <div className="col-sm-6">
                    <div className="form-floating">
                        <TextField
                        {...register("email", {
                            required: "Email is required",
                            
                        })}
                        fullWidth
                        label="E-mail"
                        margin="normal"
                        variant="outlined"
                        error={errors.email}
                        helperText={errors.email && errors.email.message}
                        style={{backgroundColor:'white'}}
                        />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                    <TextField
                        {...register("comment", {
                            required: "comment is required",
                        })}
                        fullWidth
                        label="comment"
                        margin="normal"
                        variant="outlined"
                        error={errors.comment}
                        helperText={errors.comment && errors.comment.message}
                        style={{backgroundColor:'white'}}
                        />
                    </div>
                  </div>
                 
                  
                  
                  <div className="col-12">
                    {false?
                        (<button className="btn btn-primary  w-100 py-3" onClick={handleSubmit(submission)} disabled type="submit" style={{border:'1px solid white'}} >Loading...</button>)

                       :
                       (<button className="btn btn-primary  w-100 py-3" onClick={handleSubmit(submission)} type="submit" style={{border:'1px solid white'}} >Submit</button>)
                    }
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      {/* //Comments */}
      <h3>Comments :</h3>
      {comments?.map((item,index)=>(
        <div style={{paddingInline:'2rem'}}>
          <p style={{fontWeight:'bold'}}>{item.name}</p>
          <p>{item.comment}</p>
        </div>
      )
      
      )
      
      }
    </div>
  )
}

export default BlogDetails