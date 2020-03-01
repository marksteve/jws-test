const fs = require("fs");
const jws = require("jws");
const sig = fs.readFileSync(0).toString().trim();
console.log(jws.decode(sig).payload);
