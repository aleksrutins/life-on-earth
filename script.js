const ghUrl = "https://github.com/munchkinhalfling/life-on-earth/raw/master/";
const imageMap = new Map([
  ["stromatolites", ghUrl + "image8.jpg"],
  ["bacteria", ghUrl + "image5.jpg"],
  ["horses", ghUrl + "image9.jpg"],
  ["amphibians", ghUrl + "image6.jpg"],
  ["sheep", ghUrl + "image4.jpg"],
  ["fish", ghUrl + "image3.jpg"],
  ["hominid", ghUrl + "image2.jpg"],
  ["dinosaur", ghUrl + "image10.jpg"],
  ["forest", ghUrl + "image1.jpg"],
  [
    "walrus",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.londonist.com%2Fuploads%2F2018%2F04%2Fi875%2Fwalrus2.jpg&f=1&nofb=1"
  ]
]);
document.querySelectorAll("img").forEach(elem => {
  const src = elem.getAttribute("src");
  elem.setAttribute("src", imageMap.get(s));
});
