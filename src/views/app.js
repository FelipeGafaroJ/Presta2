const { remote } = require("electron");
const main = remote.require("./main");

main.hello();
