import "./style.css";
import { Elm } from "./Main.elm";
import "./PortFunnel.js";
import "./PortFunnel/Geolocation.js";

var app = Elm.Main.init({
  node: document.getElementById("app"),
  flags: "Initial Message",
});

PortFunnel.subscribe(app, { modules: ["Geolocation"] });
