// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Emotion$Emotions = require("./Emotion.bs.js");

var container = Emotion$Emotions.css(undefined, {
      hd: Emotion$Emotions.label("container"),
      tl: {
        hd: Emotion$Emotions.display("flex"),
        tl: {
          hd: Emotion$Emotions.flexFlow("column", "nowrap"),
          tl: {
            hd: Emotion$Emotions.alignItems("center"),
            tl: /* [] */0
          }
        }
      }
    });

var shape = Emotion$Emotions.css(undefined, {
      hd: Emotion$Emotions.label("shape"),
      tl: {
        hd: Emotion$Emotions.display("flex"),
        tl: {
          hd: Emotion$Emotions.flexFlow("row", "nowrap"),
          tl: {
            hd: Emotion$Emotions.alignItems("center"),
            tl: {
              hd: Emotion$Emotions.justifyContent("center"),
              tl: {
                hd: Emotion$Emotions.transitionProperty("border-radius"),
                tl: {
                  hd: Emotion$Emotions.transitionDuration({
                        NAME: "ms",
                        VAL: 100
                      }),
                  tl: {
                    hd: Emotion$Emotions.transitionTimingFunction("easeInOut"),
                    tl: {
                      hd: Emotion$Emotions.width({
                            NAME: "px",
                            VAL: 200
                          }),
                      tl: {
                        hd: Emotion$Emotions.height({
                              NAME: "px",
                              VAL: 200
                            }),
                        tl: {
                          hd: Emotion$Emotions.borderRadius({
                                NAME: "px",
                                VAL: 6
                              }),
                          tl: {
                            hd: Emotion$Emotions.backgroundColor({
                                  NAME: "hex",
                                  VAL: "29d"
                                }),
                            tl: {
                              hd: Emotion$Emotions.hover({
                                    hd: Emotion$Emotions.borderRadius({
                                          NAME: "pct",
                                          VAL: 50
                                        }),
                                    tl: {
                                      hd: Emotion$Emotions.important(Emotion$Emotions.cursor("grab")),
                                      tl: /* [] */0
                                    }
                                  }),
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
    });

function text(size) {
  return Emotion$Emotions.css(undefined, {
              hd: Emotion$Emotions.label("text"),
              tl: {
                hd: Emotion$Emotions.color({
                      NAME: "hex",
                      VAL: "fff"
                    }),
                tl: {
                  hd: Emotion$Emotions.fontSize({
                        NAME: "px",
                        VAL: size
                      }),
                  tl: {
                    hd: Emotion$Emotions.fontWeight(700),
                    tl: {
                      hd: Emotion$Emotions.transition("font-size", {
                            NAME: "ms",
                            VAL: 100
                          }, "easeInOut", "zero"),
                      tl: {
                        hd: Emotion$Emotions.transitions({
                              hd: [
                                "font-size",
                                {
                                  NAME: "ms",
                                  VAL: 100
                                },
                                "easeInOut",
                                {
                                  NAME: "ms",
                                  VAL: 0
                                }
                              ],
                              tl: /* [] */0
                            }),
                        tl: {
                          hd: Emotion$Emotions.select("." + container + ":hover &", {
                                hd: Emotion$Emotions.fontSize(Curry._2(Emotion$Emotions.Css.Calc.$star, Curry._2(Emotion$Emotions.Css.Calc.$plus, {
                                              NAME: "px",
                                              VAL: size
                                            }, {
                                              NAME: "pct",
                                              VAL: 150
                                            }), {
                                          NAME: "n",
                                          VAL: 1.5
                                        })),
                                tl: /* [] */0
                              }),
                          tl: {
                            hd: Emotion$Emotions.media("(max-width: 900px)", {
                                  hd: Emotion$Emotions.color({
                                        NAME: "hex",
                                        VAL: "ff69b4"
                                      }),
                                  tl: {
                                    hd: Emotion$Emotions.select(":hover", {
                                          hd: Emotion$Emotions.color({
                                                NAME: "hex",
                                                VAL: "fff"
                                              }),
                                          tl: /* [] */0
                                        }),
                                    tl: /* [] */0
                                  }
                                }),
                            tl: /* [] */0
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
}

var bounce = Emotion$Emotions.keyframes({
      hd: [
        0,
        {
          hd: Emotion$Emotions.transform({
                NAME: "translateY",
                VAL: "zero"
              }),
          tl: /* [] */0
        }
      ],
      tl: {
        hd: [
          50,
          {
            hd: Emotion$Emotions.transform({
                  NAME: "translateY",
                  VAL: {
                    NAME: "px",
                    VAL: -20
                  }
                }),
            tl: /* [] */0
          }
        ],
        tl: {
          hd: [
            100,
            {
              hd: Emotion$Emotions.transform({
                    NAME: "translateY",
                    VAL: "zero"
                  }),
              tl: /* [] */0
            }
          ],
          tl: /* [] */0
        }
      }
    });

var animated = Emotion$Emotions.css(undefined, {
      hd: Emotion$Emotions.label("animated"),
      tl: {
        hd: Emotion$Emotions.animationName(bounce),
        tl: {
          hd: Emotion$Emotions.animationDuration({
                NAME: "ms",
                VAL: 300
              }),
          tl: {
            hd: Emotion$Emotions.animationIterationCount({
                  NAME: "i",
                  VAL: 7
                }),
            tl: /* [] */0
          }
        }
      }
    });

var smallText = Emotion$Emotions.css(undefined, {
      hd: Emotion$Emotions.label("smallText"),
      tl: {
        hd: Emotion$Emotions.fontSize({
              NAME: "em",
              VAL: 0.8
            }),
        tl: /* [] */0
      }
    });

var note = Emotion$Emotions.css(smallText, {
      hd: Emotion$Emotions.label("note"),
      tl: {
        hd: Emotion$Emotions.margin2({
              NAME: "px",
              VAL: 20
            }, "zero"),
        tl: /* [] */0
      }
    });

var grid = Emotion$Emotions.css(undefined, {
      hd: Emotion$Emotions.label("grid"),
      tl: {
        hd: Emotion$Emotions.display("grid"),
        tl: {
          hd: Emotion$Emotions.gridTemplateColumns({
                NAME: "list",
                VAL: {
                  hd: {
                    NAME: "repeat",
                    VAL: [
                      {
                        NAME: "n",
                        VAL: 3
                      },
                      {
                        hd: {
                          NAME: "px",
                          VAL: 100
                        },
                        tl: /* [] */0
                      }
                    ]
                  },
                  tl: /* [] */0
                }
              }),
          tl: {
            hd: Emotion$Emotions.gridAutoRows({
                  NAME: "px",
                  VAL: 100
                }),
            tl: {
              hd: Emotion$Emotions.gridGap({
                    NAME: "px",
                    VAL: 10
                  }),
              tl: {
                hd: Emotion$Emotions.gridTemplateAreas({
                      NAME: "areas",
                      VAL: {
                        hd: "a a a",
                        tl: {
                          hd: ". . .",
                          tl: {
                            hd: ". . .",
                            tl: /* [] */0
                          }
                        }
                      }
                    }),
                tl: /* [] */0
              }
            }
          }
        }
      }
    });

var gridItem = Emotion$Emotions.css(undefined, {
      hd: Emotion$Emotions.label("gridItem"),
      tl: {
        hd: Emotion$Emotions.padding({
              NAME: "px",
              VAL: 10
            }),
        tl: {
          hd: Emotion$Emotions.color({
                NAME: "hex",
                VAL: "fff"
              }),
          tl: {
            hd: Emotion$Emotions.backgroundColor({
                  NAME: "hex",
                  VAL: "29d"
                }),
            tl: /* [] */0
          }
        }
      }
    });

var gridItem1 = Emotion$Emotions.css(undefined, {
      hd: Emotion$Emotions.label("gridItem1"),
      tl: {
        hd: Emotion$Emotions.gridArea("a"),
        tl: /* [] */0
      }
    });

exports.container = container;
exports.shape = shape;
exports.text = text;
exports.bounce = bounce;
exports.animated = animated;
exports.smallText = smallText;
exports.note = note;
exports.grid = grid;
exports.gridItem = gridItem;
exports.gridItem1 = gridItem1;
/* container Not a pure module */
