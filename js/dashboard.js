const firebaseConfig = {
  apiKey: "AIzaSyA93jfnENX79gIhn7nm9rbTRrR_pQh1S1g",
  authDomain: "qc-refer.firebaseapp.com",
  projectId: "qc-refer",
  storageBucket: "qc-refer.appspot.com",
  messagingSenderId: "19488055777",
  appId: "1:19488055777:web:3a7c1c97e8ba42e4b8b2a0",
};

firebase.initializeApp(firebaseConfig);

const cloudDB = firebase.firestore();

const database = cloudDB.collection("partners");

const params = new URL(document.location).searchParams;
const code = params.get("code");
const year = params.get("year");

database
  .doc(code)
  .get()
  .then((doc) => {
    if (!doc.exists) {
      alert("Wrong code");
      window.location = "/login";
    } else if (doc.data().birth != year) {
      alert("Wrong birth year");
      window.location = "/login";
    } else if (doc.data().birth == year) {
      document.getElementById("code").innerHTML = code;
      document.getElementById("year").innerHTML = year;

      document.getElementById("table").innerHTML =
        " <tr><th>Name</th><th>Email</th><th>Number</th><th>Product</th><th>Status</th><th>Eligible</th><th>Payout Status</th></tr>";
      database
        .doc(code)
        .get()
        .then((doc) => {
          document.getElementById("name").innerHTML = doc.data().name;
          const clients = doc.data().clients;
          clients.forEach((client) => {
            console.log(1);
            document.getElementById("table").innerHTML +=
              "<tr><td>" +
              client.name +
              "</td><td>" +
              client.email +
              "</td><td>" +
              client.number +
              "</td><td>" +
              client.product +
              "</td><td>" +
              client.status +
              "</td><td>" +
              client.eligible +
              "</td><td>" +
              client.payout +
              "</td></tr>";
          });
        });
    }
  });
