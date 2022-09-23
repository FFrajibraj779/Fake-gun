import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleGun from './SingleGun/SingleGun';

const AllGun = ({counter}) => {
       
    const[guns, setGuns] = useState([]);
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        .then(res=>res.json())
        .then(data=>setGuns(data))
    },[])

    return (
        <>
        <div className='my-5 w-[90%] mx-auto'>
                <h1 className='lg:text-5xl my-2 font-bold sm:text-5xl'>Welcome To Fake <span></span> Gun Store</h1>
                <p>A gun is a ranged weapin designed to use a shooting tube to launch projectiles. the projectiles are typically solid, but can also be pressurized liquid . in water guns , spray guns for painting or pressure washing, projected water disruptorsk,and techincally also flameth🌹 </p>

            </div>
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            
          {
            guns.map(gun =><SingleGun gun={gun} counter={counter}></SingleGun>)
          }
        </div>
        </>
        
    );
};

export default AllGun;