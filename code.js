// TODO: rotate thru background colors
// TODO: pick random karens
// pink - f7c7e0
// pink - e6a4c0
// teal - 5ac1f7
// teal - 63d4ee
// green - 57b96f

const karens = [
  {
    user: "CPKaren83",
    age: "37",
    location: "New York, NY",
    summary_title: "My self-summary",
    summary:
      "I enjoy long walks in Central Park with my cocker spaniel, Henry. Pet peeves include African-American bird-watchers, doorman, and people filming me.",
    link:
      "https://www.nytimes.com/2020/06/14/nyregion/central-park-amy-cooper-christian-racism.html",
    image: "images/karen_cp_1_320x280.jpg",
  },
  {
    user: "KarenOakley",
    age: "61",
    location: "St. Louis, MO",
    summary_title: "What I'm doing with my life",
    summary:
      "Monday thru Friday I am a personal-injury lawyer. On the weekend I like going to the gun range and dispersing BLM protesters.",
    link:
      "https://www.nytimes.com/video/us/politics/100000007214585/trump-white-couple-guns-st-louis.html",
    image: "images/karen_stl_1_320x280.jpg",
  },
  {
    user: "KaronaVirus19",
    age: "27",
    location: "Dallas, TX",
    summary_title: "I'm really good at",
    summary:
      "Tossing groceries, cursing, and not wearing a mask in public during a global pandemic.",
    link: "https://www.youtube.com/watch?v=b9oJtSpOQhY",
    image: "images/karen_dallas_1_320x280.jpg",
  },
];

$(function () {
  for (k of karens) {
    html = getHTML(k);
    $(".boxes").append(html);
  }
});

function getHTML(k) {
  const percent = Math.floor(Math.random() * 101);
  return `
<div class="box">
  <img src="${k.image}" />
  <div class="info">
    <div class="match_percent">
      <div class="match">match</div>
      <div class="percent">${percent}%</div>
    </div>
    <div class="user_age_loc">
      <div class="user">${k.user}</div>
      <div class="age_loc">${k.age} &bullet; ${k.location}</div>
    </div>
  </div>
  <div class="summary_div">
    <div class="summary_title">${k.summary_title}</div>
    <div class="summary">${k.summary}</div>
  </div>
</div>`;
}
