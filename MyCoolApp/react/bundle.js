"use strict";
(() => {
var exports = {};
exports.id = "bundle";
exports.ids = ["bundle"];
exports.modules = {

/***/ "./src/app.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* harmony import */ var _components_MainStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/MainStack.tsx");
// Added by app-css-loader




// In NativeScript, the app.ts file is the entry point to your application. You
// can use this file to perform app-level initialization, but the primary
// purpose of the file is to pass control to the app’s first module.
// Controls react-nativescript log verbosity.
// - true: all logs;
// - false: only error logs.
Object.defineProperty(global, '__DEV__', { value: false });
react_nativescript__WEBPACK_IMPORTED_MODULE_2__.start(react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_MainStack__WEBPACK_IMPORTED_MODULE_3__.MainStack, {}, null));
// Do not place any code after the application has been started as it will not
// be executed on iOS.


/***/ }),

/***/ "./src/app.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"*\n * Place any CSS rules you want to apply on both iOS and Android here.\n * This is where the vast majority of your CSS code goes.\n * Font icon class\n "},{"type":"rule","selectors":[".fab"],"declarations":[{"type":"declaration","property":"font-family","value":"'Font Awesome 5 Brands', 'fa-brands-400'"},{"type":"declaration","property":"font-weight","value":"400"}]},{"type":"rule","selectors":[".fas"],"declarations":[{"type":"declaration","property":"font-family","value":"'Font Awesome 5 Free', 'fa-solid-900'"},{"type":"declaration","property":"font-weight","value":"900"}]},{"type":"rule","selectors":[".far"],"declarations":[{"type":"declaration","property":"font-family","value":"'Font Awesome 5 Free', 'fa-regular-400'"},{"type":"declaration","property":"font-weight","value":"400"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "/Users/nstudio/Documents/github/NathanWalker/tmp/embedreact/src/app.css")


/***/ }),

/***/ "./src/components/MainStack.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainStack": () => (/* binding */ MainStack)
/* harmony export */ });
/* harmony import */ var _react_navigation_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_nativescript_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-nativescript-navigation/dist/index.js");
/* harmony import */ var _ScreenOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/ScreenOne.tsx");
/* harmony import */ var _ScreenTwo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/ScreenTwo.tsx");





const StackNavigator = (0,react_nativescript_navigation__WEBPACK_IMPORTED_MODULE_2__.stackNavigatorFactory)();
/**
 * The main stack navigator for the whole app.
 */
const MainStack = () => (react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.BaseNavigationContainer, null,
    react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Navigator, { initialRouteName: "Screen One", screenOptions: {
            headerStyle: {
                backgroundColor: "white",
            },
            headerShown: true,
        } },
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, { name: "One", component: _ScreenOne__WEBPACK_IMPORTED_MODULE_3__.ScreenOne }),
        react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, { name: "Two", component: _ScreenTwo__WEBPACK_IMPORTED_MODULE_4__.ScreenTwo }))));


/***/ }),

/***/ "./src/components/ScreenOne.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenOne": () => (/* binding */ ScreenOne)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/ui/dialogs/index.ios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");



function ScreenOne({ navigation }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("flexboxLayout", { style: styles.container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "fas", style: styles.text }, "\uF135 You're viewing screen one!"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: styles.button, onTap: () => _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.Dialogs.alert("Tapped!") }, "Tap me for an alert"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: styles.button, onTap: () => navigation.navigate("Two", { message: "Hello, world!" }) }, "Go to next screen")));
}
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    text: {
        textAlignment: "center",
        fontSize: 24,
        color: "black",
    },
    button: {
        fontSize: 24,
        color: "#2e6ddf",
    },
});


/***/ }),

/***/ "./src/components/ScreenTwo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenTwo": () => (/* binding */ ScreenTwo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");


function ScreenTwo({ navigation, route }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("flexboxLayout", { style: styles.container },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { style: styles.text }, "You're viewing screen two!"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { style: styles.text },
            "Message: ",
            route.params.message),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: styles.button, onTap: () => navigation.goBack() }, "Go back")));
}
const styles = react_nativescript__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "yellow",
    },
    text: {
        textAlignment: "center",
        fontSize: 24,
        color: "black",
    },
    button: {
        fontSize: 24,
        color: "#2e6ddf",
    },
});


/***/ }),

/***/ "~/package.json":
/***/ ((module) => {

module.exports = require("~/package.json");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor"], () => (__webpack_exec__("./node_modules/@nativescript/core/globals/index.js"), __webpack_exec__("./node_modules/@nativescript/core/bundle-entry-points.js"), __webpack_exec__("./src/app.ts")));
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJOztZQUNYLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUMxQjtRQUNSLDZEQUNJLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUNwQixLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxjQUczQixDQUNHLENBQ25CLENBQUM7QUFDTixDQUFDO0FBRUQsTUFBTSxNQUFNLEdBQUcsaUVBQWlCLENBQUM7SUFDN0IsU0FBUyxFQUFFO1FBQ1AsTUFBTSxFQUFFLE1BQU07UUFDZCxhQUFhLEVBQUUsUUFBUTtRQUN2QixjQUFjLEVBQUUsUUFBUTtRQUN4QixlQUFlLEVBQUUsUUFBUTtLQUM1QjtJQUNELElBQUksRUFBRTtRQUNGLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLFFBQVEsRUFBRSxFQUFFO1FBQ1osS0FBSyxFQUFFLE9BQU87S0FDakI7SUFDRCxNQUFNLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxTQUFTO0tBQ25CO0NBQ0osQ0FBQyxDQUFDOzs7Ozs7OztBQy9DSCIsInNvdXJjZXMiOlsid2VicGFjazovL2VtYmVkcmVhY3QvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2VtYmVkcmVhY3QvLi9zcmMvYXBwLmNzcyIsIndlYnBhY2s6Ly9lbWJlZHJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvTWFpblN0YWNrLnRzeCIsIndlYnBhY2s6Ly9lbWJlZHJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2NyZWVuT25lLnRzeCIsIndlYnBhY2s6Ly9lbWJlZHJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvU2NyZWVuVHdvLnRzeCIsIndlYnBhY2s6Ly9lbWJlZHJlYWN0L2V4dGVybmFsIGNvbW1vbmpzIFwifi9wYWNrYWdlLmpzb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdE5hdGl2ZVNjcmlwdCBmcm9tICdyZWFjdC1uYXRpdmVzY3JpcHQnO1xuaW1wb3J0IHsgTWFpblN0YWNrIH0gZnJvbSAnLi9jb21wb25lbnRzL01haW5TdGFjayc7XG5cbi8vIEluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC50cyBmaWxlIGlzIHRoZSBlbnRyeSBwb2ludCB0byB5b3VyIGFwcGxpY2F0aW9uLiBZb3Vcbi8vIGNhbiB1c2UgdGhpcyBmaWxlIHRvIHBlcmZvcm0gYXBwLWxldmVsIGluaXRpYWxpemF0aW9uLCBidXQgdGhlIHByaW1hcnlcbi8vIHB1cnBvc2Ugb2YgdGhlIGZpbGUgaXMgdG8gcGFzcyBjb250cm9sIHRvIHRoZSBhcHDigJlzIGZpcnN0IG1vZHVsZS5cblxuLy8gQ29udHJvbHMgcmVhY3QtbmF0aXZlc2NyaXB0IGxvZyB2ZXJib3NpdHkuXG4vLyAtIHRydWU6IGFsbCBsb2dzO1xuLy8gLSBmYWxzZTogb25seSBlcnJvciBsb2dzLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbCwgJ19fREVWX18nLCB7IHZhbHVlOiBmYWxzZSB9KTtcblxuUmVhY3ROYXRpdmVTY3JpcHQuc3RhcnQoUmVhY3QuY3JlYXRlRWxlbWVudChNYWluU3RhY2ssIHt9LCBudWxsKSk7XG5cbi8vIERvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxuLy8gYmUgZXhlY3V0ZWQgb24gaU9TLlxuIiwiLyogQ1NTMkpTT04gKi9cblxuY29uc3QgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIqXFxuICogUGxhY2UgYW55IENTUyBydWxlcyB5b3Ugd2FudCB0byBhcHBseSBvbiBib3RoIGlPUyBhbmQgQW5kcm9pZCBoZXJlLlxcbiAqIFRoaXMgaXMgd2hlcmUgdGhlIHZhc3QgbWFqb3JpdHkgb2YgeW91ciBDU1MgY29kZSBnb2VzLlxcbiAqIEZvbnQgaWNvbiBjbGFzc1xcbiBcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhYlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ0ZvbnQgQXdlc29tZSA1IEJyYW5kcycsICdmYS1icmFuZHMtNDAwJ1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhc1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ0ZvbnQgQXdlc29tZSA1IEZyZWUnLCAnZmEtc29saWQtOTAwJ1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiOTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ0ZvbnQgQXdlc29tZSA1IEZyZWUnLCAnZmEtcmVndWxhci00MDAnXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI0MDBcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fVxuZXhwb3J0IGRlZmF1bHQgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fX1xuY29uc3QgeyBhZGRUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5hZGRUYWdnZWRBZGRpdGlvbmFsQ1NTKF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18sIFwiL1VzZXJzL25zdHVkaW8vRG9jdW1lbnRzL2dpdGh1Yi9OYXRoYW5XYWxrZXIvdG1wL2VtYmVkcmVhY3Qvc3JjL2FwcC5jc3NcIilcbiIsImltcG9ydCB7IEJhc2VOYXZpZ2F0aW9uQ29udGFpbmVyIH0gZnJvbSAnQHJlYWN0LW5hdmlnYXRpb24vY29yZSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0YWNrTmF2aWdhdG9yRmFjdG9yeSB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHQtbmF2aWdhdGlvblwiO1xuXG5pbXBvcnQgeyBTY3JlZW5PbmUgfSBmcm9tIFwiLi9TY3JlZW5PbmVcIjtcbmltcG9ydCB7IFNjcmVlblR3byB9IGZyb20gXCIuL1NjcmVlblR3b1wiO1xuXG5jb25zdCBTdGFja05hdmlnYXRvciA9IHN0YWNrTmF2aWdhdG9yRmFjdG9yeSgpO1xuXG4vKipcbiAqIFRoZSBtYWluIHN0YWNrIG5hdmlnYXRvciBmb3IgdGhlIHdob2xlIGFwcC5cbiAqL1xuZXhwb3J0IGNvbnN0IE1haW5TdGFjayA9ICgpID0+IChcbiAgICA8QmFzZU5hdmlnYXRpb25Db250YWluZXI+XG4gICAgICAgIDxTdGFja05hdmlnYXRvci5OYXZpZ2F0b3JcbiAgICAgICAgICAgIGluaXRpYWxSb3V0ZU5hbWU9XCJTY3JlZW4gT25lXCJcbiAgICAgICAgICAgIHNjcmVlbk9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBoZWFkZXJTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWRlclNob3duOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrTmF2aWdhdG9yLlNjcmVlblxuICAgICAgICAgICAgICAgIG5hbWU9XCJPbmVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17U2NyZWVuT25lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTdGFja05hdmlnYXRvci5TY3JlZW5cbiAgICAgICAgICAgICAgICBuYW1lPVwiVHdvXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1NjcmVlblR3b31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvU3RhY2tOYXZpZ2F0b3IuTmF2aWdhdG9yPlxuICAgIDwvQmFzZU5hdmlnYXRpb25Db250YWluZXI+XG4pO1xuIiwiaW1wb3J0IHsgRGlhbG9ncyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZVByb3AgfSBmcm9tICdAcmVhY3QtbmF2aWdhdGlvbi9jb3JlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gXCJyZWFjdC1uYXRpdmVzY3JpcHRcIjtcbmltcG9ydCB7IEZyYW1lTmF2aWdhdGlvblByb3AgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0LW5hdmlnYXRpb25cIjtcblxuaW1wb3J0IHsgTWFpblN0YWNrUGFyYW1MaXN0IH0gZnJvbSBcIi4uL05hdmlnYXRpb25QYXJhbUxpc3RcIjtcblxudHlwZSBTY3JlZW5PbmVQcm9wcyA9IHtcbiAgICByb3V0ZTogUm91dGVQcm9wPE1haW5TdGFja1BhcmFtTGlzdCwgXCJPbmVcIj4sXG4gICAgbmF2aWdhdGlvbjogRnJhbWVOYXZpZ2F0aW9uUHJvcDxNYWluU3RhY2tQYXJhbUxpc3QsIFwiT25lXCI+LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNjcmVlbk9uZSh7IG5hdmlnYXRpb24gfTogU2NyZWVuT25lUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZmxleGJveExheW91dCBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXNcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMudGV4dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAmI3hmMTM1OyBZb3UncmUgdmlld2luZyBzY3JlZW4gb25lIVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICBvblRhcD17KCkgPT4gRGlhbG9ncy5hbGVydChcIlRhcHBlZCFcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVGFwIG1lIGZvciBhbiBhbGVydFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICAgICAgb25UYXA9eygpID0+IG5hdmlnYXRpb24ubmF2aWdhdGUoXCJUd29cIiwgeyBtZXNzYWdlOiBcIkhlbGxvLCB3b3JsZCFcIiB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHbyB0byBuZXh0IHNjcmVlblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZmxleGJveExheW91dD5cbiAgICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgICB0ZXh0QWxpZ25tZW50OiBcImNlbnRlclwiLFxuICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICBjb2xvcjogXCIjMmU2ZGRmXCIsXG4gICAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgUm91dGVQcm9wIH0gZnJvbSAnQHJlYWN0LW5hdmlnYXRpb24vY29yZSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tIFwicmVhY3QtbmF0aXZlc2NyaXB0XCI7XG5pbXBvcnQgeyBGcmFtZU5hdmlnYXRpb25Qcm9wIH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC1uYXZpZ2F0aW9uXCI7XG5cbmltcG9ydCB7IE1haW5TdGFja1BhcmFtTGlzdCB9IGZyb20gXCIuLi9OYXZpZ2F0aW9uUGFyYW1MaXN0XCI7XG5cbnR5cGUgU2NyZWVuVHdvUHJvcHMgPSB7XG4gICAgcm91dGU6IFJvdXRlUHJvcDxNYWluU3RhY2tQYXJhbUxpc3QsIFwiVHdvXCI+LFxuICAgIG5hdmlnYXRpb246IEZyYW1lTmF2aWdhdGlvblByb3A8TWFpblN0YWNrUGFyYW1MaXN0LCBcIlR3b1wiPixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBTY3JlZW5Ud28oeyBuYXZpZ2F0aW9uLCByb3V0ZSB9OiBTY3JlZW5Ud29Qcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxmbGV4Ym94TGF5b3V0IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLnRleHR9PlxuICAgICAgICAgICAgICAgIFlvdSdyZSB2aWV3aW5nIHNjcmVlbiB0d28hXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICAgICAgTWVzc2FnZToge3JvdXRlLnBhcmFtcy5tZXNzYWdlfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgICBvblRhcD17KCkgPT4gbmF2aWdhdGlvbi5nb0JhY2soKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHbyBiYWNrXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mbGV4Ym94TGF5b3V0PlxuICAgICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcbiAgICB9LFxuICAgIHRleHQ6IHtcbiAgICAgICAgdGV4dEFsaWdubWVudDogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgY29sb3I6IFwiIzJlNmRkZlwiLFxuICAgIH0sXG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==