import {
    NovuProvider,
    PopoverNotificationCenter,
    NotificationBell
  } from "@novu/notification-center";
  
  function NovuBell({}) {
    return (
      <NovuProvider
        subscriberId='64bf7d2b23612384a329f9d1'
        applicationIdentifier={process.env.REACT_APP_NOVU_IDENTIFIER}
        initialFetchingStrategy={{
          fetchNotifications: true,
          fetchUserPreferences: true,
        }}
      >
        <PopoverNotificationCenter>
          {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
        </PopoverNotificationCenter>
      </NovuProvider>
    );
  }
  export default NovuBell;
  