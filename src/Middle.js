import React from 'react';
import { Avatar } from '@material-ui/core';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import GifIcon from '@material-ui/icons/Gif';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import UnsubscribeIcon from '@material-ui/icons/Unsubscribe';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import lady from './lady.jpg';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import PublishIcon from '@material-ui/icons/Publish';

function Middle() {
    return (
        <div className='middle'>
        <div className='home'>
          <h3>Home</h3>
        </div>
          <div className='middle_info'>
            <Avatar className='avatar' />
            <div className='inside_info'>
              <input placeholder="What's happening?"></input>
              <div className='attach_info'>
                <div className='middle_icons'>
                  <WallpaperIcon className='icons'/>
                  <GifIcon className='icons'/>
                  <EqualizerIcon className='icons'/>
                  <SentimentSatisfiedIcon className='icons'/>
                  <UnsubscribeIcon className='icons'/>
                </div>
                
                <div className='middle_tweet_button'>
                  <button>Tweet</button>
                </div>
              </div>
            </div>
        </div>
        <div className='post'>
          <div className='post_userInfo'>
              <Avatar src='' />
              <div className='post_userName'><span className='post_fname'>Chivte Krisha </span>
                <span className='post_icon'><VerifiedUserIcon /></span>
                <span className='post_uname'>@chivtekrish</span>
                <span className='post_timestamp'>.13min</span>
                <div className='post_status'>
                  <p>can virat helps india to get their 2nd win against australia</p>
                </div>
              </div>
          </div>
          <div className='post_info'>
            <div className='image_container'>
                <img src={lady} alt='pic of some post'></img>
                <p>some tesxt something about the post or image</p>
            </div>
            <div className='reactions'>
                <ModeCommentIcon />
                <FavoriteBorderIcon />
                <ShareIcon />
                <PublishIcon />
            </div>
          </div>

        </div>
      </div>
    )
}

export default Middle
