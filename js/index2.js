const rules = document.getElementById("rules");
const true1 = document.getElementById("true");
const false1 = document.getElementById("false");
const main1 = document.getElementById("main1");
const close = document.getElementsByTagName(":after");

rules.addEventListener("click", () => {
  rules1.style.transform = "translateX(0)";
  main1.style.filter = "blur(5px)";
});

close1.addEventListener("click", () => {
  rules1.style.transform = "translateY(-2000px)";
  main1.style.filter = "blur(0px)";
});

bt1.addEventListener("click", () => {
  bt1.style.border = "solid red 5px";
  retry.style.transform = "translateX(0)";
  bt2.style.display = "none";
  bt3.style.display = "none";
  bt4.style.display = "none";
  false1.style.opacity = "1";
});

bt2.addEventListener("click", () => {
  bt2.style.border = " solid green 5px";
  next.style.transform = "translateX(0)";
  true1.style.opacity = "1";
  bt1.style.display = "none";
  bt3.style.display = "none";
  bt4.style.display = "none";
});

bt3.addEventListener("click", () => {
  bt3.style.border = " solid red 5px";
  retry.style.transform = "translateX(0)";
  false1.style.opacity = "1";
  bt1.style.display = "none";
  bt2.style.display = "none";
  bt4.style.display = "none";
});

bt4.addEventListener("click", () => {
  bt4.style.border = " solid red 5px";
  retry.style.transform = "translateX(0)";
  bt1.style.display = "none";
  bt3.style.display = "none";
  bt2.style.display = "none";
  false1.style.opacity = "1";
});

retry.addEventListener("click", () => {
  window.location.reload();
});

next.addEventListener("click", () => {
  document.location.href = "./page3.html";
});
