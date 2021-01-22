include Css_Js_Core;
include Css_Colors;

include Css_Js_Core.Make({
  [@bs.module "@emotion/css"][@bs.scope "css"]


  external mergeStyles: (. array(string)) => string = "cx";

  [@bs.module "@emotion/css"][@bs.scope "css"]

 external make: (. Js.Json.t) => string = "css";

  [@bs.module "@emotion/css"][@bs.scope "css"]


  external injectRule: (. Js.Json.t) => unit = "injectGlobal";

  [@bs.module "@emotion/css"][@bs.scope "css"]


  external injectRaw: (. string) => unit = "injectGlobal";

  [@bs.module "@emotion/css"][@bs.scope "css"]


  external makeKeyFrames: (. Js.Dict.t(Js.Json.t)) => string = "keyframes";
});

type cache;

[@bs.module "@emotion/css"][@bs.scope "css"]

 external cache: cache = "cache";

let fontFace =
    (~fontFamily, ~src, ~fontStyle=?, ~fontWeight=?, ~fontDisplay=?, ()) => {
  insertRule(.
    Css_Js_Core.fontFace(
      ~fontFamily,
      ~src,
      ~fontStyle?,
      ~fontWeight?,
      ~fontDisplay?,
      (),
    ),
  );
  fontFamily;
};
