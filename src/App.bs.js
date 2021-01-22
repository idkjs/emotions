'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var initialState = {
  count: 0
};

function reducer(state, action) {
  if (action) {
    return {
            count: state.count - 1 | 0
          };
  } else {
    return {
            count: state.count + 1 | 0
          };
  }
}

function App(Props) {
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  return React.createElement("main", undefined, "Simple counter with reducer", React.createElement("div", undefined, React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(dispatch, /* Decrement */1);
                        })
                    }, "Decrement"), React.createElement("span", {
                      className: "counter"
                    }, String(match[0].count)), React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(dispatch, /* Increment */0);
                        })
                    }, "Increment")));
}

var make = App;

exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
