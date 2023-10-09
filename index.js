const field = document.querySelector("textarea");
const backUp = field.getAttribute("placeholder");
const btn = document.querySelector(".btn");
const clear = document.getElementById("clear");
const submit = document.querySelector("#submit");
const comments = document.getElementById("comment-box");

const comments_arr = [];

const display_comments = () => {
  let list = "<ul>";
  comments_arr.forEach((comment) => {
    list += `<li>${comment}</li>`;
  });
  list += "</ul>";
  comments.innerHTML = list;
};

clear.onclick = function (event) {
  event.preventDefault();
  comments_arr.length = 0;
  display_comments();
};

submit.onclick = function (event) {
  event.preventDefault();
  const content = field.value;
  if (content.length > 0) {
    comments_arr.push(content);
    display_comments();
    field.value = "";
  }
};
