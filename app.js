const name = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const checkPass = document.getElementById("pass1");
const p = document.querySelectorAll("p");
const i = document.querySelectorAll("input");
const us1 = document.querySelector("#us1");
const us2 = document.querySelector("#us2");
const em1 = document.querySelector("#em1");
const em2 = document.querySelector("#em2");
const pa1 = document.querySelector("#pa1");
const pa2 = document.querySelector("#pa2");
const pc1 = document.querySelector("#pc1");
const pc2 = document.querySelector("#pc2");
const i1 = Array.from(i);
const p1 = Array.from(p);
//console.log(p1);
const btn = document.querySelector(".container button");

const submit = () => {
  let username = name.value.trim();
  let email1 = email.value.trim();
  let password = pass.value.trim();
  let password1 = checkPass.value.trim();
  //console.log(username);
  let regex = /^[A-Za-z]{2,}\d*$/;
  let result = regex.test(username);
  //console.log(result);
  if (!regex.test(username)) {
    p1[0].style.visibility = "visible";
    i1[0].style.border = "solid red 2px";
    us1.style.visibility = "visible";
    us2.style.visibility = "hidden";
  } else {
    i1[0].style.border = "solid #2ECC71 2px";
    p1[0].style.visibility = "hidden";
    us1.style.visibility = "hidden";
    us2.style.visibility = "visible";
  }
  let regex1 = /@/;
  if (!regex1.test(email1)) {
    p1[1].style.visibility = "visible";
    i1[1].style.border = "solid red 2px";
    em1.style.visibility = "visible";
    em2.style.visibility = "hidden";
  } else {
    p1[1].style.visibility = "hidden";
    i1[1].style.border = "solid #2ECC71 2px";
    em1.style.visibility = "hidden";
    em2.style.visibility = "visible";
  }
  let regex2 = /[A-Za-z0-9]{7,13}/;
  let regex3 = /[a-z]/;
  let regex4 = /[A-Z]/;
  let regex5 = /[0-9]/;
  console.log(regex5.test(password));
  if (
    !regex2.test(password) ||
    !regex3.test(password) ||
    !regex4.test(password) ||
    !regex5.test(password)
  ) {
    p1[2].style.visibility = "visible";
    i1[2].style.border = "solid red 2px";
    pa1.style.visibility = "visible";
    pa2.style.visibility = "hidden";
  } else {
    p1[2].style.visibility = "hidden";
    i1[2].style.border = "solid #2ECC71 2px";
    pa1.style.visibility = "hidden";
    pa2.style.visibility = "visible";
  }
  if (password1 !== password || password1 === "") {
    p1[3].style.visibility = "visible";
    i1[3].style.border = "solid red 2px";
    pc1.style.visibility = "visible";
    pc2.style.visibility = "hidden";
  } else {
    p1[3].style.visibility = "hidden";
    i1[3].style.border = "solid #2ECC71 2px";
    pc1.style.visibility = "hidden";
    pc2.style.visibility = "visible";
  }
};

btn.addEventListener("click", submit);
