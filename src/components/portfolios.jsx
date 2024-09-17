import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Portfolios = () => {

    const portfolioItems = [
        {
          title: 'Avocado',
          description: 'This app facilitates delivery of grocery to the local restaurants or food cooperatives...',
          imgSrc: 'path_to_image_1',
        },
        {
          title: 'Hitch',
          description: 'The aim of this project is to help consumers find better products and better prices...',
          imgSrc: 'path_to_image_2',
        },
        {
          title: 'Order Ate',
          description: 'Order Ate is a food delivery application where end users can place orders from desired restaurants...',
          imgSrc: 'path_to_image_3',
        },
        // Add more items as needed
      ];
    
      return (
        <div className="portfolio-section">
          <h2>Our Portfolio</h2>
          <p>We provide result-oriented management and communication...</p>
    
          <Swiper
            navigation={true}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={3} // Adjust the number of slides per view
            loop={true}
          >
            {portfolioItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="portfolio-card">
                  <img src={item.imgSrc} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  )
}

export default Portfolios 