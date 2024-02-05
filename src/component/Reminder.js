import React, { useEffect, useState } from 'react';

function Reminder({ todos }) {
  useEffect(() => {
    checkNotificationPermission();
  }, []);

  useEffect(() => {
    const reminderInterval = setInterval(() => {
      checkReminders();
    }, 60000); // Check every minute

    return () => clearInterval(reminderInterval);
  }, [todos]);

  const checkNotificationPermission = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission !== 'granted') {
          console.error('Notifications are blocked or not allowed by the user.');
        }
      });
    }
  };

  const checkReminders = () => {
    const currentTime = new Date();

    todos.forEach(todo => {
      if (todo.scheduledDate) {
        const scheduledTime = new Date(todo.scheduledDate);
        const timeDifference = scheduledTime.getTime() - currentTime.getTime();
        const minutesDifference = Math.floor(timeDifference / (1000 * 60));

        if (minutesDifference > 0 && minutesDifference <= 10) {
          notifyUser(todo);
        }
      }
    });
  };

  const notifyUser = (todo) => {
    if (Notification.permission === 'granted') {
      new Notification(`Reminder: ${todo.text}`, {
        body: `Your task is scheduled at ${new Date(todo.scheduledDate).toLocaleString()}.`,
      });
    }
  };

  return null;
}

export default Reminder;
