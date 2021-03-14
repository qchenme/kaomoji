const fs = require("fs");

const menu = fs.readdirSync("public/kaomoji");
const categories = menu.map((title) => title.split(".")[0]);

var collection = {};
categories.forEach((cat) => {
  const kaomoji = fs.readFileSync(`public/kaomoji/${cat}.txt`, "utf8");
  collection[cat] = kaomoji
    .split("\n")
    .map((el) => el.normalize())
    .filter((el) => el != "");
});

const json = JSON.stringify(collection);

const callback = function (err) {
  if (err) throw err;
  console.log("Complete compiling kaomoji");
};

fs.writeFile("./public/kaomoji.json", json, "utf8", callback);
