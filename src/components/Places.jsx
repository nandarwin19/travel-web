import React, { useState } from 'react';
import { hotels, mountains, seas } from '../constants';

const CategoryContent = ({ items }) => (
  <div className="flexCenter lg:flexBetween flex-wrap w-full mt-12">
    {items.map((item, index) => (
      <div className='w-[300px] h-full shadow-2xl my-8 mr-8 rounded-md' key={index}>
        <img src={item.img} alt="" className='w-full h-[180px] object-cover object-center rounded-tl-md rounded-tr-md'/>
        <div className='w-[260px] mx-auto my-6'>
          <div className="flex items-start flex-1 flex-col my-2">
            <h3 className='bold-14'>{item.title}</h3>
            <div className="flex items-center gap-1">
              <img src={item.icon} alt="" className='w-[12px] h-[12px]'/>
              <p className='regular-12'>{item.location}</p>
            </div>
          </div>
          <hr/>
          <div className="flexBetween w-full my-2">
            <p className='w-1/3 regular-12 flex items-start'>{item.des2}</p>
            <p className='bold-14'>{item.price}</p>
          </div>
          <hr/>
          <div className="w-full my-2">
            <p className='regular-12'>{item.des1}</p>
            <button className='btn_card my-2'>DETAILS</button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Places = () => {
  const [activeBtn, setActiveBtn] = useState('sea');

  const showCategory = (category) => {
    setActiveBtn(category);
  };

  return (
    <div className="w-full h-full">
      <div className='max-container padding-container py-10'>
        <h1 className='bold-28 text-center'>TRAVEL</h1>
        <div className="flexCenter lg:flexStart my-8 gap-4">
          {['sea', 'hotels', 'mountains'].map((category) => (
            <button
              key={category}
              className={`btn_travel ${activeBtn === category ? 'bg-black text-white border-white' : 'bg-white text-black border-black'}`}
              onClick={() => showCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} 
            </button>
          ))}
        </div>

        <div style={{ display: activeBtn === 'sea' ? 'block' : 'none' }}>
          <CategoryContent items={seas} />
        </div>

        <div style={{ display: activeBtn === 'hotels' ? 'block' : 'none' }}>
          <CategoryContent items={hotels} />
        </div>

        <div style={{ display: activeBtn === 'mountains' ? 'block' : 'none' }}>
          <CategoryContent items={mountains} />
        </div>
      </div>
    </div>
  );
};

export default Places;
