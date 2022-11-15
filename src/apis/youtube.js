import axios from 'axios'
const KEY = 'AIzaSyCdPk0hw7Z0Esnc-jupeEKJ9-w0kIj2Exg';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResult: 5,
        key: KEY,
      }
})