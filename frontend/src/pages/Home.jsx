import React from 'react'
import BottomNav from '../components/BottomNav';
import Greetings from '../home/Greetings';

const Home = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
      <div className='flex[3]'></div>
      <Greetings />
      <div className='flex[2] bg-blue-600'></div>
      <BottomNav />
    </section>
  );
};

export default Home