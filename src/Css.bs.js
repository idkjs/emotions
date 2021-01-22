'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Css_Colors = require("bs-css/src/Css_Colors.bs.js");
var Css = require("@emotion/css");
var Css_Legacy_Core = require("bs-css/src/Css_Legacy_Core.bs.js");

var include = Css_Legacy_Core.Make({
      mergeStyles: Css.css.cx,
      injectRule: Css.css.injectGlobal,
      injectRaw: Css.css.injectGlobal,
      make: Css.css.css,
      makeKeyFrames: Css.css.keyframes
    });

var insertRule = include.insertRule;

function fontFace(fontFamily, src, fontStyle, fontWeight, fontDisplay, param) {
  var asString = Css_Legacy_Core.fontFace(fontFamily, src, fontStyle, fontWeight, fontDisplay, undefined);
  Curry._1(insertRule, asString);
  return fontFamily;
}

var Types = Css_Legacy_Core.Types;

var Make = Css_Legacy_Core.Make;

var toJson = Css_Legacy_Core.toJson;

var important = Css_Legacy_Core.important;

var label = Css_Legacy_Core.label;

var Shadow = Css_Legacy_Core.Shadow;

var unsafe = Css_Legacy_Core.unsafe;

var alignContent = Css_Legacy_Core.alignContent;

var alignItems = Css_Legacy_Core.alignItems;

var alignSelf = Css_Legacy_Core.alignSelf;

var animationDelay = Css_Legacy_Core.animationDelay;

var animationDirection = Css_Legacy_Core.animationDirection;

var animationDuration = Css_Legacy_Core.animationDuration;

var animationFillMode = Css_Legacy_Core.animationFillMode;

var animationIterationCount = Css_Legacy_Core.animationIterationCount;

var animationPlayState = Css_Legacy_Core.animationPlayState;

var animationTimingFunction = Css_Legacy_Core.animationTimingFunction;

var backdropFilter = Css_Legacy_Core.backdropFilter;

var backfaceVisibility = Css_Legacy_Core.backfaceVisibility;

var backgroundAttachment = Css_Legacy_Core.backgroundAttachment;

var backgroundColor = Css_Legacy_Core.backgroundColor;

var backgroundClip = Css_Legacy_Core.backgroundClip;

var backgroundImage = Css_Legacy_Core.backgroundImage;

var backgroundOrigin = Css_Legacy_Core.backgroundOrigin;

var backgroundPosition = Css_Legacy_Core.backgroundPosition;

var backgroundPositions = Css_Legacy_Core.backgroundPositions;

var backgroundPosition4 = Css_Legacy_Core.backgroundPosition4;

var backgroundRepeat = Css_Legacy_Core.backgroundRepeat;

var borderBottom = Css_Legacy_Core.borderBottom;

var borderBottomColor = Css_Legacy_Core.borderBottomColor;

var borderBottomLeftRadius = Css_Legacy_Core.borderBottomLeftRadius;

var borderBottomRightRadius = Css_Legacy_Core.borderBottomRightRadius;

var borderBottomStyle = Css_Legacy_Core.borderBottomStyle;

var borderBottomWidth = Css_Legacy_Core.borderBottomWidth;

var borderCollapse = Css_Legacy_Core.borderCollapse;

var borderColor = Css_Legacy_Core.borderColor;

var borderLeft = Css_Legacy_Core.borderLeft;

var borderLeftColor = Css_Legacy_Core.borderLeftColor;

var borderLeftStyle = Css_Legacy_Core.borderLeftStyle;

var borderLeftWidth = Css_Legacy_Core.borderLeftWidth;

var borderRight = Css_Legacy_Core.borderRight;

var borderRightColor = Css_Legacy_Core.borderRightColor;

var borderRightStyle = Css_Legacy_Core.borderRightStyle;

var borderRightWidth = Css_Legacy_Core.borderRightWidth;

var borderRadius = Css_Legacy_Core.borderRadius;

var borderSpacing = Css_Legacy_Core.borderSpacing;

var borderStyle = Css_Legacy_Core.borderStyle;

var borderTopColor = Css_Legacy_Core.borderTopColor;

var borderTopLeftRadius = Css_Legacy_Core.borderTopLeftRadius;

var borderTopRightRadius = Css_Legacy_Core.borderTopRightRadius;

var borderTopStyle = Css_Legacy_Core.borderTopStyle;

var borderTopWidth = Css_Legacy_Core.borderTopWidth;

var borderWidth = Css_Legacy_Core.borderWidth;

var bottom = Css_Legacy_Core.bottom;

var boxSizing = Css_Legacy_Core.boxSizing;

var boxShadow = Css_Legacy_Core.boxShadow;

var boxShadows = Css_Legacy_Core.boxShadows;

var clear = Css_Legacy_Core.clear;

var clipPath = Css_Legacy_Core.clipPath;

var color = Css_Legacy_Core.color;

var columnCount = Css_Legacy_Core.columnCount;

var contentRule = Css_Legacy_Core.contentRule;

var contentRules = Css_Legacy_Core.contentRules;

var counterIncrement = Css_Legacy_Core.counterIncrement;

var countersIncrement = Css_Legacy_Core.countersIncrement;

var counterReset = Css_Legacy_Core.counterReset;

var countersReset = Css_Legacy_Core.countersReset;

var counterSet = Css_Legacy_Core.counterSet;

var countersSet = Css_Legacy_Core.countersSet;

var cursor = Css_Legacy_Core.cursor;

var direction = Css_Legacy_Core.direction;

var display = Css_Legacy_Core.display;

var flex = Css_Legacy_Core.flex;

var flexBasis = Css_Legacy_Core.flexBasis;

var flexDirection = Css_Legacy_Core.flexDirection;

var flexGrow = Css_Legacy_Core.flexGrow;

var flexShrink = Css_Legacy_Core.flexShrink;

var flexWrap = Css_Legacy_Core.flexWrap;

var $$float = Css_Legacy_Core.$$float;

var fontFamily = Css_Legacy_Core.fontFamily;

var fontFamilies = Css_Legacy_Core.fontFamilies;

var fontSize = Css_Legacy_Core.fontSize;

var fontStyle = Css_Legacy_Core.fontStyle;

var fontVariant = Css_Legacy_Core.fontVariant;

var fontWeight = Css_Legacy_Core.fontWeight;

var gridArea = Css_Legacy_Core.gridArea;

var gridArea2 = Css_Legacy_Core.gridArea2;

var gridArea3 = Css_Legacy_Core.gridArea3;

var gridArea4 = Css_Legacy_Core.gridArea4;

var gridAutoFlow = Css_Legacy_Core.gridAutoFlow;

var gridColumn = Css_Legacy_Core.gridColumn;

var gridColumnEnd = Css_Legacy_Core.gridColumnEnd;

var columnGap = Css_Legacy_Core.columnGap;

var gridColumnGap = Css_Legacy_Core.gridColumnGap;

var gridColumnStart = Css_Legacy_Core.gridColumnStart;

var gridGap = Css_Legacy_Core.gridGap;

var gridRow = Css_Legacy_Core.gridRow;

var gridRowEnd = Css_Legacy_Core.gridRowEnd;

var gridRowGap = Css_Legacy_Core.gridRowGap;

var gridRowStart = Css_Legacy_Core.gridRowStart;

var gridTemplateAreas = Css_Legacy_Core.gridTemplateAreas;

var height = Css_Legacy_Core.height;

var justifyContent = Css_Legacy_Core.justifyContent;

var justifyItems = Css_Legacy_Core.justifyItems;

var justifySelf = Css_Legacy_Core.justifySelf;

var left = Css_Legacy_Core.left;

var letterSpacing = Css_Legacy_Core.letterSpacing;

var lineHeight = Css_Legacy_Core.lineHeight;

var listStyle = Css_Legacy_Core.listStyle;

var listStyleImage = Css_Legacy_Core.listStyleImage;

var listStyleType = Css_Legacy_Core.listStyleType;

var listStylePosition = Css_Legacy_Core.listStylePosition;

var margin = Css_Legacy_Core.margin;

var margin2 = Css_Legacy_Core.margin2;

var margin3 = Css_Legacy_Core.margin3;

var margin4 = Css_Legacy_Core.margin4;

var marginLeft = Css_Legacy_Core.marginLeft;

var marginRight = Css_Legacy_Core.marginRight;

var marginTop = Css_Legacy_Core.marginTop;

var marginBottom = Css_Legacy_Core.marginBottom;

var maxHeight = Css_Legacy_Core.maxHeight;

var maxWidth = Css_Legacy_Core.maxWidth;

var minHeight = Css_Legacy_Core.minHeight;

var minWidth = Css_Legacy_Core.minWidth;

var objectFit = Css_Legacy_Core.objectFit;

var objectPosition = Css_Legacy_Core.objectPosition;

var opacity = Css_Legacy_Core.opacity;

var order = Css_Legacy_Core.order;

var outline = Css_Legacy_Core.outline;

var outlineColor = Css_Legacy_Core.outlineColor;

var outlineOffset = Css_Legacy_Core.outlineOffset;

var outlineStyle = Css_Legacy_Core.outlineStyle;

var outlineWidth = Css_Legacy_Core.outlineWidth;

var overflow = Css_Legacy_Core.overflow;

var overflowX = Css_Legacy_Core.overflowX;

var overflowY = Css_Legacy_Core.overflowY;

var overflowWrap = Css_Legacy_Core.overflowWrap;

var padding = Css_Legacy_Core.padding;

var padding2 = Css_Legacy_Core.padding2;

var padding3 = Css_Legacy_Core.padding3;

var padding4 = Css_Legacy_Core.padding4;

var paddingLeft = Css_Legacy_Core.paddingLeft;

var paddingRight = Css_Legacy_Core.paddingRight;

var paddingTop = Css_Legacy_Core.paddingTop;

var paddingBottom = Css_Legacy_Core.paddingBottom;

var perspective = Css_Legacy_Core.perspective;

var perspectiveOrigin = Css_Legacy_Core.perspectiveOrigin;

var pointerEvents = Css_Legacy_Core.pointerEvents;

var position = Css_Legacy_Core.position;

var resize = Css_Legacy_Core.resize;

var right = Css_Legacy_Core.right;

var tableLayout = Css_Legacy_Core.tableLayout;

var textAlign = Css_Legacy_Core.textAlign;

var textDecorationColor = Css_Legacy_Core.textDecorationColor;

var textDecorationLine = Css_Legacy_Core.textDecorationLine;

var textDecorationStyle = Css_Legacy_Core.textDecorationStyle;

var textIndent = Css_Legacy_Core.textIndent;

var textOverflow = Css_Legacy_Core.textOverflow;

var textShadow = Css_Legacy_Core.textShadow;

var textShadows = Css_Legacy_Core.textShadows;

var textTransform = Css_Legacy_Core.textTransform;

var top = Css_Legacy_Core.top;

var transform = Css_Legacy_Core.transform;

var transforms = Css_Legacy_Core.transforms;

var transformOrigin = Css_Legacy_Core.transformOrigin;

var transformOrigin3d = Css_Legacy_Core.transformOrigin3d;

var transitionDelay = Css_Legacy_Core.transitionDelay;

var transitionDuration = Css_Legacy_Core.transitionDuration;

var transitionProperty = Css_Legacy_Core.transitionProperty;

var transformStyle = Css_Legacy_Core.transformStyle;

var transitionTimingFunction = Css_Legacy_Core.transitionTimingFunction;

var userSelect = Css_Legacy_Core.userSelect;

var verticalAlign = Css_Legacy_Core.verticalAlign;

var visibility = Css_Legacy_Core.visibility;

var width = Css_Legacy_Core.width;

var whiteSpace = Css_Legacy_Core.whiteSpace;

var wordBreak = Css_Legacy_Core.wordBreak;

var wordSpacing = Css_Legacy_Core.wordSpacing;

var wordWrap = Css_Legacy_Core.wordWrap;

var zIndex = Css_Legacy_Core.zIndex;

var selector = Css_Legacy_Core.selector;

var media = Css_Legacy_Core.media;

var active = Css_Legacy_Core.active;

var checked = Css_Legacy_Core.checked;

var $$default = Css_Legacy_Core.$$default;

var defined = Css_Legacy_Core.defined;

var disabled = Css_Legacy_Core.disabled;

var empty = Css_Legacy_Core.empty;

var enabled = Css_Legacy_Core.enabled;

var first = Css_Legacy_Core.first;

var firstChild = Css_Legacy_Core.firstChild;

var firstOfType = Css_Legacy_Core.firstOfType;

var focus = Css_Legacy_Core.focus;

var focusWithin = Css_Legacy_Core.focusWithin;

var host = Css_Legacy_Core.host;

var hover = Css_Legacy_Core.hover;

var indeterminate = Css_Legacy_Core.indeterminate;

var inRange = Css_Legacy_Core.inRange;

var invalid = Css_Legacy_Core.invalid;

var lang = Css_Legacy_Core.lang;

var lastChild = Css_Legacy_Core.lastChild;

var lastOfType = Css_Legacy_Core.lastOfType;

var link = Css_Legacy_Core.link;

var not__ = Css_Legacy_Core.not__;

var Nth = Css_Legacy_Core.Nth;

var nthChild = Css_Legacy_Core.nthChild;

var nthLastChild = Css_Legacy_Core.nthLastChild;

var nthLastOfType = Css_Legacy_Core.nthLastOfType;

var nthOfType = Css_Legacy_Core.nthOfType;

var onlyChild = Css_Legacy_Core.onlyChild;

var onlyOfType = Css_Legacy_Core.onlyOfType;

var optional = Css_Legacy_Core.optional;

var outOfRange = Css_Legacy_Core.outOfRange;

var readOnly = Css_Legacy_Core.readOnly;

var readWrite = Css_Legacy_Core.readWrite;

var required = Css_Legacy_Core.required;

var root = Css_Legacy_Core.root;

var scope = Css_Legacy_Core.scope;

var target = Css_Legacy_Core.target;

var valid = Css_Legacy_Core.valid;

var visited = Css_Legacy_Core.visited;

var after = Css_Legacy_Core.after;

var before = Css_Legacy_Core.before;

var firstLetter = Css_Legacy_Core.firstLetter;

var firstLine = Css_Legacy_Core.firstLine;

var placeholder = Css_Legacy_Core.placeholder;

var selection = Css_Legacy_Core.selection;

var child = Css_Legacy_Core.child;

var children = Css_Legacy_Core.children;

var directSibling = Css_Legacy_Core.directSibling;

var siblings = Css_Legacy_Core.siblings;

var anyLink = Css_Legacy_Core.anyLink;

var initial = Css_Legacy_Core.initial;

var inherit_ = Css_Legacy_Core.inherit_;

var unset = Css_Legacy_Core.unset;

var $$var = Css_Legacy_Core.$$var;

var varDefault = Css_Legacy_Core.varDefault;

var auto = Css_Legacy_Core.auto;

var none = Css_Legacy_Core.none;

var text = Css_Legacy_Core.text;

var pct = Css_Legacy_Core.pct;

var ch = Css_Legacy_Core.ch;

var cm = Css_Legacy_Core.cm;

var em = Css_Legacy_Core.em;

var ex = Css_Legacy_Core.ex;

var mm = Css_Legacy_Core.mm;

var pt = Css_Legacy_Core.pt;

var px = Css_Legacy_Core.px;

var pxFloat = Css_Legacy_Core.pxFloat;

var rem = Css_Legacy_Core.rem;

var vh = Css_Legacy_Core.vh;

var vmin = Css_Legacy_Core.vmin;

var vmax = Css_Legacy_Core.vmax;

var zero = Css_Legacy_Core.zero;

var deg = Css_Legacy_Core.deg;

var rad = Css_Legacy_Core.rad;

var grad = Css_Legacy_Core.grad;

var turn = Css_Legacy_Core.turn;

var ltr = Css_Legacy_Core.ltr;

var rtl = Css_Legacy_Core.rtl;

var absolute = Css_Legacy_Core.absolute;

var relative = Css_Legacy_Core.relative;

var $$static = Css_Legacy_Core.$$static;

var fixed = Css_Legacy_Core.fixed;

var sticky = Css_Legacy_Core.sticky;

var horizontal = Css_Legacy_Core.horizontal;

var vertical = Css_Legacy_Core.vertical;

var smallCaps = Css_Legacy_Core.smallCaps;

var italic = Css_Legacy_Core.italic;

var oblique = Css_Legacy_Core.oblique;

var hidden = Css_Legacy_Core.hidden;

var visible = Css_Legacy_Core.visible;

var scroll = Css_Legacy_Core.scroll;

var rgb = Css_Legacy_Core.rgb;

var rgba = Css_Legacy_Core.rgba;

var hsl = Css_Legacy_Core.hsl;

var hsla = Css_Legacy_Core.hsla;

var hex = Css_Legacy_Core.hex;

var currentColor = Css_Legacy_Core.currentColor;

var local = Css_Legacy_Core.local;

var paddingBox = Css_Legacy_Core.paddingBox;

var borderBox = Css_Legacy_Core.borderBox;

var contentBox = Css_Legacy_Core.contentBox;

var noRepeat = Css_Legacy_Core.noRepeat;

var space = Css_Legacy_Core.space;

var repeat = Css_Legacy_Core.repeat;

var minmax = Css_Legacy_Core.minmax;

var repeatX = Css_Legacy_Core.repeatX;

var repeatY = Css_Legacy_Core.repeatY;

var contain = Css_Legacy_Core.contain;

var cover = Css_Legacy_Core.cover;

var row = Css_Legacy_Core.row;

var rowReverse = Css_Legacy_Core.rowReverse;

var column = Css_Legacy_Core.column;

var columnReverse = Css_Legacy_Core.columnReverse;

var wrap = Css_Legacy_Core.wrap;

var nowrap = Css_Legacy_Core.nowrap;

var wrapReverse = Css_Legacy_Core.wrapReverse;

var inline = Css_Legacy_Core.inline;

var block = Css_Legacy_Core.block;

var contents = Css_Legacy_Core.contents;

var flexBox = Css_Legacy_Core.flexBox;

var grid = Css_Legacy_Core.grid;

var inlineBlock = Css_Legacy_Core.inlineBlock;

var inlineFlex = Css_Legacy_Core.inlineFlex;

var inlineGrid = Css_Legacy_Core.inlineGrid;

var inlineTable = Css_Legacy_Core.inlineTable;

var listItem = Css_Legacy_Core.listItem;

var runIn = Css_Legacy_Core.runIn;

var table = Css_Legacy_Core.table;

var tableCaption = Css_Legacy_Core.tableCaption;

var tableColumnGroup = Css_Legacy_Core.tableColumnGroup;

var tableHeaderGroup = Css_Legacy_Core.tableHeaderGroup;

var tableFooterGroup = Css_Legacy_Core.tableFooterGroup;

var tableRowGroup = Css_Legacy_Core.tableRowGroup;

var tableCell = Css_Legacy_Core.tableCell;

var tableColumn = Css_Legacy_Core.tableColumn;

var tableRow = Css_Legacy_Core.tableRow;

var flexStart = Css_Legacy_Core.flexStart;

var flexEnd = Css_Legacy_Core.flexEnd;

var center = Css_Legacy_Core.center;

var stretch = Css_Legacy_Core.stretch;

var spaceBetween = Css_Legacy_Core.spaceBetween;

var spaceAround = Css_Legacy_Core.spaceAround;

var spaceEvenly = Css_Legacy_Core.spaceEvenly;

var baseline = Css_Legacy_Core.baseline;

var forwards = Css_Legacy_Core.forwards;

var backwards = Css_Legacy_Core.backwards;

var both = Css_Legacy_Core.both;

var infinite = Css_Legacy_Core.infinite;

var count = Css_Legacy_Core.count;

var paused = Css_Legacy_Core.paused;

var running = Css_Legacy_Core.running;

var inside = Css_Legacy_Core.inside;

var outside = Css_Legacy_Core.outside;

var solid = Css_Legacy_Core.solid;

var dotted = Css_Legacy_Core.dotted;

var dashed = Css_Legacy_Core.dashed;

var underline = Css_Legacy_Core.underline;

var overline = Css_Legacy_Core.overline;

var lineThrough = Css_Legacy_Core.lineThrough;

var clip = Css_Legacy_Core.clip;

var ellipsis = Css_Legacy_Core.ellipsis;

var wavy = Css_Legacy_Core.wavy;

var $$double = Css_Legacy_Core.$$double;

var uppercase = Css_Legacy_Core.uppercase;

var lowercase = Css_Legacy_Core.lowercase;

var capitalize = Css_Legacy_Core.capitalize;

var sub = Css_Legacy_Core.sub;

var $$super = Css_Legacy_Core.$$super;

var textTop = Css_Legacy_Core.textTop;

var textBottom = Css_Legacy_Core.textBottom;

var middle = Css_Legacy_Core.middle;

var normal = Css_Legacy_Core.normal;

var breakAll = Css_Legacy_Core.breakAll;

var keepAll = Css_Legacy_Core.keepAll;

var breakWord = Css_Legacy_Core.breakWord;

var reverse = Css_Legacy_Core.reverse;

var alternate = Css_Legacy_Core.alternate;

var alternateReverse = Css_Legacy_Core.alternateReverse;

var fill = Css_Legacy_Core.fill;

var content = Css_Legacy_Core.content;

var maxContent = Css_Legacy_Core.maxContent;

var minContent = Css_Legacy_Core.minContent;

var fitContent = Css_Legacy_Core.fitContent;

var all = Css_Legacy_Core.all;

var round = Css_Legacy_Core.round;

var miter = Css_Legacy_Core.miter;

var bevel = Css_Legacy_Core.bevel;

var butt = Css_Legacy_Core.butt;

var square = Css_Legacy_Core.square;

var thin = Css_Legacy_Core.thin;

var extraLight = Css_Legacy_Core.extraLight;

var light = Css_Legacy_Core.light;

var medium = Css_Legacy_Core.medium;

var semiBold = Css_Legacy_Core.semiBold;

var bold = Css_Legacy_Core.bold;

var extraBold = Css_Legacy_Core.extraBold;

var lighter = Css_Legacy_Core.lighter;

var bolder = Css_Legacy_Core.bolder;

var fr = Css_Legacy_Core.fr;

var vw = Css_Legacy_Core.vw;

var localUrl = Css_Legacy_Core.localUrl;

var url = Css_Legacy_Core.url;

var linear = Css_Legacy_Core.linear;

var ease = Css_Legacy_Core.ease;

var easeIn = Css_Legacy_Core.easeIn;

var easeOut = Css_Legacy_Core.easeOut;

var easeInOut = Css_Legacy_Core.easeInOut;

var stepStart = Css_Legacy_Core.stepStart;

var stepEnd = Css_Legacy_Core.stepEnd;

var steps = Css_Legacy_Core.steps;

var cubicBezier = Css_Legacy_Core.cubicBezier;

var marginBox = Css_Legacy_Core.marginBox;

var fillBox = Css_Legacy_Core.fillBox;

var strokeBox = Css_Legacy_Core.strokeBox;

var viewBox = Css_Legacy_Core.viewBox;

var translate = Css_Legacy_Core.translate;

var translate3d = Css_Legacy_Core.translate3d;

var translateX = Css_Legacy_Core.translateX;

var translateY = Css_Legacy_Core.translateY;

var translateZ = Css_Legacy_Core.translateZ;

var scale = Css_Legacy_Core.scale;

var scale3d = Css_Legacy_Core.scale3d;

var scaleX = Css_Legacy_Core.scaleX;

var scaleY = Css_Legacy_Core.scaleY;

var scaleZ = Css_Legacy_Core.scaleZ;

var rotate = Css_Legacy_Core.rotate;

var rotate3d = Css_Legacy_Core.rotate3d;

var rotateX = Css_Legacy_Core.rotateX;

var rotateY = Css_Legacy_Core.rotateY;

var rotateZ = Css_Legacy_Core.rotateZ;

var skew = Css_Legacy_Core.skew;

var skewX = Css_Legacy_Core.skewX;

var skewY = Css_Legacy_Core.skewY;

var linearGradient = Css_Legacy_Core.linearGradient;

var repeatingLinearGradient = Css_Legacy_Core.repeatingLinearGradient;

var radialGradient = Css_Legacy_Core.radialGradient;

var repeatingRadialGradient = Css_Legacy_Core.repeatingRadialGradient;

var areas = Css_Legacy_Core.areas;

var ident = Css_Legacy_Core.ident;

var numIdent = Css_Legacy_Core.numIdent;

var contextMenu = Css_Legacy_Core.contextMenu;

var help = Css_Legacy_Core.help;

var pointer = Css_Legacy_Core.pointer;

var progress = Css_Legacy_Core.progress;

var wait = Css_Legacy_Core.wait;

var cell = Css_Legacy_Core.cell;

var crosshair = Css_Legacy_Core.crosshair;

var verticalText = Css_Legacy_Core.verticalText;

var alias = Css_Legacy_Core.alias;

var copy = Css_Legacy_Core.copy;

var move = Css_Legacy_Core.move;

var noDrop = Css_Legacy_Core.noDrop;

var notAllowed = Css_Legacy_Core.notAllowed;

var grab = Css_Legacy_Core.grab;

var grabbing = Css_Legacy_Core.grabbing;

var allScroll = Css_Legacy_Core.allScroll;

var colResize = Css_Legacy_Core.colResize;

var rowResize = Css_Legacy_Core.rowResize;

var nResize = Css_Legacy_Core.nResize;

var eResize = Css_Legacy_Core.eResize;

var sResize = Css_Legacy_Core.sResize;

var wResize = Css_Legacy_Core.wResize;

var neResize = Css_Legacy_Core.neResize;

var nwResize = Css_Legacy_Core.nwResize;

var seResize = Css_Legacy_Core.seResize;

var swResize = Css_Legacy_Core.swResize;

var ewResize = Css_Legacy_Core.ewResize;

var nsResize = Css_Legacy_Core.nsResize;

var neswResize = Css_Legacy_Core.neswResize;

var nwseResize = Css_Legacy_Core.nwseResize;

var zoomIn = Css_Legacy_Core.zoomIn;

var zoomOut = Css_Legacy_Core.zoomOut;

var flex3 = Css_Legacy_Core.flex3;

var border = Css_Legacy_Core.border;

var borderTop = Css_Legacy_Core.borderTop;

var backgroundSize = Css_Legacy_Core.backgroundSize;

var textDecoration = Css_Legacy_Core.textDecoration;

var background = Css_Legacy_Core.background;

var backgrounds = Css_Legacy_Core.backgrounds;

var gridAutoColumns = Css_Legacy_Core.gridAutoColumns;

var gridAutoRows = Css_Legacy_Core.gridAutoRows;

var gridTemplateColumns = Css_Legacy_Core.gridTemplateColumns;

var gridTemplateRows = Css_Legacy_Core.gridTemplateRows;

var Calc = Css_Legacy_Core.Calc;

var size = Css_Legacy_Core.size;

var filter = Css_Legacy_Core.filter;

var Transition = Css_Legacy_Core.Transition;

var transitionValue = Css_Legacy_Core.transitionValue;

var transitionList = Css_Legacy_Core.transitionList;

var transition = Css_Legacy_Core.transition;

var transitions = Css_Legacy_Core.transitions;

var Animation = Css_Legacy_Core.Animation;

var animationValue = Css_Legacy_Core.animationValue;

var animation = Css_Legacy_Core.animation;

var animations = Css_Legacy_Core.animations;

var animationName = Css_Legacy_Core.animationName;

var SVG = Css_Legacy_Core.SVG;

var aliceblue = Css_Colors.aliceblue;

var antiquewhite = Css_Colors.antiquewhite;

var aqua = Css_Colors.aqua;

var aquamarine = Css_Colors.aquamarine;

var azure = Css_Colors.azure;

var beige = Css_Colors.beige;

var bisque = Css_Colors.bisque;

var black = Css_Colors.black;

var blanchedalmond = Css_Colors.blanchedalmond;

var blue = Css_Colors.blue;

var blueviolet = Css_Colors.blueviolet;

var brown = Css_Colors.brown;

var burlywood = Css_Colors.burlywood;

var cadetblue = Css_Colors.cadetblue;

var chartreuse = Css_Colors.chartreuse;

var chocolate = Css_Colors.chocolate;

var coral = Css_Colors.coral;

var cornflowerblue = Css_Colors.cornflowerblue;

var cornsilk = Css_Colors.cornsilk;

var crimson = Css_Colors.crimson;

var cyan = Css_Colors.cyan;

var darkblue = Css_Colors.darkblue;

var darkcyan = Css_Colors.darkcyan;

var darkgoldenrod = Css_Colors.darkgoldenrod;

var darkgray = Css_Colors.darkgray;

var darkgreen = Css_Colors.darkgreen;

var darkgrey = Css_Colors.darkgrey;

var darkkhaki = Css_Colors.darkkhaki;

var darkmagenta = Css_Colors.darkmagenta;

var darkolivegreen = Css_Colors.darkolivegreen;

var darkorange = Css_Colors.darkorange;

var darkorchid = Css_Colors.darkorchid;

var darkred = Css_Colors.darkred;

var darksalmon = Css_Colors.darksalmon;

var darkseagreen = Css_Colors.darkseagreen;

var darkslateblue = Css_Colors.darkslateblue;

var darkslategray = Css_Colors.darkslategray;

var darkslategrey = Css_Colors.darkslategrey;

var darkturquoise = Css_Colors.darkturquoise;

var darkviolet = Css_Colors.darkviolet;

var deeppink = Css_Colors.deeppink;

var deepskyblue = Css_Colors.deepskyblue;

var dimgray = Css_Colors.dimgray;

var dimgrey = Css_Colors.dimgrey;

var dodgerblue = Css_Colors.dodgerblue;

var firebrick = Css_Colors.firebrick;

var floralwhite = Css_Colors.floralwhite;

var forestgreen = Css_Colors.forestgreen;

var fuchsia = Css_Colors.fuchsia;

var gainsboro = Css_Colors.gainsboro;

var ghostwhite = Css_Colors.ghostwhite;

var gold = Css_Colors.gold;

var goldenrod = Css_Colors.goldenrod;

var gray = Css_Colors.gray;

var green = Css_Colors.green;

var greenyellow = Css_Colors.greenyellow;

var grey = Css_Colors.grey;

var honeydew = Css_Colors.honeydew;

var hotpink = Css_Colors.hotpink;

var indianred = Css_Colors.indianred;

var indigo = Css_Colors.indigo;

var ivory = Css_Colors.ivory;

var khaki = Css_Colors.khaki;

var lavender = Css_Colors.lavender;

var lavenderblush = Css_Colors.lavenderblush;

var lawngreen = Css_Colors.lawngreen;

var lemonchiffon = Css_Colors.lemonchiffon;

var lightblue = Css_Colors.lightblue;

var lightcoral = Css_Colors.lightcoral;

var lightcyan = Css_Colors.lightcyan;

var lightgoldenrodyellow = Css_Colors.lightgoldenrodyellow;

var lightgray = Css_Colors.lightgray;

var lightgreen = Css_Colors.lightgreen;

var lightgrey = Css_Colors.lightgrey;

var lightpink = Css_Colors.lightpink;

var lightsalmon = Css_Colors.lightsalmon;

var lightseagreen = Css_Colors.lightseagreen;

var lightskyblue = Css_Colors.lightskyblue;

var lightslategray = Css_Colors.lightslategray;

var lightslategrey = Css_Colors.lightslategrey;

var lightsteelblue = Css_Colors.lightsteelblue;

var lightyellow = Css_Colors.lightyellow;

var lime = Css_Colors.lime;

var limegreen = Css_Colors.limegreen;

var linen = Css_Colors.linen;

var magenta = Css_Colors.magenta;

var maroon = Css_Colors.maroon;

var mediumaquamarine = Css_Colors.mediumaquamarine;

var mediumblue = Css_Colors.mediumblue;

var mediumorchid = Css_Colors.mediumorchid;

var mediumpurple = Css_Colors.mediumpurple;

var mediumseagreen = Css_Colors.mediumseagreen;

var mediumslateblue = Css_Colors.mediumslateblue;

var mediumspringgreen = Css_Colors.mediumspringgreen;

var mediumturquoise = Css_Colors.mediumturquoise;

var mediumvioletred = Css_Colors.mediumvioletred;

var midnightblue = Css_Colors.midnightblue;

var mintcream = Css_Colors.mintcream;

var mistyrose = Css_Colors.mistyrose;

var moccasin = Css_Colors.moccasin;

var navajowhite = Css_Colors.navajowhite;

var navy = Css_Colors.navy;

var oldlace = Css_Colors.oldlace;

var olive = Css_Colors.olive;

var olivedrab = Css_Colors.olivedrab;

var orange = Css_Colors.orange;

var orangered = Css_Colors.orangered;

var orchid = Css_Colors.orchid;

var palegoldenrod = Css_Colors.palegoldenrod;

var palegreen = Css_Colors.palegreen;

var paleturquoise = Css_Colors.paleturquoise;

var palevioletred = Css_Colors.palevioletred;

var papayawhip = Css_Colors.papayawhip;

var peachpuff = Css_Colors.peachpuff;

var peru = Css_Colors.peru;

var pink = Css_Colors.pink;

var plum = Css_Colors.plum;

var powderblue = Css_Colors.powderblue;

var purple = Css_Colors.purple;

var rebeccapurple = Css_Colors.rebeccapurple;

var red = Css_Colors.red;

var rosybrown = Css_Colors.rosybrown;

var royalblue = Css_Colors.royalblue;

var saddlebrown = Css_Colors.saddlebrown;

var salmon = Css_Colors.salmon;

var sandybrown = Css_Colors.sandybrown;

var seagreen = Css_Colors.seagreen;

var seashell = Css_Colors.seashell;

var sienna = Css_Colors.sienna;

var silver = Css_Colors.silver;

var skyblue = Css_Colors.skyblue;

var slateblue = Css_Colors.slateblue;

var slategray = Css_Colors.slategray;

var slategrey = Css_Colors.slategrey;

var snow = Css_Colors.snow;

var springgreen = Css_Colors.springgreen;

var steelblue = Css_Colors.steelblue;

var tan = Css_Colors.tan;

var teal = Css_Colors.teal;

var thistle = Css_Colors.thistle;

var tomato = Css_Colors.tomato;

var turquoise = Css_Colors.turquoise;

var violet = Css_Colors.violet;

var wheat = Css_Colors.wheat;

var white = Css_Colors.white;

var whitesmoke = Css_Colors.whitesmoke;

var yellow = Css_Colors.yellow;

var yellowgreen = Css_Colors.yellowgreen;

var transparent = Css_Colors.transparent;

var $$global = include.$$global;

var merge = include.merge;

var style = include.style;

var keyframes = include.keyframes;

exports.Types = Types;
exports.Make = Make;
exports.toJson = toJson;
exports.important = important;
exports.label = label;
exports.Shadow = Shadow;
exports.unsafe = unsafe;
exports.alignContent = alignContent;
exports.alignItems = alignItems;
exports.alignSelf = alignSelf;
exports.animationDelay = animationDelay;
exports.animationDirection = animationDirection;
exports.animationDuration = animationDuration;
exports.animationFillMode = animationFillMode;
exports.animationIterationCount = animationIterationCount;
exports.animationPlayState = animationPlayState;
exports.animationTimingFunction = animationTimingFunction;
exports.backdropFilter = backdropFilter;
exports.backfaceVisibility = backfaceVisibility;
exports.backgroundAttachment = backgroundAttachment;
exports.backgroundColor = backgroundColor;
exports.backgroundClip = backgroundClip;
exports.backgroundImage = backgroundImage;
exports.backgroundOrigin = backgroundOrigin;
exports.backgroundPosition = backgroundPosition;
exports.backgroundPositions = backgroundPositions;
exports.backgroundPosition4 = backgroundPosition4;
exports.backgroundRepeat = backgroundRepeat;
exports.borderBottom = borderBottom;
exports.borderBottomColor = borderBottomColor;
exports.borderBottomLeftRadius = borderBottomLeftRadius;
exports.borderBottomRightRadius = borderBottomRightRadius;
exports.borderBottomStyle = borderBottomStyle;
exports.borderBottomWidth = borderBottomWidth;
exports.borderCollapse = borderCollapse;
exports.borderColor = borderColor;
exports.borderLeft = borderLeft;
exports.borderLeftColor = borderLeftColor;
exports.borderLeftStyle = borderLeftStyle;
exports.borderLeftWidth = borderLeftWidth;
exports.borderRight = borderRight;
exports.borderRightColor = borderRightColor;
exports.borderRightStyle = borderRightStyle;
exports.borderRightWidth = borderRightWidth;
exports.borderRadius = borderRadius;
exports.borderSpacing = borderSpacing;
exports.borderStyle = borderStyle;
exports.borderTopColor = borderTopColor;
exports.borderTopLeftRadius = borderTopLeftRadius;
exports.borderTopRightRadius = borderTopRightRadius;
exports.borderTopStyle = borderTopStyle;
exports.borderTopWidth = borderTopWidth;
exports.borderWidth = borderWidth;
exports.bottom = bottom;
exports.boxSizing = boxSizing;
exports.boxShadow = boxShadow;
exports.boxShadows = boxShadows;
exports.clear = clear;
exports.clipPath = clipPath;
exports.color = color;
exports.columnCount = columnCount;
exports.contentRule = contentRule;
exports.contentRules = contentRules;
exports.counterIncrement = counterIncrement;
exports.countersIncrement = countersIncrement;
exports.counterReset = counterReset;
exports.countersReset = countersReset;
exports.counterSet = counterSet;
exports.countersSet = countersSet;
exports.cursor = cursor;
exports.direction = direction;
exports.display = display;
exports.flex = flex;
exports.flexBasis = flexBasis;
exports.flexDirection = flexDirection;
exports.flexGrow = flexGrow;
exports.flexShrink = flexShrink;
exports.flexWrap = flexWrap;
exports.$$float = $$float;
exports.fontFamily = fontFamily;
exports.fontFamilies = fontFamilies;
exports.fontSize = fontSize;
exports.fontStyle = fontStyle;
exports.fontVariant = fontVariant;
exports.fontWeight = fontWeight;
exports.gridArea = gridArea;
exports.gridArea2 = gridArea2;
exports.gridArea3 = gridArea3;
exports.gridArea4 = gridArea4;
exports.gridAutoFlow = gridAutoFlow;
exports.gridColumn = gridColumn;
exports.gridColumnEnd = gridColumnEnd;
exports.columnGap = columnGap;
exports.gridColumnGap = gridColumnGap;
exports.gridColumnStart = gridColumnStart;
exports.gridGap = gridGap;
exports.gridRow = gridRow;
exports.gridRowEnd = gridRowEnd;
exports.gridRowGap = gridRowGap;
exports.gridRowStart = gridRowStart;
exports.gridTemplateAreas = gridTemplateAreas;
exports.height = height;
exports.justifyContent = justifyContent;
exports.justifyItems = justifyItems;
exports.justifySelf = justifySelf;
exports.left = left;
exports.letterSpacing = letterSpacing;
exports.lineHeight = lineHeight;
exports.listStyle = listStyle;
exports.listStyleImage = listStyleImage;
exports.listStyleType = listStyleType;
exports.listStylePosition = listStylePosition;
exports.margin = margin;
exports.margin2 = margin2;
exports.margin3 = margin3;
exports.margin4 = margin4;
exports.marginLeft = marginLeft;
exports.marginRight = marginRight;
exports.marginTop = marginTop;
exports.marginBottom = marginBottom;
exports.maxHeight = maxHeight;
exports.maxWidth = maxWidth;
exports.minHeight = minHeight;
exports.minWidth = minWidth;
exports.objectFit = objectFit;
exports.objectPosition = objectPosition;
exports.opacity = opacity;
exports.order = order;
exports.outline = outline;
exports.outlineColor = outlineColor;
exports.outlineOffset = outlineOffset;
exports.outlineStyle = outlineStyle;
exports.outlineWidth = outlineWidth;
exports.overflow = overflow;
exports.overflowX = overflowX;
exports.overflowY = overflowY;
exports.overflowWrap = overflowWrap;
exports.padding = padding;
exports.padding2 = padding2;
exports.padding3 = padding3;
exports.padding4 = padding4;
exports.paddingLeft = paddingLeft;
exports.paddingRight = paddingRight;
exports.paddingTop = paddingTop;
exports.paddingBottom = paddingBottom;
exports.perspective = perspective;
exports.perspectiveOrigin = perspectiveOrigin;
exports.pointerEvents = pointerEvents;
exports.position = position;
exports.resize = resize;
exports.right = right;
exports.tableLayout = tableLayout;
exports.textAlign = textAlign;
exports.textDecorationColor = textDecorationColor;
exports.textDecorationLine = textDecorationLine;
exports.textDecorationStyle = textDecorationStyle;
exports.textIndent = textIndent;
exports.textOverflow = textOverflow;
exports.textShadow = textShadow;
exports.textShadows = textShadows;
exports.textTransform = textTransform;
exports.top = top;
exports.transform = transform;
exports.transforms = transforms;
exports.transformOrigin = transformOrigin;
exports.transformOrigin3d = transformOrigin3d;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
exports.transformStyle = transformStyle;
exports.transitionTimingFunction = transitionTimingFunction;
exports.userSelect = userSelect;
exports.verticalAlign = verticalAlign;
exports.visibility = visibility;
exports.width = width;
exports.whiteSpace = whiteSpace;
exports.wordBreak = wordBreak;
exports.wordSpacing = wordSpacing;
exports.wordWrap = wordWrap;
exports.zIndex = zIndex;
exports.selector = selector;
exports.media = media;
exports.active = active;
exports.checked = checked;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
exports.defined = defined;
exports.disabled = disabled;
exports.empty = empty;
exports.enabled = enabled;
exports.first = first;
exports.firstChild = firstChild;
exports.firstOfType = firstOfType;
exports.focus = focus;
exports.focusWithin = focusWithin;
exports.host = host;
exports.hover = hover;
exports.indeterminate = indeterminate;
exports.inRange = inRange;
exports.invalid = invalid;
exports.lang = lang;
exports.lastChild = lastChild;
exports.lastOfType = lastOfType;
exports.link = link;
exports.not__ = not__;
exports.Nth = Nth;
exports.nthChild = nthChild;
exports.nthLastChild = nthLastChild;
exports.nthLastOfType = nthLastOfType;
exports.nthOfType = nthOfType;
exports.onlyChild = onlyChild;
exports.onlyOfType = onlyOfType;
exports.optional = optional;
exports.outOfRange = outOfRange;
exports.readOnly = readOnly;
exports.readWrite = readWrite;
exports.required = required;
exports.root = root;
exports.scope = scope;
exports.target = target;
exports.valid = valid;
exports.visited = visited;
exports.after = after;
exports.before = before;
exports.firstLetter = firstLetter;
exports.firstLine = firstLine;
exports.placeholder = placeholder;
exports.selection = selection;
exports.child = child;
exports.children = children;
exports.directSibling = directSibling;
exports.siblings = siblings;
exports.anyLink = anyLink;
exports.initial = initial;
exports.inherit_ = inherit_;
exports.unset = unset;
exports.$$var = $$var;
exports.varDefault = varDefault;
exports.auto = auto;
exports.none = none;
exports.text = text;
exports.pct = pct;
exports.ch = ch;
exports.cm = cm;
exports.em = em;
exports.ex = ex;
exports.mm = mm;
exports.pt = pt;
exports.px = px;
exports.pxFloat = pxFloat;
exports.rem = rem;
exports.vh = vh;
exports.vmin = vmin;
exports.vmax = vmax;
exports.zero = zero;
exports.deg = deg;
exports.rad = rad;
exports.grad = grad;
exports.turn = turn;
exports.ltr = ltr;
exports.rtl = rtl;
exports.absolute = absolute;
exports.relative = relative;
exports.$$static = $$static;
exports.fixed = fixed;
exports.sticky = sticky;
exports.horizontal = horizontal;
exports.vertical = vertical;
exports.smallCaps = smallCaps;
exports.italic = italic;
exports.oblique = oblique;
exports.hidden = hidden;
exports.visible = visible;
exports.scroll = scroll;
exports.rgb = rgb;
exports.rgba = rgba;
exports.hsl = hsl;
exports.hsla = hsla;
exports.hex = hex;
exports.currentColor = currentColor;
exports.local = local;
exports.paddingBox = paddingBox;
exports.borderBox = borderBox;
exports.contentBox = contentBox;
exports.noRepeat = noRepeat;
exports.space = space;
exports.repeat = repeat;
exports.minmax = minmax;
exports.repeatX = repeatX;
exports.repeatY = repeatY;
exports.contain = contain;
exports.cover = cover;
exports.row = row;
exports.rowReverse = rowReverse;
exports.column = column;
exports.columnReverse = columnReverse;
exports.wrap = wrap;
exports.nowrap = nowrap;
exports.wrapReverse = wrapReverse;
exports.inline = inline;
exports.block = block;
exports.contents = contents;
exports.flexBox = flexBox;
exports.grid = grid;
exports.inlineBlock = inlineBlock;
exports.inlineFlex = inlineFlex;
exports.inlineGrid = inlineGrid;
exports.inlineTable = inlineTable;
exports.listItem = listItem;
exports.runIn = runIn;
exports.table = table;
exports.tableCaption = tableCaption;
exports.tableColumnGroup = tableColumnGroup;
exports.tableHeaderGroup = tableHeaderGroup;
exports.tableFooterGroup = tableFooterGroup;
exports.tableRowGroup = tableRowGroup;
exports.tableCell = tableCell;
exports.tableColumn = tableColumn;
exports.tableRow = tableRow;
exports.flexStart = flexStart;
exports.flexEnd = flexEnd;
exports.center = center;
exports.stretch = stretch;
exports.spaceBetween = spaceBetween;
exports.spaceAround = spaceAround;
exports.spaceEvenly = spaceEvenly;
exports.baseline = baseline;
exports.forwards = forwards;
exports.backwards = backwards;
exports.both = both;
exports.infinite = infinite;
exports.count = count;
exports.paused = paused;
exports.running = running;
exports.inside = inside;
exports.outside = outside;
exports.solid = solid;
exports.dotted = dotted;
exports.dashed = dashed;
exports.underline = underline;
exports.overline = overline;
exports.lineThrough = lineThrough;
exports.clip = clip;
exports.ellipsis = ellipsis;
exports.wavy = wavy;
exports.$$double = $$double;
exports.uppercase = uppercase;
exports.lowercase = lowercase;
exports.capitalize = capitalize;
exports.sub = sub;
exports.$$super = $$super;
exports.textTop = textTop;
exports.textBottom = textBottom;
exports.middle = middle;
exports.normal = normal;
exports.breakAll = breakAll;
exports.keepAll = keepAll;
exports.breakWord = breakWord;
exports.reverse = reverse;
exports.alternate = alternate;
exports.alternateReverse = alternateReverse;
exports.fill = fill;
exports.content = content;
exports.maxContent = maxContent;
exports.minContent = minContent;
exports.fitContent = fitContent;
exports.all = all;
exports.round = round;
exports.miter = miter;
exports.bevel = bevel;
exports.butt = butt;
exports.square = square;
exports.thin = thin;
exports.extraLight = extraLight;
exports.light = light;
exports.medium = medium;
exports.semiBold = semiBold;
exports.bold = bold;
exports.extraBold = extraBold;
exports.lighter = lighter;
exports.bolder = bolder;
exports.fr = fr;
exports.vw = vw;
exports.localUrl = localUrl;
exports.url = url;
exports.linear = linear;
exports.ease = ease;
exports.easeIn = easeIn;
exports.easeOut = easeOut;
exports.easeInOut = easeInOut;
exports.stepStart = stepStart;
exports.stepEnd = stepEnd;
exports.steps = steps;
exports.cubicBezier = cubicBezier;
exports.marginBox = marginBox;
exports.fillBox = fillBox;
exports.strokeBox = strokeBox;
exports.viewBox = viewBox;
exports.translate = translate;
exports.translate3d = translate3d;
exports.translateX = translateX;
exports.translateY = translateY;
exports.translateZ = translateZ;
exports.scale = scale;
exports.scale3d = scale3d;
exports.scaleX = scaleX;
exports.scaleY = scaleY;
exports.scaleZ = scaleZ;
exports.rotate = rotate;
exports.rotate3d = rotate3d;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.skew = skew;
exports.skewX = skewX;
exports.skewY = skewY;
exports.linearGradient = linearGradient;
exports.repeatingLinearGradient = repeatingLinearGradient;
exports.radialGradient = radialGradient;
exports.repeatingRadialGradient = repeatingRadialGradient;
exports.areas = areas;
exports.ident = ident;
exports.numIdent = numIdent;
exports.contextMenu = contextMenu;
exports.help = help;
exports.pointer = pointer;
exports.progress = progress;
exports.wait = wait;
exports.cell = cell;
exports.crosshair = crosshair;
exports.verticalText = verticalText;
exports.alias = alias;
exports.copy = copy;
exports.move = move;
exports.noDrop = noDrop;
exports.notAllowed = notAllowed;
exports.grab = grab;
exports.grabbing = grabbing;
exports.allScroll = allScroll;
exports.colResize = colResize;
exports.rowResize = rowResize;
exports.nResize = nResize;
exports.eResize = eResize;
exports.sResize = sResize;
exports.wResize = wResize;
exports.neResize = neResize;
exports.nwResize = nwResize;
exports.seResize = seResize;
exports.swResize = swResize;
exports.ewResize = ewResize;
exports.nsResize = nsResize;
exports.neswResize = neswResize;
exports.nwseResize = nwseResize;
exports.zoomIn = zoomIn;
exports.zoomOut = zoomOut;
exports.flex3 = flex3;
exports.border = border;
exports.borderTop = borderTop;
exports.backgroundSize = backgroundSize;
exports.textDecoration = textDecoration;
exports.background = background;
exports.backgrounds = backgrounds;
exports.gridAutoColumns = gridAutoColumns;
exports.gridAutoRows = gridAutoRows;
exports.gridTemplateColumns = gridTemplateColumns;
exports.gridTemplateRows = gridTemplateRows;
exports.Calc = Calc;
exports.size = size;
exports.filter = filter;
exports.Transition = Transition;
exports.transitionValue = transitionValue;
exports.transitionList = transitionList;
exports.transition = transition;
exports.transitions = transitions;
exports.Animation = Animation;
exports.animationValue = animationValue;
exports.animation = animation;
exports.animations = animations;
exports.animationName = animationName;
exports.SVG = SVG;
exports.aliceblue = aliceblue;
exports.antiquewhite = antiquewhite;
exports.aqua = aqua;
exports.aquamarine = aquamarine;
exports.azure = azure;
exports.beige = beige;
exports.bisque = bisque;
exports.black = black;
exports.blanchedalmond = blanchedalmond;
exports.blue = blue;
exports.blueviolet = blueviolet;
exports.brown = brown;
exports.burlywood = burlywood;
exports.cadetblue = cadetblue;
exports.chartreuse = chartreuse;
exports.chocolate = chocolate;
exports.coral = coral;
exports.cornflowerblue = cornflowerblue;
exports.cornsilk = cornsilk;
exports.crimson = crimson;
exports.cyan = cyan;
exports.darkblue = darkblue;
exports.darkcyan = darkcyan;
exports.darkgoldenrod = darkgoldenrod;
exports.darkgray = darkgray;
exports.darkgreen = darkgreen;
exports.darkgrey = darkgrey;
exports.darkkhaki = darkkhaki;
exports.darkmagenta = darkmagenta;
exports.darkolivegreen = darkolivegreen;
exports.darkorange = darkorange;
exports.darkorchid = darkorchid;
exports.darkred = darkred;
exports.darksalmon = darksalmon;
exports.darkseagreen = darkseagreen;
exports.darkslateblue = darkslateblue;
exports.darkslategray = darkslategray;
exports.darkslategrey = darkslategrey;
exports.darkturquoise = darkturquoise;
exports.darkviolet = darkviolet;
exports.deeppink = deeppink;
exports.deepskyblue = deepskyblue;
exports.dimgray = dimgray;
exports.dimgrey = dimgrey;
exports.dodgerblue = dodgerblue;
exports.firebrick = firebrick;
exports.floralwhite = floralwhite;
exports.forestgreen = forestgreen;
exports.fuchsia = fuchsia;
exports.gainsboro = gainsboro;
exports.ghostwhite = ghostwhite;
exports.gold = gold;
exports.goldenrod = goldenrod;
exports.gray = gray;
exports.green = green;
exports.greenyellow = greenyellow;
exports.grey = grey;
exports.honeydew = honeydew;
exports.hotpink = hotpink;
exports.indianred = indianred;
exports.indigo = indigo;
exports.ivory = ivory;
exports.khaki = khaki;
exports.lavender = lavender;
exports.lavenderblush = lavenderblush;
exports.lawngreen = lawngreen;
exports.lemonchiffon = lemonchiffon;
exports.lightblue = lightblue;
exports.lightcoral = lightcoral;
exports.lightcyan = lightcyan;
exports.lightgoldenrodyellow = lightgoldenrodyellow;
exports.lightgray = lightgray;
exports.lightgreen = lightgreen;
exports.lightgrey = lightgrey;
exports.lightpink = lightpink;
exports.lightsalmon = lightsalmon;
exports.lightseagreen = lightseagreen;
exports.lightskyblue = lightskyblue;
exports.lightslategray = lightslategray;
exports.lightslategrey = lightslategrey;
exports.lightsteelblue = lightsteelblue;
exports.lightyellow = lightyellow;
exports.lime = lime;
exports.limegreen = limegreen;
exports.linen = linen;
exports.magenta = magenta;
exports.maroon = maroon;
exports.mediumaquamarine = mediumaquamarine;
exports.mediumblue = mediumblue;
exports.mediumorchid = mediumorchid;
exports.mediumpurple = mediumpurple;
exports.mediumseagreen = mediumseagreen;
exports.mediumslateblue = mediumslateblue;
exports.mediumspringgreen = mediumspringgreen;
exports.mediumturquoise = mediumturquoise;
exports.mediumvioletred = mediumvioletred;
exports.midnightblue = midnightblue;
exports.mintcream = mintcream;
exports.mistyrose = mistyrose;
exports.moccasin = moccasin;
exports.navajowhite = navajowhite;
exports.navy = navy;
exports.oldlace = oldlace;
exports.olive = olive;
exports.olivedrab = olivedrab;
exports.orange = orange;
exports.orangered = orangered;
exports.orchid = orchid;
exports.palegoldenrod = palegoldenrod;
exports.palegreen = palegreen;
exports.paleturquoise = paleturquoise;
exports.palevioletred = palevioletred;
exports.papayawhip = papayawhip;
exports.peachpuff = peachpuff;
exports.peru = peru;
exports.pink = pink;
exports.plum = plum;
exports.powderblue = powderblue;
exports.purple = purple;
exports.rebeccapurple = rebeccapurple;
exports.red = red;
exports.rosybrown = rosybrown;
exports.royalblue = royalblue;
exports.saddlebrown = saddlebrown;
exports.salmon = salmon;
exports.sandybrown = sandybrown;
exports.seagreen = seagreen;
exports.seashell = seashell;
exports.sienna = sienna;
exports.silver = silver;
exports.skyblue = skyblue;
exports.slateblue = slateblue;
exports.slategray = slategray;
exports.slategrey = slategrey;
exports.snow = snow;
exports.springgreen = springgreen;
exports.steelblue = steelblue;
exports.tan = tan;
exports.teal = teal;
exports.thistle = thistle;
exports.tomato = tomato;
exports.turquoise = turquoise;
exports.violet = violet;
exports.wheat = wheat;
exports.white = white;
exports.whitesmoke = whitesmoke;
exports.yellow = yellow;
exports.yellowgreen = yellowgreen;
exports.transparent = transparent;
exports.$$global = $$global;
exports.insertRule = insertRule;
exports.merge = merge;
exports.style = style;
exports.keyframes = keyframes;
exports.fontFace = fontFace;
/* include Not a pure module */
