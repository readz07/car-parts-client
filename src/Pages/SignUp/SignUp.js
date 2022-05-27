import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToekn';
import Loading from '../Shared/Loading/Loading';
import SocialSignIn from '../SocialSignIn/SocialSignIn';
const SingUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    //update profile initailize
    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

    // use token
    const [token] = useToken(user)

    // navigate user
    const navigate = useNavigate()
    let location = useLocation();  
    let from = location.state?.from?.pathname || "/";


    //react-router form validation
    const { register, handleSubmit, formState: { errors } } = useForm();
    //handle form submit
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name})
    }

    let errorMsg;
    if (error || updateProfileError) {
        errorMsg =
            <div>
                <p>Error: {error.message}</p>
            </div>

    }
    if (loading || updating) {
        return <Loading></Loading>;
    }
    if (token) {
        navigate(from, { replace: true })
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Type Name Here" className="input input-bordered" {...register("name", {
                                required: { value: true, message: "Name is required" }
                            })} />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text text-red-500">{errors.name?.message}</span>}                                
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Type Email Here" className="input input-bordered"
                                {...register("email", {
                                    required: { value: true, message: "Email is required" },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provied a valid email address'
                                    }
                                })}

                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text text-red-500">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text text-red-500">{errors.email?.message}</span>}

                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Type Password" className="input input-bordered"
                                {...register("password", {
                                    required: { value: true, message: "Password is required" },
                                    minLength: {value:8, message:"Password must be more than 8 characters"}
                                    
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text text-red-500">{errors.password?.message}</span>}                               
                                {errors.password?.type === 'minLength' && <span className="label-text text-red-500">{errors.password?.message}</span>}                               
                            </label>
                            <label className="label">
                                Are You Already A Member?<Link to="/signin" className="text-blue-600 link link-hover">Sign In Here</Link>
                            </label>
                        </div>
                    
                    <p className='text-red-500'>{errorMsg}</p>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Sign Up</button>
                    </div>
                    </form>
                    <div className="divider">OR</div>
                    <SocialSignIn/>
                </div>
            </div>
            
        </div>
    );
};

export default SingUp;