import React from 'react'

const NotificationHeader = (props) => {
  return (
    <div className="notification-header">
        <div className="title-bar">
            <h1><span>Notifications</span> <span className='count'>{props.unreadCount}</span></h1>
        </div>
        <div className="controls">
            <button onClick={props.markAsRead}>Mark all as read</button>
        </div>
    </div>
  )
}

export default NotificationHeader