import React,{useEffect} from 'react';
import { motion, stagger, useAnimate } from "framer-motion";

const Head = ({title}:{title:string}) => {
    const [scope, animate] = useAnimate();
    
    const wordsArray = title.split(" ");
  
    useEffect(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: "blur(0px)",
        },
        {
          duration: 0.7,
          delay: stagger(0.7),
        }
      );
    }, [scope, animate]);
  
    return (
      <motion.div ref={scope}>
     
       
        {wordsArray.map((word, idx) => (
          
          <motion.span
            key={word + idx}
            style={{
              filter: "blur(10px)",
              opacity: 0,
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
        
      </motion.div>
    );
  };

  export default Head;