import React from 'react'
// import imageAppointment from '../image/appointment.jpg'

import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { applyCourse } from '../Redux/courseSlice'
import TextField from '@mui/material/TextField'
const Apply = () => {
    const {loading} = useSelector((state)=>state.courses)
    console.log(loading)
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log(id)
    const {register,handleSubmit,formState:{errors}}=useForm()
    const submission =(data)=>{
        // console.log(data)
        dispatch(applyCourse({id,data})).then((e)=>{
            // console.log(e)
            if (e.payload.status==200){
                navigate("/")
            }
        })
    }

  return (
    <div>
        <div className="container-fluid py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7 mb-5 mb-lg-0">
          <p className="section-title pr-5"><span className="pr-2">Book A Seat</span></p>
          <h1 className="mb-4">Book A Seat For Your Kid</h1>
          <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
            ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
            dolor</p>
          <ul className="list-inline m-0">
            <li className="py-2"><i className="fa fa-check text-success mr-3" />Labore eos amet dolor amet diam</li>
            <li className="py-2"><i className="fa fa-check text-success mr-3" />Etsea et sit dolor amet ipsum</li>
            <li className="py-2"><i className="fa fa-check text-success mr-3" />Diam dolor diam elitripsum vero.</li>
          </ul>
          <a href className="btn btn-primary mt-4 py-2 px-4">Book Now</a>
        </div>
        <div className="col-lg-5">
          <div className="card border-0">
            <div className="card-header bg-secondary text-center p-4">
              <h1 className="text-white m-0">Book A Seat</h1>
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
                        style={{backgroundColor:'white'}}
                        />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                    <TextField
                        {...register("address", {
                            required: "address is required",
                        })}
                        fullWidth
                        label="address"
                        margin="normal"
                        variant="outlined"
                        error={errors.address}
                        helperText={errors.address && errors.address.message}
                        style={{backgroundColor:'white'}}
                        />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                    <TextField
                        {...register("qualification", {
                            required: "qualification is required",
                        })}
                        fullWidth
                        label="qualification"
                        margin="normal"
                        variant="outlined"
                        error={errors.qualification}
                        helperText={errors.qualification && errors.qualification.message}
                        style={{backgroundColor:'white'}}
                        />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                    <TextField
                        {...register("programing_knowledge", {
                            required: "programing_knowledge is required",
                        })}
                        fullWidth
                        label="programing_knowledge"
                        margin="normal"
                        variant="outlined"
                        error={errors.programing_knowledge}
                        helperText={errors.programing_knowledge && errors.programing_knowledge.message}
                        style={{backgroundColor:'white'}}
                        />
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <div className="form-floating">
                    <TextField
                        {...register("experiance", {
                            required: "experiance is required",
                        })}
                        fullWidth
                        label="experiance"
                        margin="normal"
                        variant="outlined"
                        error={errors.experiance}
                        helperText={errors.experiance && errors.experiance.message}
                        style={{backgroundColor:'white'}}
                        />
                    </div>
                  </div>
                  <div className="col-12">
                    {loading?
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
      </div>
    </div>
  </div>
    </div>
  )
}

export default Apply