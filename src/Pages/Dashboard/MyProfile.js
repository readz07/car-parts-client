import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading'
const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleProfile = event =>{
        event.preventDefault()
        const profile ={
            education: event.target.education.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            linkedin: event.target.linkedin.value,
            
        }
        axios.post('https://cryptic-springs-54649.herokuapp.com/profile', profile)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Product has been added')
                    event.target.reset()
                }
            })

    }

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className="hero min-h-screen flex justify-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left mx-12">
                    <h1 className="text-4xl font-bold">My Profile</h1>
                    <p className="pt-6">Name- {user?.displayName}</p>
                    <p>Email- {user?.email}</p>
                </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleProfile}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input type="text" name='education' placeholder="Type Education" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" name='location' placeholder="Type Location Here" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" name="phone" placeholder="Type Phone Number Here" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">LinkedIn Profile Link</span>
                                </label>
                                <input type="text" name='linkedin' placeholder="Type LinkedIn Profile Link Here" className="input input-bordered" />
                                
                            </div>
                            
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Submit Form</button>
                            </div>
                        </div>
                        </form>
                    </div>
                
            </div>
        </div>
    );
};

export default MyProfile;