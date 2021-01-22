'use strict';

var Css_Colors = require("bs-css/src/Css_Colors.bs.js");
var Css_Js_Core = require("bs-css/src/Css_Js_Core.bs.js");
var Css = require("@emotion/css");

var include = Css_Js_Core.Make({
      mergeStyles: Css.css.cx,
      injectRule: Css.css.injectGlobal,
      injectRaw: Css.css.injectGlobal,
      make: Css.css.css,
      makeKeyFrames: Css.css.keyframes
    });

var insertRule = include.insertRule;

function fontFace(fontFamily, src, fontStyle, fontWeight, fontDisplay, param) {
  insertRule(Css_Js_Core.fontFace(fontFamily, src, fontStyle, fontWeight, fontDisplay, undefined));
  return fontFamily;
}

var Types = Css_Js_Core.Types;

var Make = Css_Js_Core.Make;

var toJson = Css_Js_Core.toJson;

var important = Css_Js_Core.important;

var label = Css_Js_Core.label;

var Shadow = Css_Js_Core.Shadow;

var unsafe = Css_Js_Core.unsafe;

var alignContent = Css_Js_Core.alignContent;

var alignItems = Css_Js_Core.alignItems;

var alignSelf = Css_Js_Core.alignSelf;

var animationDelay = Css_Js_Core.animationDelay;

var animationDirection = Css_Js_Core.animationDirection;

var animationDuration = Css_Js_Core.animationDuration;

var animationFillMode = Css_Js_Core.animationFillMode;

var animationIterationCount = Css_Js_Core.animationIterationCount;

var animationPlayState = Css_Js_Core.animationPlayState;

var animationTimingFunction = Css_Js_Core.animationTimingFunction;

var backdropFilter = Css_Js_Core.backdropFilter;

var backfaceVisibility = Css_Js_Core.backfaceVisibility;

var backgroundAttachment = Css_Js_Core.backgroundAttachment;

var backgroundColor = Css_Js_Core.backgroundColor;

var backgroundClip = Css_Js_Core.backgroundClip;

var backgroundImage = Css_Js_Core.backgroundImage;

var backgroundOrigin = Css_Js_Core.backgroundOrigin;

var backgroundPosition = Css_Js_Core.backgroundPosition;

var backgroundPositions = Css_Js_Core.backgroundPositions;

var backgroundPosition4 = Css_Js_Core.backgroundPosition4;

var backgroundRepeat = Css_Js_Core.backgroundRepeat;

var borderBottom = Css_Js_Core.borderBottom;

var borderBottomColor = Css_Js_Core.borderBottomColor;

var borderBottomLeftRadius = Css_Js_Core.borderBottomLeftRadius;

var borderBottomRightRadius = Css_Js_Core.borderBottomRightRadius;

var borderBottomStyle = Css_Js_Core.borderBottomStyle;

var borderBottomWidth = Css_Js_Core.borderBottomWidth;

var borderCollapse = Css_Js_Core.borderCollapse;

var borderColor = Css_Js_Core.borderColor;

var borderLeft = Css_Js_Core.borderLeft;

var borderLeftColor = Css_Js_Core.borderLeftColor;

var borderLeftStyle = Css_Js_Core.borderLeftStyle;

var borderLeftWidth = Css_Js_Core.borderLeftWidth;

var borderRight = Css_Js_Core.borderRight;

var borderRightColor = Css_Js_Core.borderRightColor;

var borderRightStyle = Css_Js_Core.borderRightStyle;

var borderRightWidth = Css_Js_Core.borderRightWidth;

var borderRadius = Css_Js_Core.borderRadius;

var borderSpacing = Css_Js_Core.borderSpacing;

var borderStyle = Css_Js_Core.borderStyle;

var borderTopColor = Css_Js_Core.borderTopColor;

var borderTopLeftRadius = Css_Js_Core.borderTopLeftRadius;

var borderTopRightRadius = Css_Js_Core.borderTopRightRadius;

var borderTopStyle = Css_Js_Core.borderTopStyle;

var borderTopWidth = Css_Js_Core.borderTopWidth;

var borderWidth = Css_Js_Core.borderWidth;

var bottom = Css_Js_Core.bottom;

var boxSizing = Css_Js_Core.boxSizing;

var boxShadow = Css_Js_Core.boxShadow;

var boxShadows = Css_Js_Core.boxShadows;

var clear = Css_Js_Core.clear;

var clipPath = Css_Js_Core.clipPath;

var color = Css_Js_Core.color;

var columnCount = Css_Js_Core.columnCount;

var contentRule = Css_Js_Core.contentRule;

var contentRules = Css_Js_Core.contentRules;

var counterIncrement = Css_Js_Core.counterIncrement;

var countersIncrement = Css_Js_Core.countersIncrement;

var counterReset = Css_Js_Core.counterReset;

var countersReset = Css_Js_Core.countersReset;

var counterSet = Css_Js_Core.counterSet;

var countersSet = Css_Js_Core.countersSet;

var cursor = Css_Js_Core.cursor;

var direction = Css_Js_Core.direction;

var display = Css_Js_Core.display;

var flex = Css_Js_Core.flex;

var flexBasis = Css_Js_Core.flexBasis;

var flexDirection = Css_Js_Core.flexDirection;

var flexGrow = Css_Js_Core.flexGrow;

var flexShrink = Css_Js_Core.flexShrink;

var flexWrap = Css_Js_Core.flexWrap;

var $$float = Css_Js_Core.$$float;

var fontFamily = Css_Js_Core.fontFamily;

var fontFamilies = Css_Js_Core.fontFamilies;

var fontSize = Css_Js_Core.fontSize;

var fontStyle = Css_Js_Core.fontStyle;

var fontVariant = Css_Js_Core.fontVariant;

var fontWeight = Css_Js_Core.fontWeight;

var gridArea = Css_Js_Core.gridArea;

var gridArea2 = Css_Js_Core.gridArea2;

var gridArea3 = Css_Js_Core.gridArea3;

var gridArea4 = Css_Js_Core.gridArea4;

var gridAutoFlow = Css_Js_Core.gridAutoFlow;

var gridColumn = Css_Js_Core.gridColumn;

var gridColumnEnd = Css_Js_Core.gridColumnEnd;

var columnGap = Css_Js_Core.columnGap;

var gridColumnGap = Css_Js_Core.gridColumnGap;

var gridColumnStart = Css_Js_Core.gridColumnStart;

var gridGap = Css_Js_Core.gridGap;

var gridRow = Css_Js_Core.gridRow;

var gridRowEnd = Css_Js_Core.gridRowEnd;

var gridRowGap = Css_Js_Core.gridRowGap;

var gridRowStart = Css_Js_Core.gridRowStart;

var gridTemplateAreas = Css_Js_Core.gridTemplateAreas;

var height = Css_Js_Core.height;

var justifyContent = Css_Js_Core.justifyContent;

var justifyItems = Css_Js_Core.justifyItems;

var justifySelf = Css_Js_Core.justifySelf;

var left = Css_Js_Core.left;

var letterSpacing = Css_Js_Core.letterSpacing;

var lineHeight = Css_Js_Core.lineHeight;

var listStyle = Css_Js_Core.listStyle;

var listStyleImage = Css_Js_Core.listStyleImage;

var listStyleType = Css_Js_Core.listStyleType;

var listStylePosition = Css_Js_Core.listStylePosition;

var margin = Css_Js_Core.margin;

var margin2 = Css_Js_Core.margin2;

var margin3 = Css_Js_Core.margin3;

var margin4 = Css_Js_Core.margin4;

var marginLeft = Css_Js_Core.marginLeft;

var marginRight = Css_Js_Core.marginRight;

var marginTop = Css_Js_Core.marginTop;

var marginBottom = Css_Js_Core.marginBottom;

var maxHeight = Css_Js_Core.maxHeight;

var maxWidth = Css_Js_Core.maxWidth;

var minHeight = Css_Js_Core.minHeight;

var minWidth = Css_Js_Core.minWidth;

var objectFit = Css_Js_Core.objectFit;

var objectPosition = Css_Js_Core.objectPosition;

var opacity = Css_Js_Core.opacity;

var order = Css_Js_Core.order;

var outline = Css_Js_Core.outline;

var outlineColor = Css_Js_Core.outlineColor;

var outlineOffset = Css_Js_Core.outlineOffset;

var outlineStyle = Css_Js_Core.outlineStyle;

var outlineWidth = Css_Js_Core.outlineWidth;

var overflow = Css_Js_Core.overflow;

var overflowX = Css_Js_Core.overflowX;

var overflowY = Css_Js_Core.overflowY;

var overflowWrap = Css_Js_Core.overflowWrap;

var padding = Css_Js_Core.padding;

var padding2 = Css_Js_Core.padding2;

var padding3 = Css_Js_Core.padding3;

var padding4 = Css_Js_Core.padding4;

var paddingLeft = Css_Js_Core.paddingLeft;

var paddingRight = Css_Js_Core.paddingRight;

var paddingTop = Css_Js_Core.paddingTop;

var paddingBottom = Css_Js_Core.paddingBottom;

var perspective = Css_Js_Core.perspective;

var perspectiveOrigin = Css_Js_Core.perspectiveOrigin;

var pointerEvents = Css_Js_Core.pointerEvents;

var position = Css_Js_Core.position;

var resize = Css_Js_Core.resize;

var right = Css_Js_Core.right;

var tableLayout = Css_Js_Core.tableLayout;

var textAlign = Css_Js_Core.textAlign;

var textDecorationColor = Css_Js_Core.textDecorationColor;

var textDecorationLine = Css_Js_Core.textDecorationLine;

var textDecorationStyle = Css_Js_Core.textDecorationStyle;

var textIndent = Css_Js_Core.textIndent;

var textOverflow = Css_Js_Core.textOverflow;

var textShadow = Css_Js_Core.textShadow;

var textShadows = Css_Js_Core.textShadows;

var textTransform = Css_Js_Core.textTransform;

var top = Css_Js_Core.top;

var transform = Css_Js_Core.transform;

var transforms = Css_Js_Core.transforms;

var transformOrigin = Css_Js_Core.transformOrigin;

var transformOrigin3d = Css_Js_Core.transformOrigin3d;

var transitionDelay = Css_Js_Core.transitionDelay;

var transitionDuration = Css_Js_Core.transitionDuration;

var transitionProperty = Css_Js_Core.transitionProperty;

var transformStyle = Css_Js_Core.transformStyle;

var transitionTimingFunction = Css_Js_Core.transitionTimingFunction;

var userSelect = Css_Js_Core.userSelect;

var verticalAlign = Css_Js_Core.verticalAlign;

var visibility = Css_Js_Core.visibility;

var width = Css_Js_Core.width;

var whiteSpace = Css_Js_Core.whiteSpace;

var wordBreak = Css_Js_Core.wordBreak;

var wordSpacing = Css_Js_Core.wordSpacing;

var wordWrap = Css_Js_Core.wordWrap;

var zIndex = Css_Js_Core.zIndex;

var selector = Css_Js_Core.selector;

var media = Css_Js_Core.media;

var active = Css_Js_Core.active;

var checked = Css_Js_Core.checked;

var $$default = Css_Js_Core.$$default;

var defined = Css_Js_Core.defined;

var disabled = Css_Js_Core.disabled;

var empty = Css_Js_Core.empty;

var enabled = Css_Js_Core.enabled;

var first = Css_Js_Core.first;

var firstChild = Css_Js_Core.firstChild;

var firstOfType = Css_Js_Core.firstOfType;

var focus = Css_Js_Core.focus;

var focusWithin = Css_Js_Core.focusWithin;

var host = Css_Js_Core.host;

var hover = Css_Js_Core.hover;

var indeterminate = Css_Js_Core.indeterminate;

var inRange = Css_Js_Core.inRange;

var invalid = Css_Js_Core.invalid;

var lang = Css_Js_Core.lang;

var lastChild = Css_Js_Core.lastChild;

var lastOfType = Css_Js_Core.lastOfType;

var link = Css_Js_Core.link;

var not__ = Css_Js_Core.not__;

var Nth = Css_Js_Core.Nth;

var nthChild = Css_Js_Core.nthChild;

var nthLastChild = Css_Js_Core.nthLastChild;

var nthLastOfType = Css_Js_Core.nthLastOfType;

var nthOfType = Css_Js_Core.nthOfType;

var onlyChild = Css_Js_Core.onlyChild;

var onlyOfType = Css_Js_Core.onlyOfType;

var optional = Css_Js_Core.optional;

var outOfRange = Css_Js_Core.outOfRange;

var readOnly = Css_Js_Core.readOnly;

var readWrite = Css_Js_Core.readWrite;

var required = Css_Js_Core.required;

var root = Css_Js_Core.root;

var scope = Css_Js_Core.scope;

var target = Css_Js_Core.target;

var valid = Css_Js_Core.valid;

var visited = Css_Js_Core.visited;

var after = Css_Js_Core.after;

var before = Css_Js_Core.before;

var firstLetter = Css_Js_Core.firstLetter;

var firstLine = Css_Js_Core.firstLine;

var placeholder = Css_Js_Core.placeholder;

var selection = Css_Js_Core.selection;

var child = Css_Js_Core.child;

var children = Css_Js_Core.children;

var directSibling = Css_Js_Core.directSibling;

var siblings = Css_Js_Core.siblings;

var anyLink = Css_Js_Core.anyLink;

var initial = Css_Js_Core.initial;

var inherit_ = Css_Js_Core.inherit_;

var unset = Css_Js_Core.unset;

var $$var = Css_Js_Core.$$var;

var varDefault = Css_Js_Core.varDefault;

var auto = Css_Js_Core.auto;

var none = Css_Js_Core.none;

var text = Css_Js_Core.text;

var pct = Css_Js_Core.pct;

var ch = Css_Js_Core.ch;

var cm = Css_Js_Core.cm;

var em = Css_Js_Core.em;

var ex = Css_Js_Core.ex;

var mm = Css_Js_Core.mm;

var pt = Css_Js_Core.pt;

var px = Css_Js_Core.px;

var pxFloat = Css_Js_Core.pxFloat;

var rem = Css_Js_Core.rem;

var vh = Css_Js_Core.vh;

var vmin = Css_Js_Core.vmin;

var vmax = Css_Js_Core.vmax;

var zero = Css_Js_Core.zero;

var deg = Css_Js_Core.deg;

var rad = Css_Js_Core.rad;

var grad = Css_Js_Core.grad;

var turn = Css_Js_Core.turn;

var ltr = Css_Js_Core.ltr;

var rtl = Css_Js_Core.rtl;

var absolute = Css_Js_Core.absolute;

var relative = Css_Js_Core.relative;

var $$static = Css_Js_Core.$$static;

var fixed = Css_Js_Core.fixed;

var sticky = Css_Js_Core.sticky;

var horizontal = Css_Js_Core.horizontal;

var vertical = Css_Js_Core.vertical;

var smallCaps = Css_Js_Core.smallCaps;

var italic = Css_Js_Core.italic;

var oblique = Css_Js_Core.oblique;

var hidden = Css_Js_Core.hidden;

var visible = Css_Js_Core.visible;

var scroll = Css_Js_Core.scroll;

var rgb = Css_Js_Core.rgb;

var rgba = Css_Js_Core.rgba;

var hsl = Css_Js_Core.hsl;

var hsla = Css_Js_Core.hsla;

var hex = Css_Js_Core.hex;

var currentColor = Css_Js_Core.currentColor;

var local = Css_Js_Core.local;

var paddingBox = Css_Js_Core.paddingBox;

var borderBox = Css_Js_Core.borderBox;

var contentBox = Css_Js_Core.contentBox;

var noRepeat = Css_Js_Core.noRepeat;

var space = Css_Js_Core.space;

var repeat = Css_Js_Core.repeat;

var minmax = Css_Js_Core.minmax;

var repeatX = Css_Js_Core.repeatX;

var repeatY = Css_Js_Core.repeatY;

var contain = Css_Js_Core.contain;

var cover = Css_Js_Core.cover;

var row = Css_Js_Core.row;

var rowReverse = Css_Js_Core.rowReverse;

var column = Css_Js_Core.column;

var columnReverse = Css_Js_Core.columnReverse;

var wrap = Css_Js_Core.wrap;

var nowrap = Css_Js_Core.nowrap;

var wrapReverse = Css_Js_Core.wrapReverse;

var inline = Css_Js_Core.inline;

var block = Css_Js_Core.block;

var contents = Css_Js_Core.contents;

var flexBox = Css_Js_Core.flexBox;

var grid = Css_Js_Core.grid;

var inlineBlock = Css_Js_Core.inlineBlock;

var inlineFlex = Css_Js_Core.inlineFlex;

var inlineGrid = Css_Js_Core.inlineGrid;

var inlineTable = Css_Js_Core.inlineTable;

var listItem = Css_Js_Core.listItem;

var runIn = Css_Js_Core.runIn;

var table = Css_Js_Core.table;

var tableCaption = Css_Js_Core.tableCaption;

var tableColumnGroup = Css_Js_Core.tableColumnGroup;

var tableHeaderGroup = Css_Js_Core.tableHeaderGroup;

var tableFooterGroup = Css_Js_Core.tableFooterGroup;

var tableRowGroup = Css_Js_Core.tableRowGroup;

var tableCell = Css_Js_Core.tableCell;

var tableColumn = Css_Js_Core.tableColumn;

var tableRow = Css_Js_Core.tableRow;

var flexStart = Css_Js_Core.flexStart;

var flexEnd = Css_Js_Core.flexEnd;

var center = Css_Js_Core.center;

var stretch = Css_Js_Core.stretch;

var spaceBetween = Css_Js_Core.spaceBetween;

var spaceAround = Css_Js_Core.spaceAround;

var spaceEvenly = Css_Js_Core.spaceEvenly;

var baseline = Css_Js_Core.baseline;

var forwards = Css_Js_Core.forwards;

var backwards = Css_Js_Core.backwards;

var both = Css_Js_Core.both;

var infinite = Css_Js_Core.infinite;

var count = Css_Js_Core.count;

var paused = Css_Js_Core.paused;

var running = Css_Js_Core.running;

var inside = Css_Js_Core.inside;

var outside = Css_Js_Core.outside;

var solid = Css_Js_Core.solid;

var dotted = Css_Js_Core.dotted;

var dashed = Css_Js_Core.dashed;

var underline = Css_Js_Core.underline;

var overline = Css_Js_Core.overline;

var lineThrough = Css_Js_Core.lineThrough;

var clip = Css_Js_Core.clip;

var ellipsis = Css_Js_Core.ellipsis;

var wavy = Css_Js_Core.wavy;

var $$double = Css_Js_Core.$$double;

var uppercase = Css_Js_Core.uppercase;

var lowercase = Css_Js_Core.lowercase;

var capitalize = Css_Js_Core.capitalize;

var sub = Css_Js_Core.sub;

var $$super = Css_Js_Core.$$super;

var textTop = Css_Js_Core.textTop;

var textBottom = Css_Js_Core.textBottom;

var middle = Css_Js_Core.middle;

var normal = Css_Js_Core.normal;

var breakAll = Css_Js_Core.breakAll;

var keepAll = Css_Js_Core.keepAll;

var breakWord = Css_Js_Core.breakWord;

var reverse = Css_Js_Core.reverse;

var alternate = Css_Js_Core.alternate;

var alternateReverse = Css_Js_Core.alternateReverse;

var fill = Css_Js_Core.fill;

var content = Css_Js_Core.content;

var maxContent = Css_Js_Core.maxContent;

var minContent = Css_Js_Core.minContent;

var fitContent = Css_Js_Core.fitContent;

var all = Css_Js_Core.all;

var round = Css_Js_Core.round;

var miter = Css_Js_Core.miter;

var bevel = Css_Js_Core.bevel;

var butt = Css_Js_Core.butt;

var square = Css_Js_Core.square;

var thin = Css_Js_Core.thin;

var extraLight = Css_Js_Core.extraLight;

var light = Css_Js_Core.light;

var medium = Css_Js_Core.medium;

var semiBold = Css_Js_Core.semiBold;

var bold = Css_Js_Core.bold;

var extraBold = Css_Js_Core.extraBold;

var lighter = Css_Js_Core.lighter;

var bolder = Css_Js_Core.bolder;

var fr = Css_Js_Core.fr;

var vw = Css_Js_Core.vw;

var localUrl = Css_Js_Core.localUrl;

var url = Css_Js_Core.url;

var linear = Css_Js_Core.linear;

var ease = Css_Js_Core.ease;

var easeIn = Css_Js_Core.easeIn;

var easeOut = Css_Js_Core.easeOut;

var easeInOut = Css_Js_Core.easeInOut;

var stepStart = Css_Js_Core.stepStart;

var stepEnd = Css_Js_Core.stepEnd;

var steps = Css_Js_Core.steps;

var cubicBezier = Css_Js_Core.cubicBezier;

var marginBox = Css_Js_Core.marginBox;

var fillBox = Css_Js_Core.fillBox;

var strokeBox = Css_Js_Core.strokeBox;

var viewBox = Css_Js_Core.viewBox;

var translate = Css_Js_Core.translate;

var translate3d = Css_Js_Core.translate3d;

var translateX = Css_Js_Core.translateX;

var translateY = Css_Js_Core.translateY;

var translateZ = Css_Js_Core.translateZ;

var scale = Css_Js_Core.scale;

var scale3d = Css_Js_Core.scale3d;

var scaleX = Css_Js_Core.scaleX;

var scaleY = Css_Js_Core.scaleY;

var scaleZ = Css_Js_Core.scaleZ;

var rotate = Css_Js_Core.rotate;

var rotate3d = Css_Js_Core.rotate3d;

var rotateX = Css_Js_Core.rotateX;

var rotateY = Css_Js_Core.rotateY;

var rotateZ = Css_Js_Core.rotateZ;

var skew = Css_Js_Core.skew;

var skewX = Css_Js_Core.skewX;

var skewY = Css_Js_Core.skewY;

var linearGradient = Css_Js_Core.linearGradient;

var repeatingLinearGradient = Css_Js_Core.repeatingLinearGradient;

var radialGradient = Css_Js_Core.radialGradient;

var repeatingRadialGradient = Css_Js_Core.repeatingRadialGradient;

var areas = Css_Js_Core.areas;

var ident = Css_Js_Core.ident;

var numIdent = Css_Js_Core.numIdent;

var contextMenu = Css_Js_Core.contextMenu;

var help = Css_Js_Core.help;

var pointer = Css_Js_Core.pointer;

var progress = Css_Js_Core.progress;

var wait = Css_Js_Core.wait;

var cell = Css_Js_Core.cell;

var crosshair = Css_Js_Core.crosshair;

var verticalText = Css_Js_Core.verticalText;

var alias = Css_Js_Core.alias;

var copy = Css_Js_Core.copy;

var move = Css_Js_Core.move;

var noDrop = Css_Js_Core.noDrop;

var notAllowed = Css_Js_Core.notAllowed;

var grab = Css_Js_Core.grab;

var grabbing = Css_Js_Core.grabbing;

var allScroll = Css_Js_Core.allScroll;

var colResize = Css_Js_Core.colResize;

var rowResize = Css_Js_Core.rowResize;

var nResize = Css_Js_Core.nResize;

var eResize = Css_Js_Core.eResize;

var sResize = Css_Js_Core.sResize;

var wResize = Css_Js_Core.wResize;

var neResize = Css_Js_Core.neResize;

var nwResize = Css_Js_Core.nwResize;

var seResize = Css_Js_Core.seResize;

var swResize = Css_Js_Core.swResize;

var ewResize = Css_Js_Core.ewResize;

var nsResize = Css_Js_Core.nsResize;

var neswResize = Css_Js_Core.neswResize;

var nwseResize = Css_Js_Core.nwseResize;

var zoomIn = Css_Js_Core.zoomIn;

var zoomOut = Css_Js_Core.zoomOut;

var flex3 = Css_Js_Core.flex3;

var border = Css_Js_Core.border;

var borderTop = Css_Js_Core.borderTop;

var backgroundSize = Css_Js_Core.backgroundSize;

var textDecoration = Css_Js_Core.textDecoration;

var background = Css_Js_Core.background;

var backgrounds = Css_Js_Core.backgrounds;

var gridAutoColumns = Css_Js_Core.gridAutoColumns;

var gridAutoRows = Css_Js_Core.gridAutoRows;

var gridTemplateColumns = Css_Js_Core.gridTemplateColumns;

var gridTemplateRows = Css_Js_Core.gridTemplateRows;

var Calc = Css_Js_Core.Calc;

var size = Css_Js_Core.size;

var filter = Css_Js_Core.filter;

var Transition = Css_Js_Core.Transition;

var transitionValue = Css_Js_Core.transitionValue;

var transitionList = Css_Js_Core.transitionList;

var transition = Css_Js_Core.transition;

var transitions = Css_Js_Core.transitions;

var Animation = Css_Js_Core.Animation;

var animationValue = Css_Js_Core.animationValue;

var animation = Css_Js_Core.animation;

var animations = Css_Js_Core.animations;

var animationName = Css_Js_Core.animationName;

var SVG = Css_Js_Core.SVG;

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
