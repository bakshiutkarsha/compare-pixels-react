import React, { useState } from 'react';
import sectionUploadStyle from '../../../styles/SectionUpload.module.css';
import getSiteInfo from '../../service';
import { useRouter } from 'next/router';

const SectionUpload: React.FC = () => {
const router = useRouter()
const [imageData, setImageData] = useState();
const [websiteUrl, setWebsiteUrl] = useState('');

const handleImageData = (e) => {
    const image = URL.createObjectURL(e.target.files[0])
    setImageData(image);
}

const handleWebsiteData = (e) => {
    setWebsiteUrl(e.target.value);
}

const getSiteInfoResp = async() => {
    try{
        const resp : any = await getSiteInfo({
            "url": websiteUrl,
            "userAgent": "chrome"
        });
        console.log(resp);
        router.push({pathname: 'iframe', query:{image: imageData, website: resp.data.proxyURL.href}})
    } catch(err){
        router.push({pathname: 'err', query:{err: err.message}})
    }
}

return <div>
        <div className={sectionUploadStyle.intro_section}>
            <p>Compare pixels</p>
            <p>See the difference between design mockups and the live website.</p>
        </div>
        <div className={sectionUploadStyle.intro_section_cntr}>
            <div className={sectionUploadStyle.intro_button_section}>
                <div className={sectionUploadStyle.intro_button_section_1}>
                    <p>Step one</p>
                    <label className={sectionUploadStyle.custom_file_upload}>
                        <input type='file' accept="image/*"
                        onChange={handleImageData}/>
                        Upload image
                    </label>
                    
                </div>
                <div className={sectionUploadStyle.intro_button_section_2}>
                    <p>Step two</p>
                    <input type='text' placeholder='Enter website URL'
                    onChange={handleWebsiteData}/>
                </div>
                {websiteUrl && imageData ? <div className={sectionUploadStyle.intro_section_image_enabled} onClick={getSiteInfoResp}>
                    <img src="../../../images/forward_arrow.png"/>
                </div> : <div className={sectionUploadStyle.intro_section_image} onClick={getSiteInfoResp}>
                    <img src="../../../images/forward_arrow.png"/>
                </div>}
                
            </div>
        </div>
    </div>
}


export default SectionUpload;