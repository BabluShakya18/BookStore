import React from 'react'
import Cards from './Cards'
import { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom' 

import axios from 'axios' 
//import { Mongoose } from 'mongoose'

function Course() {

    const [book,setBook]=useState([]);

    useEffect(() => {
        const getBook=async()=>{
            try{
             const res= await axios.get("http://localhost:4001/book");
             console.log(res.data);
             setBook(res.data);
            }catch(error){
                console.log(error);
            }
        };
        getBook();

    }, []);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 item-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'> we are delighted to have you{" "} <span className='text-pink-500'> Here! :)</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde dignissimos deleniti amet velit 
                porro quasi magnam consequuntur est hic nihil, 
                odit aliquam fuga dolorum laborum esse ut ipsa quidem? Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Mollitia iure nisi magnam, ipsa qui expedita exercitationem, ratione, quod voluptatem 
                 iusto architecto in. Laboriosam dolorem dolorum aspernatur expedita perspiciatis laudantium itaque!
            </p>
            
            <Link to="/">
            <button className=' mt-6 bg-pink-500 hover:bg-pink-700 duration-500 text-white rounded-md px-4 py-2  '>
            Back
           </button>
           </Link>
        </div>
        <div className='mt-12 grid grid-col-1 md:grid-cols-4'>
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
        
    </div>
    </>
  )
}

export default Course
