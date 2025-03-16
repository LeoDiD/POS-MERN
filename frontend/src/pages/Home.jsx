import React from 'react';
import BottomNav from '../components/BottomNav';
import Greetings from '../home/Greetings';
import MiniCard from '../home/MiniCard';
import { BsCashCoin } from 'react-icons/bs';
import { GrInProgress } from 'react-icons/gr'; // Ensure this is the correct icon
import RecentOrder from '../home/RecentOrder';
import PopularDishes from '../home/PopularDishes'; // Import if missing

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
          icon={<GrInProgress />} 
          number={16} 
          footerNum={3.6} 
        />
      </div>
      <RecentOrder /> {/* Fixed incorrect component name */}

      <div className='flex-[2]'>
        <PopularDishes /> {/* Make sure this component exists */}
      </div>

      <div className='flex-1 bg-blue-700'></div> {/* Adjusted flex class */}
      <BottomNav />
    </section>
  );
};

export default Home;
