import axios from 'axios';

export default async function getSiteInfo (req){
    return await axios.post(`https://api.pastelcanvases.com/verify-url`, req);
}