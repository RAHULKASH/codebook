import React from 'react';
import { AllRoutes } from './Routes/AllRoutes';
import {Header,Footer} from './components';

export const App = () => {
  return (
    <div className='dark:bg-slate-800'>
      <Header/>
      <AllRoutes />
      <Footer />
    </div>
  )
}

