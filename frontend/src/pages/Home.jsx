import React from 'react';
import BottomNav from '../components/BottomNav';
import Greetings from '../home/Greetings';
import MiniCard from '../home/MiniCard';
import { BsCashCoin } from 'react-icons/bs';
import { GrinProgress } from 'react-icons/gr';
import RecentOrder from '../home/RecentOrder';

const Home = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
      <div className='flex-1'></div> {/* Adjusted flex class */}
      <Greetings />
      <div className='flex items-center w-full gap-3 px-8 mt-8'>
        <MiniCard 
          title="Total Earnings" 
          icon={<BsCashCoin />} 
          number={512} 
          footerNum={1.6} 
        />
        <MiniCard 
          title="In Progress" 
          icon={<GrinProgress />} 
          number={16} 
          footerNum={3.6} 
        />
      </div>

    <RecentOrder />

      <div className='flex-[2] bg-blue-600'></div> {/* Adjusted flex class */}
      <BottomNav />
    </section>
  );
};

export default Home;