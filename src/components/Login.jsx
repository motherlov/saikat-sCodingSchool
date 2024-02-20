import TextField from '@mui/material/TextField'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import imageAppointment from '../image/appointment.webp'
import {LoginApi} from '../Redux/productSlice'

const Login = () => {
    const {loading} = useSelector((state)=>state.product)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(id)
    const {register,handleSubmit,formState:{errors}}=useForm()
    const submission =(data)=>{
        // console.log(data)
        dispatch(LoginApi(data)).then((e)=>{
            // console.log(e)
            if( e.type == "/login/fulfilled" ){
                console.log("success")
                navigate("/")
            }
        })}
  return (
    <div>
        {/* Appointment Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="bg-light rounded">
        <div className="row g-0">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="h-100 d-flex flex-column justify-content-center p-5">
              <h1 className="mb-4">login</h1>
              <form>
                <div className="row g-3">
                  
                  <div className="col-12">
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
              <p>Already Have an Account? <a onClick={()=>navigate("/register")} style={{cursor:'pointer',color:'#3498db'}} >Register</a></p>
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

export default Login