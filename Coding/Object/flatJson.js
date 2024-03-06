// Code by me
const jsonObj = {
  Company: "AJIO",
  Address: "BLR",
  contact: 9999999999,
  mentor: {
    HTML: "RIL",
    CSS: "RIL",
    JavaScript: {
      version: "9",
      level: "2",
    },
  },
};

function flatJson(json, res, track) {
  for (let k in json) {
    if (typeof json[k] === "object" && !Array.isArray(json[k])) {
      flatJson(json[k], res, k + ".");
    } else {
      res[track + k] = json[k];
    }
  }
}

let res = {};

let track = "";
flatJson(jsonObj, res, track);

console.log(res);
