import iframeStyles from '../../../styles/Iframe.module.css';

const IFrame: React.FC = (props) => {
  return <div className={iframeStyles.iframe_cntr}>
       <iframe src={props.queryData.website} className={props.typeState === 'isWebsite' ? iframeStyles.opacity : ''}></iframe>
       <div className={iframeStyles.overlay_cntr}>
         <img src={props.queryData.image} className={props.typeState === 'isDesign' ? iframeStyles.opacity : ''}/>
       </div>
  </div>
};

export default IFrame;