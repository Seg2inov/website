import React from 'react';
import Layout from '@theme-original/Layout';

export default function CustomLayout({ children }) {
  return (
    <Layout>
    
      <header className='headerSeg2inov'>
        <a href='/'>
            <img className='logo' src='\img\logoseg2inov.png' alt="logoSeg2inov"></img>
         </a>
        <div className=''>
            <a href="/contact/" className='blackButton'>
                <p>Discutons de votre projet</p>
                <img src="\img\topright.svg" alt="clique"></img>
            </a>
        </div>
        
        
        
      </header>
      <div class="blurDiv"></div>
      {children}
    </Layout>
  );
}

