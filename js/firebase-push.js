const messaging = firebase.messaging();
getStartToken();

messaging.onMessage(function (payload) {
  console.log("on Message", payload);
});

function getStartToken() {
  messaging
    .getToken()
    .then((currentToken) => {
      if (currentToken) {
        sendTokenToServer(currentToken);
      } else {
        // Show permission request.
        RequestPermission();
        setTokenSentToServer(false);
      }
    })
    .catch((err) => {
      setTokenSentToServer(false);
    });
}

function RequestPermission() {
  messaging.requestPermission().then(
    function (permission) {
      if (permission === "granted") {
        console.log("have Permission");
        //calls method again and to sent token to server
        getStartToken();
      } else {
        console.log("Permission Denied");
      }
    }.catch(function (err) {
      console.log(err);
    })
  );
}

function sendTokenToServer(token) {
  if (!isTokensendTokenToServer()) {
    $.ajax({
      url: URL,
      type: "POST",
      data: {
        //whatever you wanna send
        push_token: token,
      },
      success: function (response) {
        setTokenSentToServer(true);
      },
      error: function (err) {
        setTokenSentToServer(false);
      },
    });
  }
}
function isTokensendTokenToServer() {
  return window.localStorage.getItem("sendTokenToServer") === "1";
}
function setTokenSentToServer(sent) {
  window.localStorage.setItem("sendTokenToServer", sent ? "1" : "0");
}
