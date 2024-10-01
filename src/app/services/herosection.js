import React, { useContext } from 'react';
import './ServicesSection.css';
import { DescriContext } from '../../components/context/description.js'; // Use named import
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import Head from './head';

const word = "Our Services";

function Hero() {
   const {desc} = useContext(DescriContext);

   let data = null;
   for (let item of desc){
     if (item.title === 'Our services'){
      data = item;
      break;
     }
     return data
   }
   console.log(data)
   
   return (
      <>
         <section className="services-image-section" style={{ backgroundImage: `url('/images/download.jpg')` }}> 
            <div className="services-image-overlay">
               <h1> 
                  <span className="highlight">|</span> 
                  <Head title={word} />
               </h1>
            </div>
         </section>

         {/* Section 2: Detailed Text Section */}
         <section className="services-text-section">
            <div className="services-text-content">
            {data ?(
                   <TextGenerateEffect words={data.description} />
               ): (
                  <p>No data found</p>
                )}
            </div>
           
         </section>
      </>
   );
}

export default Hero;
