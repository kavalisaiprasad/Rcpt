importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyAE7iHIEhc3Eh-in9tjfOLbmBfmKqKarMQ",
  authDomain: "rcptnew-b3782.firebaseapp.com",
  projectId: "rcptnew-b3782",
  storageBucket: "rcptnew-b3782.appspot.com",
  messagingSenderId: "8105670913",
  appId: "1:8105670913:web:bf60bd8d4cd4063a588300",
  measurementId: "G-1X7R4S2BMM"


};


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    const notificationTitle = payload.notification.title;
    const data_url = payload.data.url;
    console.log("data_url : "+data_url);
    if(data_url == null) {
      data_url = "https://www.rcpt.in";
    }
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
        data: {
          url:data_url
        }
    };


    self.registration.showNotification(notificationTitle, notificationOptions);
});