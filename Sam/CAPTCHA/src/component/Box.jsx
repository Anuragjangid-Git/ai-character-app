import React, { useState } from 'react';
import Model from './Model';

function Box() {
  
  const [click, setClick] = useState('normal');
  const [complement, setComplement] = useState('');
  const [loading, setLoading] = useState(false);
  
  function handleInput(e) {
  setComplement(e.target.value);
}
  
  async function handleComplement() {
  if (complement === '') {
    alert('Please enter a complement');
    return;
  }
  
  setLoading(true);
    
  try {  
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sam/complementing`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ complement })
    });

    if (!response.ok) {
    throw new Error('Failed to send complement');
    }

    const result = await response.text(); 

    if (result.includes('complement')) {
    setClick('happy');
    } else {
    setClick('sad');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Try again!');
  } finally {
    setLoading(false);
  }
  }

  return (
  <div className='h-[500px] w-[750px] '>
    <div className='ml-[200px] mt-[40px] h-[300px] w-[350px] '>
    <Model click={click}  />
    </div>
    <div className='mt-[30px] h-[100px] w-[750px]'>
    <p className='flex justify-center font-semibold'>Prove you're human. Give Sam a compliment</p>
    <div className='flex justify-center mt-[10px] gap-[20px]'>
      <input 
      type="text"
      className='w-[260px] bg-white rounded-xl border-blue-900 border-2 focus:outline-none p-[4px]'
      onChange={handleInput} 
      value={complement}
      disabled={loading}
      />
      <button 
      onClick={handleComplement} 
      className='p-[3px] w-[100px] rounded-xl bg-blue-900 text-white'
      disabled={loading}
      >
      {loading ? 'Loading...' : 'Tell Sam'}
      </button>
    </div>
    </div>
  </div>
  );
}

export default Box;
