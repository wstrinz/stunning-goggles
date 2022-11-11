import "./style.css";

import { Elm } from "./Main.elm";

var app = Elm.Main.init({
  node: document.getElementById("app"),
  flags: "Initial Message",
});

(window as any).PortFunnel.subscribe(app, { modules: ["Geolocation"] });
