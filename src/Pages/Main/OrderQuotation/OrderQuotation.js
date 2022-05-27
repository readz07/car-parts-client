import React from 'react';

const OrderQuotation = () => {
    return (
        <div className="hero min-h-screen bg-base-200 flex justify-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Dealership Form</h1>
                    <p className="py-6">Please contact us for dealership</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Type Name Here" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text"  placeholder='Type description here' className="input input-bordered text-area" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit Form</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderQuotation;