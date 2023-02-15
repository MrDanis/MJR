import React,{ useEffect } from 'react';
import './App.css';
import CustomerRoutes from './Routes';
import AOS from 'aos'
function App() {
  useEffect(()=>{
    AOS.init({
      duration : 2000
    });
    // alert('This is app js')
  },[])
  return (
   <CustomerRoutes/>
  );
}

export default App;
