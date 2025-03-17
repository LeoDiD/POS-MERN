import React from 'react'
import { popularDishes } from '../constants'

const PopularDishes = () => {
  return (
    <div className='mt-6 pr-6'>
        <div className='bg-[#1a1a1a] w-full rounded-lg'>
            <div className='flex justify-between items-center px-6 py-4'>
                <h1>
                    Popular Dishes
                </h1>
                <a href='' className='text-[#025cca] text-sm font-semibold'>
                    View All
                    </a>
            </div>

            <div className='overflow-y-scroll h-[680px] scrollbar-hide'>
                {
                    popularDishes.map((dish) => {
                        return (
                            <div key={dish.id} className='flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-4 mx-6 tracking -tracking-wide'>
                                <img src={dish.image} alt={dish.name} className='w-[50px] h-[50px] rounded-lg' />
                                <div>
                                    <h1 className='text-[#f5f5f5] font-semibold'>
                                        {dish.name}
                                    </h1>
                                    <p className='text-[#f5f5f5] text-sm'>
                                        <span className='text-[#ababab]'> Orders: </span>
                                        {dish.numberOfOrders}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    </div>
  )
}

export default PopularDishes