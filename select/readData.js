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

const database = cloudDB.collection("products");
database
  .doc("brokerage")
  .get()
  .then((doc) => {
    const demat = doc.data().demat;
    const names = doc.data().brokers;

    names.forEach((name) => {
      document.getElementById("cards").innerHTML +=
        `<div class="card">
      <div class="broker">
        <div class="broker-name">` +
        name +
        `</div>
        <div class="category">charges</div>
        <div class="line">
          <div class="details">
            <div>Acc Open&nbsp;</div>
            <div class="data">₹ ` +
        demat[name].open +
        `</div>
          </div>
          <div class="details">
            <div>AMC&nbsp;</div>
            <div class="data">₹` +
        demat[name].amc +
        `</div>
          </div>
          <div class="details">
            <div>DP charge&nbsp;</div>
            <div class="data">₹` +
        demat[name].dp +
        `</div>
          </div>
        </div>
        <div class="category">brokerage</div>
        <div class="line">
          <div class="details">
            <div>Delivery&nbsp;</div>
            <div class="data">` +
        demat[name].del +
        `</div>
          </div>
          <div class="details">
            <div>Intraday&nbsp;</div>
            <div class="data">` +
        demat[name].intra +
        `</div>
          </div>
          <div class="details">
            <div>Option&nbsp;</div>
            <div class="data">₹` +
        demat[name].option +
        `</div>
          </div>
        </div>` +
        // <div class="category">extra</div>
        `<div class="line">
          <div class="details">
            <div class="extra-data">` +
        demat[name].extra +
        `</div>
        &nbsp; <div class="extra-data"><span class="pc">&emsp;&emsp;</span>
        <span style="color:gray">App: </span>` +
        demat[name].apps +
        `</div>
          </div>
        </div>
      </div>
    </div>`;
    });
  });
