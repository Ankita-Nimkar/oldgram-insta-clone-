const mainContainer = document.querySelector("main");

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function renderPosts() {
  let html = "";

  for (let i = 0; i < posts.length; i++) {
    html += ` <div class="post-content-1">
  <div class="user-info">
    <img class="avatar" src="${posts[i].avatar}" alt="" />
    <div class="text">
      <h4 class="user-full-name">${posts[i].name}</h4>
      <p class="location-text">${posts[i].location}</p>
    </div>
  </div>

  <img class="post-img" src="${posts[i].post}" />

  <div class="body">
    <div class="icons">
      <img class="icon heart" id= “target”  src="images/icon-heart.png" alt="" />
      <img class="icon " src="images/icon-comment.png" alt="" />
      <img class="icon" src="images/icon-dm.png" alt="" />
    </div>

    <p class="like-count">${posts[i].likes} likes</p>

    <p class="username-caption">
      <span class="bold">${posts[i].username}</span> ${posts[i].comment}
    </p>
  </div>
</div>`;
  }
  mainContainer.innerHTML = html;
}
renderPosts();

const postImg = document.querySelectorAll(".post-img");
const likeCount = document.querySelectorAll(".like-count");
const heart = document.querySelectorAll(".heart");
let dbClk = false;
let isRed = false;
//////post click
for (let j = 0; j < postImg.length; j++) {
  let count = posts[j].likes;
  ///////////heart click
  heart[j].addEventListener("click", (e) => {
    console.log(e.target);
    if (heart[j].classList.contains("red")) {
      heart[j].classList.remove("red");
      count--;
      posts[j].likes = count;
      likeCount[
        j
      ].innerHTML = `<p class="like-count">${posts[j].likes} likes</p>`;
    } else {
      heart[j].classList.add("red");

      count++;
      posts[j].likes = count;
      likeCount[
        j
      ].innerHTML = `<p class="like-count">${posts[j].likes} likes</p>`;
    }
  });
  /////post-img
  postImg[j].addEventListener("dblclick", (e) => {
    console.log(e.target);
    console.log(heart[j]);
    if (!heart[j].classList.contains("red")) {
      console.log(e.target);

      heart[j].classList.add("red");
      count++;
      posts[j].likes = count;
      likeCount[
        j
      ].innerHTML = `<p class="like-count">${posts[j].likes} likes</p>`;

      console.log(`count:${posts[j].likes}`);
    } else return;
  });
}
