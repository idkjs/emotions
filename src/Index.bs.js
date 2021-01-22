'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");
var Test$Emotions = require("./Test.bs.js");

((require("./index.css")));

ReactDOMRe.renderToElementWithId(React.createElement(Test$Emotions.make, {}), "root");

/*  Not a pure module */
