import React, { useState } from 'react';
import FooterStyle from '../../../styles/Footer.module.css';
import { useRouter } from 'next/router'

  const Footer: React.FC = (props) => {
  const route = useRouter();
  const [isWebsite, setisWebsite] = useState(false);
  const [isDesign, setisDesign] = useState(true);

  const setStateWebsite = async () => {
    setisDesign(false);
    setisWebsite(true);
    props.onChange('isWebsite');
  }

  const setStateDesign = async () => {
    setisWebsite(false);
    setisDesign(true);
    props.onChange('isDesign');
  }
  
   if(route.route !== '/iframe') {
    return <div className={FooterStyle.footer_cntr_logo}>
           <img className={FooterStyle.logo} src='../../../images/group-12@3x.png'/>
        </div>
  } else {
    return <div className={FooterStyle.footer_cntr}>
      <div className={FooterStyle.toggle_footer_cntr}>
          <p className={ isDesign ? FooterStyle.toggle_selection : ''} 
          onClick={setStateDesign}>Design 
           {isDesign ? <span className={FooterStyle.hr}></span>: ''}
          </p>
          <p className={ isWebsite ? FooterStyle.toggle_selection : ''} 
          onClick={setStateWebsite}> Website
            {isWebsite ? <span className={FooterStyle.hr}></span>: ''}
          </p>
          
      </div>

      <div className={FooterStyle.footer_info_cntr}>
          <img src='../../../images/pastel-white-bg.png'/>
          <div className={FooterStyle.footer_info}>
              <p>Spot any issues on the website?</p>
              <p>Share feedback on live websites with Pastel <span>Get started now</span></p>
          </div>
      </div>
    </div>
  }       
}

export default Footer;