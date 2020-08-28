import * as React from "react";
import Footer from '../src/components/Footer';
import SectionUpload from '../src/components/SectionUpload';
import sectionLayoutStyles from '../styles/Layout.module.css';

const Layout: React.FC = () => {
  return <div>
      <div className={sectionLayoutStyles.section_layout}>
        <SectionUpload/>
      </div>
      
      <div className={sectionLayoutStyles.footer_layout}>
        <Footer/>
      </div>
  </div>
};

export default Layout;