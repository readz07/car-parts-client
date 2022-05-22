import React from 'react';

const Reviews = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center gap-2 my-12'>
            <div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Cookies!</h2>
                    <p>We are using cookies for no reason.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Accept</button>
                        <button class="btn btn-ghost">Deny</button>
                    </div>
                </div>
            </div><div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Cookies!</h2>
                    <p>We are using cookies for no reason.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Accept</button>
                        <button class="btn btn-ghost">Deny</button>
                    </div>
                </div>
            </div><div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Cookies!</h2>
                    <p>We are using cookies for no reason.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Accept</button>
                        <button class="btn btn-ghost">Deny</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;