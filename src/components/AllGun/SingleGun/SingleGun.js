import React from 'react';
import { useState } from 'react';
import Modal from '../../Navbar/Modal/Modal';

const SingleGun = (probs) => {
 const[modal, setModal]=useState({})
    const { gun, counter } = probs;
    const { name, img, bullet, action, } = gun;
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
                            <button onClick={() => counter()} className="btn btn-sm  btn-outline btn-secondary">Add To Cart</button>

                            <label onClick={() =>setModal(gun)} htmlFor="my-modal-6" className="btn modal-button btn-sm  btn-outline btn-secondary">Details</label>

                        </div>
                   {
                    modal &&(
                        <Modal data={modal} setModal={setModal}></Modal>
                    )
                   }
                     </div>
                   </div>
               </div>
            
    );
};

export default SingleGun;