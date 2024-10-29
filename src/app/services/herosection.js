import React, { useContext } from 'react';
import './ServicesSection.css';
import { DescriContext } from '../../components/context/description.js'; // Use named import
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import Head from './head';

const word = "Our Team";
function Hero({backgroundImage}) {
   const { desc } = useContext(DescriContext);

   let data = null;

   // Corrected the loop to find the correct item
   for (let item of desc) {
      if (item.title === 'Our Team') {
         data = item;
         break; // Exit the loop once we find the item
      }
   }

   console.log(data);
   console.log(backgroundImage)
   
   return (
      <>
         <section className="services-image-section" 
         style={{ backgroundImage: `url(${backgroundImage})` }}> 
            <div className="services-image-overlay">
               <h1> 
                  <span className="highlight">|</span> 
                  <Head title={word} />
               </h1>
            </div>
         </section>

         {/* Section 2: Detailed Text Section */}
         {/* <section className="services-text-section">
            <div className="services-text-content">
               {data ? (
                  <TextGenerateEffect words={data.description} />
               ) : (
                  <p>No data found</p>
               )}
            </div> 
         </section> */}
      </>
   );
}

export default Hero;
