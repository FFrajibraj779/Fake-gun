import React from 'react';

const SingleGun = (probs) => {
   
    const { gun, counter } = probs;
    const { name, img, bullet, action ,} = gun;
    return (
        <div>

            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" className=' w-full h-80' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className='flex'>
                    <p>{action} </p>
                    <p>{bullet}</p>
                    </div>
                   
                    <div className="card-actions justify-center">
                    <button onClick={()=>counter()} className="btn btn-sm  btn-outline btn-secondary">Add To Cart</button>
                    <button className="btn btn-sm  btn-outline btn-secondary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGun;