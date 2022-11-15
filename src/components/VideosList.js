import React from 'react';
import VideoItem from './VideoItem';


const VideosList = ({videos, onVideoSelected}) => {

    const renderedList = videos.map((video)=>{
        return <VideoItem key={video.id.videoId} video= {video} onVideoSelected = {onVideoSelected}/>
    })
        return (
            <div className="ui relaxed divided list"> {renderedList}</div>
        )
}

export default VideosList