import React from 'react'
import NotificationHeader from './NotificationHeader'
import NotificationItem from './NotificationItem'

import { useState } from 'react'

const Notifications = () => {

    const [unread, setUnread] = useState(true);

    const handleClick = () => {
        setUnread(false);
    }

  return (
    <div className='notifications'>

        <NotificationHeader unreadCount={unread ? 3 : 0} markAsRead={handleClick}/>

        <div className="notification-content">

            <NotificationItem username="Mark Webber" unread={unread} avatar="/assets/images/avatar-mark-webber.webp" time="1m">
                reacted to your recent post <span className='post'>My first tournament today!</span>
            </NotificationItem>

            <NotificationItem username="Angela Gray" unread={unread} avatar="/assets/images/avatar-angela-gray.webp" time="5m">
                followed you
            </NotificationItem>

            <NotificationItem username="Jacob Thompson" unread={unread} avatar="/assets/images/avatar-jacob-thompson.webp" time="1 day">
                has joined your group <span className='group'>Chess Club</span>
            </NotificationItem>

            <NotificationItem username="Rizky Hasanuddin" avatar="/assets/images/avatar-rizky-hasanuddin.webp" time="5 days" pm="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.">
                sent you a private message
            </NotificationItem>

            <NotificationItem username="Kimberly Smith" avatar="/assets/images/avatar-kimberly-smith.webp" time="1 week" image="/assets/images/image-chess.webp">
                commented on you picture
            </NotificationItem>

            <NotificationItem username="Nathan Peterson" avatar="/assets/images/avatar-nathan-peterson.webp" time="2 weeks">
                reacted to your recent post <span className='post'>5 end-game strategies to increase your win rate</span>
            </NotificationItem>

            <NotificationItem username="Anna Kim" avatar="/assets/images/avatar-anna-kim.webp" time="2 weeks">
                left the group <span className='group'>Chess Club</span>
            </NotificationItem>


        </div>
    </div>
  )
}

export default Notifications