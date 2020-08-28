import React, { useState } from 'react';
import Iframe from '../src/components/Iframe';
import Footer from '../src/components/Footer';
import sectionLayoutStyles from '../styles/Layout.module.css';
import { useRouter } from 'next/router'

const IframePage: React.FC = () => {
  const route = useRouter();
  const [typeState, setTypeState] = useState('isDesign');

  const handleState = (type)=>{
    setTypeState(type);
  }

  return <div>
      <Iframe typeState = {typeState} queryData = {route.query}/>|
      <div className={sectionLayoutStyles.footer_layout}>
        <Footer onChange={handleState}/>
      </div>
  </div>
};

export default IframePage;