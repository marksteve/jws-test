const jws = require("jws");

const SECRET_KEY = "secret";
const sig = jws.sign({
  header: { alg: "HS512" },
  payload: { query: "test" },
  secret: SECRET_KEY
});
console.log(sig);
process.exit();
