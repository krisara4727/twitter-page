import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
//import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';

function Left() {
    return (
        <div className='left'>
            <div className='left_navItems'>
            <TwitterIcon className='icon' style={{fontSize:40}} />
            </div>
            <div className='left_navItems'>
              <HomeIcon className='icon' style={{fontSize:30}} />
              <h3>Home</h3>
            </div>
            <div className='left_navItems'>
              <ExploreIcon className='icon' style={{fontSize:30}} />
              <h3>Explore</h3>
            </div>
            <div className='left_navItems'>
              <div className='notification_circle'>10</div>
              <NotificationsNoneIcon className='icon' style={{fontSize:30}} />
              <h3>Notifications</h3>
            </div>
            <div className='left_navItems'>
              <MailOutlineIcon className='icon' style={{fontSize:30}} />
              <h3>Messages</h3>
            </div>
            <div className='left_navItems'>
              <BookmarkBorderIcon className='icon' style={{fontSize:30}} />
              <h3>Bookmarks</h3>
            </div>
            <div className='left_navItems'>
              <ListAltIcon className='icon' style={{fontSize:30}} />
              <h3>Lists</h3>
            </div>
            <div className='left_navItems'>
              <PersonOutlineIcon className='icon' style={{fontSize:30}} />
              <h3>Profile</h3>
            </div>
            <div className='left_navItems'>
              <MoreHorizIcon className='icon' style={{fontSize:30}} />
              <h3>More</h3>
            </div>
            <div className='tweet_button'>
              <button>Tweet</button>
            </div>
            <div className='user_info left_navItems'>
                <Avatar src='' />
                <div className='user_name'><h3>Chivte Krisha</h3>
                  <p>@chivtekrish</p>
                </div>
                  <div className='three_dots'>...</div>
              </div>
          </div>
    )
}

export default Left
