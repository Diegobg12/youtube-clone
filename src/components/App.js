import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';


const App = () =>{

    const [videoSelected, setvideoSelected] = useState(null);
    const [videos, search] = useVideos('buildings')

            // setvideoSelected(response.data.items[0])

            useEffect(
                ()=>{
                    setvideoSelected(videos[0])
                }
            ,[videos])

            return(
                <div className = 'ui container'>
                    <SearchBar onFormSubmit = {search} />
                    <div className='ui grid'>
                        <div className='ui row'>
                            <div className = 'eleven wide column'>
                                <VideoDetail video= {videoSelected}/>
                            </div>
                            <div className = 'five wide column'>
                                <VideosList 
                                    onVideoSelected= {setvideoSelected} 
                                    videos = {videos} 
                                    videoDetail={videoSelected}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
}


export default  App