import React from 'react';

const NotificationItem = (props) => {
  return (
    <div className={props.unread ? "notification-item unread" : "notification-item"}>
      <div className="avatar">
        <img src={props.avatar} alt={props.username} />
      </div>
      <div className="notification-item-content">
        <div className="notification-title">
          <div className="content">
            <p>
              <span className="username">{props.username}</span>
              {props.children}
              {props.unread && <span className='unread-notif'></span>}
            </p>
          </div>
        </div>
        <div className="time">
          <p>{props.time} ago</p>
        </div>
        {props.pm ? (
          <div className="private-message">
            <p>{props.pm}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
      {props.image ? 
      <div className="notification-image">
        <img src={props.image} alt="Notification Item" />
      </div>
      : 
      <></>
      }
    </div>
  );
};

export default NotificationItem;
