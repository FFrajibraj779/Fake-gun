
import React from 'react';

const Modal = (probs) => {
  console.log(probs);
// const{data, setModal}=probs;
    return (
        <div>
            <div>
            {/* <!-- The button to open modal --> */}


{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{probs.data.name}</h3>
    <figure>
      <img src={probs.data.img} className="h-52" alt="" />
    </figure>
    <p className="py-4">{probs.data.action}</p>
    <div className="modal-action">
      <label onClick={()=>probs.setModal(null)} htmlFor="my-modal-6" className="btn">Yay!</label>
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Modal;