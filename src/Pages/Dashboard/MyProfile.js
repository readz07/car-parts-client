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
        axios.post('http://localhost:5000/profile', profile)
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
        <div class="hero min-h-screen flex justify-center">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left mx-12">
                    <h1 class="text-4xl font-bold">My Profile</h1>
                    <p class="pt-6">Name- {user?.displayName}</p>
                    <p>Email- {user?.email}</p>
                </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleProfile}>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Education</span>
                                </label>
                                <input type="text" name='education' placeholder="Type Education" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Location</span>
                                </label>
                                <input type="text" name='location' placeholder="Type Location Here" class="input input-bordered" />
                                
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone Number</span>
                                </label>
                                <input type="number" name="phone" placeholder="Type Phone Number Here" class="input input-bordered" />
                                
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">LinkedIn Profile Link</span>
                                </label>
                                <input type="text" name='linkedin' placeholder="Type LinkedIn Profile Link Here" class="input input-bordered" />
                                
                            </div>
                            
                            <div class="form-control mt-6">
                                <button type='submit' class="btn btn-primary">Submit Form</button>
                            </div>
                        </div>
                        </form>
                    </div>
                
            </div>
        </div>
    );
};

export default MyProfile;