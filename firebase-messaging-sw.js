importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js"
);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA93jfnENX79gIhn7nm9rbTRrR_pQh1S1g",
  authDomain: "qc-refer.firebaseapp.com",
  projectId: "qc-refer",
  storageBucket: "qc-refer.appspot.com",
  messagingSenderId: "19488055777",
  appId: "1:19488055777:web:3a7c1c97e8ba42e4b8b2a0",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.usePublicVapidKey(
  BCxi2_5ABWDSU0oDqSZrIbCXIjI6F5OyrPOt3Ppveq8Mk -
    KBx3OI1FgzpS9Tf7wE36S_jkXUuPuuY4fUvzZOpYM
);
messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.message,
    icon: "PATH TO ICON IF ANY",
    data: { url: payload.data.onClick }, //the url which we gonna use later
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
//Code for adding event on click of notification
self.addEventListener("notificationclick", function (event) {
  let url = event.notification.data.url;
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window" }).then((windowClients) => {
      // Check if there is already a window/tab open with the target URL
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        // If so, just focus it.
        if (client.url === url && "focus" in client) {
          return client.focus();
        }
      }
      // If not, then open the target URL in a new window/tab.
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});
