import HtmlAd from "./html_page/html-ad/html_ad";
import HtmlHome from "./html_page/html-intro/html_home";
import HomeContent from "./HomeContent";
import Css_intro from "./css_page/css-intro/css_intro";
import Css_fournum from "./css_page/css-fournum/css_fournum";
import Css_position from "./css_page/css-position/css_position";
import Css_flex from "./css_page/css-flex/css_flex";
import Css_display from "./css_page/css-display/css_display";
import Css_maxW from "./css_page/css-maxW/css_maxW";
import Css_align from "./css_page/css-align/css_align";
import Css_grid from "./css_page/css-grid/css_grid";
import Css_overflow from "./css_page/css-overflow/css_overflow";
import Css_unit from "./css_page/css-unit/css_unit";

import Js_intro from "./js_page/js-intro/js_intro";
import Js_dataType from "./js_page/js-datatyype/js_dataType";
import Js_opera from "./js_page/js-opera/js_opera";
import Js_controlS from "./js_page/js-controlStruc/js_controlS";
import Js_function from "./js_page/js-function/js_function";
import Js_array from "./js_page/js-array/js_array";
import Js_object from "./js_page/js-object/js_object";
import Js_dom from "./js_page/js-dom/js_dom";
import Js_event from "./js_page/js-event/js_event";

const appRoutes = [ { path: "/", element: <HomeContent /> },
{ path: "/html", element: <HtmlHome /> },
{ path: "/html/Ad", element: <HtmlAd /> },
{ path: "/css", element: <Css_intro /> },
{ path: "/css/fournum", element: <Css_fournum /> },
{ path: "/css/Position", element: <Css_position /> },
{ path: "/css/flex", element: <Css_flex /> },
{ path: "/css/display", element: <Css_display /> },
{ path: "/css/max-wid", element: <Css_maxW /> },
{ path: "/css/align", element: <Css_align /> },
{ path: "/css/grid", element: <Css_grid /> },
{ path: "/css/overflow", element: <Css_overflow /> },
{ path: "/css/unit", element: <Css_unit /> },
{ path: "/js", element: <Js_intro /> },
{ path: "/js/dataType", element: <Js_dataType /> },
{ path: "/js/opera", element: <Js_opera /> },
{ path: "/js/controlS", element: <Js_controlS /> },
{ path: "/js/function", element: <Js_function /> },
{ path: "/js/array", element: <Js_array /> },
{ path: "/js/object", element: <Js_object /> },
{ path: "/js/dom", element: <Js_dom /> },
{ path: "/js/event", element: <Js_event /> },
];

export default appRoutes;