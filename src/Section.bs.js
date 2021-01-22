'use strict';

var React = require("react");
var Css_Js_Core = require("bs-css/src/Css_Js_Core.bs.js");
var CssJs$Emotions = require("./CssJs.bs.js");

var arialNarrow = CssJs$Emotions.fontFace("Arial FontFace Test", [CssJs$Emotions.localUrl("Arial Narrow")], "normal", {
      NAME: "num",
      VAL: 500
    }, undefined, undefined);

var section = CssJs$Emotions.style([
      CssJs$Emotions.selector("& > h1", [
            CssJs$Emotions.fontFamily({
                  NAME: "custom",
                  VAL: arialNarrow
                }),
            CssJs$Emotions.fontSize(CssJs$Emotions.px(32)),
            CssJs$Emotions.fontWeight({
                  NAME: "num",
                  VAL: 300
                }),
            CssJs$Emotions.marginTop("zero")
          ]),
      CssJs$Emotions.position("relative"),
      CssJs$Emotions.background(CssJs$Emotions.hex("f5f5f5")),
      CssJs$Emotions.margin(CssJs$Emotions.px(20)),
      CssJs$Emotions.padding(CssJs$Emotions.px(10)),
      CssJs$Emotions.boxShadow(Css_Js_Core.Shadow.box(undefined, CssJs$Emotions.px(1), CssJs$Emotions.px(5), undefined, undefined, CssJs$Emotions.rgba(0, 0, 0, {
                    NAME: "num",
                    VAL: 0.3
                  }))),
      CssJs$Emotions.boxShadows([
            Css_Js_Core.Shadow.box(undefined, CssJs$Emotions.px(1), CssJs$Emotions.px(5), undefined, undefined, CssJs$Emotions.rgba(0, 0, 0, {
                      NAME: "num",
                      VAL: 0.3
                    })),
            Css_Js_Core.Shadow.box(undefined, CssJs$Emotions.px(1), CssJs$Emotions.px(10), undefined, true, CssJs$Emotions.rgba(255, 255, 255, {
                      NAME: "num",
                      VAL: 0.5
                    }))
          ])
    ]);

var rowLayout = CssJs$Emotions.style([
      CssJs$Emotions.display("flex"),
      CssJs$Emotions.flexDirection("row"),
      CssJs$Emotions.flexWrap("wrap")
    ]);

var Styles = {
  arialNarrow: arialNarrow,
  section: section,
  rowLayout: rowLayout
};

function Section(Props) {
  var name = Props.name;
  var children = Props.children;
  return React.createElement("section", {
              className: section
            }, React.createElement("h1", undefined, name), React.createElement("div", {
                  className: rowLayout
                }, children));
}

var make = Section;

exports.Styles = Styles;
exports.make = make;
/* arialNarrow Not a pure module */
