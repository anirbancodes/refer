const database = cloudDB.collection("products");
database
  .doc("refer")
  .get()
  .then((doc) => {
    const demat = doc.data().demat;
    const names = doc.data().brokers;
    names.forEach((name) => {
      document.getElementById("item-1").innerHTML +=
        `<div class="item-2">
        <img class="dp" src="dp/demat/` +
        demat[name].dp +
        `" />
          <h2 class="product-name">` +
        name +
        `</h2>
        <div>
          <h3 class="product-amt">` +
        `₹<span id="` +
        name +
        `-amt">` +
        demat[name].amt +
        `</span><span class="light-text"> per refer</span>
          </h3>
          <p>
            Opening: ₹<span id="` +
        name +
        `-open">` +
        demat[name].open +
        `</span> &nbsp; AMC: ₹<span
              id="` +
        name +
        `-amc"
              >` +
        demat[name].amc +
        `</span
            ><br />1st trade: ₹ <span id="` +
        name +
        `-1stTrade">` +
        demat[name].trade +
        `</span> min.
          </p>
        </div>
        <div class="copyLinkBtn">
         <a onclick="copy` +
        name.split(/\W+/).join("") +
        `()" class="button-outline-blue orangered-btn"
            >Copy Link` +
        // `<img
        //       style="width: 18px;"
        //       src="../png/share3.png"
        //   />`
        `</a>
        </div>
      </div>`;
    });
  });
