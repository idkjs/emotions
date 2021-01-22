'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Css$Emotions = require("./Css.bs.js");
var Css_AtomicTypes = require("bs-css/src/Css_AtomicTypes.bs.js");
var Css_Legacy_Core = require("bs-css/src/Css_Legacy_Core.bs.js");
var Section$Emotions = require("./Section.bs.js");

Curry._1(Css$Emotions.insertRule, ".raw-css { display:block; background-color: green; width: 50px; height: 50px; }");

var fontItem_0 = Css$Emotions.marginLeft(Css$Emotions.px(10));

var fontItem_1 = {
  hd: Css$Emotions.paddingRight(Css$Emotions.px(10)),
  tl: {
    hd: Css$Emotions.borderRight(Css$Emotions.px(1), Css$Emotions.solid, Css$Emotions.black),
    tl: /* [] */0
  }
};

var fontItem = {
  hd: fontItem_0,
  tl: fontItem_1
};

var spin = Curry._1(Css$Emotions.keyframes, {
      hd: [
        0,
        {
          hd: Css$Emotions.transform(Css$Emotions.rotate(Css$Emotions.deg(0))),
          tl: /* [] */0
        }
      ],
      tl: {
        hd: [
          100,
          {
            hd: Css$Emotions.transform(Css$Emotions.rotate(Css$Emotions.deg(360))),
            tl: /* [] */0
          }
        ],
        tl: /* [] */0
      }
    });

var scaleAnimation = Curry._1(Css$Emotions.keyframes, {
      hd: [
        0,
        {
          hd: Css$Emotions.transform(Css$Emotions.scale(0.3, 0.3)),
          tl: /* [] */0
        }
      ],
      tl: {
        hd: [
          100,
          {
            hd: Css$Emotions.transform(Css$Emotions.scale(1.0, 1.0)),
            tl: /* [] */0
          }
        ],
        tl: /* [] */0
      }
    });

var redBox_0 = Css$Emotions.background(Css$Emotions.red);

var redBox_1 = {
  hd: Css$Emotions.borderBottom(Css$Emotions.px(5), Css$Emotions.solid, Css$Emotions.black),
  tl: {
    hd: Css$Emotions.width(Css$Emotions.px(50)),
    tl: {
      hd: Css$Emotions.height(Css$Emotions.px(50)),
      tl: {
        hd: Css$Emotions.margin(Css$Emotions.px(10)),
        tl: /* [] */0
      }
    }
  }
};

var redBox = {
  hd: redBox_0,
  tl: redBox_1
};

var miniBox_0 = Css$Emotions.border(Css$Emotions.px(2), Css$Emotions.solid, Css$Emotions.black);

var miniBox_1 = {
  hd: Css$Emotions.width(Css$Emotions.px(15)),
  tl: {
    hd: Css$Emotions.height(Css$Emotions.px(15)),
    tl: {
      hd: Css$Emotions.margin(Css$Emotions.px(1)),
      tl: /* [] */0
    }
  }
};

var miniBox = {
  hd: miniBox_0,
  tl: miniBox_1
};

var mergedStyles = Curry._1(Css$Emotions.merge, {
      hd: Curry._1(Css$Emotions.style, {
            hd: Css$Emotions.padding(Css$Emotions.px(0)),
            tl: {
              hd: Css$Emotions.fontSize(Css$Emotions.px(1)),
              tl: /* [] */0
            }
          }),
      tl: {
        hd: Curry._1(Css$Emotions.style, {
              hd: Css$Emotions.padding(Css$Emotions.px(20)),
              tl: {
                hd: Css$Emotions.fontSize(Css$Emotions.px(24)),
                tl: {
                  hd: Css$Emotions.color(Css$Emotions.blue),
                  tl: /* [] */0
                }
              }
            }),
        tl: {
          hd: Curry._1(Css$Emotions.style, {
                hd: Css$Emotions.media("(max-width: 768px)", {
                      hd: Css$Emotions.padding(Css$Emotions.px(10)),
                      tl: /* [] */0
                    }),
                tl: /* [] */0
              }),
          tl: {
            hd: Curry._1(Css$Emotions.style, {
                  hd: Css$Emotions.media("(max-width: 768px)", {
                        hd: Css$Emotions.fontSize(Css$Emotions.px(16)),
                        tl: {
                          hd: Css$Emotions.color(Css$Emotions.red),
                          tl: /* [] */0
                        }
                      }),
                  tl: /* [] */0
                }),
            tl: /* [] */0
          }
        }
      }
    });

var differentHeightLengths = Belt_Array.map([
      Css$Emotions.cm(1),
      Css$Emotions.em(1.2),
      Css$Emotions.ex(1.2),
      Css$Emotions.mm(10),
      Css$Emotions.pct(50),
      Css$Emotions.pt(14),
      Css$Emotions.px(20),
      Css$Emotions.rem(2.0),
      Css$Emotions.vh(1),
      Css$Emotions.vw(1.0),
      Css$Emotions.vmax(1.0),
      Css$Emotions.vmin(1.0),
      Css$Emotions.zero
    ], (function (x) {
        var className = Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                  hd: Css$Emotions.height(x),
                  tl: /* [] */0
                }));
        return React.createElement("div", {
                    key: className,
                    className: className
                  });
      }));

function Test(Props) {
  return React.createElement("div", {
              className: Curry._1(Css$Emotions.style, {
                    hd: Css$Emotions.background(Css$Emotions.hex("f5f5f5")),
                    tl: /* [] */0
                  })
            }, React.createElement(Section$Emotions.make, {
                  name: "angles",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.transform(Css$Emotions.rotate(Css$Emotions.deg(45))),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.transform(Css$Emotions.rotate(Css$Emotions.rad(3.1415))),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.transform(Css$Emotions.rotate(Css$Emotions.grad(50))),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.transform(Css$Emotions.rotate(Css$Emotions.turn(1 / 3))),
                                tl: /* [] */0
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "colors",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.red),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.rgb(255, 0, 0)),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.rgba(255, 0, 0, {
                                          NAME: "num",
                                          VAL: 0.5
                                        })),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.hsl(Css$Emotions.deg(255), Css$Emotions.pct(100), Css$Emotions.pct(50))),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.hsla(Css$Emotions.deg(255), Css$Emotions.pct(100), Css$Emotions.pct(50), {
                                          NAME: "num",
                                          VAL: 0.5
                                        })),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.hex("FF0000")),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.transparent),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.currentColor),
                                tl: {
                                  hd: Css$Emotions.color(Css$Emotions.blue),
                                  tl: /* [] */0
                                }
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "Named colors",
                  children: Belt_Array.map([
                        Css$Emotions.aliceblue,
                        Css$Emotions.antiquewhite,
                        Css$Emotions.aqua,
                        Css$Emotions.aquamarine,
                        Css$Emotions.azure,
                        Css$Emotions.beige,
                        Css$Emotions.bisque,
                        Css$Emotions.black,
                        Css$Emotions.blanchedalmond,
                        Css$Emotions.blue,
                        Css$Emotions.blueviolet,
                        Css$Emotions.brown,
                        Css$Emotions.burlywood,
                        Css$Emotions.cadetblue,
                        Css$Emotions.chartreuse,
                        Css$Emotions.chocolate,
                        Css$Emotions.coral,
                        Css$Emotions.cornflowerblue,
                        Css$Emotions.cornsilk,
                        Css$Emotions.crimson,
                        Css$Emotions.cyan,
                        Css$Emotions.darkblue,
                        Css$Emotions.darkcyan,
                        Css$Emotions.darkgoldenrod,
                        Css$Emotions.darkgray,
                        Css$Emotions.darkgreen,
                        Css$Emotions.darkgrey,
                        Css$Emotions.darkkhaki,
                        Css$Emotions.darkmagenta,
                        Css$Emotions.darkolivegreen,
                        Css$Emotions.darkorange,
                        Css$Emotions.darkorchid,
                        Css$Emotions.darkred,
                        Css$Emotions.darksalmon,
                        Css$Emotions.darkseagreen,
                        Css$Emotions.darkslateblue,
                        Css$Emotions.darkslategray,
                        Css$Emotions.darkslategrey,
                        Css$Emotions.darkturquoise,
                        Css$Emotions.darkviolet,
                        Css$Emotions.deeppink,
                        Css$Emotions.deepskyblue,
                        Css$Emotions.dimgray,
                        Css$Emotions.dimgrey,
                        Css$Emotions.dodgerblue,
                        Css$Emotions.firebrick,
                        Css$Emotions.floralwhite,
                        Css$Emotions.forestgreen,
                        Css$Emotions.fuchsia,
                        Css$Emotions.gainsboro,
                        Css$Emotions.ghostwhite,
                        Css$Emotions.gold,
                        Css$Emotions.goldenrod,
                        Css$Emotions.gray,
                        Css$Emotions.green,
                        Css$Emotions.greenyellow,
                        Css$Emotions.grey,
                        Css$Emotions.honeydew,
                        Css$Emotions.hotpink,
                        Css$Emotions.indianred,
                        Css$Emotions.indigo,
                        Css$Emotions.ivory,
                        Css$Emotions.khaki,
                        Css$Emotions.lavender,
                        Css$Emotions.lavenderblush,
                        Css$Emotions.lawngreen,
                        Css$Emotions.lemonchiffon,
                        Css$Emotions.lightblue,
                        Css$Emotions.lightcoral,
                        Css$Emotions.lightcyan,
                        Css$Emotions.lightgoldenrodyellow,
                        Css$Emotions.lightgray,
                        Css$Emotions.lightgreen,
                        Css$Emotions.lightgrey,
                        Css$Emotions.lightpink,
                        Css$Emotions.lightsalmon,
                        Css$Emotions.lightseagreen,
                        Css$Emotions.lightskyblue,
                        Css$Emotions.lightslategray,
                        Css$Emotions.lightslategrey,
                        Css$Emotions.lightsteelblue,
                        Css$Emotions.lightyellow,
                        Css$Emotions.lime,
                        Css$Emotions.limegreen,
                        Css$Emotions.linen,
                        Css$Emotions.magenta,
                        Css$Emotions.maroon,
                        Css$Emotions.mediumaquamarine,
                        Css$Emotions.mediumblue,
                        Css$Emotions.mediumorchid,
                        Css$Emotions.mediumpurple,
                        Css$Emotions.mediumseagreen,
                        Css$Emotions.mediumslateblue,
                        Css$Emotions.mediumspringgreen,
                        Css$Emotions.mediumturquoise,
                        Css$Emotions.mediumvioletred,
                        Css$Emotions.midnightblue,
                        Css$Emotions.mintcream,
                        Css$Emotions.mistyrose,
                        Css$Emotions.moccasin,
                        Css$Emotions.navajowhite,
                        Css$Emotions.navy,
                        Css$Emotions.oldlace,
                        Css$Emotions.olive,
                        Css$Emotions.olivedrab,
                        Css$Emotions.orange,
                        Css$Emotions.orangered,
                        Css$Emotions.orchid,
                        Css$Emotions.palegoldenrod,
                        Css$Emotions.palegreen,
                        Css$Emotions.paleturquoise,
                        Css$Emotions.palevioletred,
                        Css$Emotions.papayawhip,
                        Css$Emotions.peachpuff,
                        Css$Emotions.peru,
                        Css$Emotions.pink,
                        Css$Emotions.plum,
                        Css$Emotions.powderblue,
                        Css$Emotions.purple,
                        Css$Emotions.rebeccapurple,
                        Css$Emotions.red,
                        Css$Emotions.rosybrown,
                        Css$Emotions.royalblue,
                        Css$Emotions.saddlebrown,
                        Css$Emotions.salmon,
                        Css$Emotions.sandybrown,
                        Css$Emotions.seagreen,
                        Css$Emotions.seashell,
                        Css$Emotions.sienna,
                        Css$Emotions.silver,
                        Css$Emotions.skyblue,
                        Css$Emotions.slateblue,
                        Css$Emotions.slategray,
                        Css$Emotions.slategrey,
                        Css$Emotions.snow,
                        Css$Emotions.springgreen,
                        Css$Emotions.steelblue,
                        Css$Emotions.tan,
                        Css$Emotions.teal,
                        Css$Emotions.thistle,
                        Css$Emotions.tomato,
                        Css$Emotions.transparent,
                        Css$Emotions.turquoise,
                        Css$Emotions.violet,
                        Css$Emotions.wheat,
                        Css$Emotions.white,
                        Css$Emotions.whitesmoke,
                        Css$Emotions.yellow,
                        Css$Emotions.yellowgreen
                      ], (function (c) {
                          return React.createElement("div", {
                                      className: Curry._1(Css$Emotions.style, {
                                            hd: Css$Emotions.background(c),
                                            tl: miniBox
                                          })
                                    });
                        }))
                }), React.createElement(Section$Emotions.make, {
                  name: "gradients",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.linearGradient(Css$Emotions.deg(45), {
                                          hd: [
                                            Css$Emotions.zero,
                                            Css$Emotions.red
                                          ],
                                          tl: {
                                            hd: [
                                              Css$Emotions.pct(100),
                                              Css$Emotions.blue
                                            ],
                                            tl: /* [] */0
                                          }
                                        })),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.repeatingLinearGradient(Css$Emotions.deg(45), {
                                          hd: [
                                            Css$Emotions.zero,
                                            Css$Emotions.red
                                          ],
                                          tl: {
                                            hd: [
                                              Css$Emotions.pct(10),
                                              Css$Emotions.blue
                                            ],
                                            tl: /* [] */0
                                          }
                                        })),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.radialGradient({
                                          hd: [
                                            Css$Emotions.zero,
                                            Css$Emotions.red
                                          ],
                                          tl: {
                                            hd: [
                                              Css$Emotions.pct(100),
                                              Css$Emotions.blue
                                            ],
                                            tl: /* [] */0
                                          }
                                        })),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.repeatingRadialGradient({
                                          hd: [
                                            Css$Emotions.zero,
                                            Css$Emotions.red
                                          ],
                                          tl: {
                                            hd: [
                                              Css$Emotions.pct(10),
                                              Css$Emotions.blue
                                            ],
                                            tl: /* [] */0
                                          }
                                        })),
                                tl: /* [] */0
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "lengths",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.height(Css$Emotions.ch(1.2)),
                                tl: {
                                  hd: Css$Emotions.width(Css$Emotions.px(10)),
                                  tl: {
                                    hd: Css$Emotions.maxHeight(Css$Emotions.pct(50)),
                                    tl: {
                                      hd: Css$Emotions.maxWidth(Css$Emotions.pct(100)),
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }))
                    }), differentHeightLengths), React.createElement(Section$Emotions.make, {
                  name: "calc",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.height(Css_Legacy_Core.Calc.$neg(Css$Emotions.pt(14), Css$Emotions.px(10))),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.height(Css_Legacy_Core.Calc.$plus(Css$Emotions.cm(0.2), Css$Emotions.mm(10))),
                                tl: /* [] */0
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "display",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.display(Css$Emotions.block),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.display(Css$Emotions.inline),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.display(Css$Emotions.inlineBlock),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.display(Css$Emotions.none),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.display(Css$Emotions.flexBox),
                                tl: /* [] */0
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "position",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.position(Css$Emotions.absolute),
                                tl: {
                                  hd: Css$Emotions.top(Css$Emotions.zero),
                                  tl: {
                                    hd: Css$Emotions.left(Css$Emotions.zero),
                                    tl: {
                                      hd: Css$Emotions.right(Css$Emotions.zero),
                                      tl: {
                                        hd: Css$Emotions.bottom(Css$Emotions.zero),
                                        tl: /* [] */0
                                      }
                                    }
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.position(Css$Emotions.relative),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.position(Css$Emotions.fixed),
                                tl: {
                                  hd: Css$Emotions.bottom(Css$Emotions.px(10)),
                                  tl: {
                                    hd: Css$Emotions.right(Css$Emotions.px(10)),
                                    tl: /* [] */0
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.position(Css$Emotions.$$static),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.position(Css$Emotions.sticky),
                                tl: /* [] */0
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "Padding & Margin",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.padding(Css$Emotions.px(10)),
                                tl: {
                                  hd: Css$Emotions.margin(Css$Emotions.px(10)),
                                  tl: /* [] */0
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.paddingLeft(Css$Emotions.px(10)),
                                tl: {
                                  hd: Css$Emotions.paddingRight(Css$Emotions.px(10)),
                                  tl: {
                                    hd: Css$Emotions.paddingTop(Css$Emotions.px(10)),
                                    tl: {
                                      hd: Css$Emotions.paddingBottom(Css$Emotions.px(10)),
                                      tl: {
                                        hd: Css$Emotions.marginLeft(Css$Emotions.px(10)),
                                        tl: {
                                          hd: Css$Emotions.marginRight(Css$Emotions.px(10)),
                                          tl: {
                                            hd: Css$Emotions.marginTop(Css$Emotions.px(10)),
                                            tl: {
                                              hd: Css$Emotions.marginBottom(Css$Emotions.px(10)),
                                              tl: /* [] */0
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.padding2(Css$Emotions.px(10), Css$Emotions.px(20)),
                                tl: {
                                  hd: Css$Emotions.margin2(Css$Emotions.px(10), Css$Emotions.px(20)),
                                  tl: /* [] */0
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.padding3(Css$Emotions.px(10), Css$Emotions.px(20), Css$Emotions.px(1)),
                                tl: {
                                  hd: Css$Emotions.margin3(Css$Emotions.px(10), Css$Emotions.px(20), Css$Emotions.px(2)),
                                  tl: /* [] */0
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.padding4(Css$Emotions.px(10), Css$Emotions.px(15), Css$Emotions.px(1), Css$Emotions.px(5)),
                                tl: {
                                  hd: Css$Emotions.margin4(Css$Emotions.px(10), Css$Emotions.px(15), Css$Emotions.px(1), Css$Emotions.px(5)),
                                  tl: /* [] */0
                                }
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "grid",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.width(Css$Emotions.pct(100)),
                            tl: {
                              hd: Css$Emotions.height(Css$Emotions.px(500)),
                              tl: {
                                hd: Css$Emotions.display(Css$Emotions.grid),
                                tl: {
                                  hd: Css$Emotions.gridTemplateColumns({
                                        hd: Css$Emotions.px(150),
                                        tl: {
                                          hd: Css$Emotions.auto,
                                          tl: {
                                            hd: Css$Emotions.px(150),
                                            tl: /* [] */0
                                          }
                                        }
                                      }),
                                  tl: {
                                    hd: Css$Emotions.gridTemplateRows({
                                          hd: Css$Emotions.px(60),
                                          tl: {
                                            hd: Css$Emotions.auto,
                                            tl: /* [] */0
                                          }
                                        }),
                                    tl: /* [] */0
                                  }
                                }
                              }
                            }
                          })
                    }, React.createElement("div", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.gridColumnStart(1),
                                tl: {
                                  hd: Css$Emotions.gridColumnEnd(4),
                                  tl: {
                                    hd: Css$Emotions.background(Css$Emotions.red),
                                    tl: {
                                      hd: Css$Emotions.gridRowStart(1),
                                      tl: {
                                        hd: Css$Emotions.gridRowEnd(1),
                                        tl: /* [] */0
                                      }
                                    }
                                  }
                                }
                              })
                        }), React.createElement("div", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.background(Css$Emotions.blue),
                                tl: {
                                  hd: Css$Emotions.gridColumn(1, 1),
                                  tl: {
                                    hd: Css$Emotions.gridRow(2, 2),
                                    tl: /* [] */0
                                  }
                                }
                              })
                        }), React.createElement("div", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.background(Css$Emotions.green),
                                tl: {
                                  hd: Css$Emotions.gridColumn(2, 2),
                                  tl: {
                                    hd: Css$Emotions.gridRow(2, 2),
                                    tl: {
                                      hd: Css$Emotions.display(Css$Emotions.inlineGrid),
                                      tl: {
                                        hd: Css$Emotions.gridTemplateColumns({
                                              hd: Css$Emotions.px(50),
                                              tl: {
                                                hd: Css$Emotions.auto,
                                                tl: /* [] */0
                                              }
                                            }),
                                        tl: {
                                          hd: Css$Emotions.gridTemplateRows({
                                                hd: Css$Emotions.px(40),
                                                tl: {
                                                  hd: Css$Emotions.auto,
                                                  tl: /* [] */0
                                                }
                                              }),
                                          tl: /* [] */0
                                        }
                                      }
                                    }
                                  }
                                }
                              })
                        }, React.createElement("div", {
                              className: Curry._1(Css$Emotions.style, {
                                    hd: Css$Emotions.background(Css$Emotions.yellow),
                                    tl: {
                                      hd: Css$Emotions.gridRow(1, 1),
                                      tl: {
                                        hd: Css$Emotions.gridColumn(2, 2),
                                        tl: /* [] */0
                                      }
                                    }
                                  })
                            }), React.createElement("div", {
                              className: Curry._1(Css$Emotions.style, {
                                    hd: Css$Emotions.background(Css$Emotions.green),
                                    tl: {
                                      hd: Css$Emotions.gridRow(1, 2),
                                      tl: {
                                        hd: Css$Emotions.gridColumn(1, 1),
                                        tl: /* [] */0
                                      }
                                    }
                                  })
                            }), React.createElement("div", {
                              className: Curry._1(Css$Emotions.style, {
                                    hd: Css$Emotions.background(Css$Emotions.purple),
                                    tl: {
                                      hd: Css$Emotions.gridRow(2, 2),
                                      tl: {
                                        hd: Css$Emotions.gridColumn(2, 2),
                                        tl: /* [] */0
                                      }
                                    }
                                  })
                            })), React.createElement("div", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.gridColumnStart(3),
                                tl: {
                                  hd: Css$Emotions.gridColumnEnd(3),
                                  tl: {
                                    hd: Css$Emotions.background(Css$Emotions.blue),
                                    tl: {
                                      hd: Css$Emotions.gridRowStart(2),
                                      tl: {
                                        hd: Css$Emotions.gridRowEnd(2),
                                        tl: /* [] */0
                                      }
                                    }
                                  }
                                }
                              })
                        })), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.display("grid"),
                            tl: {
                              hd: Css$Emotions.gridAutoFlow("row"),
                              tl: /* [] */0
                            }
                          })
                    }, React.createElement("div", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.background(Css$Emotions.purple),
                                tl: /* [] */0
                              })
                        }, "grid auto direction row 1"), React.createElement("div", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.background(Css$Emotions.green),
                                tl: /* [] */0
                              })
                        }, "grid auto direction row 2")), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.display("grid"),
                            tl: {
                              hd: Css$Emotions.gridTemplateColumns({
                                    hd: Css$Emotions.px(100),
                                    tl: {
                                      hd: {
                                        NAME: "repeat",
                                        VAL: [
                                          {
                                            NAME: "num",
                                            VAL: 2
                                          },
                                          Css$Emotions.px(60)
                                        ]
                                      },
                                      tl: /* [] */0
                                    }
                                  }),
                              tl: /* [] */0
                            }
                          })
                    }, React.createElement("div", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.background(Css$Emotions.purple),
                                tl: /* [] */0
                              })
                        }, "Grid track repeat"), React.createElement("div", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.background(Css$Emotions.green),
                                tl: /* [] */0
                              })
                        }, "two times"), React.createElement("div", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.background(Css$Emotions.red),
                                tl: /* [] */0
                              })
                        }, "three times")), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.display("grid"),
                            tl: {
                              hd: Css$Emotions.gridAutoColumns(Css$Emotions.px(100)),
                              tl: /* [] */0
                            }
                          })
                    }, React.createElement("div", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.background(Css$Emotions.purple),
                                tl: /* [] */0
                              })
                        }, "Grid auto columns (100px)"), React.createElement("div", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.background(Css$Emotions.green),
                                tl: /* [] */0
                              })
                        }, "100px"), React.createElement("div", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.background(Css$Emotions.blue),
                                tl: /* [] */0
                              })
                        }, "100px"))), React.createElement(Section$Emotions.make, {
                  name: "flexbox",
                  children: React.createElement("div", {
                        className: Curry._1(Css$Emotions.style, {
                              hd: Css$Emotions.flexDirection(Css$Emotions.column),
                              tl: {
                                hd: Css$Emotions.flexGrow(1),
                                tl: {
                                  hd: Css$Emotions.alignItems(Css$Emotions.stretch),
                                  tl: {
                                    hd: Css$Emotions.selector("& > *", {
                                          hd: Css$Emotions.marginBottom(Css$Emotions.px(10)),
                                          tl: {
                                            hd: Css$Emotions.width(Css$Emotions.pct(100)),
                                            tl: /* [] */0
                                          }
                                        }),
                                    tl: /* [] */0
                                  }
                                }
                              }
                            })
                      }, React.createElement("div", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.display(Css$Emotions.flexBox),
                                  tl: {
                                    hd: Css$Emotions.flexDirection(Css$Emotions.row),
                                    tl: {
                                      hd: Css$Emotions.background(Css$Emotions.gray),
                                      tl: {
                                        hd: Css$Emotions.alignItems(Css$Emotions.flexStart),
                                        tl: {
                                          hd: Css$Emotions.justifyContent(Css$Emotions.flexEnd),
                                          tl: /* [] */0
                                        }
                                      }
                                    }
                                  }
                                })
                          }, React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                          hd: Css$Emotions.order(1),
                                          tl: {
                                            hd: Css$Emotions.flexGrow(1),
                                            tl: {
                                              hd: Css$Emotions.flexShrink(1),
                                              tl: {
                                                hd: Css$Emotions.flexBasis(Css$Emotions.auto),
                                                tl: /* [] */0
                                              }
                                            }
                                          }
                                        }))
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                          hd: Css$Emotions.flex(Css$Emotions.none),
                                          tl: /* [] */0
                                        }))
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                          hd: Css$Emotions.order(1),
                                          tl: {
                                            hd: Css$Emotions.flex3(1.5, 0.8, Css$Emotions.px(100)),
                                            tl: /* [] */0
                                          }
                                        }))
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                          hd: Css$Emotions.alignSelf(Css$Emotions.flexEnd),
                                          tl: /* [] */0
                                        }))
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              })), React.createElement("div", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.display(Css$Emotions.flexBox),
                                  tl: {
                                    hd: Css$Emotions.flexDirection(Css$Emotions.column),
                                    tl: {
                                      hd: Css$Emotions.background(Css$Emotions.gray),
                                      tl: {
                                        hd: Css$Emotions.alignItems(Css$Emotions.baseline),
                                        tl: {
                                          hd: Css$Emotions.justifyContent(Css$Emotions.flexStart),
                                          tl: /* [] */0
                                        }
                                      }
                                    }
                                  }
                                })
                          }, React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              })), React.createElement("div", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.display(Css$Emotions.flexBox),
                                  tl: {
                                    hd: Css$Emotions.flexDirection(Css$Emotions.rowReverse),
                                    tl: {
                                      hd: Css$Emotions.background(Css$Emotions.gray),
                                      tl: {
                                        hd: Css$Emotions.alignItems(Css$Emotions.center),
                                        tl: {
                                          hd: Css$Emotions.justifyContent(Css$Emotions.spaceBetween),
                                          tl: /* [] */0
                                        }
                                      }
                                    }
                                  }
                                })
                          }, React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                          hd: Css$Emotions.height(Css$Emotions.px(50)),
                                          tl: {
                                            hd: Css$Emotions.width(Css$Emotions.px(50)),
                                            tl: /* [] */0
                                          }
                                        }))
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              })), React.createElement("div", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.display(Css$Emotions.flexBox),
                                  tl: {
                                    hd: Css$Emotions.flexDirection(Css$Emotions.columnReverse),
                                    tl: {
                                      hd: Css$Emotions.background(Css$Emotions.gray),
                                      tl: {
                                        hd: Css$Emotions.alignItems(Css$Emotions.flexEnd),
                                        tl: {
                                          hd: Css$Emotions.justifyContent(Css$Emotions.flexEnd),
                                          tl: /* [] */0
                                        }
                                      }
                                    }
                                  }
                                })
                          }, React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                          hd: Css$Emotions.height(Css$Emotions.px(50)),
                                          tl: {
                                            hd: Css$Emotions.width(Css$Emotions.px(50)),
                                            tl: /* [] */0
                                          }
                                        }))
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              })), React.createElement("div", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.display(Css$Emotions.flexBox),
                                  tl: {
                                    hd: Css$Emotions.flexDirection(Css$Emotions.row),
                                    tl: {
                                      hd: Css$Emotions.background(Css$Emotions.gray),
                                      tl: {
                                        hd: Css$Emotions.alignItems(Css$Emotions.stretch),
                                        tl: {
                                          hd: Css$Emotions.justifyContent(Css$Emotions.spaceAround),
                                          tl: /* [] */0
                                        }
                                      }
                                    }
                                  }
                                })
                          }, React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                          hd: Css$Emotions.height(Css$Emotions.px(50)),
                                          tl: {
                                            hd: Css$Emotions.width(Css$Emotions.px(50)),
                                            tl: /* [] */0
                                          }
                                        }))
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              })), React.createElement("div", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.display(Css$Emotions.flexBox),
                                  tl: {
                                    hd: Css$Emotions.flexDirection(Css$Emotions.row),
                                    tl: {
                                      hd: Css$Emotions.background(Css$Emotions.gray),
                                      tl: {
                                        hd: Css$Emotions.alignItems(Css$Emotions.stretch),
                                        tl: {
                                          hd: Css$Emotions.justifyContent(Css$Emotions.spaceEvenly),
                                          tl: /* [] */0
                                        }
                                      }
                                    }
                                  }
                                })
                          }, React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                          hd: Css$Emotions.height(Css$Emotions.px(50)),
                                          tl: {
                                            hd: Css$Emotions.width(Css$Emotions.px(50)),
                                            tl: /* [] */0
                                          }
                                        }))
                              }), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              })))
                }), React.createElement(Section$Emotions.make, {
                  name: "float",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.$$float("left"),
                                tl: {
                                  hd: Css$Emotions.clear("right"),
                                  tl: /* [] */0
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.$$float("right"),
                                tl: {
                                  hd: Css$Emotions.clear("left"),
                                  tl: /* [] */0
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.$$float(Css$Emotions.none),
                                tl: {
                                  hd: Css$Emotions.clear(Css$Emotions.both),
                                  tl: /* [] */0
                                }
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "overflow",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.overflow(Css$Emotions.hidden),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.overflow(Css$Emotions.visible),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.overflow(Css$Emotions.auto),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.overflow(Css$Emotions.scroll),
                                tl: /* [] */0
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "border",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.border(Css$Emotions.px(5), Css$Emotions.solid, Css$Emotions.blue),
                                tl: {
                                  hd: Css$Emotions.borderRadius(Css$Emotions.px(1000)),
                                  tl: /* [] */0
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.border(Css$Emotions.px(5), Css$Emotions.solid, Css$Emotions.green),
                                tl: {
                                  hd: Css$Emotions.borderTopRightRadius(Css$Emotions.px(1000)),
                                  tl: {
                                    hd: Css$Emotions.borderTopLeftRadius(Css$Emotions.px(1000)),
                                    tl: {
                                      hd: Css$Emotions.borderBottomRightRadius(Css$Emotions.px(1000)),
                                      tl: {
                                        hd: Css$Emotions.borderBottomLeftRadius(Css$Emotions.px(1000)),
                                        tl: /* [] */0
                                      }
                                    }
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.borderTop(Css$Emotions.px(5), Css$Emotions.dashed, Css$Emotions.hex("FFF")),
                                tl: {
                                  hd: Css$Emotions.borderRight(Css$Emotions.px(5), Css$Emotions.dotted, Css$Emotions.rgb(0, 0, 0)),
                                  tl: {
                                    hd: Css$Emotions.borderBottom(Css$Emotions.px(5), Css$Emotions.none, Css$Emotions.green),
                                    tl: {
                                      hd: Css$Emotions.borderLeft(Css$Emotions.px(5), Css$Emotions.solid, Css$Emotions.blue),
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.borderWidth(Css$Emotions.px(5)),
                                tl: {
                                  hd: Css$Emotions.borderStyle(Css$Emotions.solid),
                                  tl: {
                                    hd: Css$Emotions.borderColor(Css$Emotions.blue),
                                    tl: /* [] */0
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.borderTopWidth(Css$Emotions.px(5)),
                                tl: {
                                  hd: Css$Emotions.borderTopStyle(Css$Emotions.solid),
                                  tl: {
                                    hd: Css$Emotions.borderTopColor(Css$Emotions.blue),
                                    tl: /* [] */0
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.borderBottomWidth(Css$Emotions.px(5)),
                                tl: {
                                  hd: Css$Emotions.borderBottomStyle(Css$Emotions.solid),
                                  tl: {
                                    hd: Css$Emotions.borderBottomColor(Css$Emotions.blue),
                                    tl: /* [] */0
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.borderLeftWidth(Css$Emotions.px(5)),
                                tl: {
                                  hd: Css$Emotions.borderLeftStyle(Css$Emotions.solid),
                                  tl: {
                                    hd: Css$Emotions.borderLeftColor(Css$Emotions.blue),
                                    tl: /* [] */0
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.borderRightWidth(Css$Emotions.px(5)),
                                tl: {
                                  hd: Css$Emotions.borderRightStyle(Css$Emotions.solid),
                                  tl: {
                                    hd: Css$Emotions.borderRightColor(Css$Emotions.blue),
                                    tl: /* [] */0
                                  }
                                }
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "background",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.red),
                                tl: {
                                  hd: Css$Emotions.backgroundAttachment(Css$Emotions.scroll),
                                  tl: {
                                    hd: Css$Emotions.backgroundClip(Css$Emotions.borderBox),
                                    tl: {
                                      hd: Css$Emotions.backgroundOrigin(Css$Emotions.borderBox),
                                      tl: {
                                        hd: Css$Emotions.backgroundPosition({
                                              NAME: "hv",
                                              VAL: [
                                                Css$Emotions.pct(50),
                                                Css$Emotions.pct(50)
                                              ]
                                            }),
                                        tl: {
                                          hd: Css$Emotions.backgroundRepeat(Css$Emotions.noRepeat),
                                          tl: {
                                            hd: Css$Emotions.backgroundSize(Css$Emotions.size(Css$Emotions.px(100), Css$Emotions.px(100))),
                                            tl: /* [] */0
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.radialGradient({
                                          hd: [
                                            Css$Emotions.zero,
                                            Css$Emotions.red
                                          ],
                                          tl: {
                                            hd: [
                                              Css$Emotions.pct(10),
                                              Css$Emotions.blue
                                            ],
                                            tl: /* [] */0
                                          }
                                        })),
                                tl: {
                                  hd: Css$Emotions.backgroundAttachment(Css$Emotions.fixed),
                                  tl: {
                                    hd: Css$Emotions.backgroundClip(Css$Emotions.contentBox),
                                    tl: {
                                      hd: Css$Emotions.backgroundOrigin(Css$Emotions.contentBox),
                                      tl: {
                                        hd: Css$Emotions.backgroundRepeat(Css$Emotions.repeat),
                                        tl: {
                                          hd: Css$Emotions.backgroundSize(Css$Emotions.auto),
                                          tl: /* [] */0
                                        }
                                      }
                                    }
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.background(Css$Emotions.url("./img-29.jpg")),
                                tl: {
                                  hd: Css$Emotions.backgroundAttachment(Css$Emotions.local),
                                  tl: {
                                    hd: Css$Emotions.backgroundClip(Css$Emotions.paddingBox),
                                    tl: {
                                      hd: Css$Emotions.backgroundOrigin(Css$Emotions.paddingBox),
                                      tl: {
                                        hd: Css$Emotions.backgroundRepeat(Css$Emotions.repeatX),
                                        tl: {
                                          hd: Css$Emotions.backgroundSize(Css$Emotions.cover),
                                          tl: /* [] */0
                                        }
                                      }
                                    }
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.backgroundColor(Css$Emotions.rgb(0, 0, 255)),
                                tl: {
                                  hd: Css$Emotions.backgroundImage(Css$Emotions.linearGradient(Css$Emotions.deg(45), {
                                            hd: [
                                              Css$Emotions.zero,
                                              Css$Emotions.green
                                            ],
                                            tl: {
                                              hd: [
                                                Css$Emotions.pct(50),
                                                Css$Emotions.red
                                              ],
                                              tl: {
                                                hd: [
                                                  Css$Emotions.pct(100),
                                                  Css$Emotions.yellow
                                                ],
                                                tl: /* [] */0
                                              }
                                            }
                                          })),
                                  tl: {
                                    hd: Css$Emotions.backgroundRepeat(Css$Emotions.repeatY),
                                    tl: {
                                      hd: Css$Emotions.backgroundSize(Css$Emotions.contain),
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "cursor",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("auto"),
                                tl: /* [] */0
                              }))
                    }, "auto"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("default"),
                                tl: /* [] */0
                              }))
                    }, "default"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("none"),
                                tl: /* [] */0
                              }))
                    }, "none"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("contextMenu"),
                                tl: /* [] */0
                              }))
                    }, "context menu"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("help"),
                                tl: /* [] */0
                              }))
                    }, "help"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("pointer"),
                                tl: /* [] */0
                              }))
                    }, "pointer"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("progress"),
                                tl: /* [] */0
                              }))
                    }, "progress"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("wait"),
                                tl: /* [] */0
                              }))
                    }, "wait"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("cell"),
                                tl: /* [] */0
                              }))
                    }, "cell"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("crosshair"),
                                tl: /* [] */0
                              }))
                    }, "crosshair"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("text"),
                                tl: /* [] */0
                              }))
                    }, "text"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("verticalText"),
                                tl: /* [] */0
                              }))
                    }, "vert text"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("alias"),
                                tl: /* [] */0
                              }))
                    }, "alias"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("copy"),
                                tl: /* [] */0
                              }))
                    }, "copy"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("move"),
                                tl: /* [] */0
                              }))
                    }, "move"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("noDrop"),
                                tl: /* [] */0
                              }))
                    }, "no drop"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("notAllowed"),
                                tl: /* [] */0
                              }))
                    }, "not allowed"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("grab"),
                                tl: /* [] */0
                              }))
                    }, "grab"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("grabbing"),
                                tl: /* [] */0
                              }))
                    }, "grabbing"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("allScroll"),
                                tl: /* [] */0
                              }))
                    }, "all scroll"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("colResize"),
                                tl: /* [] */0
                              }))
                    }, "col resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("rowResize"),
                                tl: /* [] */0
                              }))
                    }, "row resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("nResize"),
                                tl: /* [] */0
                              }))
                    }, "n resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("eResize"),
                                tl: /* [] */0
                              }))
                    }, "e resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("sResize"),
                                tl: /* [] */0
                              }))
                    }, "s resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("wResize"),
                                tl: /* [] */0
                              }))
                    }, "w resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("neResize"),
                                tl: /* [] */0
                              }))
                    }, "ne resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("nwResize"),
                                tl: /* [] */0
                              }))
                    }, "nw resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("seResize"),
                                tl: /* [] */0
                              }))
                    }, "se resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("swResize"),
                                tl: /* [] */0
                              }))
                    }, "sw resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("ewResize"),
                                tl: /* [] */0
                              }))
                    }, "ew resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("nsResize"),
                                tl: /* [] */0
                              }))
                    }, "ns resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("neswResize"),
                                tl: /* [] */0
                              }))
                    }, "nesw resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("nwseResize"),
                                tl: /* [] */0
                              }))
                    }, "nwse resize"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("zoomIn"),
                                tl: /* [] */0
                              }))
                    }, "zoom in"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.cursor("zoomOut"),
                                tl: /* [] */0
                              }))
                    }, "zoom out")), React.createElement(Section$Emotions.make, {
                  name: "list",
                  children: React.createElement("ul", undefined, React.createElement("li", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.listStyle("disc", Css$Emotions.inside, Css$Emotions.none),
                                  tl: /* [] */0
                                })
                          }), React.createElement("li", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.listStyleType("circle"),
                                  tl: /* [] */0
                                })
                          }), React.createElement("li", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.listStyleType("square"),
                                  tl: /* [] */0
                                })
                          }), React.createElement("li", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.listStyleType("decimal"),
                                  tl: /* [] */0
                                })
                          }), React.createElement("li", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.listStyleType("lowerAlpha"),
                                  tl: /* [] */0
                                })
                          }), React.createElement("li", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.listStyleType("upperAlpha"),
                                  tl: /* [] */0
                                })
                          }), React.createElement("li", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.listStyleType("lowerGreek"),
                                  tl: /* [] */0
                                })
                          }), React.createElement("li", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.listStyleType("lowerLatin"),
                                  tl: /* [] */0
                                })
                          }), React.createElement("li", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.listStyleType("upperLatin"),
                                  tl: /* [] */0
                                })
                          }), React.createElement("li", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.listStyleType("lowerRoman"),
                                  tl: /* [] */0
                                })
                          }), React.createElement("li", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.listStyleType("upperRoman"),
                                  tl: /* [] */0
                                })
                          }), React.createElement("li", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.listStyleType("disc"),
                                  tl: {
                                    hd: Css$Emotions.listStylePosition(Css$Emotions.inside),
                                    tl: {
                                      hd: Css$Emotions.listStyleImage(Css$Emotions.url("./facebook.png")),
                                      tl: /* [] */0
                                    }
                                  }
                                })
                          }))
                }), React.createElement(Section$Emotions.make, {
                  name: "outline",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.outline(Css$Emotions.px(5), "double", Css$Emotions.green),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.outlineStyle(Css$Emotions.solid),
                                tl: {
                                  hd: Css$Emotions.outlineWidth(Css$Emotions.px(5)),
                                  tl: {
                                    hd: Css$Emotions.outlineColor(Css$Emotions.green),
                                    tl: {
                                      hd: Css$Emotions.outlineOffset(Css$Emotions.px(5)),
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.outline(Css$Emotions.px(5), "double", Css$Emotions.red),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.outline(Css$Emotions.px(5), "ridge", Css$Emotions.red),
                                tl: /* [] */0
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "transform",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.opacity(0.5),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.perspective(Css$Emotions.px(500)),
                                tl: {
                                  hd: Css$Emotions.transform(Css$Emotions.rotate(Css$Emotions.deg(10))),
                                  tl: /* [] */0
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.transforms({
                                      hd: Css$Emotions.translate(Css$Emotions.px(10), Css$Emotions.pct(10)),
                                      tl: {
                                        hd: Css$Emotions.skew(Css$Emotions.deg(10), Css$Emotions.deg(10)),
                                        tl: /* [] */0
                                      }
                                    }),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.transform(Css$Emotions.rotate(Css$Emotions.deg(19))),
                                tl: {
                                  hd: Css$Emotions.transformOrigin(Css$Emotions.pct(50), Css$Emotions.pct(50)),
                                  tl: {
                                    hd: Css$Emotions.transformStyle("preserve3d"),
                                    tl: {
                                      hd: Css$Emotions.perspective(Css$Emotions.px(900)),
                                      tl: {
                                        hd: Css$Emotions.perspectiveOrigin(Css$Emotions.pct(10), Css$Emotions.pct(10)),
                                        tl: /* [] */0
                                      }
                                    }
                                  }
                                }
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.transform(Css$Emotions.translate(Css$Emotions.px(10), Css$Emotions.pct(10))),
                                tl: {
                                  hd: Css$Emotions.transformOrigin3d(Css$Emotions.px(10), Css$Emotions.px(10), Css$Emotions.px(10)),
                                  tl: /* [] */0
                                }
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "transition",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.transition(300, 300, Css$Emotions.easeInOut, "transform"),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.transitionProperty("height"),
                                tl: {
                                  hd: Css$Emotions.transitionDelay(300),
                                  tl: {
                                    hd: Css$Emotions.transitionDuration(300),
                                    tl: {
                                      hd: Css$Emotions.transitionTimingFunction(Css$Emotions.linear),
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "text",
                  children: null
                }, React.createElement("p", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.color(Css$Emotions.black),
                            tl: {
                              hd: Css$Emotions.fontFamilies({
                                    hd: {
                                      NAME: "custom",
                                      VAL: "Helvetica"
                                    },
                                    tl: {
                                      hd: "sansSerif",
                                      tl: /* [] */0
                                    }
                                  }),
                              tl: {
                                hd: Css$Emotions.fontSize(Css$Emotions.pt(18)),
                                tl: {
                                  hd: Css$Emotions.fontVariant("smallCaps"),
                                  tl: {
                                    hd: Css$Emotions.fontStyle(Css$Emotions.italic),
                                    tl: {
                                      hd: Css$Emotions.fontWeight({
                                            NAME: "num",
                                            VAL: 300
                                          }),
                                      tl: {
                                        hd: Css$Emotions.letterSpacing(Css$Emotions.px(3)),
                                        tl: {
                                          hd: Css$Emotions.lineHeight({
                                                NAME: "abs",
                                                VAL: 2
                                              }),
                                          tl: {
                                            hd: Css$Emotions.textAlign("left"),
                                            tl: {
                                              hd: Css$Emotions.textDecoration(Css$Emotions.underline),
                                              tl: {
                                                hd: Css$Emotions.textDecorationColor(Css$Emotions.pink),
                                                tl: {
                                                  hd: Css$Emotions.textDecorationStyle(Css$Emotions.wavy),
                                                  tl: {
                                                    hd: Css$Emotions.textIndent(Css$Emotions.px(10)),
                                                    tl: {
                                                      hd: Css$Emotions.textOverflow(Css$Emotions.clip),
                                                      tl: {
                                                        hd: Css$Emotions.textShadow(Css_Legacy_Core.Shadow.text(undefined, Css$Emotions.px(3), Css$Emotions.px(2), Css$Emotions.black)),
                                                        tl: {
                                                          hd: Css$Emotions.textTransform(Css$Emotions.capitalize),
                                                          tl: {
                                                            hd: Css$Emotions.verticalAlign(Css$Emotions.sub),
                                                            tl: {
                                                              hd: Css$Emotions.whiteSpace(Css$Emotions.normal),
                                                              tl: {
                                                                hd: Css$Emotions.wordBreak(Css$Emotions.breakAll),
                                                                tl: {
                                                                  hd: Css$Emotions.wordSpacing(Css$Emotions.px(20)),
                                                                  tl: {
                                                                    hd: Css$Emotions.wordWrap(Css$Emotions.breakWord),
                                                                    tl: /* [] */0
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          })
                    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), React.createElement("h2", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.width(Css$Emotions.pct(100)),
                            tl: /* [] */0
                          })
                    }, "Named Font weights"), React.createElement("span", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.fontWeight(Css$Emotions.thin),
                            tl: {
                              hd: Css$Emotions.paddingRight(Css$Emotions.px(10)),
                              tl: {
                                hd: Css$Emotions.borderRight(Css$Emotions.px(1), Css$Emotions.solid, Css$Emotions.black),
                                tl: /* [] */0
                              }
                            }
                          })
                    }, "thin"), React.createElement("span", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.fontWeight(Css$Emotions.extraLight),
                            tl: fontItem
                          })
                    }, "extra light"), React.createElement("span", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.fontWeight(Css$Emotions.light),
                            tl: fontItem
                          })
                    }, "light"), React.createElement("span", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.fontWeight(Css$Emotions.normal),
                            tl: fontItem
                          })
                    }, "normal"), React.createElement("span", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.fontWeight(Css$Emotions.medium),
                            tl: fontItem
                          })
                    }, "medium"), React.createElement("span", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.fontWeight(Css$Emotions.semiBold),
                            tl: fontItem
                          })
                    }, "semiBold"), React.createElement("span", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.fontWeight(Css$Emotions.bold),
                            tl: fontItem
                          })
                    }, "bold"), React.createElement("span", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.fontWeight(Css$Emotions.extraBold),
                            tl: fontItem
                          })
                    }, "extra bold"), React.createElement("span", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.fontWeight("black"),
                            tl: fontItem
                          })
                    }, "black"), React.createElement("span", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.fontWeight(Css$Emotions.lighter),
                            tl: fontItem
                          })
                    }, "lighter"), React.createElement("span", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.fontWeight(Css$Emotions.bolder),
                            tl: fontItem
                          })
                    }, "bolder")), React.createElement(Section$Emotions.make, {
                  name: "animation",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.animation(300, 300, Css$Emotions.reverse, Css$Emotions.linear, Css$Emotions.forwards, Css$Emotions.running, Css$Emotions.infinite, spin),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.animations({
                                      hd: Css_Legacy_Core.Animation.shorthand(300, undefined, undefined, undefined, undefined, undefined, Css$Emotions.infinite, spin),
                                      tl: {
                                        hd: Css_Legacy_Core.Animation.shorthand(300, undefined, undefined, undefined, undefined, undefined, Css$Emotions.infinite, scaleAnimation),
                                        tl: /* [] */0
                                      }
                                    }),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.animationName(spin),
                                tl: {
                                  hd: Css$Emotions.animationTimingFunction(Css$Emotions.easeIn),
                                  tl: {
                                    hd: Css$Emotions.animationDuration(300),
                                    tl: {
                                      hd: Css$Emotions.animationDelay(300),
                                      tl: {
                                        hd: Css$Emotions.animationDirection(Css$Emotions.normal),
                                        tl: {
                                          hd: Css$Emotions.animationFillMode(Css$Emotions.backwards),
                                          tl: {
                                            hd: Css$Emotions.animationPlayState(Css$Emotions.paused),
                                            tl: {
                                              hd: Css$Emotions.animationIterationCount(Css$Emotions.count(5)),
                                              tl: /* [] */0
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "cascading",
                  children: null
                }, "inherit", React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.display(Css$Emotions.inherit_),
                            tl: {
                              hd: Css$Emotions.position(Css$Emotions.inherit_),
                              tl: {
                                hd: Css$Emotions.fontSize(Css$Emotions.inherit_),
                                tl: {
                                  hd: Css$Emotions.fontStyle(Css$Emotions.inherit_),
                                  tl: {
                                    hd: Css$Emotions.lineHeight(Css$Emotions.inherit_),
                                    tl: /* [] */0
                                  }
                                }
                              }
                            }
                          })
                    }), "unset", React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.display(Css$Emotions.unset),
                            tl: {
                              hd: Css$Emotions.position(Css$Emotions.unset),
                              tl: {
                                hd: Css$Emotions.fontSize(Css$Emotions.unset),
                                tl: {
                                  hd: Css$Emotions.fontStyle(Css$Emotions.unset),
                                  tl: {
                                    hd: Css$Emotions.lineHeight(Css$Emotions.unset),
                                    tl: /* [] */0
                                  }
                                }
                              }
                            }
                          })
                    })), React.createElement(Section$Emotions.make, {
                  name: "columns",
                  children: React.createElement("p", {
                        className: Curry._1(Css$Emotions.style, {
                              hd: Css$Emotions.columnCount(Css$Emotions.count(10)),
                              tl: /* [] */0
                            })
                      }, "This is a bunch of text split into columns\n             using the CSS `column-count` property. The text\n             is equally distributed over the columns.")
                }), React.createElement(Section$Emotions.make, {
                  name: "resize",
                  children: null
                }, React.createElement("textarea", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.resize(Css$Emotions.none),
                            tl: /* [] */0
                          })
                    }, "Can't resize textarea"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.marginLeft(Css$Emotions.px(20)),
                            tl: {
                              hd: Css$Emotions.overflow(Css$Emotions.scroll),
                              tl: {
                                hd: Css$Emotions.resize(Css$Emotions.horizontal),
                                tl: /* [] */0
                              }
                            }
                          })
                    }, "Resizable div (horizontal)"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.marginLeft(Css$Emotions.px(20)),
                            tl: {
                              hd: Css$Emotions.overflow(Css$Emotions.scroll),
                              tl: {
                                hd: Css$Emotions.resize(Css$Emotions.vertical),
                                tl: /* [] */0
                              }
                            }
                          })
                    }, "Resizable div (vertical)")), React.createElement(Section$Emotions.make, {
                  name: "content",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.position(Css$Emotions.relative),
                            tl: {
                              hd: Css$Emotions.after({
                                    hd: Css$Emotions.contentRule("none"),
                                    tl: {
                                      hd: Css$Emotions.position(Css$Emotions.absolute),
                                      tl: {
                                        hd: Css$Emotions.top(Css$Emotions.zero),
                                        tl: {
                                          hd: Css$Emotions.left(Css$Emotions.zero),
                                          tl: {
                                            hd: Css$Emotions.width(Css$Emotions.pct(100)),
                                            tl: {
                                              hd: Css$Emotions.height(Css$Emotions.pct(100)),
                                              tl: {
                                                hd: Css$Emotions.border(Css$Emotions.px(1), Css$Emotions.solid, Css$Emotions.black),
                                                tl: /* [] */0
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }),
                              tl: /* [] */0
                            }
                          })
                    }, "none"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.position(Css$Emotions.relative),
                            tl: {
                              hd: Css$Emotions.after({
                                    hd: Css$Emotions.contentRule("normal"),
                                    tl: {
                                      hd: Css$Emotions.position(Css$Emotions.absolute),
                                      tl: {
                                        hd: Css$Emotions.top(Css$Emotions.zero),
                                        tl: {
                                          hd: Css$Emotions.left(Css$Emotions.zero),
                                          tl: {
                                            hd: Css$Emotions.width(Css$Emotions.pct(100)),
                                            tl: {
                                              hd: Css$Emotions.height(Css$Emotions.pct(100)),
                                              tl: {
                                                hd: Css$Emotions.border(Css$Emotions.px(1), Css$Emotions.solid, Css$Emotions.black),
                                                tl: /* [] */0
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }),
                              tl: /* [] */0
                            }
                          })
                    }, "normal"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.position(Css$Emotions.relative),
                            tl: {
                              hd: Css$Emotions.marginLeft(Css$Emotions.px(20)),
                              tl: /* [] */0
                            }
                          })
                    }, React.createElement("a", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.before({
                                      hd: Css$Emotions.contentRule({
                                            NAME: "text",
                                            VAL: "external "
                                          }),
                                      tl: {
                                        hd: Css$Emotions.backgroundColor(Css$Emotions.red),
                                        tl: {
                                          hd: Css$Emotions.display(Css$Emotions.inlineBlock),
                                          tl: {
                                            hd: Css$Emotions.flexBasis(Css$Emotions.content),
                                            tl: /* [] */0
                                          }
                                        }
                                      }
                                    }),
                                tl: /* [] */0
                              }),
                          href: "https://github.com/SentiaAnalytics/bs-css"
                        }, "link")), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.position(Css$Emotions.relative),
                            tl: {
                              hd: Css$Emotions.marginLeft(Css$Emotions.px(20)),
                              tl: {
                                hd: Css$Emotions.after({
                                      hd: Css$Emotions.contentRule({
                                            NAME: "text",
                                            VAL: ""
                                          }),
                                      tl: {
                                        hd: Css$Emotions.position(Css$Emotions.absolute),
                                        tl: {
                                          hd: Css$Emotions.top(Css$Emotions.zero),
                                          tl: {
                                            hd: Css$Emotions.left(Css$Emotions.zero),
                                            tl: {
                                              hd: Css$Emotions.width(Css$Emotions.pct(100)),
                                              tl: {
                                                hd: Css$Emotions.height(Css$Emotions.pct(100)),
                                                tl: {
                                                  hd: Css$Emotions.border(Css$Emotions.px(1), Css$Emotions.solid, Css$Emotions.black),
                                                  tl: /* [] */0
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }),
                                tl: /* [] */0
                              }
                            }
                          })
                    }, "empty content"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.position(Css$Emotions.relative),
                            tl: {
                              hd: Css$Emotions.marginLeft(Css$Emotions.px(20)),
                              tl: {
                                hd: Css$Emotions.paddingLeft(Css$Emotions.px(20)),
                                tl: {
                                  hd: Css$Emotions.after({
                                        hd: Css$Emotions.contentRule({
                                              NAME: "url",
                                              VAL: "https://via.placeholder.com/18"
                                            }),
                                        tl: {
                                          hd: Css$Emotions.position(Css$Emotions.absolute),
                                          tl: {
                                            hd: Css$Emotions.top(Css$Emotions.zero),
                                            tl: {
                                              hd: Css$Emotions.left(Css$Emotions.zero),
                                              tl: {
                                                hd: Css$Emotions.width(Css$Emotions.px(18)),
                                                tl: {
                                                  hd: Css$Emotions.height(Css$Emotions.px(18)),
                                                  tl: {
                                                    hd: Css$Emotions.border(Css$Emotions.px(1), Css$Emotions.solid, Css$Emotions.black),
                                                    tl: /* [] */0
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }),
                                  tl: /* [] */0
                                }
                              }
                            }
                          })
                    }, "url"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.marginLeft(Css$Emotions.px(20)),
                            tl: {
                              hd: Css$Emotions.counterReset(Css_AtomicTypes.CounterReset.reset(1, "foo")),
                              tl: {
                                hd: Css$Emotions.before({
                                      hd: Css$Emotions.contentRule(Css_AtomicTypes.Counter.counter(undefined, "foo")),
                                      tl: {
                                        hd: Css$Emotions.border(Css$Emotions.px(1), Css$Emotions.solid, Css$Emotions.black),
                                        tl: /* [] */0
                                      }
                                    }),
                                tl: /* [] */0
                              }
                            }
                          })
                    }, "counter"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.counterReset(Css_AtomicTypes.CounterReset.reset(1, "foo")),
                            tl: {
                              hd: Css$Emotions.marginLeft(Css$Emotions.px(20)),
                              tl: /* [] */0
                            }
                          })
                    }, React.createElement("div", {
                          className: Curry._1(Css$Emotions.style, {
                                hd: Css$Emotions.counterReset(Css_AtomicTypes.CounterReset.reset(2, "foo")),
                                tl: {
                                  hd: Css$Emotions.before({
                                        hd: Css$Emotions.contentRule(Css_AtomicTypes.Counters.counters("upperRoman", "@", "foo")),
                                        tl: {
                                          hd: Css$Emotions.border(Css$Emotions.px(1), Css$Emotions.solid, Css$Emotions.black),
                                          tl: /* [] */0
                                        }
                                      }),
                                  tl: /* [] */0
                                }
                              })
                        }, "counters")), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.marginLeft(Css$Emotions.px(20)),
                            tl: {
                              hd: Css$Emotions.before({
                                    hd: Css$Emotions.contentRule({
                                          NAME: "attr",
                                          VAL: "class"
                                        }),
                                    tl: {
                                      hd: Css$Emotions.border(Css$Emotions.px(1), Css$Emotions.solid, Css$Emotions.black),
                                      tl: /* [] */0
                                    }
                                  }),
                              tl: /* [] */0
                            }
                          })
                    }, "attr"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.marginLeft(Css$Emotions.px(20)),
                            tl: {
                              hd: Css$Emotions.before({
                                    hd: Css$Emotions.contentRule(Css_AtomicTypes.Gradient.linearGradient(Css$Emotions.deg(45), {
                                              hd: [
                                                Css$Emotions.zero,
                                                Css$Emotions.red
                                              ],
                                              tl: {
                                                hd: [
                                                  Css$Emotions.pct(100),
                                                  Css$Emotions.blue
                                                ],
                                                tl: /* [] */0
                                              }
                                            })),
                                    tl: {
                                      hd: Css$Emotions.border(Css$Emotions.px(1), Css$Emotions.solid, Css$Emotions.black),
                                      tl: {
                                        hd: Css$Emotions.display("inlineBlock"),
                                        tl: {
                                          hd: Css$Emotions.height(Css$Emotions.px(18)),
                                          tl: {
                                            hd: Css$Emotions.width(Css$Emotions.px(18)),
                                            tl: /* [] */0
                                          }
                                        }
                                      }
                                    }
                                  }),
                              tl: /* [] */0
                            }
                          })
                    }, "linear gradient"), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.marginLeft(Css$Emotions.px(20)),
                            tl: {
                              hd: Css$Emotions.before({
                                    hd: Css$Emotions.contentRules({
                                          hd: "openQuote",
                                          tl: {
                                            hd: {
                                              NAME: "text",
                                              VAL: "foo"
                                            },
                                            tl: {
                                              hd: "closeQuote",
                                              tl: /* [] */0
                                            }
                                          }
                                        }),
                                    tl: {
                                      hd: Css$Emotions.border(Css$Emotions.px(1), Css$Emotions.solid, Css$Emotions.black),
                                      tl: /* [] */0
                                    }
                                  }),
                              tl: /* [] */0
                            }
                          })
                    }, "contents (quotes)")), React.createElement(Section$Emotions.make, {
                  name: "insertRule, the ultimate escape hatch",
                  children: React.createElement("div", {
                        className: "raw-css"
                      })
                }), React.createElement(Section$Emotions.make, {
                  name: "merging style names",
                  children: React.createElement("button", {
                        className: mergedStyles
                      }, "Merged")
                }), React.createElement(Section$Emotions.make, {
                  name: "filter",
                  children: null
                }, React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.filter({
                                      hd: {
                                        NAME: "blur",
                                        VAL: {
                                          NAME: "px",
                                          VAL: 10
                                        }
                                      },
                                      tl: /* [] */0
                                    }),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.filter({
                                      hd: {
                                        NAME: "brightness",
                                        VAL: 50
                                      },
                                      tl: /* [] */0
                                    }),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.filter({
                                      hd: {
                                        NAME: "contrast",
                                        VAL: 50
                                      },
                                      tl: /* [] */0
                                    }),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.filter({
                                      hd: {
                                        NAME: "dropShadow",
                                        VAL: [
                                          {
                                            NAME: "px",
                                            VAL: 3
                                          },
                                          {
                                            NAME: "px",
                                            VAL: 3
                                          },
                                          {
                                            NAME: "px",
                                            VAL: 3
                                          },
                                          {
                                            NAME: "rgb",
                                            VAL: [
                                              200,
                                              100,
                                              100
                                            ]
                                          }
                                        ]
                                      },
                                      tl: /* [] */0
                                    }),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.filter({
                                      hd: {
                                        NAME: "grayscale",
                                        VAL: 50
                                      },
                                      tl: /* [] */0
                                    }),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.filter({
                                      hd: {
                                        NAME: "hueRotate",
                                        VAL: {
                                          NAME: "deg",
                                          VAL: 180
                                        }
                                      },
                                      tl: /* [] */0
                                    }),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.filter({
                                      hd: {
                                        NAME: "invert",
                                        VAL: 50
                                      },
                                      tl: /* [] */0
                                    }),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.filter({
                                      hd: {
                                        NAME: "opacity",
                                        VAL: 50
                                      },
                                      tl: /* [] */0
                                    }),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.filter({
                                      hd: {
                                        NAME: "saturate",
                                        VAL: 50
                                      },
                                      tl: /* [] */0
                                    }),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.filter({
                                      hd: {
                                        NAME: "sepia",
                                        VAL: 50
                                      },
                                      tl: /* [] */0
                                    }),
                                tl: /* [] */0
                              }))
                    }), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.filter({
                                      hd: {
                                        NAME: "sepia",
                                        VAL: 50
                                      },
                                      tl: {
                                        hd: {
                                          NAME: "saturate",
                                          VAL: 50
                                        },
                                        tl: {
                                          hd: {
                                            NAME: "dropShadow",
                                            VAL: [
                                              {
                                                NAME: "px",
                                                VAL: 3
                                              },
                                              {
                                                NAME: "px",
                                                VAL: 3
                                              },
                                              {
                                                NAME: "px",
                                                VAL: 3
                                              },
                                              {
                                                NAME: "rgb",
                                                VAL: [
                                                  200,
                                                  100,
                                                  100
                                                ]
                                              }
                                            ]
                                          },
                                          tl: /* [] */0
                                        }
                                      }
                                    }),
                                tl: /* [] */0
                              }))
                    }), React.createElement("svg", {
                      className: Curry._1(Css$Emotions.style, {
                            hd: Css$Emotions.display("none"),
                            tl: /* [] */0
                          }),
                      height: "0"
                    }, React.createElement("filter", {
                          id: "f1"
                        }, React.createElement("feGaussianBlur", {
                              stdDeviation: "3"
                            }))), React.createElement("div", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.filter({
                                      hd: {
                                        NAME: "url",
                                        VAL: "#f1"
                                      },
                                      tl: /* [] */0
                                    }),
                                tl: /* [] */0
                              }))
                    })), React.createElement(Section$Emotions.make, {
                  name: "direction",
                  children: null
                }, React.createElement(Section$Emotions.make, {
                      name: "ltr",
                      children: React.createElement("div", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.direction("ltr"),
                                  tl: {
                                    hd: Css$Emotions.display("flex"),
                                    tl: /* [] */0
                                  }
                                })
                          }, React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }, "1"), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }, "2"), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }, "3"), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }, "4"))
                    }), React.createElement(Section$Emotions.make, {
                      name: "rtl",
                      children: React.createElement("div", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.direction("rtl"),
                                  tl: {
                                    hd: Css$Emotions.display("flex"),
                                    tl: /* [] */0
                                  }
                                })
                          }, React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }, "1"), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }, "2"), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }, "3"), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }, "4"))
                    }), React.createElement(Section$Emotions.make, {
                      name: "unset",
                      children: React.createElement("div", {
                            className: Curry._1(Css$Emotions.style, {
                                  hd: Css$Emotions.direction("unset"),
                                  tl: {
                                    hd: Css$Emotions.display("flex"),
                                    tl: /* [] */0
                                  }
                                })
                          }, React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }, "1"), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }, "2"), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }, "3"), React.createElement("div", {
                                className: Curry._1(Css$Emotions.style, redBox)
                              }, "4"))
                    })), React.createElement(Section$Emotions.make, {
                  name: "object-fit",
                  children: null
                }, React.createElement("img", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.objectFit("fill"),
                                tl: /* [] */0
                              })),
                      src: "./img-29.jpg"
                    }), React.createElement("img", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.objectFit("contain"),
                                tl: /* [] */0
                              })),
                      src: "./img-29.jpg"
                    }), React.createElement("img", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.objectFit("cover"),
                                tl: /* [] */0
                              })),
                      src: "./img-29.jpg"
                    }), React.createElement("img", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.objectFit("none"),
                                tl: /* [] */0
                              })),
                      src: "./img-29.jpg"
                    }), React.createElement("img", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.objectFit("scaleDown"),
                                tl: /* [] */0
                              })),
                      src: "./img-29.jpg"
                    }), React.createElement("img", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.objectFit("inherit_"),
                                tl: /* [] */0
                              })),
                      src: "./img-29.jpg"
                    }), React.createElement("img", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.objectFit("initial"),
                                tl: /* [] */0
                              })),
                      src: "./img-29.jpg"
                    }), React.createElement("img", {
                      className: Curry._1(Css$Emotions.style, Pervasives.$at(redBox, {
                                hd: Css$Emotions.objectFit("unset"),
                                tl: /* [] */0
                              })),
                      src: "./img-29.jpg"
                    })));
}

var make = Test;

exports.fontItem = fontItem;
exports.spin = spin;
exports.scaleAnimation = scaleAnimation;
exports.redBox = redBox;
exports.miniBox = miniBox;
exports.mergedStyles = mergedStyles;
exports.differentHeightLengths = differentHeightLengths;
exports.make = make;
/*  Not a pure module */
