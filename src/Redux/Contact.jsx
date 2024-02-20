
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { contact } from './productSlice'
import TextField from '@mui/material/TextField'

const Contact = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submission =(data)=>{
        console.log(data)
        dispatch(contact(data)).then((e)=>{
            console.log(e)
            if(e?.payload?.data.success == true ){
                console.log("success")
                navigate("/")
            }
        })
        
    }

  return (
    <div>
        <form>
              <div className="row g-3 p-4">
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
                        {...register("phone",{
                            required:"Number is required"
                        })}
                        label="Number"
                        fullWidth
                        variant='outlined'
                        margin="normal"

                        error={errors.phone}
                        helperText={errors.phone && errors.phone.message}
                        style={{backgroundColor:'white'}}
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
                        {...register("message", {
                            required: "message is required",
                        })}
                        fullWidth
                        label="message"
                        margin="normal"
                        variant="outlined"
                        error={errors.message}
                        helperText={errors.message && errors.message.message}
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
  )
}

export default Contact