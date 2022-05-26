import React from 'react';
import usePartsData from '../../../hooks/usePartsData';
import SinglePart from './SinglePart';

const Parts = () => {
    const [parts] = usePartsData()
    return (
        <div className='my-28'>
            
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center gap-2 my-12'>
                {
                    parts.slice(0,3).map(part=>{
                        return <SinglePart key={part._id} part={part}></SinglePart>
                    })
                }
            </div>
        </div>
    );
};

export default Parts;