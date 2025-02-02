import React from 'react'
import BottomNav from '../components/BottomNav';
import Greetings from '../home/Greetings';
import MiniCard from '../home/MiniCard';
import { BsCashCoin } from 'react-icons/bs';
import { GrinProgress } from 'react-icons/gr';

const Home = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
      <div className='flex[3]'></div>
      <Greetings />
      <div className='flex items-center w-full gap-3 px-8 mt-8'>
        <Minicard title="Total Earnings" icon={<BsCashCoin />} number={512}
        footerNum={1.6} />
        <Minicard title="In Progress" icon={<GrinProgress />} number={16}
        footerNum={3.6} />
      </div>
      <div className='flex[2] bg-blue-600'></div>
      <BottomNav />
    </section>
  );
};

export default Home