(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./api-flights/api.module.ts":
/*!***********************************!*\
  !*** ./api-flights/api.module.ts ***!
  \***********************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration */ "./api-flights/configuration.ts");
/* harmony import */ var _api_flights_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/flights.service */ "./api-flights/api/flights.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: _configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"], useFactory: configurationFactory }]
        };
    }
}
ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ApiModule });
ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ApiModule_Factory(t) { return new (t || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], 8)); }, providers: [
        _api_flights_service__WEBPACK_IMPORTED_MODULE_2__["FlightsService"]
    ], imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                declarations: [],
                exports: [],
                providers: [
                    _api_flights_service__WEBPACK_IMPORTED_MODULE_2__["FlightsService"]
                ]
            }]
    }], function () { return [{ type: ApiModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./api-flights/api/api.ts":
/*!********************************!*\
  !*** ./api-flights/api/api.ts ***!
  \********************************/
/*! exports provided: FlightsService, APIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _flights_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flights.service */ "./api-flights/api/flights.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlightsService", function() { return _flights_service__WEBPACK_IMPORTED_MODULE_0__["FlightsService"]; });



const APIS = [_flights_service__WEBPACK_IMPORTED_MODULE_0__["FlightsService"]];


/***/ }),

/***/ "./api-flights/api/flights.service.ts":
/*!********************************************!*\
  !*** ./api-flights/api/flights.service.ts ***!
  \********************************************/
/*! exports provided: FlightsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsService", function() { return FlightsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./api-flights/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./api-flights/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./api-flights/configuration.ts");
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








class FlightsService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://test.api.amadeus.com/v2';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
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
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    getFlightOffers(originLocationCode, destinationLocationCode, departureDate, returnDate, adults, max, children, infants, travelClass, includedAirlineCodes, excludedAirlineCodes, nonStop, currencyCode, maxPrice, observe = 'body', reportProgress = false) {
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
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
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
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/vnd.amadeus+json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/vnd.amadeus+json'
        ];
        return this.httpClient.get(`${this.basePath}/shopping/flight-offers`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
FlightsService.ɵfac = function FlightsService_Factory(t) { return new (t || FlightsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
FlightsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FlightsService, factory: FlightsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./api-flights/configuration.ts":
/*!**************************************!*\
  !*** ./api-flights/configuration.ts ***!
  \**************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
class Configuration {
    constructor(configurationParameters = {}) {
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
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length == 0) {
            return undefined;
        }
        let type = contentTypes.find(x => this.isJsonMime(x));
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
    selectHeaderAccept(accepts) {
        if (accepts.length == 0) {
            return undefined;
        }
        let type = accepts.find(x => this.isJsonMime(x));
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
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}


/***/ }),

/***/ "./api-flights/encoder.ts":
/*!********************************!*\
  !*** ./api-flights/encoder.ts ***!
  \********************************/
/*! exports provided: CustomHttpUrlEncodingCodec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function() { return CustomHttpUrlEncodingCodec; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"] {
    encodeKey(k) {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v) {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}


/***/ }),

/***/ "./api-flights/index.ts":
/*!******************************!*\
  !*** ./api-flights/index.ts ***!
  \******************************/
/*! exports provided: FlightsService, APIS, AdditionalServiceType, Coverage, FeeType, FlightOfferSource, ServiceName, SliceDiceIndicator, TermAndCondition, TravelClass, TravelerPricingFareOption, TravelerType, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "./api-flights/api/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlightsService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["FlightsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"]; });

/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ "./api-flights/model/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdditionalServiceType", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["AdditionalServiceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Coverage", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["Coverage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeeType", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["FeeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlightOfferSource", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["FlightOfferSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceName", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["ServiceName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliceDiceIndicator", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["SliceDiceIndicator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TermAndCondition", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["TermAndCondition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TravelClass", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["TravelClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TravelerPricingFareOption", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["TravelerPricingFareOption"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TravelerType", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["TravelerType"]; });

/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./api-flights/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["COLLECTION_FORMATS"]; });

/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "./api-flights/configuration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]; });

/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.module */ "./api-flights/api.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _api_module__WEBPACK_IMPORTED_MODULE_4__["ApiModule"]; });








/***/ }),

/***/ "./api-flights/model/additionalServiceType.ts":
/*!****************************************************!*\
  !*** ./api-flights/model/additionalServiceType.ts ***!
  \****************************************************/
/*! exports provided: AdditionalServiceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalServiceType", function() { return AdditionalServiceType; });
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
const AdditionalServiceType = {
    CHECKEDBAGS: 'CHECKED_BAGS',
    MEALS: 'MEALS',
    SEATS: 'SEATS',
    OTHERSERVICES: 'OTHER_SERVICES'
};


/***/ }),

/***/ "./api-flights/model/coverage.ts":
/*!***************************************!*\
  !*** ./api-flights/model/coverage.ts ***!
  \***************************************/
/*! exports provided: Coverage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coverage", function() { return Coverage; });
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
const Coverage = {
    MOSTSEGMENTS: 'MOST_SEGMENTS',
    ATLEASTONESEGMENT: 'AT_LEAST_ONE_SEGMENT',
    ALLSEGMENTS: 'ALL_SEGMENTS'
};


/***/ }),

/***/ "./api-flights/model/feeType.ts":
/*!**************************************!*\
  !*** ./api-flights/model/feeType.ts ***!
  \**************************************/
/*! exports provided: FeeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeType", function() { return FeeType; });
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
const FeeType = {
    TICKETING: 'TICKETING',
    FORMOFPAYMENT: 'FORM_OF_PAYMENT',
    SUPPLIER: 'SUPPLIER'
};


/***/ }),

/***/ "./api-flights/model/flightOfferSource.ts":
/*!************************************************!*\
  !*** ./api-flights/model/flightOfferSource.ts ***!
  \************************************************/
/*! exports provided: FlightOfferSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightOfferSource", function() { return FlightOfferSource; });
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
const FlightOfferSource = {
    GDS: 'GDS'
};


/***/ }),

/***/ "./api-flights/model/models.ts":
/*!*************************************!*\
  !*** ./api-flights/model/models.ts ***!
  \*************************************/
/*! exports provided: AdditionalServiceType, Coverage, FeeType, FlightOfferSource, ServiceName, SliceDiceIndicator, TermAndCondition, TravelClass, TravelerPricingFareOption, TravelerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _additionalServiceType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additionalServiceType */ "./api-flights/model/additionalServiceType.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdditionalServiceType", function() { return _additionalServiceType__WEBPACK_IMPORTED_MODULE_0__["AdditionalServiceType"]; });

/* harmony import */ var _coverage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coverage */ "./api-flights/model/coverage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Coverage", function() { return _coverage__WEBPACK_IMPORTED_MODULE_1__["Coverage"]; });

/* harmony import */ var _feeType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feeType */ "./api-flights/model/feeType.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeeType", function() { return _feeType__WEBPACK_IMPORTED_MODULE_2__["FeeType"]; });

/* harmony import */ var _flightOfferSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flightOfferSource */ "./api-flights/model/flightOfferSource.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlightOfferSource", function() { return _flightOfferSource__WEBPACK_IMPORTED_MODULE_3__["FlightOfferSource"]; });

/* harmony import */ var _serviceName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceName */ "./api-flights/model/serviceName.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceName", function() { return _serviceName__WEBPACK_IMPORTED_MODULE_4__["ServiceName"]; });

/* harmony import */ var _sliceDiceIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sliceDiceIndicator */ "./api-flights/model/sliceDiceIndicator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliceDiceIndicator", function() { return _sliceDiceIndicator__WEBPACK_IMPORTED_MODULE_5__["SliceDiceIndicator"]; });

/* harmony import */ var _termAndCondition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./termAndCondition */ "./api-flights/model/termAndCondition.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TermAndCondition", function() { return _termAndCondition__WEBPACK_IMPORTED_MODULE_6__["TermAndCondition"]; });

/* harmony import */ var _travelClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./travelClass */ "./api-flights/model/travelClass.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TravelClass", function() { return _travelClass__WEBPACK_IMPORTED_MODULE_7__["TravelClass"]; });

/* harmony import */ var _travelerPricingFareOption__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./travelerPricingFareOption */ "./api-flights/model/travelerPricingFareOption.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TravelerPricingFareOption", function() { return _travelerPricingFareOption__WEBPACK_IMPORTED_MODULE_8__["TravelerPricingFareOption"]; });

/* harmony import */ var _travelerType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./travelerType */ "./api-flights/model/travelerType.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TravelerType", function() { return _travelerType__WEBPACK_IMPORTED_MODULE_9__["TravelerType"]; });













/***/ }),

/***/ "./api-flights/model/serviceName.ts":
/*!******************************************!*\
  !*** ./api-flights/model/serviceName.ts ***!
  \******************************************/
/*! exports provided: ServiceName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceName", function() { return ServiceName; });
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
const ServiceName = {
    PRIORITYBOARDING: 'PRIORITY_BOARDING',
    AIRPORTCHECKIN: 'AIRPORT_CHECKIN'
};


/***/ }),

/***/ "./api-flights/model/sliceDiceIndicator.ts":
/*!*************************************************!*\
  !*** ./api-flights/model/sliceDiceIndicator.ts ***!
  \*************************************************/
/*! exports provided: SliceDiceIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliceDiceIndicator", function() { return SliceDiceIndicator; });
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
const SliceDiceIndicator = {
    LOCALAVAILABILITY: 'LOCAL_AVAILABILITY',
    SUBODAVAILABILITY1: 'SUB_OD_AVAILABILITY_1',
    SUBODAVAILABILITY2: 'SUB_OD_AVAILABILITY_2'
};


/***/ }),

/***/ "./api-flights/model/termAndCondition.ts":
/*!***********************************************!*\
  !*** ./api-flights/model/termAndCondition.ts ***!
  \***********************************************/
/*! exports provided: TermAndCondition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermAndCondition", function() { return TermAndCondition; });
var TermAndCondition;
(function (TermAndCondition) {
    TermAndCondition.CategoryEnum = {
        REFUND: 'REFUND',
        EXCHANGE: 'EXCHANGE',
        REVALIDATION: 'REVALIDATION',
        REISSUE: 'REISSUE',
        REBOOK: 'REBOOK',
        CANCELLATION: 'CANCELLATION'
    };
})(TermAndCondition || (TermAndCondition = {}));


/***/ }),

/***/ "./api-flights/model/travelClass.ts":
/*!******************************************!*\
  !*** ./api-flights/model/travelClass.ts ***!
  \******************************************/
/*! exports provided: TravelClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelClass", function() { return TravelClass; });
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
const TravelClass = {
    ECONOMY: 'ECONOMY',
    PREMIUMECONOMY: 'PREMIUM_ECONOMY',
    BUSINESS: 'BUSINESS',
    FIRST: 'FIRST'
};


/***/ }),

/***/ "./api-flights/model/travelerPricingFareOption.ts":
/*!********************************************************!*\
  !*** ./api-flights/model/travelerPricingFareOption.ts ***!
  \********************************************************/
/*! exports provided: TravelerPricingFareOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelerPricingFareOption", function() { return TravelerPricingFareOption; });
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
const TravelerPricingFareOption = {
    STANDARD: 'STANDARD',
    INCLUSIVETOUR: 'INCLUSIVE_TOUR',
    SPANISHMELILLARESIDENT: 'SPANISH_MELILLA_RESIDENT',
    SPANISHCEUTARESIDENT: 'SPANISH_CEUTA_RESIDENT',
    SPANISHCANARYRESIDENT: 'SPANISH_CANARY_RESIDENT',
    SPANISHBALEARICRESIDENT: 'SPANISH_BALEARIC_RESIDENT',
    AIRFRANCEMETROPOLITANDISCOUNTPASS: 'AIR_FRANCE_METROPOLITAN_DISCOUNT_PASS',
    AIRFRANCEDOMDISCOUNTPASS: 'AIR_FRANCE_DOM_DISCOUNT_PASS',
    AIRFRANCECOMBINEDDISCOUNTPASS: 'AIR_FRANCE_COMBINED_DISCOUNT_PASS',
    AIRFRANCEFAMILY: 'AIR_FRANCE_FAMILY',
    ADULTWITHCOMPANION: 'ADULT_WITH_COMPANION',
    COMPANION: 'COMPANION'
};


/***/ }),

/***/ "./api-flights/model/travelerType.ts":
/*!*******************************************!*\
  !*** ./api-flights/model/travelerType.ts ***!
  \*******************************************/
/*! exports provided: TravelerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelerType", function() { return TravelerType; });
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
const TravelerType = {
    ADULT: 'ADULT',
    CHILD: 'CHILD',
    SENIOR: 'SENIOR',
    YOUNG: 'YOUNG',
    HELDINFANT: 'HELD_INFANT',
    SEATEDINFANT: 'SEATED_INFANT',
    STUDENT: 'STUDENT'
};


/***/ }),

/***/ "./api-flights/variables.ts":
/*!**********************************!*\
  !*** ./api-flights/variables.ts ***!
  \**********************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),

/***/ "./api-locations/api.module.ts":
/*!*************************************!*\
  !*** ./api-locations/api.module.ts ***!
  \*************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration */ "./api-locations/configuration.ts");
/* harmony import */ var _api_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/locations.service */ "./api-locations/api/locations.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: _configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"], useFactory: configurationFactory }]
        };
    }
}
ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ApiModule });
ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ApiModule_Factory(t) { return new (t || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], 8)); }, providers: [
        _api_locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"]
    ], imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                declarations: [],
                exports: [],
                providers: [
                    _api_locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"]
                ]
            }]
    }], function () { return [{ type: ApiModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./api-locations/api/api.ts":
/*!**********************************!*\
  !*** ./api-locations/api/api.ts ***!
  \**********************************/
/*! exports provided: LocationsService, APIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _locations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locations.service */ "./api-locations/api/locations.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return _locations_service__WEBPACK_IMPORTED_MODULE_0__["LocationsService"]; });



const APIS = [_locations_service__WEBPACK_IMPORTED_MODULE_0__["LocationsService"]];


/***/ }),

/***/ "./api-locations/api/locations.service.ts":
/*!************************************************!*\
  !*** ./api-locations/api/locations.service.ts ***!
  \************************************************/
/*! exports provided: LocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return LocationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./api-locations/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./api-locations/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./api-locations/configuration.ts");
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








class LocationsService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://test.api.amadeus.com/v1';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
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
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    getAirportCitySearch(subType, keyword, countryCode, pageLimit, pageOffset, sort, view, observe = 'body', reportProgress = false) {
        if (subType === null || subType === undefined) {
            throw new Error('Required parameter subType was null or undefined when calling getAirportCitySearch.');
        }
        if (keyword === null || keyword === undefined) {
            throw new Error('Required parameter keyword was null or undefined when calling getAirportCitySearch.');
        }
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (subType) {
            queryParameters = queryParameters.set('subType', subType.join(_variables__WEBPACK_IMPORTED_MODULE_3__["COLLECTION_FORMATS"]['csv']));
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
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/vnd.amadeus+json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/vnd.amadeus+json'
        ];
        return this.httpClient.get(`${this.basePath}/reference-data/locations`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
LocationsService.ɵfac = function LocationsService_Factory(t) { return new (t || LocationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
LocationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocationsService, factory: LocationsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./api-locations/configuration.ts":
/*!****************************************!*\
  !*** ./api-locations/configuration.ts ***!
  \****************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
class Configuration {
    constructor(configurationParameters = {}) {
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
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length == 0) {
            return undefined;
        }
        let type = contentTypes.find(x => this.isJsonMime(x));
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
    selectHeaderAccept(accepts) {
        if (accepts.length == 0) {
            return undefined;
        }
        let type = accepts.find(x => this.isJsonMime(x));
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
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}


/***/ }),

/***/ "./api-locations/encoder.ts":
/*!**********************************!*\
  !*** ./api-locations/encoder.ts ***!
  \**********************************/
/*! exports provided: CustomHttpUrlEncodingCodec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function() { return CustomHttpUrlEncodingCodec; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"] {
    encodeKey(k) {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v) {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}


/***/ }),

/***/ "./api-locations/index.ts":
/*!********************************!*\
  !*** ./api-locations/index.ts ***!
  \********************************/
/*! exports provided: LocationsService, APIS, Distance, Links, Location, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "./api-locations/api/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["LocationsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"]; });

/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ "./api-locations/model/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Distance", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["Distance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["Links"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["Location"]; });

/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./api-locations/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["COLLECTION_FORMATS"]; });

/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "./api-locations/configuration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]; });

/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.module */ "./api-locations/api.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _api_module__WEBPACK_IMPORTED_MODULE_4__["ApiModule"]; });








/***/ }),

/***/ "./api-locations/model/distance.ts":
/*!*****************************************!*\
  !*** ./api-locations/model/distance.ts ***!
  \*****************************************/
/*! exports provided: Distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Distance", function() { return Distance; });
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
var Distance;
(function (Distance) {
    Distance.UnitEnum = {
        KM: 'KM',
        MI: 'MI'
    };
})(Distance || (Distance = {}));


/***/ }),

/***/ "./api-locations/model/links.ts":
/*!**************************************!*\
  !*** ./api-locations/model/links.ts ***!
  \**************************************/
/*! exports provided: Links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
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
var Links;
(function (Links) {
    Links.MethodsEnum = {
        GET: 'GET',
        PUT: 'PUT',
        DELETE: 'DELETE',
        POST: 'POST',
        PATCH: 'PATCH'
    };
})(Links || (Links = {}));


/***/ }),

/***/ "./api-locations/model/location.ts":
/*!*****************************************!*\
  !*** ./api-locations/model/location.ts ***!
  \*****************************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
var Location;
(function (Location) {
    Location.SubTypeEnum = {
        AIRPORT: 'AIRPORT',
        CITY: 'CITY',
        POINTOFINTEREST: 'POINT_OF_INTEREST',
        DISTRICT: 'DISTRICT'
    };
    Location.CategoryEnum = {
        SIGHTS: 'SIGHTS',
        BEACHPARK: 'BEACH_PARK',
        HISTORICAL: 'HISTORICAL',
        NIGHTLIFE: 'NIGHTLIFE',
        RESTAURANT: 'RESTAURANT',
        SHOPPING: 'SHOPPING'
    };
})(Location || (Location = {}));


/***/ }),

/***/ "./api-locations/model/models.ts":
/*!***************************************!*\
  !*** ./api-locations/model/models.ts ***!
  \***************************************/
/*! exports provided: Distance, Links, Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _distance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distance */ "./api-locations/model/distance.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Distance", function() { return _distance__WEBPACK_IMPORTED_MODULE_0__["Distance"]; });

/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./links */ "./api-locations/model/links.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return _links__WEBPACK_IMPORTED_MODULE_1__["Links"]; });

/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location */ "./api-locations/model/location.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["Location"]; });






/***/ }),

/***/ "./api-locations/variables.ts":
/*!************************************!*\
  !*** ./api-locations/variables.ts ***!
  \************************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),

/***/ "./api-safety/api.module.ts":
/*!**********************************!*\
  !*** ./api-safety/api.module.ts ***!
  \**********************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration */ "./api-safety/configuration.ts");
/* harmony import */ var _api_safety_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/safety.service */ "./api-safety/api/safety.service.ts");
/* harmony import */ var _api_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/security.service */ "./api-safety/api/security.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: _configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"], useFactory: configurationFactory }]
        };
    }
}
ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ApiModule });
ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ApiModule_Factory(t) { return new (t || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], 8)); }, providers: [
        _api_safety_service__WEBPACK_IMPORTED_MODULE_2__["SafetyService"],
        _api_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"]
    ], imports: [[]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                declarations: [],
                exports: [],
                providers: [
                    _api_safety_service__WEBPACK_IMPORTED_MODULE_2__["SafetyService"],
                    _api_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"]
                ]
            }]
    }], function () { return [{ type: ApiModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./api-safety/api/api.ts":
/*!*******************************!*\
  !*** ./api-safety/api/api.ts ***!
  \*******************************/
/*! exports provided: SafetyService, SecurityService, APIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _safety_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety.service */ "./api-safety/api/safety.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SafetyService", function() { return _safety_service__WEBPACK_IMPORTED_MODULE_0__["SafetyService"]; });

/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security.service */ "./api-safety/api/security.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return _security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"]; });





const APIS = [_safety_service__WEBPACK_IMPORTED_MODULE_0__["SafetyService"], _security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"]];


/***/ }),

/***/ "./api-safety/api/safety.service.ts":
/*!******************************************!*\
  !*** ./api-safety/api/safety.service.ts ***!
  \******************************************/
/*! exports provided: SafetyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafetyService", function() { return SafetyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./api-safety/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./api-safety/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./api-safety/configuration.ts");
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








class SafetyService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://test.api.amadeus.com/v1';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
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
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    getSafetyRanking(latitude, longitude, radius, pageLimit, pageOffset, observe = 'body', reportProgress = false) {
        if (latitude === null || latitude === undefined) {
            throw new Error('Required parameter latitude was null or undefined when calling getSafetyRanking.');
        }
        if (longitude === null || longitude === undefined) {
            throw new Error('Required parameter longitude was null or undefined when calling getSafetyRanking.');
        }
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
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
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/vnd.amadeus+json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/vnd.amadeus+json'
        ];
        return this.httpClient.get(`${this.basePath}/safety/safety-rated-locations`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
SafetyService.ɵfac = function SafetyService_Factory(t) { return new (t || SafetyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
SafetyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SafetyService, factory: SafetyService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafetyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./api-safety/api/security.service.ts":
/*!********************************************!*\
  !*** ./api-safety/api/security.service.ts ***!
  \********************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./api-safety/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./api-safety/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./api-safety/configuration.ts");
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








class SecurityService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://test.api.amadeus.com/v1';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
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
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    getAccessToken(grantType, clientId, clientSecret, observe = 'body', reportProgress = false) {
        if (grantType === null || grantType === undefined) {
            throw new Error('Required parameter grantType was null or undefined when calling getAccessToken.');
        }
        if (clientId === null || clientId === undefined) {
            throw new Error('Required parameter clientId was null or undefined when calling getAccessToken.');
        }
        if (clientSecret === null || clientSecret === undefined) {
            throw new Error('Required parameter clientSecret was null or undefined when calling getAccessToken.');
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/x-www-form-urlencoded'
        ];
        const canConsumeForm = this.canConsumeForm(consumes);
        let formParams;
        let useForm = false;
        let convertFormParamsToString = false;
        if (useForm) {
            formParams = new FormData();
        }
        else {
            formParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
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
        return this.httpClient.post(`${this.basePath}/security/oauth2/token`, convertFormParamsToString ? formParams.toString() : formParams, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
SecurityService.ɵfac = function SecurityService_Factory(t) { return new (t || SecurityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8)); };
SecurityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SecurityService, factory: SecurityService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecurityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
            }] }, { type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();


/***/ }),

/***/ "./api-safety/configuration.ts":
/*!*************************************!*\
  !*** ./api-safety/configuration.ts ***!
  \*************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
class Configuration {
    constructor(configurationParameters = {}) {
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
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length == 0) {
            return undefined;
        }
        let type = contentTypes.find(x => this.isJsonMime(x));
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
    selectHeaderAccept(accepts) {
        if (accepts.length == 0) {
            return undefined;
        }
        let type = accepts.find(x => this.isJsonMime(x));
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
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}


/***/ }),

/***/ "./api-safety/encoder.ts":
/*!*******************************!*\
  !*** ./api-safety/encoder.ts ***!
  \*******************************/
/*! exports provided: CustomHttpUrlEncodingCodec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function() { return CustomHttpUrlEncodingCodec; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"] {
    encodeKey(k) {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v) {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}


/***/ }),

/***/ "./api-safety/index.ts":
/*!*****************************!*\
  !*** ./api-safety/index.ts ***!
  \*****************************/
/*! exports provided: SafetyService, SecurityService, APIS, Links, Location, SafetyRatedLocation, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "./api-safety/api/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SafetyService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["SafetyService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["SecurityService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"]; });

/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ "./api-safety/model/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["Links"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SafetyRatedLocation", function() { return _model_models__WEBPACK_IMPORTED_MODULE_1__["SafetyRatedLocation"]; });

/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ "./api-safety/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return _variables__WEBPACK_IMPORTED_MODULE_2__["COLLECTION_FORMATS"]; });

/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "./api-safety/configuration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]; });

/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.module */ "./api-safety/api.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _api_module__WEBPACK_IMPORTED_MODULE_4__["ApiModule"]; });








/***/ }),

/***/ "./api-safety/model/links.ts":
/*!***********************************!*\
  !*** ./api-safety/model/links.ts ***!
  \***********************************/
/*! exports provided: Links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
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
var Links;
(function (Links) {
    Links.MethodsEnum = {
        GET: 'GET',
        PUT: 'PUT',
        DELETE: 'DELETE',
        POST: 'POST',
        PATCH: 'PATCH'
    };
})(Links || (Links = {}));


/***/ }),

/***/ "./api-safety/model/location.ts":
/*!**************************************!*\
  !*** ./api-safety/model/location.ts ***!
  \**************************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
var Location;
(function (Location) {
    Location.SubTypeEnum = {
        AIRPORT: 'AIRPORT',
        CITY: 'CITY',
        POINTOFINTEREST: 'POINT_OF_INTEREST',
        DISTRICT: 'DISTRICT'
    };
})(Location || (Location = {}));


/***/ }),

/***/ "./api-safety/model/models.ts":
/*!************************************!*\
  !*** ./api-safety/model/models.ts ***!
  \************************************/
/*! exports provided: Links, Location, SafetyRatedLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./links */ "./api-safety/model/links.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return _links__WEBPACK_IMPORTED_MODULE_0__["Links"]; });

/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ "./api-safety/model/location.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return _location__WEBPACK_IMPORTED_MODULE_1__["Location"]; });

/* harmony import */ var _safetyRatedLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safetyRatedLocation */ "./api-safety/model/safetyRatedLocation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SafetyRatedLocation", function() { return _safetyRatedLocation__WEBPACK_IMPORTED_MODULE_2__["SafetyRatedLocation"]; });






/***/ }),

/***/ "./api-safety/model/safetyRatedLocation.ts":
/*!*************************************************!*\
  !*** ./api-safety/model/safetyRatedLocation.ts ***!
  \*************************************************/
/*! exports provided: SafetyRatedLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafetyRatedLocation", function() { return SafetyRatedLocation; });
var SafetyRatedLocation;
(function (SafetyRatedLocation) {
    SafetyRatedLocation.SubTypeEnum = {
        AIRPORT: 'AIRPORT',
        CITY: 'CITY',
        POINTOFINTEREST: 'POINT_OF_INTEREST',
        DISTRICT: 'DISTRICT'
    };
})(SafetyRatedLocation || (SafetyRatedLocation = {}));


/***/ }),

/***/ "./api-safety/variables.ts":
/*!*********************************!*\
  !*** ./api-safety/variables.ts ***!
  \*********************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
	if(!__webpack_require__.o(map, req)) {
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

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modals_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals/settings/settings.component */ "./src/app/modals/settings/settings.component.ts");
/* harmony import */ var _modals_database_database_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/database/database.component */ "./src/app/modals/database/database.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mocks_search_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mocks/search-params */ "./src/app/mocks/search-params.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_services_amadeus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/services/amadeus.service */ "./src/app/services/amadeus.service.ts");
/* harmony import */ var _app_services_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/moment.pipe */ "./src/app/pipes/moment.pipe.ts");



























function AppComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openDatabaseDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "storage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_mat_icon_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_mat_progress_spinner_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 24);
} }
function AppComponent_mat_card_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please fill ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Amadeus API");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " key & secret or toggle API emulation in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " before using this demo app. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function AppComponent_div_48_mat_card_1_mat_expansion_panel_12_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " From ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_48_mat_card_1_mat_expansion_panel_12_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.departure.iataCode, " ");
} }
function AppComponent_div_48_mat_card_1_mat_expansion_panel_12_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_48_mat_card_1_mat_expansion_panel_12_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r28.arrival.iataCode, " ");
} }
function AppComponent_div_48_mat_card_1_mat_expansion_panel_12_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Duration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_48_mat_card_1_mat_expansion_panel_12_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r29.duration, "duration", "HH:mm"), " ");
} }
function AppComponent_div_48_mat_card_1_mat_expansion_panel_12_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Departure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_48_mat_card_1_mat_expansion_panel_12_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r30.departure.at, "date", "LT"), " ");
} }
function AppComponent_div_48_mat_card_1_mat_expansion_panel_12_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Arrival ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_48_mat_card_1_mat_expansion_panel_12_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r31.arrival.at, "date", "LT"), " ");
} }
function AppComponent_div_48_mat_card_1_mat_expansion_panel_12_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 46);
} }
function AppComponent_div_48_mat_card_1_mat_expansion_panel_12_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 47);
} }
const _c0 = function () { return ["departure", "arrival", "duration", "departureAt", "arrivalAt"]; };
function AppComponent_div_48_mat_card_1_mat_expansion_panel_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_48_mat_card_1_mat_expansion_panel_12_th_11_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_48_mat_card_1_mat_expansion_panel_12_td_12_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_48_mat_card_1_mat_expansion_panel_12_th_14_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_48_mat_card_1_mat_expansion_panel_12_td_15_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_div_48_mat_card_1_mat_expansion_panel_12_th_17_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_div_48_mat_card_1_mat_expansion_panel_12_td_18_Template, 3, 5, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_div_48_mat_card_1_mat_expansion_panel_12_th_20_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_div_48_mat_card_1_mat_expansion_panel_12_td_21_Template, 3, 5, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_div_48_mat_card_1_mat_expansion_panel_12_th_23_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_div_48_mat_card_1_mat_expansion_panel_12_td_24_Template, 3, 5, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_div_48_mat_card_1_mat_expansion_panel_12_tr_25_Template, 1, 0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppComponent_div_48_mat_card_1_mat_expansion_panel_12_tr_26_Template, 1, 0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itinerary_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r14 == 1 ? "Return flight" : "Departure flight", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 5, itinerary_r13.duration, "duration", "HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", itinerary_r13.segments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
} }
function AppComponent_div_48_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-accordion", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_div_48_mat_card_1_mat_expansion_panel_12_Template, 27, 11, "mat-expansion-panel", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offer_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r11.price.grandTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](offer_r11.price.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.formatAirlines(offer_r11.validatingAirlineCodes, ctx_r10.flightsDictionaries.carriers), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@.disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", offer_r11.itineraries);
} }
function AppComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_48_mat_card_1_Template, 13, 5, "mat-card", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.flightsOffers);
} }
function AppComponent_div_50_mat_card_subtitle_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.checkRiskLevel(ctx_r33.safetyScore.overall));
} }
function AppComponent_div_50_mat_card_title_group_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-title-group", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r34.applyCSSClass("text", ctx_r34.safetyScore.overall));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.safetyScore.overall);
} }
function AppComponent_div_50_mat_divider_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function AppComponent_div_50_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No safety data available. Try using New York, London, Barcelona or Berlin as destination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function AppComponent_div_50_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r39 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](score_r39.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", score_r39.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r38.applyCSSClass("border", ctx_r38.safetyScore[score_r39.locator]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r38.safetyScore[score_r39.locator], " ");
} }
function AppComponent_div_50_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_50_div_11_div_1_Template, 7, 4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.safetyScoreSettings);
} }
function AppComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_50_mat_card_subtitle_6_Template, 2, 1, "mat-card-subtitle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_50_mat_card_title_group_7_Template, 3, 2, "mat-card-title-group", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_50_mat_divider_8_Template, 1, 1, "mat-divider", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_50_div_10_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_50_div_11_Template, 2, 2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.locationData.address.cityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.safetyScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.safetyScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.safetyScore || !ctx_r7.foundSafetyData && ctx_r7.foundSafetyData !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.foundSafetyData && ctx_r7.foundSafetyData !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.safetyScore);
} }
class AppComponent {
    constructor(amadeusApi, databaseApi, dialog, alerts) {
        this.amadeusApi = amadeusApi;
        this.databaseApi = databaseApi;
        this.dialog = dialog;
        this.alerts = alerts;
        // search params
        this.flightsQuery = _mocks_search_params__WEBPACK_IMPORTED_MODULE_4__["defaultSearchParams"];
        // support of search params validation
        this.disableEdit = false;
        this.disableSearch = true;
        this.minDepartureDate = new Date();
        this.minReturnDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(this.minDepartureDate).add(1, 'days').toDate();
        // data from Amadeus APIs
        this.flightsOffers = null;
        this.flightsDictionaries = null;
        this.safetyScore = null;
        this.locationData = null;
        // variable to reflect data loading process during API calls 
        this.loadingData = false;
        // indication if safety data is available
        this.foundSafetyData = null;
        // safety score titles, variable locators and assotiated icons
        this.safetyScoreSettings = [
            { title: 'Women\'s safety', locator: 'women', icon: 'face' },
            { title: 'Physical harm', locator: 'physicalHarm', icon: 'sports_kabaddi' },
            { title: 'Theft', locator: 'theft', icon: 'account_balance_wallet' },
            { title: 'Political freedom', locator: 'politicalFreedom', icon: 'account_balance' },
            { title: 'Health & Medical', locator: 'medical', icon: 'healing' },
            { title: 'LGBTQ Safety', locator: 'lgbtq', icon: 'looks' },
        ];
    }
    // opening settings modal window
    openSettingsDialog() {
        console.debug('-- opening settings dialog');
        const dialogRef = this.dialog.open(_modals_settings_settings_component__WEBPACK_IMPORTED_MODULE_1__["SettingsDialog"], {
            width: '500px',
            data: { credentials: this.amadeusApi.verifyApiCredentials(), local: this.amadeusApi.verifyRunningLocal(), logs: this.databaseApi.verifyDbLogs() }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == undefined) {
                console.debug('-- settings dialog was closed, no updates saved');
            }
            else {
                console.debug('-- settings dialog was closed, syncing credentials');
                // syncing updates from settings dialog
                this.amadeusApi.verifyApiCredentials(result.credentials.key, result.credentials.secret);
                this.resetParams(result.local);
                this.databaseApi.verifyDbLogs(result.logs);
            }
        });
    }
    // opening database modal window
    openDatabaseDialog() {
        console.debug('-- opening database dialog');
        const dialogRef = this.dialog.open(_modals_database_database_component__WEBPACK_IMPORTED_MODULE_2__["DatabaseDialog"], {
            width: '700px',
            data: { credentials: this.databaseApi.verifyDbCredentials() }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == undefined) {
                console.debug('-- database dialog was closed, no updates saved');
            }
            else {
                console.debug('-- database dialog was closed, syncing credentials');
                // syncing updates from settings dialog
                this.databaseApi.verifyDbCredentials(result.credentials.key, result.credentials.secret);
            }
        });
    }
    // color coding safety scores 
    applyCSSClass(spec, value) {
        let prefix = '';
        if (spec == 'text')
            prefix = 'score-';
        if (spec == 'border')
            prefix = 'border-score-';
        if (value <= 33)
            return prefix + 'low';
        if (value > 33 && value <= 66)
            return prefix + 'average';
        if (value > 66)
            return prefix + 'high';
    }
    // providing risk level based on overall safety score
    checkRiskLevel(value) {
        if (value <= 33)
            return 'Low risk';
        if (value > 33 && value <= 66)
            return 'Average risk';
        if (value > 66)
            return 'High risk';
    }
    // function to clear/fill search params 
    resetParams(value) {
        let newValue = value;
        if (newValue == null) {
            newValue = this.amadeusApi.verifyRunningLocal();
        }
        else {
            if (this.amadeusApi.verifyRunningLocal() !== newValue) {
                console.debug('-- setting running local setting to ', newValue);
                this.amadeusApi.verifyRunningLocal(newValue);
            }
        }
        this.disableEdit = newValue;
        this.disableSearch = !newValue;
        // filling search params - mocks if running local was selected
        this.flightsQuery = (newValue) ? _mocks_search_params__WEBPACK_IMPORTED_MODULE_4__["searchParamsMock"] : _mocks_search_params__WEBPACK_IMPORTED_MODULE_4__["defaultSearchParams"];
        this.cleanData();
    }
    // cleaning search data
    cleanData() {
        this.loadingData = false;
        this.flightsOffers = null;
        this.flightsDictionaries = null;
        this.locationData = null;
        this.safetyScore = null;
        this.foundSafetyData = null;
    }
    // input data validator for flights search params to disable or enable search button
    validateQuery() {
        if (this.flightsQuery.departureDate)
            this.minReturnDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(this.flightsQuery.departureDate).add(1, 'days').toDate();
        // disable search button if some fields are not filled
        if (this.flightsQuery.originLocationCode && this.flightsQuery.destinationLocationCode && this.flightsQuery.departureDate && this.flightsQuery.returnDate) {
            this.disableSearch = false;
        }
        else {
            this.disableSearch = true;
        }
    }
    // function to match airlines code from itinerary with airlines code from dictionaries to provide airline name
    formatAirlines(airlineCodes, carriers) {
        let airlinesList = [];
        airlineCodes.forEach(airline => airlinesList.push(carriers[airline]));
        return airlinesList.toString();
    }
    // initiate search for flights
    initiateSearch() {
        // cleaning previous search or error data
        this.cleanData();
        this.loadingData = true;
        // STEP 1 - transform departure city name into IATA code using Amadeus location API
        this.amadeusApi.getLocationDetails(this.flightsQuery.originLocationCode).subscribe(originLocation => {
            console.debug('-- received origin location details', originLocation);
            this.flightsQuery.originLocationCode = originLocation.data[0].iataCode;
            // STEP 2 - transform destination city name into IATA code using Amadeus location API
            this.amadeusApi.getLocationDetails(this.flightsQuery.destinationLocationCode).subscribe(destinationLocation => {
                console.debug('-- received destination location details', destinationLocation);
                this.locationData = destinationLocation.data[0];
                this.flightsQuery.destinationLocationCode = this.locationData.iataCode;
                // STEP 3 - search for flight offers using obtained location IATA codes and dates provided by user
                this.amadeusApi.searchFlights(this.flightsQuery).subscribe(flightsData => {
                    this.flightsOffers = flightsData.data;
                    this.flightsDictionaries = flightsData.dictionaries;
                    console.debug('-- received flights offers', flightsData);
                    // safety data can be empty cause it is a test api, so can display what we have so far
                    this.loadingData = false;
                    // STEP 4 - get location safety score data using Amadeus APIs
                    this.amadeusApi.getSafetyDetails(this.locationData.geoCode.latitude, this.locationData.geoCode.longitude).subscribe(safetyData => {
                        console.debug('-- received safety data', safetyData);
                        if (safetyData.data.length > 0) {
                            this.safetyScore = safetyData.data[0].safetyScores;
                        }
                        else {
                            this.foundSafetyData = false;
                        }
                    });
                    // STEP 5 (OPTIONAL) - log query in DB
                    if (this.databaseApi.verifyDbLogs()) {
                        this.databaseApi.submitData(this.flightsQuery).subscribe(res => {
                            console.debug('-- submitted query log to db', res);
                        });
                    }
                    ;
                });
            });
        });
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_amadeus_service__WEBPACK_IMPORTED_MODULE_6__["AmadeusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 51, vars: 21, consts: [["color", "primary"], [1, "toolbar-spacer"], ["mat-button", "", "aria-label", "Database modal", 3, "click", 4, "ngIf"], ["mat-button", "", "aria-label", "Settings modal", 3, "click"], [1, "bounds"], ["fxLayout", "row", "fxLayout.xs", "column", "fxFlexFill", "", 1, "selector-wrapper"], ["fxFlex", "100", 1, "sec1"], ["appearance", "standard"], ["matInput", "", "placeholder", "Chicago or Barcelona", 3, "disabled", "ngModel", "ngModelChange", "change"], ["matSuffix", "", "inline", ""], ["matInput", "", "placeholder", "New York or London", 3, "disabled", "ngModel", "ngModelChange", "change"], [1, "date-picker"], ["matInput", "", 3, "matDatepicker", "disabled", "ngModel", "min", "ngModelChange", "dateChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["picker2", ""], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [4, "ngIf"], ["mode", "indeterminate", "diameter", "17", "class", "flights-search-spinner", 4, "ngIf"], ["class", "welcome-info", 4, "ngIf"], ["fxLayout", "row", "fxLayout.xs", "column", "fxFlexFill", "", 1, "results-wrapper"], ["fxFlex", "60", 1, "sec2"], ["fxFlex", "40", 1, "sec3"], ["mat-button", "", "aria-label", "Database modal", 3, "click"], ["mode", "indeterminate", "diameter", "17", 1, "flights-search-spinner"], [1, "welcome-info"], ["href", "https://developers.amadeus.com/get-started/get-started-with-self-service-apis-335", "target", "_blank"], ["inline", "", "aria-label", "Settings"], ["class", "offer-card", 4, "ngFor", "ngForOf"], [1, "offer-card"], ["multi", "true"], [4, "ngFor", "ngForOf"], [1, "right-aligned-header"], ["color", "primary", "inline", ""], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "departure"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "arrival"], ["matColumnDef", "duration"], ["matColumnDef", "departureAt"], ["matColumnDef", "arrivalAt"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "location-card"], [3, "ngClass", 4, "ngIf"], ["class", "no-safety-data", 4, "ngIf"], ["class", "scores-wrapper", "fxLayout", "coluumn wrap", 4, "ngIf"], [3, "ngClass"], [1, "score-title"], [1, "no-safety-data"], ["fxLayout", "coluumn wrap", 1, "scores-wrapper"], ["fxFlex", "33", 4, "ngFor", "ngForOf"], ["fxFlex", "33"], ["color", "primary", "inline", "", "aria-label", "score.title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "AirTravel demo application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_button_4_Template, 3, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.openSettingsDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Departing from?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_14_listener($event) { return ctx.flightsQuery.originLocationCode = $event; })("change", function AppComponent_Template_input_change_14_listener() { return ctx.validateQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "flight_takeoff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "City name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Going to?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_22_listener($event) { return ctx.flightsQuery.destinationLocationCode = $event; })("change", function AppComponent_Template_input_change_22_listener() { return ctx.validateQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "flight_land");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "City name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Departing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_30_listener($event) { return ctx.flightsQuery.departureDate = $event; })("dateChange", function AppComponent_Template_input_dateChange_30_listener() { return ctx.validateQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Returning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_37_listener($event) { return ctx.flightsQuery.returnDate = $event; })("dateChange", function AppComponent_Template_input_dateChange_37_listener() { return ctx.validateQuery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "mat-datepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_41_listener() { return ctx.initiateSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AppComponent_mat_icon_42_Template, 2, 0, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AppComponent_mat_progress_spinner_43_Template, 1, 0, "mat-progress-spinner", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Find flights ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AppComponent_mat_card_45_Template, 10, 1, "mat-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AppComponent_div_48_Template, 2, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AppComponent_div_50_Template, 12, 7, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.databaseApi.verifyDbLogs());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableEdit)("ngModel", ctx.flightsQuery.originLocationCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableEdit)("ngModel", ctx.flightsQuery.destinationLocationCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1)("disabled", ctx.disableEdit)("ngModel", ctx.flightsQuery.departureDate)("min", ctx.minDepartureDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r2)("disabled", ctx.disableEdit)("ngModel", ctx.flightsQuery.returnDate)("min", ctx.minReturnDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableSearch || ctx.loadingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disableEdit && !ctx.loadingData && !ctx.flightsOffers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flightsOffers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.locationData && ctx.flightsOffers);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatHint"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepicker"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardContent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionPanelDescription"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__["DefaultClassDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDivider"]], pipes: [_pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_25__["MomentPipe"]], styles: [".toolbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.bounds[_ngcontent-%COMP%] {\n  max-width: 1024px;\n  margin: auto;\n}\n\n.sec1[_ngcontent-%COMP%], .sec2[_ngcontent-%COMP%], .sec3[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.selector-wrapper[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\n.date-picker[_ngcontent-%COMP%] {\n  max-width: 120px;\n}\n\n.flights-search-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 7px;\n}\n\n.welcome-info[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  border-left: 5px solid orange;\n}\n\n.offer-card[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n  margin-bottom: 32px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.scores-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  padding: 0px 4px 26px 4px;\n}\n.scores-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 32px;\n}\n.scores-wrapper[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.scores-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0px 8px;\n  min-height: 40px;\n}\n.scores-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  padding-bottom: 2px;\n}\n\n.border-score-low[_ngcontent-%COMP%] {\n  border-bottom: 3px solid green;\n}\n.border-score-average[_ngcontent-%COMP%] {\n  border-bottom: 3px solid orange;\n}\n.border-score-high[_ngcontent-%COMP%] {\n  border-bottom: 3px solid red;\n}\n.score-low[_ngcontent-%COMP%] {\n  color:green;\n}\n.score-average[_ngcontent-%COMP%] {\n  color:orange;\n}\n.score-high[_ngcontent-%COMP%] {\n  color:red;\n}\n\n.score-title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding: 10px;\n}\n\n.no-safety-data[_ngcontent-%COMP%] {\n  padding: 16px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFO0FBQ3hFO0VBQ0UsY0FBYztBQUNoQjtBQUVBLGdEQUFnRDtBQUNoRDtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxhQUFhO0FBQ2Y7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSw2REFBNkQ7QUFDN0Q7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQSx1RUFBdUU7QUFDdkU7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBRUEsMERBQTBEO0FBQzFEO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjtBQUVBLHFEQUFxRDtBQUNyRDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFFQSwyQ0FBMkM7QUFDM0M7RUFDRSxXQUFXO0FBQ2I7QUFFQSxzREFBc0Q7QUFDdEQ7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUVBLDRGQUE0RjtBQUM1RjtFQUNFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBRUEscUNBQXFDO0FBQ3JDO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBhZGRpbmcgc3BhY2VyIGluIGFwcGxpY2F0aW9uIGhlYWRlciB0byBzdXBwb3J0IGJ1dHRvbnMgb24gdGhlIHJpZ2h0ICovXG4udG9vbGJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLyogbGltaXRpbmcgYXBwbGljYXRpb24gd2lkdGggYW5kIGNlbnRlcmluZyBpdCAqL1xuLmJvdW5kcyB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi8qIHNldHRpbmcgcGFkZGluZyBmb3IgZ3JpZCBjb2x1bW5zICovXG4uc2VjMSwgLnNlYzIsIC5zZWMzIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLyogbWFyZ2luIGZvciBmb3JtIGlucHV0cyBpbiBmbGlnaHRzIHNlYXJjaCBwYW5lbCAqL1xuLnNlbGVjdG9yLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4vKiBsaW1pdGluZyB3aWR0aCBvZiBkZXBhcnR1cmUgYW5kIHJldHVybiBkYXRlIGlucHV0IGZpZWxkcyAqL1xuLmRhdGUtcGlja2VyIHtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuLyogc2V0dGluZyBzdHlsZSB0byBwdXQgc3Bpbm5lciBpbnNpZGUgc2VhcmNoIGJ1dHRvbiBkdXJpbmcgQVBJIGNhbGxzICovXG4uZmxpZ2h0cy1zZWFyY2gtc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbi8qIGJhc2ljIHN0eWxlcyBmb3Igd2FybmluZyBtZXNzYWdlIHRvIGZpbGwgdGhlIHNldHRpbmdzICovXG4ud2VsY29tZS1pbmZvIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgb3JhbmdlO1xufVxuXG4vKiBhZGRpbmcgYm90dG9tIHBhZGRpbmcgdG8gZmxpZ2h0cyBzZWFyY2ggcmVzdWx0cyAgKi9cbi5vZmZlci1jYXJkIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi8qIG1ha2luZyBmbGlnaHRzIGRldGFpbHMgdGFibGUgZnVsbCBzaXplICovXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBiZWxvdyBjbGFzc2VzIHN0eWxpbmcgZm9yIHNhZmV0eSBpY29uL3RpdGxlL3Njb3JlICovXG4uc2NvcmVzLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggNHB4IDI2cHggNHB4O1xufVxuXG4uc2NvcmVzLXdyYXBwZXIgZGl2IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG5cbi5zY29yZXMtd3JhcHBlciAubWF0LWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5zY29yZXMtd3JhcHBlciBwIHtcbiAgcGFkZGluZzogMHB4IDhweDtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cblxuLnNjb3Jlcy13cmFwcGVyIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuXG4vKiBjbGFzc2VzIGJlbG93IGFyZSByZXF1aXJlZCB0byBjb2xvciBjb2RlIHNhZmV0eSBzY29yZSB2YWx1ZXMgd2l0aCB0ZXh0IG9yIGJvcmRlciBjb2xvcnMgKi9cbi5ib3JkZXItc2NvcmUtbG93IHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGdyZWVuO1xufVxuXG4uYm9yZGVyLXNjb3JlLWF2ZXJhZ2Uge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgb3JhbmdlO1xufVxuXG4uYm9yZGVyLXNjb3JlLWhpZ2gge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmVkO1xufVxuXG4uc2NvcmUtbG93IHtcbiAgY29sb3I6Z3JlZW47XG59XG5cbi5zY29yZS1hdmVyYWdlIHtcbiAgY29sb3I6b3JhbmdlO1xufVxuXG4uc2NvcmUtaGlnaCB7XG4gIGNvbG9yOnJlZDtcbn1cblxuLyogb3ZlcmFsbCBzY29yZSBmb3IgbG9jYXRpb24gKi9cbi5zY29yZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLyogcGFkZGluZyBmb3Igbm8gc2FmZXR5IGRhdGEgcmVwbHkgKi9cbi5uby1zYWZldHktZGF0YSB7XG4gIHBhZGRpbmc6IDE2cHggMHB4O1xufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fadeInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(250)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                // animations for showing/hiding panels
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fadeInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(250)
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _app_services_amadeus_service__WEBPACK_IMPORTED_MODULE_6__["AmadeusService"] }, { type: _app_services_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _api_safety__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api-safety */ "./api-safety/index.ts");
/* harmony import */ var _api_flights__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api-flights */ "./api-flights/index.ts");
/* harmony import */ var _api_locations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api-locations */ "./api-locations/index.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _interceptors_oauth_interceptor__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./interceptors/oauth.interceptor */ "./src/app/interceptors/oauth.interceptor.ts");
/* harmony import */ var _modals_settings_settings_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modals/settings/settings.component */ "./src/app/modals/settings/settings.component.ts");
/* harmony import */ var _modals_database_database_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modals/database/database.component */ "./src/app/modals/database/database.component.ts");
/* harmony import */ var _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pipes/moment.pipe */ "./src/app/pipes/moment.pipe.ts");
/* harmony import */ var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/error-handler.service */ "./src/app/services/error-handler.service.ts");






// additional modules




// Amadeus APIs



// angular material modules



















// custom things






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_oauth_interceptor__WEBPACK_IMPORTED_MODULE_29__["OauthInterceptor"], multi: true },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _services_error_handler_service__WEBPACK_IMPORTED_MODULE_33__["ErrorHandlerService"] },
        { provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 5000, verticalPosition: 'bottom', horizontalPosition: 'center' } }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _api_safety__WEBPACK_IMPORTED_MODULE_8__["ApiModule"],
            _api_flights__WEBPACK_IMPORTED_MODULE_9__["ApiModule"],
            _api_locations__WEBPACK_IMPORTED_MODULE_10__["ApiModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _modals_settings_settings_component__WEBPACK_IMPORTED_MODULE_30__["SettingsDialog"],
        _modals_database_database_component__WEBPACK_IMPORTED_MODULE_31__["DatabaseDialog"],
        _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_32__["MomentPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _api_safety__WEBPACK_IMPORTED_MODULE_8__["ApiModule"],
        _api_flights__WEBPACK_IMPORTED_MODULE_9__["ApiModule"],
        _api_locations__WEBPACK_IMPORTED_MODULE_10__["ApiModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _modals_settings_settings_component__WEBPACK_IMPORTED_MODULE_30__["SettingsDialog"],
                    _modals_database_database_component__WEBPACK_IMPORTED_MODULE_31__["DatabaseDialog"],
                    _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_32__["MomentPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _api_safety__WEBPACK_IMPORTED_MODULE_8__["ApiModule"],
                    _api_flights__WEBPACK_IMPORTED_MODULE_9__["ApiModule"],
                    _api_locations__WEBPACK_IMPORTED_MODULE_10__["ApiModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_28__["MatGridListModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
                ],
                providers: [
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_oauth_interceptor__WEBPACK_IMPORTED_MODULE_29__["OauthInterceptor"], multi: true },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _services_error_handler_service__WEBPACK_IMPORTED_MODULE_33__["ErrorHandlerService"] },
                    { provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: { duration: 5000, verticalPosition: 'bottom', horizontalPosition: 'center' } }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/interceptors/oauth.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/oauth.interceptor.ts ***!
  \***************************************************/
/*! exports provided: OauthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OauthInterceptor", function() { return OauthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm2015/add/operator/mergeMap.js");
/* harmony import */ var _mocks_flights_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mocks/flights-search */ "./src/app/mocks/flights-search.ts");
/* harmony import */ var _mocks_locations_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mocks/locations-search */ "./src/app/mocks/locations-search.ts");
/* harmony import */ var _mocks_safety_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mocks/safety-search */ "./src/app/mocks/safety-search.ts");
/* harmony import */ var _services_amadeus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/amadeus.service */ "./src/app/services/amadeus.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");










class OauthInterceptor {
    constructor(amadeusApi, alerts) {
        this.amadeusApi = amadeusApi;
        this.alerts = alerts;
    }
    // intercepting every HttpRequest
    intercept(request, next) {
        // check if it goes to Amadeus APIs
        if (request.url.includes('/safety/safety-rated-locations') || request.url.includes('/shopping/flight-offers') || request.url.includes('/reference-data/locations')) {
            // check if application running local (mocking web services)
            if (!this.amadeusApi.verifyRunningLocal()) {
                console.debug('-- intercepted Amadeus API request, looking for access_token');
                // obtaining and adding access token to the request
                return this.amadeusApi.provideToken().mergeMap(accessToken => {
                    console.debug('-- injecting access_token into Amadeus API request');
                    request = request.clone({
                        setHeaders: {
                            'Authorization': 'Bearer ' + accessToken
                        }
                    });
                    return next.handle(request);
                });
            }
            else {
                // application is running local, replying with local data instead of real API calls
                if (request.urlWithParams.includes('/reference-data/locations?subType=CITY&keyword=Chicago') || request.urlWithParams.includes('/reference-data/locations?subType=CITY&keyword=CHI'))
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _mocks_locations_search__WEBPACK_IMPORTED_MODULE_5__["originLocationSearchMock"] }));
                if (request.urlWithParams.includes('/reference-data/locations?subType=CITY&keyword=New%20York') || request.urlWithParams.includes('/reference-data/locations?subType=CITY&keyword=NYC'))
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _mocks_locations_search__WEBPACK_IMPORTED_MODULE_5__["destinationLocationSearchMock"] }));
                if (request.url.includes('/shopping/flight-offers'))
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _mocks_flights_search__WEBPACK_IMPORTED_MODULE_4__["flightsSearchMock"] }));
                if (request.url.includes('/safety/safety-rated-locations'))
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: _mocks_safety_search__WEBPACK_IMPORTED_MODULE_6__["safetyLocationSearchMock"] }));
            }
        }
        else {
            return next.handle(request);
        }
    }
}
OauthInterceptor.ɵfac = function OauthInterceptor_Factory(t) { return new (t || OauthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_amadeus_service__WEBPACK_IMPORTED_MODULE_7__["AmadeusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"])); };
OauthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OauthInterceptor, factory: OauthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OauthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_amadeus_service__WEBPACK_IMPORTED_MODULE_7__["AmadeusService"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/mocks/flights-search.ts":
/*!*****************************************!*\
  !*** ./src/app/mocks/flights-search.ts ***!
  \*****************************************/
/*! exports provided: flightsSearchMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flightsSearchMock", function() { return flightsSearchMock; });
// mock of flights search using Amadeus APIs
const flightsSearchMock = {
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
        },
        {
            "type": "flight-offer",
            "id": "1",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2020-08-21",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT2H3M",
                    "segments": [
                        {
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
                        }
                    ]
                },
                {
                    "duration": "PT2H24M",
                    "segments": [
                        {
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
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "217.10",
                "base": "200.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "217.10"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "UA"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "217.10",
                        "base": "200.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "KAA4PHDN",
                            "brandedFare": "ECONOMY",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        },
                        {
                            "segmentId": "2",
                            "cabin": "ECONOMY",
                            "fareBasis": "KAA4PHDN",
                            "brandedFare": "ECONOMY",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 0
                            }
                        }
                    ]
                }
            ]
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


/***/ }),

/***/ "./src/app/mocks/locations-search.ts":
/*!*******************************************!*\
  !*** ./src/app/mocks/locations-search.ts ***!
  \*******************************************/
/*! exports provided: originLocationSearchMock, destinationLocationSearchMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "originLocationSearchMock", function() { return originLocationSearchMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destinationLocationSearchMock", function() { return destinationLocationSearchMock; });
// mock of locations search using Amadeus APIs
const originLocationSearchMock = {
    "meta": {
        "count": 1,
        "links": {
            "self": "https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=Chicago&page%5Blimit%5D=1"
        }
    },
    "data": [
        {
            "type": "location",
            "subType": "CITY",
            "name": "CHICAGO",
            "detailedName": "CHICAGO/IL/US",
            "id": "CCHI",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CCHI",
                "methods": [
                    "GET"
                ]
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
        }
    ]
};
const destinationLocationSearchMock = {
    "meta": {
        "count": 1,
        "links": {
            "self": "https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=New%20York&page%5Blimit%5D=1"
        }
    },
    "data": [
        {
            "type": "location",
            "subType": "CITY",
            "name": "LAGUARDIA AIRPORT",
            "detailedName": "NEW YORK/NY/US",
            "id": "CNYC",
            "self": {
                "href": "https://test.api.amadeus.com/v1/reference-data/locations/CNYC",
                "methods": [
                    "GET"
                ]
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
        }
    ]
};


/***/ }),

/***/ "./src/app/mocks/safety-search.ts":
/*!****************************************!*\
  !*** ./src/app/mocks/safety-search.ts ***!
  \****************************************/
/*! exports provided: safetyLocationSearchMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safetyLocationSearchMock", function() { return safetyLocationSearchMock; });
// mock of safety score search using Amadeus APIs
const safetyLocationSearchMock = {
    "data": [
        {
            "type": "safety-rated-location",
            "id": "Q930206666",
            "self": {
                "type": "https://test.api.amadeus.com/v1/safety/safety-rated-locations/Q930206666",
                "methods": [
                    "GET"
                ]
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
        }
    ],
    "meta": {
        "count": 79,
        "links": {
            "self": "https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=40.71417\u0026longitude=-74.00583\u0026page%5Blimit%5D=1\u0026radius=20",
            "next": "https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=40.71417\u0026longitude=-74.00583\u0026page%5Blimit%5D=1\u0026page%5Boffset%5D=1\u0026radius=20",
            "last": "https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=40.71417\u0026longitude=-74.00583\u0026page%5Blimit%5D=1\u0026page%5Boffset%5D=79\u0026radius=20",
            "first": "https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=40.71417\u0026longitude=-74.00583\u0026page%5Blimit%5D=1\u0026page%5Boffset%5D=0\u0026radius=20"
        }
    }
};


/***/ }),

/***/ "./src/app/mocks/search-params.ts":
/*!****************************************!*\
  !*** ./src/app/mocks/search-params.ts ***!
  \****************************************/
/*! exports provided: searchParamsMock, defaultSearchParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchParamsMock", function() { return searchParamsMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSearchParams", function() { return defaultSearchParams; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
// mock of search params for local usage or calling Amadeus APIs

const searchParamsMock = {
    originLocationCode: "Chicago",
    destinationLocationCode: "New York",
    departureDate: moment__WEBPACK_IMPORTED_MODULE_0___default()('2021-03-01').toDate(),
    returnDate: moment__WEBPACK_IMPORTED_MODULE_0___default()('2021-03-19').toDate(),
    adults: 1,
    max: 1
};
const defaultSearchParams = {
    originLocationCode: null,
    destinationLocationCode: null,
    departureDate: null,
    returnDate: null,
    adults: 1,
    max: 1
};


/***/ }),

/***/ "./src/app/modals/database/database.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modals/database/database.component.ts ***!
  \*******************************************************/
/*! exports provided: DatabaseDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseDialog", function() { return DatabaseDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/moment.pipe */ "./src/app/pipes/moment.pipe.ts");














function DatabaseDialog_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No logs found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOut", undefined);
} }
function DatabaseDialog_div_14_table_2_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Timestamp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatabaseDialog_div_14_table_2_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r18.timestamp, "time", "L LT"), " ");
} }
function DatabaseDialog_div_14_table_2_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " From ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatabaseDialog_div_14_table_2_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.query.originLocationCode, " ");
} }
function DatabaseDialog_div_14_table_2_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatabaseDialog_div_14_table_2_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.query.destinationLocationCode, " ");
} }
function DatabaseDialog_div_14_table_2_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Departure date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatabaseDialog_div_14_table_2_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r21.query.departureDate, "time", "L"), " ");
} }
function DatabaseDialog_div_14_table_2_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Return date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatabaseDialog_div_14_table_2_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, element_r22.query.returnDate, "time", "L"), " ");
} }
function DatabaseDialog_div_14_table_2_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
function DatabaseDialog_div_14_table_2_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
const _c0 = function () { return ["timestamp", "departure", "arrival", "departure_date", "return_date"]; };
function DatabaseDialog_div_14_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatabaseDialog_div_14_table_2_th_2_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatabaseDialog_div_14_table_2_td_3_Template, 3, 5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatabaseDialog_div_14_table_2_th_5_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatabaseDialog_div_14_table_2_td_6_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DatabaseDialog_div_14_table_2_th_8_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DatabaseDialog_div_14_table_2_td_9_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DatabaseDialog_div_14_table_2_th_11_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DatabaseDialog_div_14_table_2_td_12_Template, 3, 5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DatabaseDialog_div_14_table_2_th_14_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DatabaseDialog_div_14_table_2_td_15_Template, 3, 5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DatabaseDialog_div_14_table_2_tr_16_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DatabaseDialog_div_14_table_2_tr_17_Template, 1, 0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r5.dblogs)("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
} }
function DatabaseDialog_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatabaseDialog_div_14_div_1_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatabaseDialog_div_14_table_2_Template, 18, 6, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dblogs.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dblogs.length > 0);
} }
function DatabaseDialog_mat_progress_spinner_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 23);
} }
function DatabaseDialog_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatabaseDialog_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clear data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DatabaseDialog {
    constructor(dialogRef, data, databaseApi) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.databaseApi = databaseApi;
        this.dblogs = null;
        this.loadingLogsData = false;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    // loading data using database service
    loadLogs() {
        this.loadingLogsData = true;
        this.databaseApi.loadData().subscribe(data => {
            console.debug('-- received logs from database', data);
            this.dblogs = data;
            this.loadingLogsData = false;
        });
    }
    // removing data using database service
    clearLogs() {
        this.loadingLogsData = true;
        this.databaseApi.removeData().subscribe(res => {
            console.debug('-- cleared logs database', res);
            this.loadLogs();
        });
    }
    ngOnInit() {
        this.loadLogs();
    }
}
DatabaseDialog.ɵfac = function DatabaseDialog_Factory(t) { return new (t || DatabaseDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"])); };
DatabaseDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatabaseDialog, selectors: [["app-database"]], decls: 22, vars: 7, consts: [["mat-dialog-title", ""], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-flat-button", "", "color", "primary", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-flat-button", "", "color", "warn", "cdkFocusInitial", "", 3, "disabled", "click"], ["mode", "indeterminate", "diameter", "17", "class", "search-spinner", 4, "ngIf"], ["class", "mat-body-strong", 4, "ngIf"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], [1, "mat-body-strong"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "timestamp"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "departure"], ["matColumnDef", "arrival"], ["matColumnDef", "departure_date"], ["matColumnDef", "return_date"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mode", "indeterminate", "diameter", "17", 1, "search-spinner"]], template: function DatabaseDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Database connection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "In order for database connection to work, you should configure database instance and APIs on your node runtime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Database service user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatabaseDialog_Template_input_ngModelChange_9_listener($event) { return ctx.data.credentials.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Database service password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatabaseDialog_Template_input_ngModelChange_13_listener($event) { return ctx.data.credentials.secret = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DatabaseDialog_div_14_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatabaseDialog_Template_button_click_18_listener() { return ctx.clearLogs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DatabaseDialog_mat_progress_spinner_19_Template, 1, 0, "mat-progress-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DatabaseDialog_span_20_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DatabaseDialog_span_21_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.credentials.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.credentials.secret);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dblogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loadingLogsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingLogsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingLogsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loadingLogsData);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinner"]], pipes: [_pipes_moment_pipe__WEBPACK_IMPORTED_MODULE_11__["MomentPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.search-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 7px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2RhdGFiYXNlL2RhdGFiYXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsV0FBVztBQUNiO0FBRUEsK0NBQStDO0FBQy9DO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUVBLCtDQUErQztBQUMvQztFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9kYXRhYmFzZS9kYXRhYmFzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbWFraW5nIGxvZ3MgdGFibGUgZnVsbCBzaXplICovXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBzcGlubmVyIGluc2lkZSB0aGUgYnV0dG9uIGR1cmluZyBkYXRhIGxvYWQgKi9cbi5zZWFyY2gtc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbi8qIG1hcmdpbiBmb3IgaW5saW5lIGlucHV0IGZpZWxkIGZvciBrZXkvcGFzcyAqL1xuLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(250)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatabaseDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-database',
                templateUrl: './database.component.html',
                styleUrls: ['./database.component.css'],
                // animations for showing/hiding divs
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(250)
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(250, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modals/settings/settings.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modals/settings/settings.component.ts ***!
  \*******************************************************/
/*! exports provided: SettingsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDialog", function() { return SettingsDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class SettingsDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
}
SettingsDialog.ɵfac = function SettingsDialog_Factory(t) { return new (t || SettingsDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
SettingsDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsDialog, selectors: [["app-settings"]], decls: 26, vars: 5, consts: [["mat-dialog-title", ""], ["href", "https://developers.amadeus.com/register", "target", "_blank"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["color", "primary", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function SettingsDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Application settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please provide your Amadeus Developer API key and secret below. If you do not have them yet, start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "API Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsDialog_Template_input_ngModelChange_11_listener($event) { return ctx.data.credentials.key = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "API Secret");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsDialog_Template_input_ngModelChange_16_listener($event) { return ctx.data.credentials.secret = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-slide-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsDialog_Template_mat_slide_toggle_ngModelChange_18_listener($event) { return ctx.data.local = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Emulate Amadeus API calls ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-slide-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsDialog_Template_mat_slide_toggle_ngModelChange_21_listener($event) { return ctx.data.logs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Enable logging to database ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.credentials.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.credentials.secret);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.local);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.logs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/moment.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/moment.pipe.ts ***!
  \**************************************/
/*! exports provided: MomentPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentPipe", function() { return MomentPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



class MomentPipe {
    transform(date, type, format) {
        // in case of duration type, provide custom duration string output
        if (type == "duration") {
            let duration = moment__WEBPACK_IMPORTED_MODULE_1__["duration"](date);
            return (duration.hours() + " hours " + duration.minutes() + " minutes ");
        }
        else {
            // otherwise provide date string output based on requested format
            return moment__WEBPACK_IMPORTED_MODULE_1__(date).format(format);
        }
    }
}
MomentPipe.ɵfac = function MomentPipe_Factory(t) { return new (t || MomentPipe)(); };
MomentPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "moment", type: MomentPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MomentPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'moment'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");




class AlertService {
    constructor(alertBar, zone) {
        this.alertBar = alertBar;
        this.zone = zone;
        this.resetSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.initiateReset = this.resetSubject.asObservable();
    }
    showAlert(message) {
        // NgZone workaround required to avoid showing alert twice 
        this.zone.run(() => {
            this.alertBar.open(message);
            // way of calling a function in component to clear up search params and data in case error has occured
            this.resetSubject.next();
        });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/amadeus.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/amadeus.service.ts ***!
  \*********************************************/
/*! exports provided: AmadeusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmadeusService", function() { return AmadeusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_add_observable_fromPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/fromPromise */ "./node_modules/rxjs-compat/_esm2015/add/observable/fromPromise.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_safety__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api-safety */ "./api-safety/index.ts");
/* harmony import */ var _api_flights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api-flights */ "./api-flights/index.ts");
/* harmony import */ var _api_locations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../api-locations */ "./api-locations/index.ts");








class AmadeusService {
    constructor(securityApi, flightsApi, locationsApi, safetyApi) {
        this.securityApi = securityApi;
        this.flightsApi = flightsApi;
        this.locationsApi = locationsApi;
        this.safetyApi = safetyApi;
        this.accessToken = null;
        this.runningLocal = false;
        // API credentials to use Amadeus API. Obtain yours by following the instructions https://developers.amadeus.com/get-started/get-started-with-self-service-apis-335
        this.apiCredentials = {
            key: null,
            secret: null
        };
    }
    // function to update or just provide a status of running local param
    verifyRunningLocal(value) {
        if (value !== null && value !== undefined) {
            this.runningLocal = value;
            return this.runningLocal;
        }
        else
            return this.runningLocal;
    }
    // function to update or just provide credentials to Amadeus APIs
    verifyApiCredentials(api_key, api_secret) {
        if (api_key && api_secret) {
            this.apiCredentials = {
                key: api_key,
                secret: api_secret
            };
            return this.apiCredentials;
        }
        else
            return this.apiCredentials;
    }
    // function to obtain access token that is required to make any data call to Amadeus APIs
    obtainToken() {
        return new Promise((resolve, reject) => {
            this.securityApi.getAccessToken('client_credentials', this.apiCredentials.key, this.apiCredentials.secret).subscribe(value => {
                if ("access_token" in value) {
                    resolve(value);
                }
                else {
                    reject();
                }
            });
        });
    }
    // function to provide saved token or call obtain function and get a new one
    provideToken() {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromPromise(new Promise((resolve, reject) => {
            if (this.accessToken) {
                console.debug('-- found saved access_token');
                resolve(this.accessToken);
            }
            else {
                console.debug('-- requesting new access_token from Amadeus');
                this.obtainToken().then(value => {
                    this.accessToken = value.access_token;
                    console.debug('-- access_token received');
                    resolve(this.accessToken);
                }, error => {
                    console.debug('!-- cannot get access_token', error);
                    reject();
                });
            }
        }));
    }
    // connection with generated Amadeus flights api to pre-fill params and format dates
    searchFlights(flightsQuery) {
        return this.flightsApi.getFlightOffers(flightsQuery.originLocationCode, flightsQuery.destinationLocationCode, moment__WEBPACK_IMPORTED_MODULE_3___default()(flightsQuery.departureDate).format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_3___default()(flightsQuery.returnDate).format('YYYY-MM-DD'), flightsQuery.adults, flightsQuery.max);
    }
    // connection with generated Amadeus locations api to pre-fill params and format dates
    getLocationDetails(cityName) {
        return this.locationsApi.getAirportCitySearch(['CITY'], cityName, null, 1);
    }
    // connection with generated Amadeus safety score api to pre-fill params and format dates
    getSafetyDetails(lat, long) {
        return this.safetyApi.getSafetyRanking(lat, long, 20, 1);
    }
}
AmadeusService.ɵfac = function AmadeusService_Factory(t) { return new (t || AmadeusService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_safety__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_flights__WEBPACK_IMPORTED_MODULE_5__["FlightsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_locations__WEBPACK_IMPORTED_MODULE_6__["LocationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_safety__WEBPACK_IMPORTED_MODULE_4__["SafetyService"])); };
AmadeusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AmadeusService, factory: AmadeusService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AmadeusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_safety__WEBPACK_IMPORTED_MODULE_4__["SecurityService"] }, { type: _api_flights__WEBPACK_IMPORTED_MODULE_5__["FlightsService"] }, { type: _api_locations__WEBPACK_IMPORTED_MODULE_6__["LocationsService"] }, { type: _api_safety__WEBPACK_IMPORTED_MODULE_4__["SafetyService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/database.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);





class DatabaseService {
    constructor(http) {
        this.http = http;
        this.dbLogs = false;
        // basic auth credentials for db access through node runtime api
        this.dbCredentials = {
            key: 'secret_user',
            secret: 'secret_password'
        };
    }
    // function to update or just provide a status of running local param
    verifyDbLogs(value) {
        if (value !== null && value !== undefined) {
            this.dbLogs = value;
            return this.dbLogs;
        }
        else
            return this.dbLogs;
    }
    // function to update or just provide credentials to Amadeus APIs
    verifyDbCredentials(user_key, user_secret) {
        if (user_key && user_secret) {
            this.dbCredentials = {
                key: user_key,
                secret: user_secret
            };
            return this.dbCredentials;
        }
        else
            return this.dbCredentials;
    }
    // function to generate HTTP request options
    getHttpOptions(setType) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append("Authorization", "Basic " + btoa(`${this.dbCredentials.key}:${this.dbCredentials.secret}`));
        // required not to show in-browser login window in case of failed auth
        headers = headers.append("No-Auth-Challenge", "true");
        if (setType)
            headers = headers.append("Content-Type", "application/json");
        return {
            headers: headers
        };
    }
    // function to load logs from database
    loadData() {
        return this.http.get('/database/getData', this.getHttpOptions());
    }
    // function to submit log to database
    submitData(data) {
        return this.http.post('/database/postData', { timestamp: moment__WEBPACK_IMPORTED_MODULE_2___default()().format(), query: data }, this.getHttpOptions(true));
    }
    // function to clear all data in db
    removeData() {
        return this.http.get('/database/removeData', this.getHttpOptions());
    }
}
DatabaseService.ɵfac = function DatabaseService_Factory(t) { return new (t || DatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DatabaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DatabaseService, factory: DatabaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatabaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/error-handler.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/error-handler.service.ts ***!
  \***************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");



class ErrorHandlerService {
    constructor(alerts) {
        this.alerts = alerts;
    }
    handleError(error) {
        // logging error and showing on-screen alert   
        console.error('An error has occured', error);
        this.alerts.showAlert('An error has occured. Check console for details.');
    }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andriivasylchenko/dev/workspaces/z/tiny-airline/airTravel/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map