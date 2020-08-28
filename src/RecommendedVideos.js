import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h1>Recommended</h1>
            <div className="recommendedVideos__videos">
                <VideoCard 
                
                title ="Become a human ||Lorse Ipsum is Lorem i"
                views="2.3M views"
                timestamp="3 days a go"
                image="https://picsum.photos/200/300"
                channelImage="https://picsum.photos/200/300"
                channel="Dheeraj human" 
                />
                 <VideoCard title ="Become a human ||Lorse Ipsum is Lorem ipsum"
                views="2.3M views"
                timestamp="3 days a go"
                image="https://picsum.photos/200/300"
                channelImage="https://picsum.photos/200/300"
                channel="Dheeraj human"  />
                  <VideoCard  title ="Become a human ||Lorse Ipsum is Lorem ipsum"
                views="2.3M views"
                timestamp="3 days a go"
                image="https://picsum.photos/200/300"
                channelImage="https://picsum.photos/200/300"
                channel="Dheeraj human"  />
                  <VideoCard  title ="Become a human ||Lorse Ipsum is Lorem ipsum"
                views="2.3M views"
                timestamp="3 days a go"
                image="https://picsum.photos/200/300"
                channelImage="https://picsum.photos/200/300"
                channel="Dheeraj human"  />
                  <VideoCard  title ="Become a human ||Lorse Ipsum is Lorem ipsum"
                views="2.3M views"
                timestamp="3 days a go"
                image="https://picsum.photos/200/300"
                channelImage="https://picsum.photos/200/300"
                channel="Dheeraj human" />
            </div>
        </div>
    )
}

export default RecommendedVideos
