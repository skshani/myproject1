import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

function Userregistor() {
    const fst = 30;
    const {register, handleSubmit,formState: { errors }} = useForm()
    
    const myinputdata = (d)=>{
        console.log(d);
    }

    return (
        <form onSubmit={handleSubmit(myinputdata)}>
        <div className='container mt-3'>
            <div className='row justify-content-center'>
                <div className='col-md-8 p-5 bg-info rounded shadow'>
                    <div className='container-fluid'>
                        <div className='row text-white'>
                            <div className='col-12 text-center pb-3'>
                                <p style={{ textShadow: '2px 2px 5px black', fontSize: `${fst}px` }}>Welcome to Registor page</p>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" {...register("email",{required:true})} />
                                    {errors.email && <p className='text-danger'>email is error</p>}
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" placeholder='fullname' {...register("text",{required:true})} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Phone No</label>
                                    <input type="text" className="form-control" placeholder='phone no'  {...register("text",{required:true})}/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">DOB</label>
                                    <input type="date" className="form-control"  {...register("date",{required:true})}/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Gender</label><br/>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" value="option1" name="gender" {...register("radio",{required:true})}/>
                                        <label className="form-check-label">Female</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" value="option2" name="gender" {...register("radio",{required:true})}/>
                                        <label className="form-check-label">Male</label>
                                    </div>

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control"  {...register("pass",{required:true,minLength:5})}/>
                                    {errors.pass?.type==="required" && <p className='text-danger'>password is required</p>}
                                    {errors.pass?.type==="minLength" && <p className='text-warning'>minimum 5 charectr length  </p>}
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className="mb-3">
                                    <label className="form-label">Comments</label>
                                    <textarea className='form-control' {...register("textarea",{required:true})}></textarea>
                                    {errors.pass?.type==="required" && <p className='text-danger'>Comment here few word</p>}
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div className="mb-3">

                                    <button className='btn btn-success shadow' >Login</button>
                                    <Link className='btn btn-outline-warning shadow ms-3' to="registor">Registor</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Userregistor