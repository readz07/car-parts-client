import React from 'react';

const OrderQuotation = () => {
    return (
        <div class="hero min-h-screen bg-base-200 flex justify-center">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Dealership Form</h1>
                    <p class="py-6">Please contact us for dealership</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Type Name Here" class="input input-bordered" />
                            
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <textarea type="text"  placeholder='Type description here' class="input input-bordered text-area" />
                            
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit Form</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderQuotation;