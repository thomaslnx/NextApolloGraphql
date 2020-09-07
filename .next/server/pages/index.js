module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyxpRUFBbUIiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.Container = Container;\nexports.createUrl = createUrl;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  // Kept here for backwards compatibility.\n  // When someone ended App they could call `super.componentDidCatch`.\n  // @deprecated This method is no longer needed. Errors are caught at the top level\n  componentDidCatch(error, _errorInfo) {\n    throw error;\n  }\n\n  render() {\n    const {\n      router,\n      Component,\n      pageProps,\n      __N_SSG,\n      __N_SSP\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy\n    // methods like getStaticProps and getServerSideProps\n    !(__N_SSG || __N_SSP) ? {\n      url: createUrl(router)\n    } : {}));\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nlet warnContainer;\nlet warnUrl;\n\nif (true) {\n  warnContainer = (0, _utils.execOnce)(() => {\n    console.warn(`Warning: the \\`Container\\` in \\`_app\\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);\n  });\n  warnUrl = (0, _utils.execOnce)(() => {\n    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);\n  });\n} // @deprecated noop for now until removal\n\n\nfunction Container(p) {\n  if (true) warnContainer();\n  return p.children;\n}\n\nfunction createUrl(router) {\n  // This is to make sure we don't references the router object at call time\n  const {\n    pathname,\n    asPath,\n    query\n  } = router;\n  return {\n    get query() {\n      if (true) warnUrl();\n      return query;\n    },\n\n    get pathname() {\n      if (true) warnUrl();\n      return pathname;\n    },\n\n    get asPath() {\n      if (true) warnUrl();\n      return asPath;\n    },\n\n    back: () => {\n      if (true) warnUrl();\n      router.back();\n    },\n    push: (url, as) => {\n      if (true) warnUrl();\n      return router.push(url, as);\n    },\n    pushTo: (href, as) => {\n      if (true) warnUrl();\n      const pushRoute = as ? href : '';\n      const pushUrl = as || href;\n      return router.push(pushRoute, pushUrl);\n    },\n    replace: (url, as) => {\n      if (true) warnUrl();\n      return router.replace(url, as);\n    },\n    replaceTo: (href, as) => {\n      if (true) warnUrl();\n      const replaceRoute = as ? href : '';\n      const replaceUrl = as || href;\n      return router.replace(replaceRoute, replaceUrl);\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3g/MmMzNSJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFrQkE7Ozs7O0FBSUEsa0NBQWtDO0FBQUE7QUFBbEM7QUFBa0MsQ0FBbEMsRUFHeUM7QUFDdkMsUUFBTUEsU0FBUyxHQUFHLE1BQU0sMkNBQXhCLEdBQXdCLENBQXhCO0FBQ0EsU0FBTztBQUFQO0FBQU8sR0FBUDtBQUdhOztBQUFBLGtCQUEyQ0MsZUFBTUMsU0FBakQsQ0FHYjtBQUlBO0FBQ0E7QUFDQTtBQUNBQyxtQkFBaUIsb0JBQTRDO0FBQzNEO0FBR0ZDOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXFELEtBQTNEO0FBR0Esd0JBQ0UscUVBR0k7QUFDQTtBQUNJLE1BQUVDLE9BQU8sSUFBVCxXQUF3QjtBQUFFQyxTQUFHLEVBQUVDLFNBQVMsQ0FBeEMsTUFBd0M7QUFBaEIsS0FBeEIsR0FOVixFQUNFLEVBREY7QUFmRjs7QUFBQTs7O0FBSG1CQyxHLENBSVpDLG1CQUpZRCxHQUlVRSxrQkFKVkY7QUFBQUEsRyxDQUtaRyxlQUxZSCxHQUtNRSxrQkFMTkY7QUErQnJCO0FBQ0E7O0FBRUEsVUFBMkM7QUFDekNJLGVBQWEsR0FBRyxxQkFBUyxNQUFNO0FBQzdCQyxXQUFPLENBQVBBO0FBREZELEdBQWdCLENBQWhCQTtBQU1BRSxTQUFPLEdBQUcscUJBQVMsTUFBTTtBQUN2QkQsV0FBTyxDQUFQQTtBQURGQyxHQUFVLENBQVZBO0FBT0YsQyxDQUFBOzs7QUFDTyxzQkFBMkI7QUFDaEMsWUFBMkNGLGFBQWE7QUFDeEQsU0FBT0csQ0FBQyxDQUFSO0FBR0s7O0FBQUEsMkJBQW1DO0FBQ3hDO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFPO0FBQ0wsZ0JBQVk7QUFDVixnQkFBMkNELE9BQU87QUFDbEQ7QUFIRzs7QUFLTCxtQkFBZTtBQUNiLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVBHOztBQVNMLGlCQUFhO0FBQ1gsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBWEc7O0FBYUxFLFFBQUksRUFBRSxNQUFNO0FBQ1YsZ0JBQTJDRixPQUFPO0FBQ2xERyxZQUFNLENBQU5BO0FBZkc7QUFpQkxDLFFBQUksRUFBRSxhQUE4QjtBQUNsQyxnQkFBMkNKLE9BQU87QUFDbEQsYUFBT0csTUFBTSxDQUFOQSxVQUFQLEVBQU9BLENBQVA7QUFuQkc7QUFxQkxFLFVBQU0sRUFBRSxjQUErQjtBQUNyQyxnQkFBMkNMLE9BQU87QUFDbEQsWUFBTU0sU0FBUyxHQUFHQyxFQUFFLFVBQXBCO0FBQ0EsWUFBTUMsT0FBTyxHQUFHRCxFQUFFLElBQWxCO0FBRUEsYUFBT0osTUFBTSxDQUFOQSxnQkFBUCxPQUFPQSxDQUFQO0FBMUJHO0FBNEJMTSxXQUFPLEVBQUUsYUFBOEI7QUFDckMsZ0JBQTJDVCxPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsYUFBUCxFQUFPQSxDQUFQO0FBOUJHO0FBZ0NMTyxhQUFTLEVBQUUsY0FBK0I7QUFDeEMsZ0JBQTJDVixPQUFPO0FBQ2xELFlBQU1XLFlBQVksR0FBR0osRUFBRSxVQUF2QjtBQUNBLFlBQU1LLFVBQVUsR0FBR0wsRUFBRSxJQUFyQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsc0JBQVAsVUFBT0EsQ0FBUDtBQXJDSjtBQUFPLEdBQVA7QUF3Q0QiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./src/apolloClient.ts":
/*!*****************************!*\
  !*** ./src/apolloClient.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createApolloClient; });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction createApolloClient(initialState, ctx) {\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n    ssrMode: Boolean(ctx),\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"HttpLink\"]({\n      uri: 'https://rickandmortyapi.com/graphql',\n      credentials: 'same-origin',\n      fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default())\n    }),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"InMemoryCache\"]().restore(initialState)\n  });\n} // uri: 'https://staging.api.upacaipalmas.com/developers/graphiql',//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBvbGxvQ2xpZW50LnRzPzQyMTQiXSwibmFtZXMiOlsiY3JlYXRlQXBvbGxvQ2xpZW50IiwiaW5pdGlhbFN0YXRlIiwiY3R4IiwiQXBvbGxvQ2xpZW50Iiwic3NyTW9kZSIsIkJvb2xlYW4iLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjcmVkZW50aWFscyIsImZldGNoIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwicmVzdG9yZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVlLFNBQVNBLGtCQUFULENBQTRCQyxZQUE1QixFQUEwQ0MsR0FBMUMsRUFBK0M7QUFDNUQsU0FBTyxJQUFJQywyREFBSixDQUFpQjtBQUN0QkMsV0FBTyxFQUFFQyxPQUFPLENBQUNILEdBQUQsQ0FETTtBQUV0QkksUUFBSSxFQUFFLElBQUlDLHVEQUFKLENBQWE7QUFDakJDLFNBQUcsRUFBRSxxQ0FEWTtBQUVqQkMsaUJBQVcsRUFBRSxhQUZJO0FBR2pCQyx3RUFBS0E7QUFIWSxLQUFiLENBRmdCO0FBT3RCQyxTQUFLLEVBQUUsSUFBSUMsNERBQUosR0FBb0JDLE9BQXBCLENBQTRCWixZQUE1QjtBQVBlLEdBQWpCLENBQVA7QUFTRCxDLENBRUQiLCJmaWxlIjoiLi9zcmMvYXBvbGxvQ2xpZW50LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlLCBjdHgpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IEJvb2xlYW4oY3R4KSxcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xuICAgICAgdXJpOiAnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2dyYXBocWwnLFxuICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICBmZXRjaCxcbiAgICB9KSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSksXG4gIH0pXG59XG5cbi8vIHVyaTogJ2h0dHBzOi8vc3RhZ2luZy5hcGkudXBhY2FpcGFsbWFzLmNvbS9kZXZlbG9wZXJzL2dyYXBoaXFsJywiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/apolloClient.ts\n");

/***/ }),

/***/ "./src/gql/allConsults.ts":
/*!********************************!*\
  !*** ./src/gql/allConsults.ts ***!
  \********************************/
/*! exports provided: ALL_CONSULTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALL_CONSULTS\", function() { return ALL_CONSULTS; });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n// import gql from 'graphql-tag';\n\nconst ALL_CONSULTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n  query characters {\n    characters {\n      results {\n        id\n        name\n      }\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3FsL2FsbENvbnN1bHRzLnRzPzRhMTIiXSwibmFtZXMiOlsiQUxMX0NPTlNVTFRTIiwiZ3FsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxZQUFZLEdBQUdDLGtEQUFJOzs7Ozs7Ozs7Q0FBekIiLCJmaWxlIjoiLi9zcmMvZ3FsL2FsbENvbnN1bHRzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcblxuZXhwb3J0IGNvbnN0IEFMTF9DT05TVUxUUyA9IGdxbGBcbiAgcXVlcnkgY2hhcmFjdGVycyB7XG4gICAgY2hhcmFjdGVycyB7XG4gICAgICByZXN1bHRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/gql/allConsults.ts\n");

/***/ }),

/***/ "./src/libs/apollo.tsx":
/*!*****************************!*\
  !*** ./src/libs/apollo.tsx ***!
  \*****************************/
/*! exports provided: InitOnContext, withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InitOnContext\", function() { return InitOnContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withApollo\", function() { return withApollo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apolloClient */ \"./src/apolloClient.ts\");\nvar _jsxFileName = \"/Users/marcos/Desktop/NextApolloGraphql/src/libs/apollo.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nlet globalApolloClient = null;\n/**\n * Installs the Apollo Client on NextPageContext\n * or NextAppContext. Useful if you want to use apolloClient\n * inside getStaticProps, getStaticPaths or getServerSideProps\n * @param {NextPageContext | NextAppContext} ctx\n */\n\nconst InitOnContext = ctx => {\n  const inAppContext = Boolean(ctx.ctx);\n\n  if (true) {\n    if (inAppContext) {\n      console.warn('Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\\n' + 'Read more: https://err.sh/next.js/opt-out-auto-static-optimization\\n');\n    }\n  }\n\n  const apolloClient = ctx.apolloClient || initApolloClient(ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx);\n\n  apolloClient.toJSON = () => null;\n\n  ctx.apolloClient = apolloClient;\n\n  if (inAppContext) {\n    ctx.ctx.apolloClient = apolloClient;\n  }\n\n  return ctx;\n};\n/**\n * Always creates a new apollo client on the server\n * Creates or reuses apollo client in the browser.\n * @param  {NormalizedCacheObject} initialState\n * @param  {NextPageContext} ctx\n */\n\nconst initApolloClient = (initialState, ctx) => {\n  if (true) {\n    return Object(_apolloClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(initialState, ctx);\n  }\n\n  if (!globalApolloClient) {\n    globalApolloClient = Object(_apolloClient__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(initialState, ctx);\n  }\n\n  return globalApolloClient;\n};\n/**\n * Creates a withApollo HOC\n * that provides the apolloContext\n * to a next.js Page or AppTree.\n * @param  {Object} withApolloOptions\n * @param  {Boolean} [withApolloOptions.ssr=false]\n * @returns {(PageComponent: ReactNode) => ReactNode}\n */\n\n\nconst withApollo = ({\n  ssr = false\n} = {}) => PageComponent => {\n  const WithApollo = (_ref) => {\n    let {\n      apolloClient,\n      apolloState\n    } = _ref,\n        pageProps = _objectWithoutProperties(_ref, [\"apolloClient\", \"apolloState\"]);\n\n    let client;\n\n    if (apolloClient) {\n      client = apolloClient;\n    } else {\n      client = initApolloClient(apolloState, undefined);\n    }\n\n    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"ApolloProvider\"], {\n      client: client,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 7\n      }\n    }, __jsx(PageComponent, _extends({}, pageProps, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }\n    })));\n  };\n\n  if (true) {\n    const displayName = PageComponent.displayName || PageComponent.name || 'Component';\n    WithApollo.displayName = `withApollo(${displayName})`;\n  }\n\n  if (ssr || PageComponent.getInitialProps) {\n    WithApollo.getInitialProps = async ctx => {\n      const inAppContext = Boolean(ctx.ctx);\n      const {\n        apolloClient\n      } = InitOnContext(ctx);\n      let pageProps = {};\n\n      if (PageComponent.getInitialProps) {\n        pageProps = await PageComponent.getInitialProps(ctx);\n      } else if (inAppContext) {\n        pageProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);\n      }\n\n      if (true) {\n        const {\n          AppTree\n        } = ctx;\n\n        if (ctx.res && ctx.res.finished) {\n          return pageProps;\n        }\n\n        if (ssr && AppTree) {\n          try {\n            const {\n              getDataFromTree\n            } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @apollo/react-ssr */ \"@apollo/react-ssr\", 7));\n            let props;\n\n            if (inAppContext) {\n              props = _objectSpread(_objectSpread({}, pageProps), {}, {\n                apolloClient\n              });\n            } else {\n              props = {\n                pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {\n                  apolloClient\n                })\n              };\n            }\n\n            await getDataFromTree(__jsx(AppTree, _extends({}, props, {\n              __self: undefined,\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 121,\n                columnNumber: 33\n              }\n            })));\n          } catch (error) {\n            console.error('Error while running `getDataFromTree`', error);\n          }\n\n          next_head__WEBPACK_IMPORTED_MODULE_2___default.a.rewind();\n        }\n      }\n\n      return _objectSpread(_objectSpread({}, pageProps), {}, {\n        apolloState: apolloClient.cache.extract(),\n        apolloClient: ctx.apolloClient\n      });\n    };\n  }\n\n  return WithApollo;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGlicy9hcG9sbG8udHN4PzM2MTgiXSwibmFtZXMiOlsiZ2xvYmFsQXBvbGxvQ2xpZW50IiwiSW5pdE9uQ29udGV4dCIsImN0eCIsImluQXBwQ29udGV4dCIsIkJvb2xlYW4iLCJjb25zb2xlIiwid2FybiIsImFwb2xsb0NsaWVudCIsImluaXRBcG9sbG9DbGllbnQiLCJhcG9sbG9TdGF0ZSIsInRvSlNPTiIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIndpdGhBcG9sbG8iLCJzc3IiLCJQYWdlQ29tcG9uZW50IiwiV2l0aEFwb2xsbyIsInBhZ2VQcm9wcyIsImNsaWVudCIsInVuZGVmaW5lZCIsImRpc3BsYXlOYW1lIiwibmFtZSIsImdldEluaXRpYWxQcm9wcyIsIkFwcCIsIkFwcFRyZWUiLCJyZXMiLCJmaW5pc2hlZCIsImdldERhdGFGcm9tVHJlZSIsInByb3BzIiwiZXJyb3IiLCJIZWFkIiwicmV3aW5kIiwiY2FjaGUiLCJleHRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0EsSUFBSUEsa0JBQWtCLEdBQUcsSUFBekI7QUFFQTs7Ozs7OztBQU9PLE1BQU1DLGFBQWEsR0FBSUMsR0FBRCxJQUFTO0FBQ3BDLFFBQU1DLFlBQVksR0FBR0MsT0FBTyxDQUFDRixHQUFHLENBQUNBLEdBQUwsQ0FBNUI7O0FBRUEsWUFBNEM7QUFDMUMsUUFBSUMsWUFBSixFQUFrQjtBQUNoQkUsYUFBTyxDQUFDQyxJQUFSLENBQWEsd0dBQ2Isc0VBREE7QUFFRDtBQUNGOztBQUVELFFBQU1DLFlBQVksR0FBR0wsR0FBRyxDQUFDSyxZQUFKLElBQW9CQyxnQkFBZ0IsQ0FBQ04sR0FBRyxDQUFDTyxXQUFKLElBQW1CLEVBQXBCLEVBQXdCTixZQUFZLEdBQUdELEdBQUcsQ0FBQ0EsR0FBUCxHQUFhQSxHQUFqRCxDQUF6RDs7QUFFQUssY0FB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WCx5QkFBUyxrQ0FBT0EsU0FBUDtBQUFrQlY7QUFBbEI7QUFBVixlQUFSO0FBQ0Q7O0FBRUQsa0JBQU1vQixlQUFlLENBQUMsTUFBQyxPQUFELGVBQWFDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFELENBQXJCO0FBQ0QsV0FYRCxDQVdFLE9BQU9DLEtBQVAsRUFBYztBQUNkeEIsbUJBQU8sQ0FBQ3dCLEtBQVIsQ0FBYyx1Q0FBZCxFQUF1REEsS0FBdkQ7QUFDRDs7QUFFREMsMERBQUksQ0FBQ0MsTUFBTDtBQUNEO0FBQ0Y7O0FBRUQsNkNBQ0tkLFNBREw7QUFFRVIsbUJBQVcsRUFBRUYsWUFBWSxDQUFDeUIsS0FBYixDQUFtQkMsT0FBbkIsRUFGZjtBQUdFMUIsb0JBQVksRUFBRUwsR0FBRyxDQUFDSztBQUhwQjtBQUtBLEtBM0NBO0FBNENGOztBQUVELFNBQU9TLFVBQVA7QUFDQSxDQXZFTSIsImZpbGUiOiIuL3NyYy9saWJzL2Fwb2xsby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuaW1wb3J0IGNyZWF0ZUFwb2xsb0NsaWVudCBmcm9tICcuLi9hcG9sbG9DbGllbnQnO1xuXG5cbmxldCBnbG9iYWxBcG9sbG9DbGllbnQgPSBudWxsO1xuXG4vKipcbiAqIEluc3RhbGxzIHRoZSBBcG9sbG8gQ2xpZW50IG9uIE5leHRQYWdlQ29udGV4dFxuICogb3IgTmV4dEFwcENvbnRleHQuIFVzZWZ1bCBpZiB5b3Ugd2FudCB0byB1c2UgYXBvbGxvQ2xpZW50XG4gKiBpbnNpZGUgZ2V0U3RhdGljUHJvcHMsIGdldFN0YXRpY1BhdGhzIG9yIGdldFNlcnZlclNpZGVQcm9wc1xuICogQHBhcmFtIHtOZXh0UGFnZUNvbnRleHQgfCBOZXh0QXBwQ29udGV4dH0gY3R4XG4gKi9cblxuZXhwb3J0IGNvbnN0IEluaXRPbkNvbnRleHQgPSAoY3R4KSA9PiB7XG4gIGNvbnN0IGluQXBwQ29udGV4dCA9IEJvb2xlYW4oY3R4LmN0eCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKGluQXBwQ29udGV4dCkge1xuICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiBZb3UgaGF2ZSBvcHRlZC1vdXQgb2YgQXV0b21hdGljIFN0YXRpYyBPcHRpbWl6YXRpb24gZHVlIHRvIGB3aXRoQXBvbGxvYCBpbiBgcGFnZXMvX2FwcGAuXFxuJyArXG4gICAgICAnUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL29wdC1vdXQtYXV0by1zdGF0aWMtb3B0aW1pemF0aW9uXFxuJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gY3R4LmFwb2xsb0NsaWVudCB8fCBpbml0QXBvbGxvQ2xpZW50KGN0eC5hcG9sbG9TdGF0ZSB8fCB7fSwgaW5BcHBDb250ZXh0ID8gY3R4LmN0eCA6IGN0eCk7XG5cbiAgYXBvbGxvQ2xpZW50LnRvSlNPTiA9ICgpID0+IG51bGw7XG5cbiAgY3R4LmFwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudDtcbiAgaWYgKGluQXBwQ29udGV4dCkge1xuICAgIGN0eC5jdHguYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50O1xuICB9XG5cbiAgcmV0dXJuIGN0eDtcbn1cblxuLyoqXG4gKiBBbHdheXMgY3JlYXRlcyBhIG5ldyBhcG9sbG8gY2xpZW50IG9uIHRoZSBzZXJ2ZXJcbiAqIENyZWF0ZXMgb3IgcmV1c2VzIGFwb2xsbyBjbGllbnQgaW4gdGhlIGJyb3dzZXIuXG4gKiBAcGFyYW0gIHtOb3JtYWxpemVkQ2FjaGVPYmplY3R9IGluaXRpYWxTdGF0ZVxuICogQHBhcmFtICB7TmV4dFBhZ2VDb250ZXh0fSBjdHhcbiAqL1xuXG5jb25zdCBpbml0QXBvbGxvQ2xpZW50ID0gKGluaXRpYWxTdGF0ZSwgY3R4KSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlLCBjdHgpO1xuICB9XG5cbiAgaWYgKCFnbG9iYWxBcG9sbG9DbGllbnQpIHtcbiAgICBnbG9iYWxBcG9sbG9DbGllbnQgPSBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlLCBjdHgpO1xuICB9XG5cbiAgcmV0dXJuIGdsb2JhbEFwb2xsb0NsaWVudDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgd2l0aEFwb2xsbyBIT0NcbiAqIHRoYXQgcHJvdmlkZXMgdGhlIGFwb2xsb0NvbnRleHRcbiAqIHRvIGEgbmV4dC5qcyBQYWdlIG9yIEFwcFRyZWUuXG4gKiBAcGFyYW0gIHtPYmplY3R9IHdpdGhBcG9sbG9PcHRpb25zXG4gKiBAcGFyYW0gIHtCb29sZWFufSBbd2l0aEFwb2xsb09wdGlvbnMuc3NyPWZhbHNlXVxuICogQHJldHVybnMgeyhQYWdlQ29tcG9uZW50OiBSZWFjdE5vZGUpID0+IFJlYWN0Tm9kZX1cbiAqL1xuXG5leHBvcnQgY29uc3Qgd2l0aEFwb2xsbyA9ICh7IHNzciA9IGZhbHNlIH0gPSB7fSkgPT4gKFBhZ2VDb21wb25lbnQpID0+IHtcbiAgY29uc3QgV2l0aEFwb2xsbyA9ICh7IGFwb2xsb0NsaWVudCwgYXBvbGxvU3RhdGUsIC4uLnBhZ2VQcm9wcyB9KSA9PiB7XG4gICAgbGV0IGNsaWVudDtcblxuICAgIGlmIChhcG9sbG9DbGllbnQpIHtcbiAgICAgIGNsaWVudCA9IGFwb2xsb0NsaWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xpZW50ID0gaW5pdEFwb2xsb0NsaWVudChhcG9sbG9TdGF0ZSwgdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgPFBhZ2VDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgKTtcbiAgfTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gUGFnZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBQYWdlQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cbiAgICBXaXRoQXBvbGxvLmRpc3BsYXlOYW1lID0gYHdpdGhBcG9sbG8oJHtkaXNwbGF5TmFtZX0pYDtcbiAgfVxuXG4gIGlmIChzc3IgfHwgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBXaXRoQXBvbGxvLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICAgIGNvbnN0IGluQXBwQ29udGV4dCA9IEJvb2xlYW4oY3R4LmN0eCk7XG4gICAgICBjb25zdCB7IGFwb2xsb0NsaWVudCB9ID0gSW5pdE9uQ29udGV4dChjdHgpO1xuXG4gICAgICBsZXQgcGFnZVByb3BzID0ge307XG4gICAgICBpZiAoUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICAgIH0gZWxzZSBpZiAoaW5BcHBDb250ZXh0KSB7XG4gICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgeyBBcHBUcmVlIH0gPSBjdHg7XG5cbiAgICAgIGlmIChjdHgucmVzICYmIGN0eC5yZXMuZmluaXNoZWQpIHtcbiAgICAgICAgcmV0dXJuIHBhZ2VQcm9wcztcbiAgICAgIH1cblxuICAgICAgaWYgKHNzciAmJiBBcHBUcmVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBnZXREYXRhRnJvbVRyZWUgfSA9IGF3YWl0IGltcG9ydCgnQGFwb2xsby9yZWFjdC1zc3InKTtcblxuICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICBpZiAoaW5BcHBDb250ZXh0KSB7XG4gICAgICAgICAgICBwcm9wcyA9IHsgLi4ucGFnZVByb3BzLCBhcG9sbG9DbGllbnQgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcHMgPSB7cGFnZVByb3BzOiB7IC4uLnBhZ2VQcm9wcywgYXBvbGxvQ2xpZW50IH19O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGF3YWl0IGdldERhdGFGcm9tVHJlZSg8QXBwVHJlZSB7Li4ucHJvcHN9IC8+KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGlsZSBydW5uaW5nIGBnZXREYXRhRnJvbVRyZWVgJywgZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgSGVhZC5yZXdpbmQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucGFnZVByb3BzLFxuICAgICAgYXBvbGxvU3RhdGU6IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCksXG4gICAgICBhcG9sbG9DbGllbnQ6IGN0eC5hcG9sbG9DbGllbnQsXG4gICAgfVxuICAgfTtcbiB9XG5cbiByZXR1cm4gV2l0aEFwb2xsbztcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/apollo.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/apollo */ \"./src/libs/apollo.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _gql_allConsults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gql/allConsults */ \"./src/gql/allConsults.ts\");\nvar _jsxFileName = \"/Users/marcos/Desktop/NextApolloGraphql/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import { useQuery } from '@apollo/react-hooks';\n\n\n\n\nconst Home = () => {\n  const {\n    loading,\n    error,\n    data\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(_gql_allConsults__WEBPACK_IMPORTED_MODULE_3__[\"ALL_CONSULTS\"]);\n\n  if (error) {\n    return __jsx(\"h1\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 14\n      }\n    }, \"Error\");\n  }\n\n  if (loading) {\n    return __jsx(\"h1\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 14\n      }\n    }, \"Loading...\");\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, \"Nextjs, Apollo and GraphQl setup\"), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, data.characters.results.map(data => __jsx(\"ul\", {\n    key: data.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 15\n    }\n  }, data.id), __jsx(\"li\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 15\n    }\n  }, data.name)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_libs_apollo__WEBPACK_IMPORTED_MODULE_1__[\"withApollo\"])({\n  ssr: true\n})(Home));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ1c2VRdWVyeSIsIkFMTF9DT05TVUxUUyIsImNoYXJhY3RlcnMiLCJyZXN1bHRzIiwibWFwIiwiaWQiLCJuYW1lIiwid2l0aEFwb2xsbyIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBRWpCLFFBQU07QUFBRUMsV0FBRjtBQUFXQyxTQUFYO0FBQWtCQztBQUFsQixNQUEyQkMsK0RBQVEsQ0FBQ0MsNkRBQUQsQ0FBekM7O0FBRUUsTUFBSUgsS0FBSixFQUFXO0FBQ1QsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRDs7QUFFRCxNQUFJRCxPQUFKLEVBQWE7QUFDWCxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDRDs7QUFFSCxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBREYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlFLElBQUksQ0FBQ0csVUFBTCxDQUFnQkMsT0FBaEIsQ0FBd0JDLEdBQXhCLENBQTZCTCxJQUFJLElBQy9CO0FBQUksT0FBRyxFQUFFQSxJQUFJLENBQUNNLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS04sSUFBSSxDQUFDTSxFQUFWLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtOLElBQUksQ0FBQ08sSUFBVixDQUZGLENBREYsQ0FGSixDQUhGLENBREY7QUFpQkQsQ0E3QkQ7O0FBK0JlQyw4SEFBVSxDQUFDO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQUQsQ0FBVixDQUEwQlosSUFBMUIsQ0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSAnLi4vbGlicy9hcG9sbG8nO1xuLy8gaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgQUxMX0NPTlNVTFRTIH0gZnJvbSAnLi4vZ3FsL2FsbENvbnN1bHRzJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShBTExfQ09OU1VMVFMpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gPGgxPkVycm9yPC9oMT5cbiAgICB9XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICB9XG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8aDE+TmV4dGpzLCBBcG9sbG8gYW5kIEdyYXBoUWwgc2V0dXA8L2gxPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgZGF0YS5jaGFyYWN0ZXJzLnJlc3VsdHMubWFwKCBkYXRhID0+IChcbiAgICAgICAgICAgIDx1bCBrZXk9e2RhdGEuaWR9PlxuICAgICAgICAgICAgICA8bGk+e2RhdGEuaWR9PC9saT5cbiAgICAgICAgICAgICAgPGxpPntkYXRhLm5hbWV9PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cbiAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiB0cnVlIH0pKEhvbWUpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-ssr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LXNzclwiPzEyMzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9yZWFjdC1zc3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LXNzclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-ssr\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });