import React from 'react'
import './SearchPage.css'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
               

                <TuneOutlinedIcon /> <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow 
             image="https://picsum.photos/200/300"
             channel="dheeru bhai"
             verified
             subs="999k"
             noOfVideos={1000}
             description="This is a channel for rocking lore epsum spdbhdh uhdashndf asjfhshfd sdfsdf ihsuidfhuzfwsidfjzdfwd"
            
            />
            <hr />
            <VideoRow 
            views="12 M"
            subs="56 M"
            description="hudfhws sadsaiu asdush dhuqwhuhq uwquwh wwuqhnf"
            timestamp="1 hr ago"
            channel="dheeru bro"
            title="This is cool yo bros happy"
            image="https://picsum.photos/200/300"
            /><VideoRow 
            views="12 M"
            subs="56 M"
            description="hudfhws sadsaiu asdush dhuqwhuhq uwquwh wwuqhnf"
            timestamp="1 hr ago"
            channel="dheeru bro"
            title="This is cool yo bros happy"
            image="https://picsum.photos/200/300"
            />
            <VideoRow 
            views="12 M"
            subs="56 M"
            description="hudfhws sadsaiu asdush dhuqwhuhq uwquwh wwuqhnf"
            timestamp="1 hr ago"
            channel="dheeru bro"
            title="This is cool yo bros happy"
            image="https://picsum.photos/200/300"
            />
            <VideoRow 
            views="12 M"
            subs="56 M"
            description="hudfhws sadsaiu asdush dhuqwhuhq uwquwh wwuqhnf"
            timestamp="1 hr ago"
            channel="dheeru bro"
            title="This is cool yo bros happy"
            image="https://picsum.photos/200/300"
            />
            <VideoRow 
            views="12 M"
            subs="56 M"
            description="hudfhws sadsaiu asdush dhuqwhuhq uwquwh wwuqhnf"
            timestamp="1 hr ago"
            channel="dheeru bro"
            title="This is cool yo bros happy"
            image="https://picsum.photos/200/300"
            />

        </div>
    )
}

export default SearchPage
