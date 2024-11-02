'use client'
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const DescriContext = createContext();

const DescriptionProvider = ({children}) => {
    const [desc, setDesc] = useState([]);
    const [services,setServices] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const descriptionResponse = await axios.get('http://localhost:8000/api/description');
                setDesc(descriptionResponse.data);
                const servicesResponse = await axios.get('http://localhost:8000/api/services') 
                console.log(servicesResponse.data)
                setServices(servicesResponse.data)
            } catch (error) {
                console.error("Error fetching description data:", error);
            } finally {
                setLoading(false); // Set loading to false once all data is fetched
            }
        }
      
        fetchData()
    }, []);
    
   

    return (
        <DescriContext.Provider value={{desc,services,loading}}>
            {children}
        </DescriContext.Provider>
    );
};

export { DescriContext };
export default DescriptionProvider;
