import React from 'react';

const HandleSubmit = (event) => {
  event.preventDefault();
}

const NewsLetter = () => {
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe Now and get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rem vel minus totam unde culpa vitae</p>
      <form onSubmit={HandleSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" placeholder='Enter your email' className='w-full sm:flex outline-none' />
        <button className='bg-black text-white text-md px-10 py-4' type='submit'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetter;