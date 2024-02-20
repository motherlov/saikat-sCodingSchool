import  TextField from '@mui/material/TextField'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import imageAppointment from '../image/appointment.webp'
import {pro} from '../Redux/productSlice'

const Register = () => {
    const {loading} = useSelector((state)=>state.product)
    console.log(loading)
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(id)
    const {register,handleSubmit,formState:{errors}}=useForm()
    const submission =(data)=>{
        // console.log(data)
        dispatch(pro(data)).then((e)=>{
            // console.log(e)
            if(e.payload.success == true ){
                console.log("success")
                navigate("/login")
            }
        })
        
    }
  return (
    <div>
        {/* Appointment Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="bg-light rounded">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <h1 className="mb-4">Register</h1>
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
                    />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                    <TextField
                        {...register("mobile",{
                            required:"Number is required"
                        })}
                        label="Number"
                        fullWidth
                        variant='outlined'
                        margin="normal"

                        error={errors.phone}
                        helperText={errors.phone && errors.phone.message}
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

                        />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                    <TextField
                        {...register("city", {
                            required: "city is required",
                        })}
                        fullWidth
                        label="city"
                        margin="normal"
                        variant="outlined"
                        error={errors.city}
                        helperText={errors.city && errors.city.message}

                        />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                    <TextField
                        {...register("password", {
                            required: "password is required",
                        })}
                        fullWidth
                        label="password"
                        margin="normal"
                        variant="outlined"
                        error={errors.password}
                        helperText={errors.password && errors.password.message}

                        />
                    </div>
                  </div>
                
                  
                  <div className="col-12">
                    {loading?
                        (<button className="btn btn-primary w-100 py-3" onClick={handleSubmit(submission)} disabled type="submit">Loading...</button>)

                       :
                       (<button className="btn btn-primary w-100 py-3" onClick={handleSubmit(submission)} type="submit">Submit</button>)
                    }
                    
                  </div>
                </div>
              </form>
              <p>Already Have an Account? <a onClick={()=>navigate("/login")} style={{cursor:'pointer',color:'#3498db'}}>Login</a></p>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: 400}}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100 rounded" src={imageAppointment} style={{objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Appointment End */}
    </div>
  )
}

export default Register