'use client'
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const DescriContext = createContext();

const DescriptionProvider = ({children}) => {
    const [desc, setDesc] = useState([]);
    const [services,setServices] = useState([])

    useEffect(() => {
        async function Descrip() {
            try {
                const response = await axios.get('http://localhost:8000/api/description');
                setDesc(response.data);
            } catch (error) {
                console.error("Error fetching description data:", error);
            }
        }
        async function getService (){
            const response = await axios.get('http://localhost:8000/api/services') 
            console.log(response.data)
            setServices(response.data)
          }
        getService()
        Descrip();
    }, []);
    
   

    return (
        <DescriContext.Provider value={{desc,services}}>
            {children}
        </DescriContext.Provider>
    );
};

export { DescriContext };
export default DescriptionProvider;
