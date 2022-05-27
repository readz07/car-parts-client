import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../../src/assets/profile/profile.jpg'
const MyPortFolio = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 place-items-center gap-2 my-12'>
            
            
                <div className="card w-3/4 bg-base-100 shadow-xl">
                    <figure><img src={profileImg} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title badge badge-secondary p-8 lg:text-4xl">I am Readul Huq Khan
                        </h2>
                        <p>I want to become a Web Developer. For my career I have taken the admission for Programming hero course 5 months ago. I am so glad. Now I am confident engouh to take any project to execute.
                        </p>
                        <p>I have completed my graduation almost 15 years ago on Hotel Mgt.
                        </p>
                        <p>My Email: readz07@gmail.com
                        </p>
                        <p>My last &nbsp;
                          <a className='font-bold text-primary' href='https://smart-phone-inventory.web.app/' target='_blank'>Web Link</a>
                         </p>
                        <p>As a MERN stack developer I have highlighted fews skills below:
                        </p>
                        <div className="card-actions justify-center my-4">
                            <div className="badge badge-outline">HTML</div>
                            <div className="badge badge-outline">CSS</div>
                            <div className="badge badge-outline">Java Script</div>
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">Node Js</div>
                            <div className="badge badge-outline">Mongo DB</div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default MyPortFolio;