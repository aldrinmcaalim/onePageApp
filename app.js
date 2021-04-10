const container = document.querySelector("#container");

function getPage(fixedId, callback) {
  const pages = {
    home: "Home page dude",
    about: "About page my friend",
  };

  callback(pages[fixedId]);
}

function loadPage() {
  let fixedId = location.hash.slice(1);
  getPage(fixedId, function (content) {
    container.innerText = content;
  });
}

if (!location.hash) {
  container.innerText = "#home";
}

loadPage();

window.addEventListener("hashchange", loadPage);
