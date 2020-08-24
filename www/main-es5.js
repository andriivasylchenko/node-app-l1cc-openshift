function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./api-flights/api.module.ts":
  /*!***********************************!*\
    !*** ./api-flights/api.module.ts ***!
    \***********************************/

  /*! exports provided: ApiModule */

  /***/
  function apiFlightsApiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return ApiModule;
    });
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./configuration */
    "./api-flights/configuration.ts");

    var ApiModule = /*#__PURE__*/function () {
      _createClass(ApiModule, null, [{
        key: "forRoot",
        value: function forRoot(configurationFactory) {
          return {
            ngModule: ApiModule,
            providers: [{
              provide: _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"],
              useFactory: configurationFactory
            }]
          };
        }
      }]);

      function ApiModule(parentModule, http) {
        _classCallCheck(this, ApiModule);

        if (parentModule) {
          throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }

        if (!http) {
          throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
        }
      }

      return ApiModule;
    }();
    /***/

  },

  /***/
  "./api-flights/api/flights.service.ts":
  /*!********************************************!*\
    !*** ./api-flights/api/flights.service.ts ***!
    \********************************************/

  /*! exports provided: FlightsService */

  /***/
  function apiFlightsApiFlightsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightsService", function () {
      return FlightsService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../encoder */
    "./api-flights/encoder.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../configuration */
    "./api-flights/configuration.ts");
    /**
     * Flight Offers Search
     *  Before using this API, we recommend you read our **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization)** for more information on how to generate an access token.   Please also be aware that our test environment is based on a subset of the production, if you are not returning any results try with big cities/airports like LON (London) or NYC (New-York).
     *
     * OpenAPI spec version: 2.3.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var FlightsService = /*#__PURE__*/function () {
      function FlightsService(httpClient, basePath, configuration) {
        _classCallCheck(this, FlightsService);

        this.httpClient = httpClient;
        this.basePath = 'https://test.api.amadeus.com/v2';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(FlightsService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator = _createForOfIteratorHelper(consumes),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var consume = _step.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return false;
        }
      }, {
        key: "getFlightOffers",
        value: function getFlightOffers(originLocationCode, destinationLocationCode, departureDate, returnDate, adults, max, children, infants, travelClass, includedAirlineCodes, excludedAirlineCodes, nonStop, currencyCode, maxPrice) {
          var observe = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 'body';
          var reportProgress = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : false;

          if (originLocationCode === null || originLocationCode === undefined) {
            throw new Error('Required parameter originLocationCode was null or undefined when calling getFlightOffers.');
          }

          if (destinationLocationCode === null || destinationLocationCode === undefined) {
            throw new Error('Required parameter destinationLocationCode was null or undefined when calling getFlightOffers.');
          }

          if (departureDate === null || departureDate === undefined) {
            throw new Error('Required parameter departureDate was null or undefined when calling getFlightOffers.');
          }

          if (returnDate === null || returnDate === undefined) {
            throw new Error('Required parameter returnDate was null or undefined when calling getFlightOffers.');
          }

          if (adults === null || adults === undefined) {
            throw new Error('Required parameter adults was null or undefined when calling getFlightOffers.');
          }

          if (max === null || max === undefined) {
            throw new Error('Required parameter max was null or undefined when calling getFlightOffers.');
          }

          var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            encoder: new _encoder__WEBPACK_IMPORTED_MODULE_1__["CustomHttpUrlEncodingCodec"]()
          });

          if (originLocationCode !== undefined && originLocationCode !== null) {
            queryParameters = queryParameters.set('originLocationCode', originLocationCode);
          }

          if (destinationLocationCode !== undefined && destinationLocationCode !== null) {
            queryParameters = queryParameters.set('destinationLocationCode', destinationLocationCode);
          }

          if (departureDate !== undefined && departureDate !== null) {
            queryParameters = queryParameters.set('departureDate', departureDate);
          }

          if (returnDate !== undefined && returnDate !== null) {
            queryParameters = queryParameters.set('returnDate', returnDate);
          }

          if (adults !== undefined && adults !== null) {
            queryParameters = queryParameters.set('adults', adults);
          }

          if (max !== undefined && max !== null) {
            queryParameters = queryParameters.set('max', max);
          }

          if (children !== undefined && children !== null) {
            queryParameters = queryParameters.set('children', children);
          }

          if (infants !== undefined && infants !== null) {
            queryParameters = queryParameters.set('infants', infants);
          }

          if (travelClass !== undefined && travelClass !== null) {
            queryParameters = queryParameters.set('travelClass', travelClass);
          }

          if (includedAirlineCodes !== undefined && includedAirlineCodes !== null) {
            queryParameters = queryParameters.set('includedAirlineCodes', includedAirlineCodes);
          }

          if (excludedAirlineCodes !== undefined && excludedAirlineCodes !== null) {
            queryParameters = queryParameters.set('excludedAirlineCodes', excludedAirlineCodes);
          }

          if (nonStop !== undefined && nonStop !== null) {
            queryParameters = queryParameters.set('nonStop', nonStop);
          }

          if (currencyCode !== undefined && currencyCode !== null) {
            queryParameters = queryParameters.set('currencyCode', currencyCode);
          }

          if (maxPrice !== undefined && maxPrice !== null) {
            queryParameters = queryParameters.set('maxPrice', maxPrice);
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/vnd.amadeus+json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/vnd.amadeus+json'];
          return this.httpClient.get("".concat(this.basePath, "/shopping/flight-offers"), {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return FlightsService;
    }();
    /***/

  },

  /***/
  "./api-flights/configuration.ts":
  /*!**************************************!*\
    !*** ./api-flights/configuration.ts ***!
    \**************************************/

  /*! exports provided: Configuration */

  /***/
  function apiFlightsConfigurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return Configuration;
    });

    var Configuration = /*#__PURE__*/function () {
      function Configuration() {
        var configurationParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Configuration);

        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
      }
      /**
       * Select the correct content-type to use for a request.
       * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
       * If no content type is found return the first found type if the contentTypes is not empty
       * @param contentTypes - the array of content types that are available for selection
       * @returns the selected content-type or <code>undefined</code> if no selection could be made.
       */


      _createClass(Configuration, [{
        key: "selectHeaderContentType",
        value: function selectHeaderContentType(contentTypes) {
          var _this = this;

          if (contentTypes.length == 0) {
            return undefined;
          }

          var type = contentTypes.find(function (x) {
            return _this.isJsonMime(x);
          });

          if (type === undefined) {
            return contentTypes[0];
          }

          return type;
        }
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */

      }, {
        key: "selectHeaderAccept",
        value: function selectHeaderAccept(accepts) {
          var _this2 = this;

          if (accepts.length == 0) {
            return undefined;
          }

          var type = accepts.find(function (x) {
            return _this2.isJsonMime(x);
          });

          if (type === undefined) {
            return accepts[0];
          }

          return type;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */

      }, {
        key: "isJsonMime",
        value: function isJsonMime(mime) {
          var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
          return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
      }]);

      return Configuration;
    }();
    /***/

  },

  /***/
  "./api-flights/encoder.ts":
  /*!********************************!*\
    !*** ./api-flights/encoder.ts ***!
    \********************************/

  /*! exports provided: CustomHttpUrlEncodingCodec */

  /***/
  function apiFlightsEncoderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function () {
      return CustomHttpUrlEncodingCodec;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /**
    * CustomHttpUrlEncodingCodec
    * Fix plus sign (+) not encoding, so sent as blank space
    * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
    */


    var CustomHttpUrlEncodingCodec = /*#__PURE__*/function (_angular_common_http_) {
      _inherits(CustomHttpUrlEncodingCodec, _angular_common_http_);

      var _super = _createSuper(CustomHttpUrlEncodingCodec);

      function CustomHttpUrlEncodingCodec() {
        _classCallCheck(this, CustomHttpUrlEncodingCodec);

        return _super.apply(this, arguments);
      }

      _createClass(CustomHttpUrlEncodingCodec, [{
        key: "encodeKey",
        value: function encodeKey(k) {
          k = _get(_getPrototypeOf(CustomHttpUrlEncodingCodec.prototype), "encodeKey", this).call(this, k);
          return k.replace(/\+/gi, '%2B');
        }
      }, {
        key: "encodeValue",
        value: function encodeValue(v) {
          v = _get(_getPrototypeOf(CustomHttpUrlEncodingCodec.prototype), "encodeValue", this).call(this, v);
          return v.replace(/\+/gi, '%2B');
        }
      }]);

      return CustomHttpUrlEncodingCodec;
    }(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"]);
    /***/

  },

  /***/
  "./api-flights/variables.ts":
  /*!**********************************!*\
    !*** ./api-flights/variables.ts ***!
    \**********************************/

  /*! exports provided: BASE_PATH, COLLECTION_FORMATS */

  /***/
  function apiFlightsVariablesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return BASE_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
      return COLLECTION_FORMATS;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
    var COLLECTION_FORMATS = {
      'csv': ',',
      'tsv': '   ',
      'ssv': ' ',
      'pipes': '|'
    };
    /***/
  },

  /***/
  "./api-locations/api.module.ts":
  /*!*************************************!*\
    !*** ./api-locations/api.module.ts ***!
    \*************************************/

  /*! exports provided: ApiModule */

  /***/
  function apiLocationsApiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return ApiModule;
    });
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./configuration */
    "./api-locations/configuration.ts");

    var ApiModule = /*#__PURE__*/function () {
      _createClass(ApiModule, null, [{
        key: "forRoot",
        value: function forRoot(configurationFactory) {
          return {
            ngModule: ApiModule,
            providers: [{
              provide: _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"],
              useFactory: configurationFactory
            }]
          };
        }
      }]);

      function ApiModule(parentModule, http) {
        _classCallCheck(this, ApiModule);

        if (parentModule) {
          throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }

        if (!http) {
          throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
        }
      }

      return ApiModule;
    }();
    /***/

  },

  /***/
  "./api-locations/api/locations.service.ts":
  /*!************************************************!*\
    !*** ./api-locations/api/locations.service.ts ***!
    \************************************************/

  /*! exports provided: LocationsService */

  /***/
  function apiLocationsApiLocationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationsService", function () {
      return LocationsService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../encoder */
    "./api-locations/encoder.ts");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../variables */
    "./api-locations/variables.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configuration */
    "./api-locations/configuration.ts");
    /**
     * Airport & City Search
     *  Before using this API, we recommend you read our **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization)** for more information on how to generate an access token.   Please also be aware that our test environment is based on a subset of the production, in test this API only contains data from the United States, Spain, United Kingdom, Germany and India.
     *
     * OpenAPI spec version: 1.2.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var LocationsService = /*#__PURE__*/function () {
      function LocationsService(httpClient, basePath, configuration) {
        _classCallCheck(this, LocationsService);

        this.httpClient = httpClient;
        this.basePath = 'https://test.api.amadeus.com/v1';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(LocationsService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator2 = _createForOfIteratorHelper(consumes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var consume = _step2.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return false;
        }
      }, {
        key: "getAirportCitySearch",
        value: function getAirportCitySearch(subType, keyword, countryCode, pageLimit, pageOffset, sort, view) {
          var observe = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'body';
          var reportProgress = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;

          if (subType === null || subType === undefined) {
            throw new Error('Required parameter subType was null or undefined when calling getAirportCitySearch.');
          }

          if (keyword === null || keyword === undefined) {
            throw new Error('Required parameter keyword was null or undefined when calling getAirportCitySearch.');
          }

          var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            encoder: new _encoder__WEBPACK_IMPORTED_MODULE_1__["CustomHttpUrlEncodingCodec"]()
          });

          if (subType) {
            queryParameters = queryParameters.set('subType', subType.join(_variables__WEBPACK_IMPORTED_MODULE_2__["COLLECTION_FORMATS"]['csv']));
          }

          if (keyword !== undefined && keyword !== null) {
            queryParameters = queryParameters.set('keyword', keyword);
          }

          if (countryCode !== undefined && countryCode !== null) {
            queryParameters = queryParameters.set('countryCode', countryCode);
          }

          if (pageLimit !== undefined && pageLimit !== null) {
            queryParameters = queryParameters.set('page[limit]', pageLimit);
          }

          if (pageOffset !== undefined && pageOffset !== null) {
            queryParameters = queryParameters.set('page[offset]', pageOffset);
          }

          if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('sort', sort);
          }

          if (view !== undefined && view !== null) {
            queryParameters = queryParameters.set('view', view);
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/vnd.amadeus+json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/vnd.amadeus+json'];
          return this.httpClient.get("".concat(this.basePath, "/reference-data/locations"), {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return LocationsService;
    }();
    /***/

  },

  /***/
  "./api-locations/configuration.ts":
  /*!****************************************!*\
    !*** ./api-locations/configuration.ts ***!
    \****************************************/

  /*! exports provided: Configuration */

  /***/
  function apiLocationsConfigurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return Configuration;
    });

    var Configuration = /*#__PURE__*/function () {
      function Configuration() {
        var configurationParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Configuration);

        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
      }
      /**
       * Select the correct content-type to use for a request.
       * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
       * If no content type is found return the first found type if the contentTypes is not empty
       * @param contentTypes - the array of content types that are available for selection
       * @returns the selected content-type or <code>undefined</code> if no selection could be made.
       */


      _createClass(Configuration, [{
        key: "selectHeaderContentType",
        value: function selectHeaderContentType(contentTypes) {
          var _this3 = this;

          if (contentTypes.length == 0) {
            return undefined;
          }

          var type = contentTypes.find(function (x) {
            return _this3.isJsonMime(x);
          });

          if (type === undefined) {
            return contentTypes[0];
          }

          return type;
        }
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */

      }, {
        key: "selectHeaderAccept",
        value: function selectHeaderAccept(accepts) {
          var _this4 = this;

          if (accepts.length == 0) {
            return undefined;
          }

          var type = accepts.find(function (x) {
            return _this4.isJsonMime(x);
          });

          if (type === undefined) {
            return accepts[0];
          }

          return type;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */

      }, {
        key: "isJsonMime",
        value: function isJsonMime(mime) {
          var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
          return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
      }]);

      return Configuration;
    }();
    /***/

  },

  /***/
  "./api-locations/encoder.ts":
  /*!**********************************!*\
    !*** ./api-locations/encoder.ts ***!
    \**********************************/

  /*! exports provided: CustomHttpUrlEncodingCodec */

  /***/
  function apiLocationsEncoderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function () {
      return CustomHttpUrlEncodingCodec;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /**
    * CustomHttpUrlEncodingCodec
    * Fix plus sign (+) not encoding, so sent as blank space
    * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
    */


    var CustomHttpUrlEncodingCodec = /*#__PURE__*/function (_angular_common_http_2) {
      _inherits(CustomHttpUrlEncodingCodec, _angular_common_http_2);

      var _super2 = _createSuper(CustomHttpUrlEncodingCodec);

      function CustomHttpUrlEncodingCodec() {
        _classCallCheck(this, CustomHttpUrlEncodingCodec);

        return _super2.apply(this, arguments);
      }

      _createClass(CustomHttpUrlEncodingCodec, [{
        key: "encodeKey",
        value: function encodeKey(k) {
          k = _get(_getPrototypeOf(CustomHttpUrlEncodingCodec.prototype), "encodeKey", this).call(this, k);
          return k.replace(/\+/gi, '%2B');
        }
      }, {
        key: "encodeValue",
        value: function encodeValue(v) {
          v = _get(_getPrototypeOf(CustomHttpUrlEncodingCodec.prototype), "encodeValue", this).call(this, v);
          return v.replace(/\+/gi, '%2B');
        }
      }]);

      return CustomHttpUrlEncodingCodec;
    }(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"]);
    /***/

  },

  /***/
  "./api-locations/variables.ts":
  /*!************************************!*\
    !*** ./api-locations/variables.ts ***!
    \************************************/

  /*! exports provided: BASE_PATH, COLLECTION_FORMATS */

  /***/
  function apiLocationsVariablesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return BASE_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
      return COLLECTION_FORMATS;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
    var COLLECTION_FORMATS = {
      'csv': ',',
      'tsv': '   ',
      'ssv': ' ',
      'pipes': '|'
    };
    /***/
  },

  /***/
  "./api-safety/api.module.ts":
  /*!**********************************!*\
    !*** ./api-safety/api.module.ts ***!
    \**********************************/

  /*! exports provided: ApiModule */

  /***/
  function apiSafetyApiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return ApiModule;
    });
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./configuration */
    "./api-safety/configuration.ts");

    var ApiModule = /*#__PURE__*/function () {
      _createClass(ApiModule, null, [{
        key: "forRoot",
        value: function forRoot(configurationFactory) {
          return {
            ngModule: ApiModule,
            providers: [{
              provide: _configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"],
              useFactory: configurationFactory
            }]
          };
        }
      }]);

      function ApiModule(parentModule, http) {
        _classCallCheck(this, ApiModule);

        if (parentModule) {
          throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }

        if (!http) {
          throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
        }
      }

      return ApiModule;
    }();
    /***/

  },

  /***/
  "./api-safety/api/safety.service.ts":
  /*!******************************************!*\
    !*** ./api-safety/api/safety.service.ts ***!
    \******************************************/

  /*! exports provided: SafetyService */

  /***/
  function apiSafetyApiSafetyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafetyService", function () {
      return SafetyService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../encoder */
    "./api-safety/encoder.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../configuration */
    "./api-safety/configuration.ts");
    /**
     * Safe Place and Authorization
     *  This API incorporates Auth flow to obtain access token. For more details visit **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization)**.     Please also be aware that our test environment is based on a subset of the production, this API in test only returns a few selected cities. You can find the list in our **[data collection](https://github.com/amadeus4dev/data-collection)**.
     *
     * OpenAPI spec version: 1.0.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var SafetyService = /*#__PURE__*/function () {
      function SafetyService(httpClient, basePath, configuration) {
        _classCallCheck(this, SafetyService);

        this.httpClient = httpClient;
        this.basePath = 'https://test.api.amadeus.com/v1';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(SafetyService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator3 = _createForOfIteratorHelper(consumes),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var consume = _step3.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return false;
        }
      }, {
        key: "getSafetyRanking",
        value: function getSafetyRanking(latitude, longitude, radius, pageLimit, pageOffset) {
          var observe = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'body';
          var reportProgress = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

          if (latitude === null || latitude === undefined) {
            throw new Error('Required parameter latitude was null or undefined when calling getSafetyRanking.');
          }

          if (longitude === null || longitude === undefined) {
            throw new Error('Required parameter longitude was null or undefined when calling getSafetyRanking.');
          }

          var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
            encoder: new _encoder__WEBPACK_IMPORTED_MODULE_1__["CustomHttpUrlEncodingCodec"]()
          });

          if (latitude !== undefined && latitude !== null) {
            queryParameters = queryParameters.set('latitude', latitude);
          }

          if (longitude !== undefined && longitude !== null) {
            queryParameters = queryParameters.set('longitude', longitude);
          }

          if (radius !== undefined && radius !== null) {
            queryParameters = queryParameters.set('radius', radius);
          }

          if (pageLimit !== undefined && pageLimit !== null) {
            queryParameters = queryParameters.set('page[limit]', pageLimit);
          }

          if (pageOffset !== undefined && pageOffset !== null) {
            queryParameters = queryParameters.set('page[offset]', pageOffset);
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/vnd.amadeus+json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/vnd.amadeus+json'];
          return this.httpClient.get("".concat(this.basePath, "/safety/safety-rated-locations"), {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return SafetyService;
    }();
    /***/

  },

  /***/
  "./api-safety/api/security.service.ts":
  /*!********************************************!*\
    !*** ./api-safety/api/security.service.ts ***!
    \********************************************/

  /*! exports provided: SecurityService */

  /***/
  function apiSafetyApiSecurityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecurityService", function () {
      return SecurityService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../encoder */
    "./api-safety/encoder.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../configuration */
    "./api-safety/configuration.ts");
    /**
     * Safe Place and Authorization
     *  This API incorporates Auth flow to obtain access token. For more details visit **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization)**.     Please also be aware that our test environment is based on a subset of the production, this API in test only returns a few selected cities. You can find the list in our **[data collection](https://github.com/amadeus4dev/data-collection)**.
     *
     * OpenAPI spec version: 1.0.0
     *
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var SecurityService = /*#__PURE__*/function () {
      function SecurityService(httpClient, basePath, configuration) {
        _classCallCheck(this, SecurityService);

        this.httpClient = httpClient;
        this.basePath = 'https://test.api.amadeus.com/v1';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(SecurityService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator4 = _createForOfIteratorHelper(consumes),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var consume = _step4.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          return false;
        }
      }, {
        key: "getAccessToken",
        value: function getAccessToken(grantType, clientId, clientSecret) {
          var observe = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'body';
          var reportProgress = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

          if (grantType === null || grantType === undefined) {
            throw new Error('Required parameter grantType was null or undefined when calling getAccessToken.');
          }

          if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling getAccessToken.');
          }

          if (clientSecret === null || clientSecret === undefined) {
            throw new Error('Required parameter clientSecret was null or undefined when calling getAccessToken.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = [];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/x-www-form-urlencoded'];
          var canConsumeForm = this.canConsumeForm(consumes);
          var formParams;
          var useForm = false;
          var convertFormParamsToString = false;

          if (useForm) {
            formParams = new FormData();
          } else {
            formParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
              encoder: new _encoder__WEBPACK_IMPORTED_MODULE_1__["CustomHttpUrlEncodingCodec"]()
            });
          }

          if (grantType !== undefined) {
            formParams = formParams.append('grant_type', grantType) || formParams;
          }

          if (clientId !== undefined) {
            formParams = formParams.append('client_id', clientId) || formParams;
          }

          if (clientSecret !== undefined) {
            formParams = formParams.append('client_secret', clientSecret) || formParams;
          }

          return this.httpClient.post("".concat(this.basePath, "/security/oauth2/token"), convertFormParamsToString ? formParams.toString() : formParams, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return SecurityService;
    }();
    /***/

  },

  /***/
  "./api-safety/configuration.ts":
  /*!*************************************!*\
    !*** ./api-safety/configuration.ts ***!
    \*************************************/

  /*! exports provided: Configuration */

  /***/
  function apiSafetyConfigurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return Configuration;
    });

    var Configuration = /*#__PURE__*/function () {
      function Configuration() {
        var configurationParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Configuration);

        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
      }
      /**
       * Select the correct content-type to use for a request.
       * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
       * If no content type is found return the first found type if the contentTypes is not empty
       * @param contentTypes - the array of content types that are available for selection
       * @returns the selected content-type or <code>undefined</code> if no selection could be made.
       */


      _createClass(Configuration, [{
        key: "selectHeaderContentType",
        value: function selectHeaderContentType(contentTypes) {
          var _this5 = this;

          if (contentTypes.length == 0) {
            return undefined;
          }

          var type = contentTypes.find(function (x) {
            return _this5.isJsonMime(x);
          });

          if (type === undefined) {
            return contentTypes[0];
          }

          return type;
        }
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */

      }, {
        key: "selectHeaderAccept",
        value: function selectHeaderAccept(accepts) {
          var _this6 = this;

          if (accepts.length == 0) {
            return undefined;
          }

          var type = accepts.find(function (x) {
            return _this6.isJsonMime(x);
          });

          if (type === undefined) {
            return accepts[0];
          }

          return type;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */

      }, {
        key: "isJsonMime",
        value: function isJsonMime(mime) {
          var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
          return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
      }]);

      return Configuration;
    }();
    /***/

  },

  /***/
  "./api-safety/encoder.ts":
  /*!*******************************!*\
    !*** ./api-safety/encoder.ts ***!
    \*******************************/

  /*! exports provided: CustomHttpUrlEncodingCodec */

  /***/
  function apiSafetyEncoderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function () {
      return CustomHttpUrlEncodingCodec;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /**
    * CustomHttpUrlEncodingCodec
    * Fix plus sign (+) not encoding, so sent as blank space
    * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
    */


    var CustomHttpUrlEncodingCodec = /*#__PURE__*/function (_angular_common_http_3) {
      _inherits(CustomHttpUrlEncodingCodec, _angular_common_http_3);

      var _super3 = _createSuper(CustomHttpUrlEncodingCodec);

      function CustomHttpUrlEncodingCodec() {
        _classCallCheck(this, CustomHttpUrlEncodingCodec);

        return _super3.apply(this, arguments);
      }

      _createClass(CustomHttpUrlEncodingCodec, [{
        key: "encodeKey",
        value: function encodeKey(k) {
          k = _get(_getPrototypeOf(CustomHttpUrlEncodingCodec.prototype), "encodeKey", this).call(this, k);
          return k.replace(/\+/gi, '%2B');
        }
      }, {
        key: "encodeValue",
        value: function encodeValue(v) {
          v = _get(_getPrototypeOf(CustomHttpUrlEncodingCodec.prototype), "encodeValue", this).call(this, v);
          return v.replace(/\+/gi, '%2B');
        }
      }]);

      return CustomHttpUrlEncodingCodec;
    }(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"]);
    /***/

  },

  /***/
  "./api-safety/variables.ts":
  /*!*********************************!*\
    !*** ./api-safety/variables.ts ***!
    \*********************************/

  /*! exports provided: BASE_PATH, COLLECTION_FORMATS */

  /***/
  function apiSafetyVariablesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return BASE_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
      return COLLECTION_FORMATS;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
    var COLLECTION_FORMATS = {
      'csv': ',',
      'tsv': '   ',
      'ssv': ' ',
      'pipes': '|'
    };
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app.component.css.shim.ngstyle.js":
  /*!***************************************************!*\
    !*** ./src/app/app.component.css.shim.ngstyle.js ***!
    \***************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.bounds[_ngcontent-%COMP%] {\n  max-width: 1024px;\n  margin: auto;\n}\n\n.sec1[_ngcontent-%COMP%], .sec2[_ngcontent-%COMP%], .sec3[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.selector-wrapper[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\n.date-picker[_ngcontent-%COMP%] {\n  max-width: 120px;\n}\n\n.flights-search-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 7px;\n}\n\n.welcome-info[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  border-left: 5px solid orange;\n}\n\n.offer-card[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n  margin-bottom: 32px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.scores-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  padding: 0px 4px 26px 4px;\n}\n.scores-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 32px;\n}\n.scores-wrapper[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.scores-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0px 8px;\n  min-height: 40px;\n}\n.scores-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  padding-bottom: 2px;\n}\n\n.border-score-low[_ngcontent-%COMP%] {\n  border-bottom: 3px solid green;\n}\n.border-score-average[_ngcontent-%COMP%] {\n  border-bottom: 3px solid orange;\n}\n.border-score-high[_ngcontent-%COMP%] {\n  border-bottom: 3px solid red;\n}\n.score-low[_ngcontent-%COMP%] {\n  color:green;\n}\n.score-average[_ngcontent-%COMP%] {\n  color:orange;\n}\n.score-high[_ngcontent-%COMP%] {\n  color:red;\n}\n\n.score-title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding: 10px;\n}\n\n.no-safety-data[_ngcontent-%COMP%] {\n  padding: 16px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFO0FBQ3hFO0VBQ0UsY0FBYztBQUNoQjtBQUVBLGdEQUFnRDtBQUNoRDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxhQUFhO0FBQ2Y7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSw2REFBNkQ7QUFDN0Q7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQSx1RUFBdUU7QUFDdkU7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBRUEsMERBQTBEO0FBQzFEO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjtBQUVBLHFEQUFxRDtBQUNyRDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSxXQUFXO0FBQ2I7QUFFQSxzREFBc0Q7QUFDdEQ7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUVBLDRGQUE0RjtBQUM1RjtFQUNFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBhZGRpbmcgc3BhY2VyIGluIGFwcGxpY2F0aW9uIGhlYWRlciB0byBzdXBwb3J0IGJ1dHRvbnMgb24gdGhlIHJpZ2h0ICovXG4udG9vbGJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLyogbGltaXRpbmcgYXBwbGljYXRpb24gd2lkdGggYW5kIGNlbnRlcmluZyBpdCAqL1xuLmJvdW5kcyB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi8qIHNldHRpbmcgcGFkZGluZyBmb3IgZ3JpZCBjb2x1bW5zICovXG4uc2VjMSwgLnNlYzIsIC5zZWMzIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLyogbWFyZ2luIGZvciBmb3JtIGlucHV0cyBpbiBmbGlnaHRzIHNlYXJjaCBwYW5lbCAqL1xuLnNlbGVjdG9yLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4vKiBsaW1pdGluZyB3aWR0aCBvZiBkZXBhcnR1cmUgYW5kIHJldHVybiBkYXRlIGlucHV0IGZpZWxkcyAqL1xuLmRhdGUtcGlja2VyIHtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLyogc2V0dGluZyBzdHlsZSB0byBwdXQgc3Bpbm5lciBpbnNpZGUgc2VhcmNoIGJ1dHRvbiBkdXJpbmcgQVBJIGNhbGxzICovXG4uZmxpZ2h0cy1zZWFyY2gtc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbi8qIGJhc2ljIHN0eWxlcyBmb3Igd2FybmluZyBtZXNzYWdlIHRvIGZpbGwgdGhlIHNldHRpbmdzICovXG4ud2VsY29tZS1pbmZvIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgb3JhbmdlO1xufVxuXG4vKiBhZGRpbmcgYm90dG9tIHBhZGRpbmcgdG8gZmxpZ2h0cyBzZWFyY2ggcmVzdWx0cyAgKi9cbi5vZmZlci1jYXJkIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi8qIG1ha2luZyBmbGlnaHRzIGRldGFpbHMgdGFibGUgZnVsbCBzaXplICovXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBiZWxvdyBjbGFzc2VzIHN0eWxpbmcgZm9yIHNhZmV0eSBpY29uL3RpdGxlL3Njb3JlICovXG4uc2NvcmVzLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggNHB4IDI2cHggNHB4O1xufVxuXG4uc2NvcmVzLXdyYXBwZXIgZGl2IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG5cbi5zY29yZXMtd3JhcHBlciAubWF0LWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5zY29yZXMtd3JhcHBlciBwIHtcbiAgcGFkZGluZzogMHB4IDhweDtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cblxuLnNjb3Jlcy13cmFwcGVyIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuXG4vKiBjbGFzc2VzIGJlbG93IGFyZSByZXF1aXJlZCB0byBjb2xvciBjb2RlIHNhZmV0eSBzY29yZSB2YWx1ZXMgd2l0aCB0ZXh0IG9yIGJvcmRlciBjb2xvcnMgKi9cbi5ib3JkZXItc2NvcmUtbG93IHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xufVxuXG4uYm9yZGVyLXNjb3JlLWF2ZXJhZ2Uge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgb3JhbmdlO1xufVxuXG4uYm9yZGVyLXNjb3JlLWhpZ2gge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmVkO1xufVxuXG4uc2NvcmUtbG93IHtcbiAgY29sb3I6Z3JlZW47XG59XG5cbi5zY29yZS1hdmVyYWdlIHtcbiAgY29sb3I6b3JhbmdlO1xufVxuXG4uc2NvcmUtaGlnaCB7XG4gIGNvbG9yOnJlZDtcbn1cblxuLyogb3ZlcmFsbCBzY29yZSBmb3IgbG9jYXRpb24gKi9cbi5zY29yZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogcGFkZGluZyBmb3Igbm8gc2FmZXR5IGRhdGEgcmVwbHkgKi9cbi5uby1zYWZldHktZGF0YSB7XG4gIHBhZGRpbmc6IDE2cHggMHB4O1xufVxuIl19 */"];
    /***/
  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.css.shim.ngstyle */
    "./src/app/app.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/icon/index.ngfactory */
    "./node_modules/@angular/material/icon/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/progress-spinner/index.ngfactory */
    "./node_modules/@angular/material/progress-spinner/index.ngfactory.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/card/index.ngfactory */
    "./node_modules/@angular/material/card/index.ngfactory.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/fesm2015/table.js");
    /* harmony import */


    var _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/table/index.ngfactory */
    "./node_modules/@angular/material/table/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/expansion/index.ngfactory */
    "./node_modules/@angular/material/expansion/index.ngfactory.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/fesm2015/expansion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/fesm2015/collections.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/divider/index.ngfactory */
    "./node_modules/@angular/material/divider/index.ngfactory.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/fesm2015/divider.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pipes/moment.pipe */
    "./src/app/pipes/moment.pipe.ts");
    /* harmony import */


    var _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/toolbar/index.ngfactory */
    "./node_modules/@angular/material/toolbar/index.ngfactory.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/form-field/index.ngfactory */
    "./node_modules/@angular/material/form-field/index.ngfactory.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/datepicker/index.ngfactory */
    "./node_modules/@angular/material/datepicker/index.ngfactory.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _services_amadeus_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./services/amadeus.service */
    "./src/app/services/amadeus.service.ts");
    /* harmony import */


    var _services_database_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./services/database.service */
    "./src/app/services/database.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./services/alert.service */
    "./src/app/services/alert.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {
        "animation": [{
          type: 7,
          name: "fadeInOut",
          definitions: [{
            type: 0,
            name: "in",
            styles: {
              type: 6,
              styles: {
                opacity: 1
              },
              offset: null
            },
            options: undefined
          }, {
            type: 1,
            expr: ":enter",
            animation: [{
              type: 6,
              styles: {
                opacity: 0
              },
              offset: null
            }, {
              type: 4,
              styles: null,
              timings: 250
            }],
            options: null
          }, {
            type: 1,
            expr: ":leave",
            animation: [{
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 0
                },
                offset: null
              },
              timings: 250
            }],
            options: null
          }],
          options: {}
        }]
      }
    });

    function View_AppComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["aria-label", "Database modal"], ["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.openDatabaseDialog() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["storage"]))], function (_ck, _v) {
        _ck(_v, 3, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).inline;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "warn";

        _ck(_v, 2, 0, currVal_2, currVal_3);
      });
    }

    function View_AppComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["search"]))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn";

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_AppComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-progress-spinner", [["class", "flights-search-spinner mat-progress-spinner"], ["diameter", "17"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"], [1, "aria-valuemin", 0], [1, "aria-valuemax", 0], [1, "aria-valuenow", 0], [1, "mode", 0]], null, null, _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatProgressSpinner_0"], _node_modules_angular_material_progress_spinner_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatProgressSpinner"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinner"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS"]], {
        diameter: [0, "diameter"],
        mode: [1, "mode"]
      }, null)], function (_ck, _v) {
        var currVal_7 = "17";
        var currVal_8 = "indeterminate";

        _ck(_v, 1, 0, currVal_7, currVal_8);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._noopAnimations;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).diameter;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).diameter;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "determinate" ? 0 : null;
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "determinate" ? 100 : null;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode === "determinate" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).value : null;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mode;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    function View_AppComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "mat-card", [["class", "welcome-info mat-card mat-focus-indicator"]], [[24, "@fadeInOut", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Please fill "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 1, "a", [["href", "https://developers.amadeus.com/get-started/get-started-with-self-service-apis-335"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amadeus API"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" key & secret or toggle API emulation in "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 2, "mat-icon", [["aria-label", "Settings"], ["class", "mat-icon notranslate"], ["inline", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], {
        inline: [0, "inline"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" before using this demo app. "]))], function (_ck, _v) {
        var currVal_4 = "";

        _ck(_v, 7, 0, currVal_4);
      }, function (_ck, _v) {
        var currVal_0 = undefined;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).inline;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).color !== "warn";

        _ck(_v, 6, 0, currVal_2, currVal_3);
      });
    }

    function View_AppComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" From "]))], null, null);
    }

    function View_AppComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.departure.iataCode;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_AppComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" To "]))], null, null);
    }

    function View_AppComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.arrival.iataCode;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_AppComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Duration "]))], null, null);
    }

    function View_AppComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 3)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), _v.context.$implicit.duration, "duration", "HH:mm"));

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_AppComponent_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Departure "]))], null, null);
    }

    function View_AppComponent_15(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 3)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), _v.context.$implicit.departure.at, "date", "LT"));

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_AppComponent_16(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "th", [["class", "mat-header-cell"], ["mat-header-cell", ""], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Arrival "]))], null, null);
    }

    function View_AppComponent_17(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [["class", "mat-cell"], ["mat-cell", ""], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 3)], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent.parent, 0), _v.context.$implicit.arrival.at, "date", "LT"));

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_AppComponent_18(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-header-row"], ["mat-header-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatHeaderRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatHeaderRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkHeaderRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRow"], [], null, null)], null, null);
    }

    function View_AppComponent_19(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [["class", "mat-row"], ["mat-row", ""], ["role", "row"]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatRow_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRow"], [], null, null)], null, null);
    }

    function View_AppComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 98, "mat-expansion-panel", [["class", "mat-expansion-panel"]], [[2, "mat-expanded", null], [2, "_mat-animation-noopable", null], [2, "mat-expansion-panel-spacing", null]], null, null, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatExpansionPanel_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatExpansionPanel"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1753088, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanel"], [[3, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MAT_ACCORDION"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_19__["UniqueSelectionDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 41, {
        _lazyContent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MAT_ACCORDION"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 13, "mat-expansion-panel-header", [["class", "right-aligned-header mat-expansion-panel-header mat-focus-indicator"], ["role", "button"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-controls", 0], [1, "aria-expanded", 0], [1, "aria-disabled", 0], [2, "mat-expanded", null], [2, "mat-expansion-toggle-indicator-after", null], [2, "mat-expansion-toggle-indicator-before", null], [40, "@.disabled", 0], [40, "@expansionHeight", 0]], [[null, "click"], [null, "keydown"], ["component", "@expansionHeight.start"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._toggle() !== false;
          ad = pd_0 && ad;
        }

        if ("keydown" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._keydown($event) !== false;
          ad = pd_1 && ad;
        }

        if ("component:@expansionHeight.start" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationStarted() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatExpansionPanelHeader_0"], _node_modules_angular_material_expansion_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatExpansionPanelHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 180224, [[40, 4]], 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelHeader"], [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanel"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](6, {
        collapsedHeight: 0,
        expandedHeight: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
        value: 0,
        params: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "mat-panel-title", [["class", "mat-expansion-panel-header-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 1, 6, "mat-panel-description", [["class", "mat-expansion-panel-header-description"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelDescription"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "primary"], ["inline", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], {
        color: [0, "color"],
        inline: [1, "inline"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["schedule"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](17, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 1, 80, "table", [["class", "mat-elevation-z8 mat-table"], ["mat-table", ""]], null, null, null, _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatTable_0"], _node_modules_angular_material_table_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatTable"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkTable"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTable"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 2342912, null, 4, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTable"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Directionality"]], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]], {
        dataSource: [0, "dataSource"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 42, {
        _contentColumnDefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 43, {
        _contentRowDefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 44, {
        _contentHeaderRowDefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 45, {
        _contentFooterRowDefs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CDK_TABLE"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTable"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CDK_TABLE"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 46, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 47, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 48, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[42, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_AppComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[47, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_AppComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[46, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CDK_TABLE"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 49, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 50, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 51, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[42, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_AppComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[50, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_AppComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[49, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CDK_TABLE"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 52, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 53, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 54, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[42, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_AppComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[53, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_AppComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[52, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CDK_TABLE"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 55, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 56, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 57, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[42, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_AppComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[56, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_AppComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[55, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 12, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], [[2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CDK_TABLE"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 58, {
        cell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 59, {
        headerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 60, {
        footerCell: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[42, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_AppComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[59, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 2, null, View_AppComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[58, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 3, null, View_AppComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](92, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CDK_TABLE"]]], {
        columns: [0, "columns"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](93, 5), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[44, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkHeaderRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 3, null, View_AppComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [2, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CDK_TABLE"]]], {
        columns: [0, "columns"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](97, 5), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[43, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_15__["CdkRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var currVal_16 = "primary";
        var currVal_17 = "";

        _ck(_v, 14, 0, currVal_16, currVal_17);

        var currVal_19 = _v.context.$implicit.segments;

        _ck(_v, 20, 0, currVal_19);

        var currVal_20 = "departure";

        _ck(_v, 28, 0, currVal_20);

        var currVal_21 = "arrival";

        _ck(_v, 41, 0, currVal_21);

        var currVal_22 = "duration";

        _ck(_v, 54, 0, currVal_22);

        var currVal_23 = "departureAt";

        _ck(_v, 67, 0, currVal_23);

        var currVal_24 = "arrivalAt";

        _ck(_v, 80, 0, currVal_24);

        var currVal_25 = _ck(_v, 93, 0, "departure", "arrival", "duration", "departureAt", "arrivalAt");

        _ck(_v, 92, 0, currVal_25);

        var currVal_26 = _ck(_v, 97, 0, "departure", "arrival", "duration", "departureAt", "arrivalAt");

        _ck(_v, 96, 0, currVal_26);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).expanded;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._hasSpacing();

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).panel._headerId;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).disabled ? 0 - 1 : 0;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._getPanelId();

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._isExpanded();

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).panel.disabled;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._isExpanded();

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._getTogglePosition() === "after";
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._getTogglePosition() === "before";

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._animationsDisabled;

        var currVal_12 = _ck(_v, 7, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._getExpandedState(), _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).collapsedHeight, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).expandedHeight));

        _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12);

        var currVal_13 = _v.context.index == 1 ? "Return flight" : "Departure flight";

        _ck(_v, 10, 0, currVal_13);

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).inline;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).color !== "warn";

        _ck(_v, 13, 0, currVal_14, currVal_15);

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 16, 0, _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent.parent, 0), _v.context.$implicit.duration, "duration", "HH:mm"));

        _ck(_v, 16, 0, currVal_18);
      });
    }

    function View_AppComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "mat-card", [["class", "offer-card mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 14, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatCardHeader_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 2, 7, "mat-card-title-group", [["class", "mat-card-title-group"]], null, null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatCardTitleGroup_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatCardTitleGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitleGroup"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 2, 4, "mat-card-title-group", [["class", "mat-card-title-group"]], null, null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatCardTitleGroup_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatCardTitleGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitleGroup"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 7, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 5, "mat-accordion", [["class", "mat-accordion"], ["multi", "true"]], [[24, "@.disabled", 0], [2, "mat-accordion-multi", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MAT_ACCORDION"], null, [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatAccordion"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 1720320, null, 1, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatAccordion"], [], {
        multi: [0, "multi"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 40, {
        _headers: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var currVal_6 = "true";

        _ck(_v, 21, 0, currVal_6);

        var currVal_7 = _v.context.$implicit.itineraries;

        _ck(_v, 24, 0, currVal_7);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.price.grandTotal;

        _ck(_v, 8, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.price.currency;

        _ck(_v, 11, 0, currVal_2);

        var currVal_3 = _co.formatAirlines(_v.context.$implicit.validatingAirlineCodes, _co.flightsDictionaries.carriers);

        _ck(_v, 16, 0, currVal_3);

        var currVal_4 = true;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).multi;

        _ck(_v, 19, 0, currVal_4, currVal_5);
      });
    }

    function View_AppComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], [[24, "@fadeInOut", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.flightsOffers;

        _ck(_v, 2, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_0 = undefined;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_AppComponent_21(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co.checkRiskLevel(_co.safetyScore.overall);

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_AppComponent_22(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "mat-card-title-group", [["class", "mat-card-title-group"]], null, null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatCardTitleGroup_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatCardTitleGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitleGroup"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "mat-card-title", [["class", "score-title mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""]))], function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _co.applyCSSClass("text", _co.safetyScore.overall);

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _co.applyCSSClass("text", _co.safetyScore.overall);

        _ck(_v, 2, 0, currVal_1);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.safetyScore.overall;

        _ck(_v, 6, 0, currVal_2);
      });
    }

    function View_AppComponent_23(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[24, "@fadeInOut", 0], [1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_23__["View_MatDivider_0"], _node_modules_angular_material_divider_index_ngfactory__WEBPACK_IMPORTED_MODULE_23__["RenderType_MatDivider"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDivider"], [], null, null)], null, function (_ck, _v) {
        var currVal_0 = undefined;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).vertical ? "vertical" : "horizontal";

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).vertical;

        var currVal_3 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).vertical;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inset;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
      });
    }

    function View_AppComponent_24(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "no-safety-data"]], [[24, "@fadeInOut", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" No safety data available. Try using New York, London, Barcelona or Berlin as destination "]))], null, function (_ck, _v) {
        var currVal_0 = undefined;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_AppComponent_26(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["fxFlex", "33"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "mat-icon", [["aria-label", "score.title"], ["class", "mat-icon notranslate"], ["color", "primary"], ["inline", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], {
        color: [0, "color"],
        inline: [1, "inline"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "span", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 933888, null, 0, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultClassDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["MediaMarshaller"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [6, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]]], {
        ngClass: [0, "ngClass"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "33";

        _ck(_v, 1, 0, currVal_0);

        var currVal_3 = "primary";
        var currVal_4 = "";

        _ck(_v, 3, 0, currVal_3, currVal_4);

        var currVal_7 = _co.applyCSSClass("border", _co.safetyScore[_v.context.$implicit.locator]);

        _ck(_v, 8, 0, currVal_7);

        var currVal_8 = _co.applyCSSClass("border", _co.safetyScore[_v.context.$implicit.locator]);

        _ck(_v, 9, 0, currVal_8);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).inline;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).color !== "warn";

        _ck(_v, 2, 0, currVal_1, currVal_2);

        var currVal_5 = _v.context.$implicit.icon;

        _ck(_v, 4, 0, currVal_5);

        var currVal_6 = _v.context.$implicit.title;

        _ck(_v, 6, 0, currVal_6);

        var currVal_9 = _co.safetyScore[_v.context.$implicit.locator];

        _ck(_v, 10, 0, currVal_9);
      });
    }

    function View_AppComponent_25(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "scores-wrapper"], ["fxLayout", "coluumn wrap"]], [[24, "@fadeInOut", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = "coluumn wrap";

        _ck(_v, 1, 0, currVal_1);

        var currVal_2 = _co.safetyScoreSettings;

        _ck(_v, 3, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = undefined;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_AppComponent_20(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [], [[24, "@fadeInOut", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 20, "mat-card", [["class", "location-card mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 10, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatCardHeader_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 2, 6, "mat-card-title-group", [["class", "mat-card-title-group"]], null, null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatCardTitleGroup_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatCardTitleGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitleGroup"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_AppComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 2, 1, null, View_AppComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_AppComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 5, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = _co.safetyScore;

        _ck(_v, 11, 0, currVal_3);

        var currVal_4 = _co.safetyScore;

        _ck(_v, 13, 0, currVal_4);

        var currVal_5 = _co.safetyScore || !_co.foundSafetyData && _co.foundSafetyData !== null;

        _ck(_v, 15, 0, currVal_5);

        var currVal_6 = !_co.foundSafetyData && _co.foundSafetyData !== null;

        _ck(_v, 19, 0, currVal_6);

        var currVal_7 = _co.safetyScore;

        _ck(_v, 21, 0, currVal_7);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = undefined;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        _ck(_v, 1, 0, currVal_1);

        var currVal_2 = _co.locationData.address.cityName;

        _ck(_v, 9, 0, currVal_2);
      });
    }

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_26__["MomentPipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 12, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]], {
        color: [0, "color"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        _toolbarRows: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["AirTravel demo application"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 0, "span", [["class", "toolbar-spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 4, "button", [["aria-label", "Settings modal"], ["class", "mat-focus-indicator"], ["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.openSettingsDialog() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 149, "div", [["class", "bounds"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 135, "div", [["class", "selector-wrapper"], ["fxFlexFill", ""], ["fxLayout", "row"], ["fxLayout.xs", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"],
        "fxLayout.xs": [1, "fxLayout.xs"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexFillDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexFillStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["MediaMarshaller"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 132, "div", [["class", "sec1"], ["fxFlex", "100"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 29, "mat-form-field", [["appearance", "standard"], ["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], {
        appearance: [0, "appearance"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        _controlNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, {
        _controlStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        _labelChildNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, {
        _labelChildStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        _placeholderChild: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        _errorChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        _hintChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        _prefixChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        _suffixChildren: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, [[4, 4], [5, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Departing from?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Chicago or Barcelona"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("focus" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._focusChanged(true) !== false;
          ad = pd_4 && ad;
        }

        if ("blur" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._focusChanged(false) !== false;
          ad = pd_5 && ad;
        }

        if ("input" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._onInput() !== false;
          ad = pd_6 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_7 = (_co.flightsQuery.originLocationCode = $event) !== false;
          ad = pd_7 && ad;
        }

        if ("change" === en) {
          var pd_8 = _co.validateQuery() !== false;
          ad = pd_8 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_32__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NG_VALUE_ACCESSOR"]]], {
        isDisabled: [0, "isDisabled"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_34__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        disabled: [0, "disabled"],
        placeholder: [1, "placeholder"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[2, 4], [3, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, 4, 3, "mat-icon", [["class", "mat-icon notranslate"], ["inline", ""], ["matSuffix", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], {
        inline: [0, "inline"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, [[10, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatSuffix"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["flight_takeoff"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, 6, 2, "mat-hint", [["class", "mat-hint"]], [[2, "mat-right", null], [1, "id", 0], [1, "align", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, [[8, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatHint"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["City name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 29, "mat-form-field", [["appearance", "standard"], ["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormField"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], {
        appearance: [0, "appearance"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
        _controlNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 12, {
        _controlStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
        _labelChildNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 14, {
        _labelChildStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
        _placeholderChild: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
        _errorChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
        _hintChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
        _prefixChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
        _suffixChildren: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, [[13, 4], [14, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Going to?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "New York or London"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("focus" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71)._focusChanged(true) !== false;
          ad = pd_4 && ad;
        }

        if ("blur" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71)._focusChanged(false) !== false;
          ad = pd_5 && ad;
        }

        if ("input" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71)._onInput() !== false;
          ad = pd_6 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_7 = (_co.flightsQuery.destinationLocationCode = $event) !== false;
          ad = pd_7 && ad;
        }

        if ("change" === en) {
          var pd_8 = _co.validateQuery() !== false;
          ad = pd_8 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_32__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NG_VALUE_ACCESSOR"]]], {
        isDisabled: [0, "isDisabled"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_34__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        disabled: [0, "disabled"],
        placeholder: [1, "placeholder"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[11, 4], [12, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, 4, 3, "mat-icon", [["class", "mat-icon notranslate"], ["inline", ""], ["matSuffix", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]]], {
        inline: [0, "inline"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, [[19, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatSuffix"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["flight_land"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, 6, 2, "mat-hint", [["class", "mat-hint"]], [[2, "mat-right", null], [1, "id", 0], [1, "align", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 16384, [[17, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatHint"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["City name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 31, "mat-form-field", [["class", "date-picker mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
        _controlNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 21, {
        _controlStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
        _labelChildNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 23, {
        _labelChildStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
        _placeholderChild: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
        _errorChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, {
        _hintChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 27, {
        _prefixChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 28, {
        _suffixChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 16384, [[22, 4], [23, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Departing"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, 1, 10, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""]], [[1, "aria-haspopup", 0], [1, "aria-owns", 0], [1, "min", 0], [1, "max", 0], [8, "disabled", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "dateChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "keydown"], [null, "focus"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 96)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("input" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._onInput($event.target.value) !== false;
          ad = pd_4 && ad;
        }

        if ("change" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._onChange() !== false;
          ad = pd_5 && ad;
        }

        if ("blur" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._onBlur() !== false;
          ad = pd_6 && ad;
        }

        if ("keydown" === en) {
          var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._onKeydown($event) !== false;
          ad = pd_7 && ad;
        }

        if ("focus" === en) {
          var pd_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104)._focusChanged(true) !== false;
          ad = pd_8 && ad;
        }

        if ("blur" === en) {
          var pd_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104)._focusChanged(false) !== false;
          ad = pd_9 && ad;
        }

        if ("input" === en) {
          var pd_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104)._onInput() !== false;
          ad = pd_10 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_11 = (_co.flightsQuery.departureDate = $event) !== false;
          ad = pd_11 && ad;
        }

        if ("dateChange" === en) {
          var pd_12 = _co.validateQuery() !== false;
          ad = pd_12 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 4341760, null, 0, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["DateAdapter"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MAT_DATE_FORMATS"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MAT_FORM_FIELD"]]], {
        matDatepicker: [0, "matDatepicker"],
        min: [1, "min"],
        disabled: [2, "disabled"]
      }, {
        dateChange: "dateChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerInput"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_32__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerInput"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NG_VALUE_ACCESSOR"]]], {
        isDisabled: [0, "isDisabled"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MAT_INPUT_VALUE_ACCESSOR"], null, [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerInput"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](104, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["ErrorStateMatcher"], [6, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MAT_INPUT_VALUE_ACCESSOR"]], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_34__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        disabled: [0, "disabled"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[20, 4], [21, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, 4, 3, "mat-datepicker-toggle", [["class", "mat-datepicker-toggle"], ["matSuffix", ""]], [[1, "tabindex", 0], [2, "mat-datepicker-toggle-active", null], [2, "mat-accent", null], [2, "mat-warn", null]], [[null, "focus"]], function (_v, en, $event) {
        var ad = true;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108)._button.focus() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_36__["View_MatDatepickerToggle_0"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_36__["RenderType_MatDatepickerToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](107, 16384, [[28, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatSuffix"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](108, 1753088, null, 1, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerToggle"], [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null]], {
        datepicker: [0, "datepicker"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 29, {
        _customIcon: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 16777216, null, 1, 1, "mat-datepicker", [], null, null, null, _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_36__["View_MatDatepicker_0"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_36__["RenderType_MatDatepicker"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 180224, [["picker1", 4]], 0, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepicker"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MAT_DATEPICKER_SCROLL_STRATEGY"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["DateAdapter"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Directionality"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 31, "mat-form-field", [["class", "date-picker mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__["View_MatFormField_0"], _node_modules_angular_material_form_field_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 30, {
        _controlNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 31, {
        _controlStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 32, {
        _labelChildNonStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 33, {
        _labelChildStatic: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 34, {
        _placeholderChild: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 35, {
        _errorChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 36, {
        _hintChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 37, {
        _prefixChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 38, {
        _suffixChildren: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MAT_FORM_FIELD"], null, [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormField"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 0, null, 3, 2, "mat-label", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 16384, [[32, 4], [33, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatLabel"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Returning"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 0, null, 1, 10, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""]], [[1, "aria-haspopup", 0], [1, "aria-owns", 0], [1, "min", 0], [1, "max", 0], [8, "disabled", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "ngModelChange"], [null, "dateChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "keydown"], [null, "focus"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("input" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129)._onInput($event.target.value) !== false;
          ad = pd_4 && ad;
        }

        if ("change" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129)._onChange() !== false;
          ad = pd_5 && ad;
        }

        if ("blur" === en) {
          var pd_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129)._onBlur() !== false;
          ad = pd_6 && ad;
        }

        if ("keydown" === en) {
          var pd_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129)._onKeydown($event) !== false;
          ad = pd_7 && ad;
        }

        if ("focus" === en) {
          var pd_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._focusChanged(true) !== false;
          ad = pd_8 && ad;
        }

        if ("blur" === en) {
          var pd_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._focusChanged(false) !== false;
          ad = pd_9 && ad;
        }

        if ("input" === en) {
          var pd_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._onInput() !== false;
          ad = pd_10 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_11 = (_co.flightsQuery.returnDate = $event) !== false;
          ad = pd_11 && ad;
        }

        if ("dateChange" === en) {
          var pd_12 = _co.validateQuery() !== false;
          ad = pd_12 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](128, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](129, 4341760, null, 0, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["DateAdapter"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MAT_DATE_FORMATS"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MAT_FORM_FIELD"]]], {
        matDatepicker: [0, "matDatepicker"],
        min: [1, "min"],
        disabled: [2, "disabled"]
      }, {
        dateChange: "dateChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NG_VALIDATORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerInput"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_32__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerInput"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgModel"], [[8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NG_VALUE_ACCESSOR"]]], {
        isDisabled: [0, "isDisabled"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MAT_INPUT_VALUE_ACCESSOR"], null, [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerInput"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](136, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgControl"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["ErrorStateMatcher"], [6, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MAT_INPUT_VALUE_ACCESSOR"]], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_34__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        disabled: [0, "disabled"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[30, 4], [31, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_33__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, 4, 3, "mat-datepicker-toggle", [["class", "mat-datepicker-toggle"], ["matSuffix", ""]], [[1, "tabindex", 0], [2, "mat-datepicker-toggle-active", null], [2, "mat-accent", null], [2, "mat-warn", null]], [[null, "focus"]], function (_v, en, $event) {
        var ad = true;

        if ("focus" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 140)._button.focus() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_36__["View_MatDatepickerToggle_0"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_36__["RenderType_MatDatepickerToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](139, 16384, [[38, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_30__["MatSuffix"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](140, 1753088, null, 1, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerToggle"], [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepickerIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [8, null]], {
        datepicker: [0, "datepicker"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 39, {
        _customIcon: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](142, 16777216, null, 1, 1, "mat-datepicker", [], null, null, null, _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_36__["View_MatDatepicker_0"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_36__["RenderType_MatDatepicker"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](143, 180224, [["picker2", 4]], 0, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MatDatepicker"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialog"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_35__["MAT_DATEPICKER_SCROLL_STRATEGY"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["DateAdapter"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Directionality"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](144, 0, null, null, 6, "button", [["class", "mat-focus-indicator"], ["color", "primary"], ["mat-flat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.initiateSearch() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](145, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], {
        disabled: [0, "disabled"],
        color: [1, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_AppComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](147, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_AppComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](149, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Find flights "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](152, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, null, 10, "div", [["class", "results-wrapper"], ["fxFlexFill", ""], ["fxLayout", "row"], ["fxLayout.xs", "column"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](154, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["DefaultLayoutDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["LayoutStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["MediaMarshaller"]], {
        fxLayout: [0, "fxLayout"],
        "fxLayout.xs": [1, "fxLayout.xs"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](155, 671744, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexFillDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["StyleUtils"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexFillStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["MediaMarshaller"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, null, 3, "div", [["class", "sec2"], ["fxFlex", "60"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](157, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](159, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, null, 3, "div", [["class", "sec3"], ["fxFlex", "40"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](161, 737280, null, 0, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["DefaultFlexDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["StyleUtils"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["LAYOUT_CONFIG"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_25__["FlexStyleBuilder"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_22__["MediaMarshaller"]], {
        fxFlex: [0, "fxFlex"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](163, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = "primary";

        _ck(_v, 2, 0, currVal_2);

        var currVal_3 = _co.databaseApi.verifyDbLogs();

        _ck(_v, 8, 0, currVal_3);

        _ck(_v, 12, 0);

        var currVal_8 = "row";
        var currVal_9 = "column";

        _ck(_v, 16, 0, currVal_8, currVal_9);

        var currVal_10 = "100";

        _ck(_v, 19, 0, currVal_10);

        var currVal_33 = "standard";

        _ck(_v, 22, 0, currVal_33);

        var currVal_50 = _co.disableEdit;
        var currVal_51 = _co.flightsQuery.originLocationCode;

        _ck(_v, 38, 0, currVal_50, currVal_51);

        var currVal_52 = _co.disableEdit;
        var currVal_53 = "Chicago or Barcelona";

        _ck(_v, 41, 0, currVal_52, currVal_53);

        var currVal_56 = "";

        _ck(_v, 44, 0, currVal_56);

        var currVal_82 = "standard";

        _ck(_v, 52, 0, currVal_82);

        var currVal_99 = _co.disableEdit;
        var currVal_100 = _co.flightsQuery.destinationLocationCode;

        _ck(_v, 68, 0, currVal_99, currVal_100);

        var currVal_101 = _co.disableEdit;
        var currVal_102 = "New York or London";

        _ck(_v, 71, 0, currVal_101, currVal_102);

        var currVal_105 = "";

        _ck(_v, 74, 0, currVal_105);

        var currVal_152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111);

        var currVal_153 = _co.minDepartureDate;
        var currVal_154 = _co.disableEdit;

        _ck(_v, 97, 0, currVal_152, currVal_153, currVal_154);

        var currVal_155 = _co.disableEdit;
        var currVal_156 = _co.flightsQuery.departureDate;

        _ck(_v, 100, 0, currVal_155, currVal_156);

        var currVal_157 = _co.disableEdit;

        _ck(_v, 104, 0, currVal_157);

        var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111);

        _ck(_v, 108, 0, currVal_162);

        var currVal_206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143);

        var currVal_207 = _co.minReturnDate;
        var currVal_208 = _co.disableEdit;

        _ck(_v, 129, 0, currVal_206, currVal_207, currVal_208);

        var currVal_209 = _co.disableEdit;
        var currVal_210 = _co.flightsQuery.returnDate;

        _ck(_v, 132, 0, currVal_209, currVal_210);

        var currVal_211 = _co.disableEdit;

        _ck(_v, 136, 0, currVal_211);

        var currVal_216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143);

        _ck(_v, 140, 0, currVal_216);

        var currVal_219 = _co.disableSearch || _co.loadingData;
        var currVal_220 = "primary";

        _ck(_v, 145, 0, currVal_219, currVal_220);

        var currVal_221 = !_co.loadingData;

        _ck(_v, 147, 0, currVal_221);

        var currVal_222 = _co.loadingData;

        _ck(_v, 149, 0, currVal_222);

        var currVal_223 = !_co.disableEdit && !_co.loadingData && !_co.flightsOffers;

        _ck(_v, 152, 0, currVal_223);

        var currVal_224 = "row";
        var currVal_225 = "column";

        _ck(_v, 154, 0, currVal_224, currVal_225);

        var currVal_226 = "60";

        _ck(_v, 157, 0, currVal_226);

        var currVal_227 = _co.flightsOffers;

        _ck(_v, 159, 0, currVal_227);

        var currVal_228 = "40";

        _ck(_v, 161, 0, currVal_228);

        var currVal_229 = _co.locationData && _co.flightsOffers;

        _ck(_v, 163, 0, currVal_229);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._toolbarRows.length > 0;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._toolbarRows.length === 0;

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).disabled || null;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._animationMode === "NoopAnimations";

        _ck(_v, 9, 0, currVal_4, currVal_5);

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).inline;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).color !== "warn";

        _ck(_v, 11, 0, currVal_6, currVal_7);

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).appearance == "standard";
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).appearance == "fill";
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).appearance == "outline";
        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).appearance == "legacy";

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._control.errorState;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._canLabelFloat;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldLabelFloat();

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._hasFloatingLabel();

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._hideControlPlaceholder();

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._control.disabled;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._control.autofilled;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._control.focused;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).color == "accent";
        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).color == "warn";

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("untouched");

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("touched");

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("pristine");

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("dirty");

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("valid");

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("invalid");

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._shouldForward("pending");

        var currVal_32 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._animationsEnabled;

        _ck(_v, 20, 1, [currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32]);

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassUntouched;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassTouched;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPristine;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassDirty;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassValid;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassInvalid;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).ngClassPending;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._isServer;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).id;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).placeholder;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).disabled;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).required;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._isNativeSelect || null;
        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41)._ariaDescribedby || null;

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).errorState;

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).required.toString();

        _ck(_v, 35, 1, [currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49]);

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).inline;

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).color !== "warn";

        _ck(_v, 43, 0, currVal_54, currVal_55);

        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).align == "end";

        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).id;

        var currVal_59 = null;

        _ck(_v, 47, 0, currVal_57, currVal_58, currVal_59);

        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).appearance == "standard";
        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).appearance == "fill";
        var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).appearance == "outline";
        var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).appearance == "legacy";

        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._control.errorState;

        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._canLabelFloat;

        var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._shouldLabelFloat();

        var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._hasFloatingLabel();

        var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._hideControlPlaceholder();

        var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._control.disabled;

        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._control.autofilled;

        var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._control.focused;

        var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).color == "accent";
        var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).color == "warn";

        var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._shouldForward("untouched");

        var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._shouldForward("touched");

        var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._shouldForward("pristine");

        var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._shouldForward("dirty");

        var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._shouldForward("valid");

        var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._shouldForward("invalid");

        var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._shouldForward("pending");

        var currVal_81 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52)._animationsEnabled;

        _ck(_v, 50, 1, [currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81]);

        var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassUntouched;

        var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassTouched;

        var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassPristine;

        var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassDirty;

        var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassValid;

        var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassInvalid;

        var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 70).ngClassPending;

        var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71)._isServer;

        var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).id;

        var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).placeholder;

        var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).disabled;

        var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).required;

        var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71)._isNativeSelect || null;
        var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71)._ariaDescribedby || null;

        var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).errorState;

        var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).required.toString();

        _ck(_v, 65, 1, [currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98]);

        var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).inline;

        var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).color !== "warn";

        _ck(_v, 73, 0, currVal_103, currVal_104);

        var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).align == "end";

        var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).id;

        var currVal_108 = null;

        _ck(_v, 77, 0, currVal_106, currVal_107, currVal_108);

        var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).appearance == "standard";
        var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).appearance == "fill";
        var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).appearance == "outline";
        var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).appearance == "legacy";

        var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._control.errorState;

        var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._canLabelFloat;

        var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._shouldLabelFloat();

        var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._hasFloatingLabel();

        var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._hideControlPlaceholder();

        var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._control.disabled;

        var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._control.autofilled;

        var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._control.focused;

        var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).color == "accent";
        var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).color == "warn";

        var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._shouldForward("untouched");

        var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._shouldForward("touched");

        var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._shouldForward("pristine");

        var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._shouldForward("dirty");

        var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._shouldForward("valid");

        var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._shouldForward("invalid");

        var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._shouldForward("pending");

        var currVal_130 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81)._animationsEnabled;

        _ck(_v, 80, 1, [currVal_109, currVal_110, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130]);

        var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._datepicker ? "dialog" : null;
        var currVal_132 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._datepicker == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._datepicker.opened) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._datepicker.id || null;
        var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).min ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._dateAdapter.toIso8601(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).min) : null;
        var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).max ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97)._dateAdapter.toIso8601(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).max) : null;

        var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).disabled;

        var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).ngClassUntouched;

        var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).ngClassTouched;

        var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).ngClassPristine;

        var currVal_139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).ngClassDirty;

        var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).ngClassValid;

        var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).ngClassInvalid;

        var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).ngClassPending;

        var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104)._isServer;

        var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).id;

        var currVal_145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).placeholder;

        var currVal_146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).disabled;

        var currVal_147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).required;

        var currVal_148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104)._isNativeSelect || null;
        var currVal_149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104)._ariaDescribedby || null;

        var currVal_150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).errorState;

        var currVal_151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).required.toString();

        _ck(_v, 95, 1, [currVal_131, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138, currVal_139, currVal_140, currVal_141, currVal_142, currVal_143, currVal_144, currVal_145, currVal_146, currVal_147, currVal_148, currVal_149, currVal_150, currVal_151]);

        var currVal_158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).disabled ? null : 0 - 1;

        var currVal_159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).datepicker && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).datepicker.opened;

        var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).datepicker && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).datepicker.color === "accent";
        var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).datepicker && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).datepicker.color === "warn";

        _ck(_v, 106, 0, currVal_158, currVal_159, currVal_160, currVal_161);

        var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).appearance == "standard";
        var currVal_164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).appearance == "fill";
        var currVal_165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).appearance == "outline";
        var currVal_166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).appearance == "legacy";

        var currVal_167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._control.errorState;

        var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._canLabelFloat;

        var currVal_169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._shouldLabelFloat();

        var currVal_170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._hasFloatingLabel();

        var currVal_171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._hideControlPlaceholder();

        var currVal_172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._control.disabled;

        var currVal_173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._control.autofilled;

        var currVal_174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._control.focused;

        var currVal_175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).color == "accent";
        var currVal_176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113).color == "warn";

        var currVal_177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._shouldForward("untouched");

        var currVal_178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._shouldForward("touched");

        var currVal_179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._shouldForward("pristine");

        var currVal_180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._shouldForward("dirty");

        var currVal_181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._shouldForward("valid");

        var currVal_182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._shouldForward("invalid");

        var currVal_183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._shouldForward("pending");

        var currVal_184 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 113)._animationsEnabled;

        _ck(_v, 112, 1, [currVal_163, currVal_164, currVal_165, currVal_166, currVal_167, currVal_168, currVal_169, currVal_170, currVal_171, currVal_172, currVal_173, currVal_174, currVal_175, currVal_176, currVal_177, currVal_178, currVal_179, currVal_180, currVal_181, currVal_182, currVal_183, currVal_184]);

        var currVal_185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129)._datepicker ? "dialog" : null;
        var currVal_186 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129)._datepicker == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129)._datepicker.opened) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129)._datepicker.id || null;
        var currVal_187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).min ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129)._dateAdapter.toIso8601(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).min) : null;
        var currVal_188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).max ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129)._dateAdapter.toIso8601(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).max) : null;

        var currVal_189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 129).disabled;

        var currVal_190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassUntouched;

        var currVal_191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassTouched;

        var currVal_192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassPristine;

        var currVal_193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassDirty;

        var currVal_194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassValid;

        var currVal_195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassInvalid;

        var currVal_196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassPending;

        var currVal_197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._isServer;

        var currVal_198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).id;

        var currVal_199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).placeholder;

        var currVal_200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).disabled;

        var currVal_201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).required;

        var currVal_202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._isNativeSelect || null;
        var currVal_203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136)._ariaDescribedby || null;

        var currVal_204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).errorState;

        var currVal_205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 136).required.toString();

        _ck(_v, 127, 1, [currVal_185, currVal_186, currVal_187, currVal_188, currVal_189, currVal_190, currVal_191, currVal_192, currVal_193, currVal_194, currVal_195, currVal_196, currVal_197, currVal_198, currVal_199, currVal_200, currVal_201, currVal_202, currVal_203, currVal_204, currVal_205]);

        var currVal_212 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 140).disabled ? null : 0 - 1;

        var currVal_213 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 140).datepicker && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 140).datepicker.opened;

        var currVal_214 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 140).datepicker && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 140).datepicker.color === "accent";
        var currVal_215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 140).datepicker && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 140).datepicker.color === "warn";

        _ck(_v, 138, 0, currVal_212, currVal_213, currVal_214, currVal_215);

        var currVal_217 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 145).disabled || null;
        var currVal_218 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 145)._animationMode === "NoopAnimations";

        _ck(_v, 144, 0, currVal_217, currVal_218);
      });
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_39__["AppComponent"], [_services_amadeus_service__WEBPACK_IMPORTED_MODULE_40__["AmadeusService"], _services_database_service__WEBPACK_IMPORTED_MODULE_41__["DatabaseService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialog"], _services_alert_service__WEBPACK_IMPORTED_MODULE_42__["AlertService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_39__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _modals_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./modals/settings/settings.component */
    "./src/app/modals/settings/settings.component.ts");
    /* harmony import */


    var _modals_database_database_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modals/database/database.component */
    "./src/app/modals/database/database.component.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _mocks_search_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mocks/search-params */
    "./src/app/mocks/search-params.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(amadeusApi, databaseApi, dialog, alerts) {
        _classCallCheck(this, AppComponent);

        this.amadeusApi = amadeusApi;
        this.databaseApi = databaseApi;
        this.dialog = dialog;
        this.alerts = alerts; // search params

        this.flightsQuery = _mocks_search_params__WEBPACK_IMPORTED_MODULE_3__["defaultSearchParams"]; // support of search params validation

        this.disableEdit = false;
        this.disableSearch = true;
        this.minDepartureDate = new Date();
        this.minReturnDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(this.minDepartureDate).add(1, 'days').toDate(); // data from Amadeus APIs

        this.flightsOffers = null;
        this.flightsDictionaries = null;
        this.safetyScore = null;
        this.locationData = null; // variable to reflect data loading process during API calls 

        this.loadingData = false; // indication if safety data is available

        this.foundSafetyData = null; // safety score titles, variable locators and assotiated icons

        this.safetyScoreSettings = [{
          title: 'Women\'s safety',
          locator: 'women',
          icon: 'face'
        }, {
          title: 'Physical harm',
          locator: 'physicalHarm',
          icon: 'sports_kabaddi'
        }, {
          title: 'Theft',
          locator: 'theft',
          icon: 'account_balance_wallet'
        }, {
          title: 'Political freedom',
          locator: 'politicalFreedom',
          icon: 'account_balance'
        }, {
          title: 'Health & Medical',
          locator: 'medical',
          icon: 'healing'
        }, {
          title: 'LGBTQ Safety',
          locator: 'lgbtq',
          icon: 'looks'
        }];
      } // opening settings modal window


      _createClass(AppComponent, [{
        key: "openSettingsDialog",
        value: function openSettingsDialog() {
          var _this7 = this;

          console.debug('-- opening settings dialog');
          var dialogRef = this.dialog.open(_modals_settings_settings_component__WEBPACK_IMPORTED_MODULE_0__["SettingsDialog"], {
            width: '500px',
            data: {
              credentials: this.amadeusApi.verifyApiCredentials(),
              local: this.amadeusApi.verifyRunningLocal(),
              logs: this.databaseApi.verifyDbLogs()
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result == undefined) {
              console.debug('-- settings dialog was closed, no updates saved');
            } else {
              console.debug('-- settings dialog was closed, syncing credentials'); // syncing updates from settings dialog

              _this7.amadeusApi.verifyApiCredentials(result.credentials.key, result.credentials.secret);

              _this7.resetParams(result.local);

              _this7.databaseApi.verifyDbLogs(result.logs);
            }
          });
        } // opening database modal window

      }, {
        key: "openDatabaseDialog",
        value: function openDatabaseDialog() {
          var _this8 = this;

          console.debug('-- opening database dialog');
          var dialogRef = this.dialog.open(_modals_database_database_component__WEBPACK_IMPORTED_MODULE_1__["DatabaseDialog"], {
            width: '700px',
            data: {
              credentials: this.databaseApi.verifyDbCredentials()
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result == undefined) {
              console.debug('-- database dialog was closed, no updates saved');
            } else {
              console.debug('-- database dialog was closed, syncing credentials'); // syncing updates from settings dialog

              _this8.databaseApi.verifyDbCredentials(result.credentials.key, result.credentials.secret);
            }
          });
        } // color coding safety scores 

      }, {
        key: "applyCSSClass",
        value: function applyCSSClass(spec, value) {
          var prefix = '';
          if (spec == 'text') prefix = 'score-';
          if (spec == 'border') prefix = 'border-score-';
          if (value <= 33) return prefix + 'low';
          if (value > 33 && value <= 66) return prefix + 'average';
          if (value > 66) return prefix + 'high';
        } // providing risk level based on overall safety score

      }, {
        key: "checkRiskLevel",
        value: function checkRiskLevel(value) {
          if (value <= 33) return 'Low risk';
          if (value > 33 && value <= 66) return 'Average risk';
          if (value > 66) return 'High risk';
        } // function to clear/fill search params 

      }, {
        key: "resetParams",
        value: function resetParams(value) {
          var newValue = value;

          if (newValue == null) {
            newValue = this.amadeusApi.verifyRunningLocal();
          } else {
            if (this.amadeusApi.verifyRunningLocal() !== newValue) {
              console.debug('-- setting running local setting to ', newValue);
              this.amadeusApi.verifyRunningLocal(newValue);
            }
          }

          this.disableEdit = newValue;
          this.disableSearch = !newValue; // filling search params - mocks if running local was selected

          this.flightsQuery = newValue ? _mocks_search_params__WEBPACK_IMPORTED_MODULE_3__["searchParamsMock"] : _mocks_search_params__WEBPACK_IMPORTED_MODULE_3__["defaultSearchParams"];
          this.cleanData();
        } // cleaning search data

      }, {
        key: "cleanData",
        value: function cleanData() {
          this.loadingData = false;
          this.flightsOffers = null;
          this.flightsDictionaries = null;
          this.locationData = null;
          this.safetyScore = null;
          this.foundSafetyData = null;
        } // input data validator for flights search params to disable or enable search button

      }, {
        key: "validateQuery",
        value: function validateQuery() {
          if (this.flightsQuery.departureDate) this.minReturnDate = moment__WEBPACK_IMPORTED_MODULE_2___default()(this.flightsQuery.departureDate).add(1, 'days').toDate(); // disable search button if some fields are not filled

          if (this.flightsQuery.originLocationCode && this.flightsQuery.destinationLocationCode && this.flightsQuery.departureDate && this.flightsQuery.returnDate) {
            this.disableSearch = false;
          } else {
            this.disableSearch = true;
          }
        } // function to match airlines code from itinerary with airlines code from dictionaries to provide airline name

      }, {
        key: "formatAirlines",
        value: function formatAirlines(airlineCodes, carriers) {
          var airlinesList = [];
          airlineCodes.forEach(function (airline) {
            return airlinesList.push(carriers[airline]);
          });
          return airlinesList.toString();
        } // initiate search for flights

      }, {
        key: "initiateSearch",
        value: function initiateSearch() {
          var _this9 = this;

          // cleaning previous search or error data
          this.cleanData();
          this.loadingData = true; // STEP 1 - transform departure city name into IATA code using Amadeus location API

          this.amadeusApi.getLocationDetails(this.flightsQuery.originLocationCode).subscribe(function (originLocation) {
            console.debug('-- received origin location details', originLocation);
            _this9.flightsQuery.originLocationCode = originLocation.data[0].iataCode; // STEP 2 - transform destination city name into IATA code using Amadeus location API

            _this9.amadeusApi.getLocationDetails(_this9.flightsQuery.destinationLocationCode).subscribe(function (destinationLocation) {
              console.debug('-- received destination location details', destinationLocation);
              _this9.locationData = destinationLocation.data[0];
              _this9.flightsQuery.destinationLocationCode = _this9.locationData.iataCode; // STEP 3 - search for flight offers using obtained location IATA codes and dates provided by user

              _this9.amadeusApi.searchFlights(_this9.flightsQuery).subscribe(function (flightsData) {
                _this9.flightsOffers = flightsData.data;
                _this9.flightsDictionaries = flightsData.dictionaries;
                console.debug('-- received flights offers', flightsData); // safety data can be empty cause it is a test api, so can display what we have so far

                _this9.loadingData = false; // STEP 4 - get location safety score data using Amadeus APIs

                _this9.amadeusApi.getSafetyDetails(_this9.locationData.geoCode.latitude, _this9.locationData.geoCode.longitude).subscribe(function (safetyData) {
                  console.debug('-- received safety data', safetyData);

                  if (safetyData.data.length > 0) {
                    _this9.safetyScore = safetyData.data[0].safetyScores;
                  } else {
                    _this9.foundSafetyData = false;
                  }
                }); // STEP 5 (OPTIONAL) - log query in DB


                if (_this9.databaseApi.verifyDbLogs()) {
                  _this9.databaseApi.submitData(_this9.flightsQuery).subscribe(function (res) {
                    console.debug('-- submitted query log to db', res);
                  });
                }

                ;
              });
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/dialog/index.ngfactory */
    "./node_modules/@angular/material/dialog/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/datepicker/index.ngfactory */
    "./node_modules/@angular/material/datepicker/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../node_modules/@angular/material/snack-bar/index.ngfactory */
    "./node_modules/@angular/material/snack-bar/index.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_safety_api_safety_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../api-safety/api/safety.service */
    "./api-safety/api/safety.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _api_safety_variables__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../api-safety/variables */
    "./api-safety/variables.ts");
    /* harmony import */


    var _api_safety_configuration__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../api-safety/configuration */
    "./api-safety/configuration.ts");
    /* harmony import */


    var _api_safety_api_security_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../api-safety/api/security.service */
    "./api-safety/api/security.service.ts");
    /* harmony import */


    var _api_flights_api_flights_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../api-flights/api/flights.service */
    "./api-flights/api/flights.service.ts");
    /* harmony import */


    var _api_flights_variables__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../api-flights/variables */
    "./api-flights/variables.ts");
    /* harmony import */


    var _api_flights_configuration__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../api-flights/configuration */
    "./api-flights/configuration.ts");
    /* harmony import */


    var _api_locations_api_locations_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../api-locations/api/locations.service */
    "./api-locations/api/locations.service.ts");
    /* harmony import */


    var _api_locations_variables__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../api-locations/variables */
    "./api-locations/variables.ts");
    /* harmony import */


    var _api_locations_configuration__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../api-locations/configuration */
    "./api-locations/configuration.ts");
    /* harmony import */


    var _interceptors_oauth_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./interceptors/oauth.interceptor */
    "./src/app/interceptors/oauth.interceptor.ts");
    /* harmony import */


    var _services_amadeus_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/amadeus.service */
    "./src/app/services/amadeus.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/fesm2015/select.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./services/error-handler.service */
    "./src/app/services/error-handler.service.ts");
    /* harmony import */


    var _api_safety_api_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ../../api-safety/api.module */
    "./api-safety/api.module.ts");
    /* harmony import */


    var _api_flights_api_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ../../api-flights/api.module */
    "./api-flights/api.module.ts");
    /* harmony import */


    var _api_locations_api_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ../../api-locations/api.module */
    "./api-locations/api.module.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "./node_modules/@angular/flex-layout/esm2015/grid.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! @angular/cdk/accordion */
    "./node_modules/@angular/cdk/fesm2015/accordion.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/fesm2015/badge.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/fesm2015/table.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/fesm2015/table.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_material_dialog_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerContentNgFactory"], _node_modules_angular_material_datepicker_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatCalendarHeaderNgFactory"], _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SimpleSnackBarNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_11__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _api_safety_api_safety_service__WEBPACK_IMPORTED_MODULE_13__["SafetyService"], _api_safety_api_safety_service__WEBPACK_IMPORTED_MODULE_13__["SafetyService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], [2, _api_safety_variables__WEBPACK_IMPORTED_MODULE_15__["BASE_PATH"]], [2, _api_safety_configuration__WEBPACK_IMPORTED_MODULE_16__["Configuration"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _api_safety_api_security_service__WEBPACK_IMPORTED_MODULE_17__["SecurityService"], _api_safety_api_security_service__WEBPACK_IMPORTED_MODULE_17__["SecurityService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], [2, _api_safety_variables__WEBPACK_IMPORTED_MODULE_15__["BASE_PATH"]], [2, _api_safety_configuration__WEBPACK_IMPORTED_MODULE_16__["Configuration"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _api_flights_api_flights_service__WEBPACK_IMPORTED_MODULE_18__["FlightsService"], _api_flights_api_flights_service__WEBPACK_IMPORTED_MODULE_18__["FlightsService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], [2, _api_flights_variables__WEBPACK_IMPORTED_MODULE_19__["BASE_PATH"]], [2, _api_flights_configuration__WEBPACK_IMPORTED_MODULE_20__["Configuration"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _api_locations_api_locations_service__WEBPACK_IMPORTED_MODULE_21__["LocationsService"], _api_locations_api_locations_service__WEBPACK_IMPORTED_MODULE_21__["LocationsService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], [2, _api_locations_variables__WEBPACK_IMPORTED_MODULE_22__["BASE_PATH"]], [2, _api_locations_configuration__WEBPACK_IMPORTED_MODULE_23__["Configuration"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"], function (p0_0, p1_0, p1_1) {
        return [p0_0, new _interceptors_oauth_interceptor__WEBPACK_IMPORTED_MODULE_24__["OauthInterceptor"](p1_0, p1_1)];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_h"], _services_amadeus_service__WEBPACK_IMPORTED_MODULE_25__["AmadeusService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_26__["AlertService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p0_1) {
        return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_27__["removeStyles"](p0_0, p0_1)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_31__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_31__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__["MatDatepickerIntl"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__["MatDatepickerIntl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__["MAT_DATEPICKER_SCROLL_STRATEGY"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__["MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["DateAdapter"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["NativeDateAdapter"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MAT_DATE_LOCALE"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_35__["Platform"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _services_error_handler_service__WEBPACK_IMPORTED_MODULE_36__["ErrorHandlerService"], [_services_alert_service__WEBPACK_IMPORTED_MODULE_26__["AlertService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](2048, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _api_safety_api_module__WEBPACK_IMPORTED_MODULE_37__["ApiModule"], _api_safety_api_module__WEBPACK_IMPORTED_MODULE_37__["ApiModule"], [[3, _api_safety_api_module__WEBPACK_IMPORTED_MODULE_37__["ApiModule"]], [2, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _api_flights_api_module__WEBPACK_IMPORTED_MODULE_38__["ApiModule"], _api_flights_api_module__WEBPACK_IMPORTED_MODULE_38__["ApiModule"], [[3, _api_flights_api_module__WEBPACK_IMPORTED_MODULE_38__["ApiModule"]], [2, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _api_locations_api_module__WEBPACK_IMPORTED_MODULE_39__["ApiModule"], _api_locations_api_module__WEBPACK_IMPORTED_MODULE_39__["ApiModule"], [[3, _api_locations_api_module__WEBPACK_IMPORTED_MODULE_39__["ApiModule"]], [2, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_27__["CoreModule"], _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_27__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_40__["FlexModule"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_40__["FlexModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_41__["ExtendedModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_41__["ExtendedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_42__["GridModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_42__["GridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_43__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_43__["FlexLayoutModule"], [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_27__["SERVER_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_44__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_45__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_35__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_35__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_47__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_47__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_48__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_48__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_49__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_49__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_49__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_49__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_28__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_30__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_50__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_50__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_31__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_31__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_51__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_51__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_52__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_52__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_44__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_44__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_44__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__["MatDatepickerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_34__["MatDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["NativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["NativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_53__["MatProgressSpinnerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_53__["MatProgressSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_54__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_54__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_55__["_MatSlideToggleRequiredValidatorModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_55__["_MatSlideToggleRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_55__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_55__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_56__["CdkAccordionModule"], _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_56__["CdkAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_57__["MatExpansionModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_57__["MatExpansionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_58__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_58__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_59__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_59__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_60__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_60__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_62__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_62__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_63__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_63__["MatGridListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_64__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_64__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MAT_DATE_FORMATS"], _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MAT_NATIVE_DATE_FORMATS"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_64__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], _app_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"], [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, ɵ0 */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });

    var ɵ0 = {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/interceptors/oauth.interceptor.ts":
  /*!***************************************************!*\
    !*** ./src/app/interceptors/oauth.interceptor.ts ***!
    \***************************************************/

  /*! exports provided: OauthInterceptor */

  /***/
  function srcAppInterceptorsOauthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OauthInterceptor", function () {
      return OauthInterceptor;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/mergeMap */
    "./node_modules/rxjs-compat/_esm2015/add/operator/mergeMap.js");
    /* harmony import */


    var _mocks_flights_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mocks/flights-search */
    "./src/app/mocks/flights-search.ts");
    /* harmony import */


    var _mocks_locations_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../mocks/locations-search */
    "./src/app/mocks/locations-search.ts");
    /* harmony import */


    var _mocks_safety_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../mocks/safety-search */
    "./src/app/mocks/safety-search.ts");

    var OauthInterceptor = /*#__PURE__*/function () {
      function OauthInterceptor(amadeusApi, alerts) {
        _classCallCheck(this, OauthInterceptor);

        this.amadeusApi = amadeusApi;
        this.alerts = alerts;
      } // intercepting every HttpRequest


      _createClass(OauthInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // check if it goes to Amadeus APIs
          if (request.url.includes('/safety/safety-rated-locations') || request.url.includes('/shopping/flight-offers') || request.url.includes('/reference-data/locations')) {
            // check if application running local (mocking web services)
            if (!this.amadeusApi.verifyRunningLocal()) {
              console.debug('-- intercepted Amadeus API request, looking for access_token'); // obtaining and adding access token to the request

              return this.amadeusApi.provideToken().mergeMap(function (accessToken) {
                console.debug('-- injecting access_token into Amadeus API request');
                request = request.clone({
                  setHeaders: {
                    'Authorization': 'Bearer ' + accessToken
                  }
                });
                return next.handle(request);
              });
            } else {
              // application is running local, replying with local data instead of real API calls
              if (request.urlWithParams.includes('/reference-data/locations?subType=CITY&keyword=Chicago') || request.urlWithParams.includes('/reference-data/locations?subType=CITY&keyword=CHI')) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                status: 200,
                body: _mocks_locations_search__WEBPACK_IMPORTED_MODULE_4__["originLocationSearchMock"]
              }));
              if (request.urlWithParams.includes('/reference-data/locations?subType=CITY&keyword=New%20York') || request.urlWithParams.includes('/reference-data/locations?subType=CITY&keyword=NYC')) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                status: 200,
                body: _mocks_locations_search__WEBPACK_IMPORTED_MODULE_4__["destinationLocationSearchMock"]
              }));
              if (request.url.includes('/shopping/flight-offers')) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                status: 200,
                body: _mocks_flights_search__WEBPACK_IMPORTED_MODULE_3__["flightsSearchMock"]
              }));
              if (request.url.includes('/safety/safety-rated-locations')) return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                status: 200,
                body: _mocks_safety_search__WEBPACK_IMPORTED_MODULE_5__["safetyLocationSearchMock"]
              }));
            }
          } else {
            return next.handle(request);
          }
        }
      }]);

      return OauthInterceptor;
    }();
    /***/

  },

  /***/
  "./src/app/mocks/flights-search.ts":
  /*!*****************************************!*\
    !*** ./src/app/mocks/flights-search.ts ***!
    \*****************************************/

  /*! exports provided: flightsSearchMock */

  /***/
  function srcAppMocksFlightsSearchTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "flightsSearchMock", function () {
      return flightsSearchMock;
    }); // mock of flights search using Amadeus APIs


    var flightsSearchMock = {
      "meta": {
        "count": 1,
        "links": {
          "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=CHI&destinationLocationCode=NYC&departureDate=2021-03-01&returnDate=2021-03-19&adults=1&max=1"
        }
      },
      "data": [{
        "type": "flight-offer",
        "id": "1",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2020-08-19",
        "numberOfBookableSeats": 9,
        "itineraries": [{
          "duration": "PT2H10M",
          "segments": [{
            "departure": {
              "iataCode": "ORD",
              "terminal": "2",
              "at": "2021-03-01T18:45:00"
            },
            "arrival": {
              "iataCode": "LGA",
              "terminal": "D",
              "at": "2021-03-01T21:55:00"
            },
            "carrierCode": "DL",
            "number": "1381",
            "aircraft": {
              "code": "221"
            },
            "operating": {
              "carrierCode": "DL"
            },
            "duration": "PT2H10M",
            "id": "1",
            "numberOfStops": 0,
            "blacklistedInEU": false
          }]
        }, {
          "duration": "PT2H38M",
          "segments": [{
            "departure": {
              "iataCode": "LGA",
              "terminal": "D",
              "at": "2021-03-19T14:10:00"
            },
            "arrival": {
              "iataCode": "ORD",
              "terminal": "2",
              "at": "2021-03-19T15:48:00"
            },
            "carrierCode": "DL",
            "number": "1518",
            "aircraft": {
              "code": "221"
            },
            "operating": {
              "carrierCode": "DL"
            },
            "duration": "PT2H38M",
            "id": "2",
            "numberOfStops": 0,
            "blacklistedInEU": false
          }]
        }],
        "price": {
          "currency": "EUR",
          "total": "171.10",
          "base": "154.00",
          "fees": [{
            "amount": "0.00",
            "type": "SUPPLIER"
          }, {
            "amount": "0.00",
            "type": "TICKETING"
          }],
          "grandTotal": "171.10"
        },
        "pricingOptions": {
          "fareType": ["PUBLISHED"],
          "includedCheckedBagsOnly": false
        },
        "validatingAirlineCodes": ["DL"],
        "travelerPricings": [{
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "171.10",
            "base": "154.00"
          },
          "fareDetailsBySegment": [{
            "segmentId": "1",
            "cabin": "ECONOMY",
            "fareBasis": "VA7SB4BQ",
            "brandedFare": "BASICECON",
            "class": "E",
            "includedCheckedBags": {
              "quantity": 0
            }
          }, {
            "segmentId": "2",
            "cabin": "ECONOMY",
            "fareBasis": "XAVQA0BQ",
            "brandedFare": "BASICECON",
            "class": "E",
            "includedCheckedBags": {
              "quantity": 0
            }
          }]
        }]
      }, {
        "type": "flight-offer",
        "id": "1",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "lastTicketingDate": "2020-08-21",
        "numberOfBookableSeats": 9,
        "itineraries": [{
          "duration": "PT2H3M",
          "segments": [{
            "departure": {
              "iataCode": "ORD",
              "terminal": "1",
              "at": "2021-03-01T09:00:00"
            },
            "arrival": {
              "iataCode": "LGA",
              "terminal": "B",
              "at": "2021-03-01T12:03:00"
            },
            "carrierCode": "UA",
            "number": "2116",
            "aircraft": {
              "code": "320"
            },
            "operating": {
              "carrierCode": "UA"
            },
            "duration": "PT2H3M",
            "id": "1",
            "numberOfStops": 0,
            "blacklistedInEU": false
          }]
        }, {
          "duration": "PT2H24M",
          "segments": [{
            "departure": {
              "iataCode": "LGA",
              "terminal": "B",
              "at": "2021-03-19T07:00:00"
            },
            "arrival": {
              "iataCode": "ORD",
              "terminal": "1",
              "at": "2021-03-19T08:24:00"
            },
            "carrierCode": "UA",
            "number": "1958",
            "aircraft": {
              "code": "319"
            },
            "operating": {
              "carrierCode": "UA"
            },
            "duration": "PT2H24M",
            "id": "2",
            "numberOfStops": 0,
            "blacklistedInEU": false
          }]
        }],
        "price": {
          "currency": "EUR",
          "total": "217.10",
          "base": "200.00",
          "fees": [{
            "amount": "0.00",
            "type": "SUPPLIER"
          }, {
            "amount": "0.00",
            "type": "TICKETING"
          }],
          "grandTotal": "217.10"
        },
        "pricingOptions": {
          "fareType": ["PUBLISHED"],
          "includedCheckedBagsOnly": false
        },
        "validatingAirlineCodes": ["UA"],
        "travelerPricings": [{
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "EUR",
            "total": "217.10",
            "base": "200.00"
          },
          "fareDetailsBySegment": [{
            "segmentId": "1",
            "cabin": "ECONOMY",
            "fareBasis": "KAA4PHDN",
            "brandedFare": "ECONOMY",
            "class": "K",
            "includedCheckedBags": {
              "quantity": 0
            }
          }, {
            "segmentId": "2",
            "cabin": "ECONOMY",
            "fareBasis": "KAA4PHDN",
            "brandedFare": "ECONOMY",
            "class": "K",
            "includedCheckedBags": {
              "quantity": 0
            }
          }]
        }]
      }],
      "dictionaries": {
        "locations": {
          "ORD": {
            "cityCode": "CHI",
            "countryCode": "US"
          },
          "LGA": {
            "cityCode": "NYC",
            "countryCode": "US"
          }
        },
        "aircraft": {
          "221": "AIRBUS A220-100",
          "319": "AIRBUS A319",
          "320": "AIRBUS A320"
        },
        "currencies": {
          "EUR": "EURO"
        },
        "carriers": {
          "DL": "DELTA AIR LINES",
          "UA": "UNITED AIRLINES"
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/mocks/locations-search.ts":
  /*!*******************************************!*\
    !*** ./src/app/mocks/locations-search.ts ***!
    \*******************************************/

  /*! exports provided: originLocationSearchMock, destinationLocationSearchMock */

  /***/
  function srcAppMocksLocationsSearchTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "originLocationSearchMock", function () {
      return originLocationSearchMock;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "destinationLocationSearchMock", function () {
      return destinationLocationSearchMock;
    }); // mock of locations search using Amadeus APIs


    var originLocationSearchMock = {
      "meta": {
        "count": 1,
        "links": {
          "self": "https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=Chicago&page%5Blimit%5D=1"
        }
      },
      "data": [{
        "type": "location",
        "subType": "CITY",
        "name": "CHICAGO",
        "detailedName": "CHICAGO/IL/US",
        "id": "CCHI",
        "self": {
          "href": "https://test.api.amadeus.com/v1/reference-data/locations/CCHI",
          "methods": ["GET"]
        },
        "timeZoneOffset": "-05:00",
        "iataCode": "CHI",
        "geoCode": {
          "latitude": 41.85000,
          "longitude": -87.65000
        },
        "address": {
          "cityName": "CHICAGO",
          "cityCode": "CHI",
          "countryName": "UNITED STATES OF AMERICA",
          "countryCode": "US",
          "stateCode": "IL",
          "regionCode": "NAMER"
        },
        "analytics": {
          "travelers": {
            "score": 62
          }
        }
      }]
    };
    var destinationLocationSearchMock = {
      "meta": {
        "count": 1,
        "links": {
          "self": "https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=New%20York&page%5Blimit%5D=1"
        }
      },
      "data": [{
        "type": "location",
        "subType": "CITY",
        "name": "LAGUARDIA AIRPORT",
        "detailedName": "NEW YORK/NY/US",
        "id": "CNYC",
        "self": {
          "href": "https://test.api.amadeus.com/v1/reference-data/locations/CNYC",
          "methods": ["GET"]
        },
        "timeZoneOffset": "-04:00",
        "iataCode": "NYC",
        "geoCode": {
          "latitude": 40.71417,
          "longitude": -74.00583
        },
        "address": {
          "cityName": "NEW YORK",
          "cityCode": "NYC",
          "countryName": "UNITED STATES OF AMERICA",
          "countryCode": "US",
          "stateCode": "NY",
          "regionCode": "NAMER"
        },
        "analytics": {
          "travelers": {
            "score": 76
          }
        }
      }]
    };
    /***/
  },

  /***/
  "./src/app/mocks/safety-search.ts":
  /*!****************************************!*\
    !*** ./src/app/mocks/safety-search.ts ***!
    \****************************************/

  /*! exports provided: safetyLocationSearchMock */

  /***/
  function srcAppMocksSafetySearchTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "safetyLocationSearchMock", function () {
      return safetyLocationSearchMock;
    }); // mock of safety score search using Amadeus APIs


    var safetyLocationSearchMock = {
      "data": [{
        "type": "safety-rated-location",
        "id": "Q930206666",
        "self": {
          "type": "https://test.api.amadeus.com/v1/safety/safety-rated-locations/Q930206666",
          "methods": ["GET"]
        },
        "subType": "CITY",
        "name": "New York",
        "geoCode": {
          "latitude": 40.755653,
          "longitude": -73.985303
        },
        "safetyScores": {
          "lgbtq": 35,
          "medical": 73,
          "overall": 39,
          "physicalHarm": 30,
          "politicalFreedom": 40,
          "theft": 27,
          "women": 26
        }
      }],
      "meta": {
        "count": 79,
        "links": {
          "self": "https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=40.71417&longitude=-74.00583&page%5Blimit%5D=1&radius=20",
          "next": "https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=40.71417&longitude=-74.00583&page%5Blimit%5D=1&page%5Boffset%5D=1&radius=20",
          "last": "https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=40.71417&longitude=-74.00583&page%5Blimit%5D=1&page%5Boffset%5D=79&radius=20",
          "first": "https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=40.71417&longitude=-74.00583&page%5Blimit%5D=1&page%5Boffset%5D=0&radius=20"
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/mocks/search-params.ts":
  /*!****************************************!*\
    !*** ./src/app/mocks/search-params.ts ***!
    \****************************************/

  /*! exports provided: searchParamsMock, defaultSearchParams */

  /***/
  function srcAppMocksSearchParamsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "searchParamsMock", function () {
      return searchParamsMock;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultSearchParams", function () {
      return defaultSearchParams;
    });
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__); // mock of search params for local usage or calling Amadeus APIs


    var searchParamsMock = {
      originLocationCode: "Chicago",
      destinationLocationCode: "New York",
      departureDate: moment__WEBPACK_IMPORTED_MODULE_0___default()('2021-03-01').toDate(),
      returnDate: moment__WEBPACK_IMPORTED_MODULE_0___default()('2021-03-19').toDate(),
      adults: 1,
      max: 1
    };
    var defaultSearchParams = {
      originLocationCode: null,
      destinationLocationCode: null,
      departureDate: null,
      returnDate: null,
      adults: 1,
      max: 1
    };
    /***/
  },

  /***/
  "./src/app/modals/database/database.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modals/database/database.component.ts ***!
    \*******************************************************/

  /*! exports provided: DatabaseDialog */

  /***/
  function srcAppModalsDatabaseDatabaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatabaseDialog", function () {
      return DatabaseDialog;
    });

    var DatabaseDialog = /*#__PURE__*/function () {
      function DatabaseDialog(dialogRef, data, databaseApi) {
        _classCallCheck(this, DatabaseDialog);

        this.dialogRef = dialogRef;
        this.data = data;
        this.databaseApi = databaseApi;
        this.dblogs = null;
        this.loadingLogsData = false;
      }

      _createClass(DatabaseDialog, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        } // loading data using database service

      }, {
        key: "loadLogs",
        value: function loadLogs() {
          var _this10 = this;

          this.loadingLogsData = true;
          this.databaseApi.loadData().subscribe(function (data) {
            console.debug('-- received logs from database', data);
            _this10.dblogs = data;
            _this10.loadingLogsData = false;
          });
        } // removing data using database service

      }, {
        key: "clearLogs",
        value: function clearLogs() {
          var _this11 = this;

          this.loadingLogsData = true;
          this.databaseApi.removeData().subscribe(function (res) {
            console.debug('-- cleared logs database', res);

            _this11.loadLogs();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadLogs();
        }
      }]);

      return DatabaseDialog;
    }();
    /***/

  },

  /***/
  "./src/app/modals/settings/settings.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modals/settings/settings.component.ts ***!
    \*******************************************************/

  /*! exports provided: SettingsDialog */

  /***/
  function srcAppModalsSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsDialog", function () {
      return SettingsDialog;
    });

    var SettingsDialog = /*#__PURE__*/function () {
      function SettingsDialog(dialogRef, data) {
        _classCallCheck(this, SettingsDialog);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(SettingsDialog, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingsDialog;
    }();
    /***/

  },

  /***/
  "./src/app/pipes/moment.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/moment.pipe.ts ***!
    \**************************************/

  /*! exports provided: MomentPipe */

  /***/
  function srcAppPipesMomentPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MomentPipe", function () {
      return MomentPipe;
    });
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

    var MomentPipe = /*#__PURE__*/function () {
      function MomentPipe() {
        _classCallCheck(this, MomentPipe);
      }

      _createClass(MomentPipe, [{
        key: "transform",
        value: function transform(date, type, format) {
          // in case of duration type, provide custom duration string output
          if (type == "duration") {
            var duration = moment__WEBPACK_IMPORTED_MODULE_0__["duration"](date);
            return duration.hours() + " hours " + duration.minutes() + " minutes ";
          } else {
            // otherwise provide date string output based on requested format
            return moment__WEBPACK_IMPORTED_MODULE_0__(date).format(format);
          }
        }
      }]);

      return MomentPipe;
    }();
    /***/

  },

  /***/
  "./src/app/services/alert.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/alert.service.ts ***!
    \*******************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");

    var AlertService = /*#__PURE__*/function () {
      function AlertService(alertBar, zone) {
        _classCallCheck(this, AlertService);

        this.alertBar = alertBar;
        this.zone = zone;
        this.resetSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.initiateReset = this.resetSubject.asObservable();
      }

      _createClass(AlertService, [{
        key: "showAlert",
        value: function showAlert(message) {
          var _this12 = this;

          // NgZone workaround required to avoid showing alert twice 
          this.zone.run(function () {
            _this12.alertBar.open(message); // way of calling a function in component to clear up search params and data in case error has occured


            _this12.resetSubject.next();
          });
        }
      }]);

      return AlertService;
    }();

    AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function AlertService_Factory() {
        return new AlertService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      },
      token: AlertService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/amadeus.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/amadeus.service.ts ***!
    \*********************************************/

  /*! exports provided: AmadeusService */

  /***/
  function srcAppServicesAmadeusServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmadeusService", function () {
      return AmadeusService;
    });
    /* harmony import */


    var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/Observable */
    "./node_modules/rxjs-compat/_esm2015/Observable.js");
    /* harmony import */


    var rxjs_add_observable_fromPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/add/observable/fromPromise */
    "./node_modules/rxjs-compat/_esm2015/add/observable/fromPromise.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_safety_api_security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../api-safety/api/security.service */
    "./api-safety/api/security.service.ts");
    /* harmony import */


    var _api_flights_api_flights_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../api-flights/api/flights.service */
    "./api-flights/api/flights.service.ts");
    /* harmony import */


    var _api_locations_api_locations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../api-locations/api/locations.service */
    "./api-locations/api/locations.service.ts");
    /* harmony import */


    var _api_safety_api_safety_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../api-safety/api/safety.service */
    "./api-safety/api/safety.service.ts");

    var AmadeusService = /*#__PURE__*/function () {
      function AmadeusService(securityApi, flightsApi, locationsApi, safetyApi) {
        _classCallCheck(this, AmadeusService);

        this.securityApi = securityApi;
        this.flightsApi = flightsApi;
        this.locationsApi = locationsApi;
        this.safetyApi = safetyApi;
        this.accessToken = null;
        this.runningLocal = false; // API credentials to use Amadeus API. Obtain yours by following the instructions https://developers.amadeus.com/get-started/get-started-with-self-service-apis-335

        this.apiCredentials = {
          key: null,
          secret: null
        };
      } // function to update or just provide a status of running local param


      _createClass(AmadeusService, [{
        key: "verifyRunningLocal",
        value: function verifyRunningLocal(value) {
          if (value !== null && value !== undefined) {
            this.runningLocal = value;
            return this.runningLocal;
          } else return this.runningLocal;
        } // function to update or just provide credentials to Amadeus APIs

      }, {
        key: "verifyApiCredentials",
        value: function verifyApiCredentials(api_key, api_secret) {
          if (api_key && api_secret) {
            this.apiCredentials = {
              key: api_key,
              secret: api_secret
            };
            return this.apiCredentials;
          } else return this.apiCredentials;
        } // function to obtain access token that is required to make any data call to Amadeus APIs

      }, {
        key: "obtainToken",
        value: function obtainToken() {
          var _this13 = this;

          return new Promise(function (resolve, reject) {
            _this13.securityApi.getAccessToken('client_credentials', _this13.apiCredentials.key, _this13.apiCredentials.secret).subscribe(function (value) {
              if ("access_token" in value) {
                resolve(value);
              } else {
                reject();
              }
            });
          });
        } // function to provide saved token or call obtain function and get a new one

      }, {
        key: "provideToken",
        value: function provideToken() {
          var _this14 = this;

          return rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"].fromPromise(new Promise(function (resolve, reject) {
            if (_this14.accessToken) {
              console.debug('-- found saved access_token');
              resolve(_this14.accessToken);
            } else {
              console.debug('-- requesting new access_token from Amadeus');

              _this14.obtainToken().then(function (value) {
                _this14.accessToken = value.access_token;
                console.debug('-- access_token received');
                resolve(_this14.accessToken);
              }, function (error) {
                console.debug('!-- cannot get access_token', error);
                reject();
              });
            }
          }));
        } // connection with generated Amadeus flights api to pre-fill params and format dates

      }, {
        key: "searchFlights",
        value: function searchFlights(flightsQuery) {
          return this.flightsApi.getFlightOffers(flightsQuery.originLocationCode, flightsQuery.destinationLocationCode, moment__WEBPACK_IMPORTED_MODULE_2___default()(flightsQuery.departureDate).format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_2___default()(flightsQuery.returnDate).format('YYYY-MM-DD'), flightsQuery.adults, flightsQuery.max);
        } // connection with generated Amadeus locations api to pre-fill params and format dates

      }, {
        key: "getLocationDetails",
        value: function getLocationDetails(cityName) {
          return this.locationsApi.getAirportCitySearch(['CITY'], cityName, null, 1);
        } // connection with generated Amadeus safety score api to pre-fill params and format dates

      }, {
        key: "getSafetyDetails",
        value: function getSafetyDetails(lat, _long) {
          return this.safetyApi.getSafetyRanking(lat, _long, 20, 1);
        }
      }]);

      return AmadeusService;
    }();

    AmadeusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      factory: function AmadeusService_Factory() {
        return new AmadeusService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_safety_api_security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_flights_api_flights_service__WEBPACK_IMPORTED_MODULE_5__["FlightsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_locations_api_locations_service__WEBPACK_IMPORTED_MODULE_6__["LocationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_safety_api_safety_service__WEBPACK_IMPORTED_MODULE_7__["SafetyService"]));
      },
      token: AmadeusService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/database.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/database.service.ts ***!
    \**********************************************/

  /*! exports provided: DatabaseService */

  /***/
  function srcAppServicesDatabaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
      return DatabaseService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DatabaseService = /*#__PURE__*/function () {
      function DatabaseService(http) {
        _classCallCheck(this, DatabaseService);

        this.http = http;
        this.dbLogs = false; // basic auth credentials for db access through node runtime api

        this.dbCredentials = {
          key: 'secret_user',
          secret: 'secret_password'
        };
      } // function to update or just provide a status of running local param


      _createClass(DatabaseService, [{
        key: "verifyDbLogs",
        value: function verifyDbLogs(value) {
          if (value !== null && value !== undefined) {
            this.dbLogs = value;
            return this.dbLogs;
          } else return this.dbLogs;
        } // function to update or just provide credentials to Amadeus APIs

      }, {
        key: "verifyDbCredentials",
        value: function verifyDbCredentials(user_key, user_secret) {
          if (user_key && user_secret) {
            this.dbCredentials = {
              key: user_key,
              secret: user_secret
            };
            return this.dbCredentials;
          } else return this.dbCredentials;
        } // function to generate HTTP request options

      }, {
        key: "getHttpOptions",
        value: function getHttpOptions(setType) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
          headers = headers.append("Authorization", "Basic " + btoa("".concat(this.dbCredentials.key, ":").concat(this.dbCredentials.secret))); // required not to show in-browser login window in case of failed auth

          headers = headers.append("No-Auth-Challenge", "true");
          if (setType) headers = headers.append("Content-Type", "application/json");
          return {
            headers: headers
          };
        } // function to load logs from database

      }, {
        key: "loadData",
        value: function loadData() {
          return this.http.get('/database/getData', this.getHttpOptions());
        } // function to submit log to database

      }, {
        key: "submitData",
        value: function submitData(data) {
          return this.http.post('/database/postData', {
            timestamp: moment__WEBPACK_IMPORTED_MODULE_1___default()().format(),
            query: data
          }, this.getHttpOptions(true));
        } // function to clear all data in db

      }, {
        key: "removeData",
        value: function removeData() {
          return this.http.get('/database/removeData', this.getHttpOptions());
        }
      }]);

      return DatabaseService;
    }();

    DatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function DatabaseService_Factory() {
        return new DatabaseService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      },
      token: DatabaseService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/error-handler.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/error-handler.service.ts ***!
    \***************************************************/

  /*! exports provided: ErrorHandlerService */

  /***/
  function srcAppServicesErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function () {
      return ErrorHandlerService;
    });

    var ErrorHandlerService = /*#__PURE__*/function () {
      function ErrorHandlerService(alerts) {
        _classCallCheck(this, ErrorHandlerService);

        this.alerts = alerts;
      }

      _createClass(ErrorHandlerService, [{
        key: "handleError",
        value: function handleError(error) {
          // logging error and showing on-screen alert   
          console.error('An error has occured', error);
          this.alerts.showAlert('An error has occured. Check console for details.');
        }
      }]);

      return ErrorHandlerService;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/andriivasylchenko/dev/workspaces/z/tiny-airline/airTravel/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map