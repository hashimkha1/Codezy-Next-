import React, { useContext } from 'react';
import './ServicesSection.css';
import { DescriContext } from '../../components/context/description.js'; // Use named import
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import Head from './head';

const word = "Our Services";

function Hero() {
   const {desc} = useContext(DescriContext);
   console.log(desc)
   
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
               {desc.map(item =>(
                 <TextGenerateEffect words={item.description} />
               ))}
               
            </div>
           
         </section>
      </>
   );
}

export default Hero;
