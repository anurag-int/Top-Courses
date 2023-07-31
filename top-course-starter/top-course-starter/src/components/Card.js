import React from 'react'
import {FcLike} from "react-icons/fc";

const Card = (props) => {
    let course = props.course;
  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
        <div className='relative'>
            <img src={course.image.url}/>
        

            <div className='w-[40px] bg-white h-[40px] rounded-full absolute right-2 
                bottom-0 grid place-items-center'>
                <button>
                    <FcLike fontSize="1.75rem"/>
                </button>
            </div>
        </div>

        <div className='p-[5px] text-white'>
            <p>{course.title}</p>
            <p>{course.description}</p>
        </div>

    </div>
  )
}

export default Card


