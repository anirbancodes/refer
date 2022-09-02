const steps = document.getElementById("hero-steps");
const payout = document.getElementById("hero-payout");
const steps_body = document.getElementById("hero-steps-body");
const payout_body = document.getElementById("hero-payout-body");
steps.addEventListener("click", function () {
  steps_body.style.display = "flex";
  payout_body.style.display = "none";
  payout.className = "hero-card-head active";
  steps.className = "hero-card-head inactive";
});
payout.addEventListener("click", function () {
  payout_body.style.display = "flex";
  steps_body.style.display = "none";

  payout.className = "hero-card-head inactive";
  steps.className = "hero-card-head active";
});
