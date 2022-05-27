import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToekn';
import Loading from '../Shared/Loading/Loading';
import SocialSignIn from '../SocialSignIn/SocialSignIn';

const SingIn = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // react form
    const { register, handleSubmit, formState: { errors } } = useForm();
    //handle form submit
    const onSubmit = async data => {
        signInWithEmailAndPassword(data.email, data.password)
    }

    const navigate = useNavigate()
    let location = useLocation();  
    let from = location.state?.from?.pathname || "/";
    // use token
    const [token] = useToken(user)
    let errorMsg;
    if (error) {
        errorMsg =
            <div>
                <p>Error: {error.message}</p>
            </div>
    }

    if (loading) {
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
                                    minLength: { value: 8, message: "Password must be more than 8 characters" }

                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text text-red-500">{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text text-red-500">{errors.password?.message}</span>}
                            </label>
                            <label className="label">
                                Forget Password<Link to="/signup" className="text-blue-600 link link-hover">Click Here</Link>
                            </label>
                        </div>

                        <p className='text-red-500'>{errorMsg}</p>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Sign In</button>
                        </div>
                        <label className="label">
                            If You are Not A Member<Link to="/signup" className="text-blue-600 link link-hover">Sign Up Here</Link>
                        </label>
                    </form>
                    <div className="divider">OR</div>
                    <SocialSignIn/>
                </div>
            </div>            
        </div>
    );
};

export default SingIn;