import React from 'react'
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import  VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import OnDemandVideoIcon from '@material-ui/icons/OndemandVideo'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbupAltoutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreoutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
           <hr />
           <SidebarRow Icon={VideoLibraryIcon} title="Library" />     
           <SidebarRow Icon={HistoryIcon} title="History" />
           <SidebarRow Icon={OnDemandVideoIcon} title="Your Videos" />
           <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
           <SidebarRow Icon={ThumbupAltoutlinedIcon} title="Liked Videos" />
           <SidebarRow Icon={ExpandMoreoutlinedIcon} title="Show more" />



        </div>
    )
}

export default Sidebar
