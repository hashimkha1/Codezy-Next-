"use client";
import React, { useEffect, useState ,useContext} from 'react';
import Navbar from "@/components/Navbar";
import HireUs from './Hire Us';
import Loader from '../../components/loader/loader';
import { DescriContext } from '@/components/context/description';

const Hire = () => {
    const {loading} = useContext(DescriContext)
    return(
        <>
         {loading ? (
         <Loader />
        ):(
        <>
        <Navbar/>
        <HireUs/>
        </>
        )}
        </>
    )
}
export default Hire;