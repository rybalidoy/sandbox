import { useState } from 'react';

import './App.css'

import SideBar from './components/SideBar';
import NewProject from './components/NewProject';
import DefaultContent from './components/DefaultContent';

export default function App() {

  /** 
   *  Functions
   */
  

  return (
    <main className="h-screen flex gap-8">
      <SideBar/>
      <DefaultContent/>
    </main>
  );
}


