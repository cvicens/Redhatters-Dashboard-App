webpackJsonp([1,4],{

/***/ 271:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 271;


/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(289);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Redhatters Dashboard';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(396),
        styles: [__webpack_require__(389)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_order_create_order_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_fh_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_chart_chart_component__ = __webpack_require__(284);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__create_order_create_order_component__["a" /* CreateOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_chart_chart_component__["a" /* ChartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'orders',
                    component: __WEBPACK_IMPORTED_MODULE_8__create_order_create_order_component__["a" /* CreateOrderComponent */]
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__service_fh_service__["a" /* FHService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_fh_service__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var cities = ['Madrid', 'Lisbon', 'Paris', 'Munich'];
var ChartComponent = (function () {
    // constructor
    function ChartComponent(fhService, config) {
        var _this = this;
        this.fhService = fhService;
        this.events = [];
        // Quiz results
        this.results = [];
        // Barchart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : cities.filter(function (v) { return v.toLowerCase().startsWith(term.toLocaleLowerCase()); }).splice(0, 10); });
        };
        this.newCityValue = function ($event) {
            console.log('newCityValue', $event);
            if (!_this.city || _this.city.length <= 0) {
                _this.date = null;
            }
        };
        this.selectEvent = function (eventIdx) {
            console.log('selectEvent', eventIdx);
            if (!Array.isArray(_this.events) || eventIdx < 0 || eventIdx >= _this.events.length) {
                console.error('selectEvent assertion error! eventIdx: ', eventIdx, 'this.events', _this.events);
            }
            _this.event = _this.events[eventIdx];
            _this.searchAnswersByEventIdAndQuizId(_this.event.id, _this.event.quizId);
        };
        this.searchEventsEnabled = function () {
            return _this.city && _this.city.length > 0 && _this.date;
        };
        this.formatDateForSearch = function (date) {
            if (date && date.year && date.month && date.day) {
                return date.year + '-' + ('0' + (date.month)).slice(-2) + '-' + ('0' + date.day).slice(-2);
            }
            throw Error('ERROR when formatting date for search');
        };
        this.searchEvents = function () {
            if (_this.city && _this.date) {
                _this.fhService.getEventsAtCityOnDate(_this.city, _this.formatDateForSearch(_this.date))
                    .then(function (events) {
                    _this.events = events;
                    if (_this.events.length === 1) {
                        _this.event = _this.events[0];
                        _this.searchAnswersByEventIdAndQuizId(_this.event.id, _this.event.quizId);
                    }
                })
                    .catch(function (err) {
                    console.error('Error in searchEvents', err);
                });
            }
        };
        this.searchAnswersByEventIdAndQuizId = function (eventId, quizId) {
            if (_this.city && _this.date) {
                _this.fhService.searchAnswersByEventIdAndQuizId(eventId, quizId)
                    .then(function (results) {
                    _this.results = results;
                    _this.generateChartData(_this.results);
                })
                    .catch(function (err) {
                    console.error('Error in searchAnswersByEventIdAndQuizId', err);
                });
            }
        };
        this.generateChartData = function (results) {
            console.log(_this.barChartLabels);
            console.log(_this.barChartData);
            // Labels come from the questions... so far just the number of questions
            var uniqueResults = _this.results
                .map(function (elem, i, array) {
                return elem.result;
            })
                .filter(function (elem, i, array) {
                return array.indexOf(elem) === i;
            });
            var questions = _this.results
                .map(function (elem, i, array) {
                return elem.question;
            })
                .filter(function (elem, i, array) {
                return array.indexOf(elem) === i;
            });
            _this.barChartLabels = questions.map(function (elem) { return 'Question ' + (elem + 1); });
            console.log(_this.barChartLabels);
            var resultsByQuestion = [];
            questions.forEach(function (currentQuestion, index) {
                var resultByQuestion = _this.results
                    .filter(function (elem, i, array) {
                    return elem.question === currentQuestion;
                })
                    .reduce(function (accumulator, elem) {
                    accumulator[elem.result] = (accumulator[elem.result] || 0) + 1;
                    return accumulator;
                }, {});
                resultsByQuestion.push(resultByQuestion);
            });
            console.log(resultsByQuestion);
            var totals = resultsByQuestion.map(function (result) {
                var data = Object.keys(result).map(function (key, i, array) {
                    return result[key];
                }).reduce(function (accumulator, elem) {
                    return accumulator + elem;
                }, 0);
                return data;
            });
            console.log('totals', totals);
            var resultsByUniqueResult = [];
            uniqueResults.forEach(function (currentUniqueResult, index) {
                var _resultsByUniqueResult = _this.results
                    .filter(function (elem, i, array) {
                    return elem.result === currentUniqueResult;
                })
                    .reduce(function (accumulator, elem) {
                    accumulator.data[elem.question] = (accumulator.data[elem.question] || 0) + 1;
                    return accumulator;
                }, { label: currentUniqueResult, data: {} });
                resultsByUniqueResult.push(_resultsByUniqueResult);
            });
            console.log(resultsByUniqueResult);
            _this.barChartData = resultsByUniqueResult.map(function (result) {
                var data = Object.keys(result.data).map(function (key, i, array) {
                    return result.data[key] / totals[i] * 100;
                });
                return { label: result.label, data: data };
            });
            console.log(_this.barChartData);
        };
        // customize default values of typeaheads used by this component tree
        config.showHint = true;
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent.prototype.getFormattedDate = function (date) {
        return date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2);
    };
    // events
    ChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chart',
        template: __webpack_require__(397),
        styles: [__webpack_require__(390)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbTypeaheadConfig */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__service_fh_service__["a" /* FHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_fh_service__["a" /* FHService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbTypeaheadConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbTypeaheadConfig */]) === "function" && _b || Object])
], ChartComponent);

var _a, _b;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_order__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_form_order__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_assignee__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_fh_service__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
var CreateOrderComponent = (function () {
    function CreateOrderComponent(fhService) {
        this.fhService = fhService;
        this.assignees = [new __WEBPACK_IMPORTED_MODULE_3__model_assignee__["a" /* Assignee */]('rJeXyfdrH', 'Daisy'), new __WEBPACK_IMPORTED_MODULE_3__model_assignee__["a" /* Assignee */]('rkX1fdSH', 'Trever')];
        this.title = 'EPOD TEST';
        this.assigneeId = this.assignees[0].id;
        //model = new FormOrder ('12', this.title, this.assignees[0]);
        this.model = new __WEBPACK_IMPORTED_MODULE_2__model_form_order__["a" /* FormOrder */]('12', this.title, null);
        this.message = 'No messages so far';
        this.pushedOrderId = null;
        this.submitted = false;
    }
    CreateOrderComponent.prototype.ngOnInit = function () {
    };
    CreateOrderComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        var generatedId = __WEBPACK_IMPORTED_MODULE_1__model_order__["a" /* Order */].makeid(9);
        var generatedCorrelationId = __WEBPACK_IMPORTED_MODULE_1__model_order__["a" /* Order */].makeid(9);
        var order = __WEBPACK_IMPORTED_MODULE_1__model_order__["a" /* Order */].generateOrder(generatedId, generatedCorrelationId, this.model.title, this.model.assignee.id);
        console.log('New order submitted!', JSON.stringify(order));
        this.fhService.postOrder('workorders', 'POST', order)
            .then(function (result) {
            console.log('result', result);
            _this.message = capitalizeFirstLetter(result.msg) + ' with id: ' + result.id;
            _this.pushedOrderId = result.id;
        })
            .catch(function (err) {
            console.log(err);
            _this.message = err;
        });
    };
    Object.defineProperty(CreateOrderComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return CreateOrderComponent;
}());
CreateOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-order',
        template: __webpack_require__(398),
        styles: [__webpack_require__(391)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_fh_service__["a" /* FHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_fh_service__["a" /* FHService */]) === "function" && _a || Object])
], CreateOrderComponent);

var _a;
//# sourceMappingURL=create-order.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Assignee; });
var Assignee = (function () {
    function Assignee(id, name) {
        this.id = id;
        this.name = name;
    }
    return Assignee;
}());

//# sourceMappingURL=assignee.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormOrder; });
var FormOrder = (function () {
    function FormOrder(id, title, assignee) {
        this.id = id;
        this.title = title;
        this.assignee = assignee;
    }
    return FormOrder;
}());

//# sourceMappingURL=form-order.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order(id, title, correlationId, workflowId, assignee, vehicle, type, // has to be Order
        subtype, // has to be EPOD
        status, startTimestamp, //2016-08-22T20:00:00Z
        address, location, completedAction, ticketDate, ticketTime, ticketNumber, addressDetail, addressStreet, addressPostalCode, addressCity, instructions, customerName, account, po, contract, callOff, summary, originName, originPhone, product, thisLoad, pourSoFar, totalOrdered, volumeUnit, brand, works, name, power, alterEgo) {
        this.id = id;
        this.title = title;
        this.correlationId = correlationId;
        this.workflowId = workflowId;
        this.assignee = assignee;
        this.vehicle = vehicle;
        this.type = type;
        this.subtype = subtype;
        this.status = status;
        this.startTimestamp = startTimestamp;
        this.address = address;
        this.location = location;
        this.completedAction = completedAction;
        this.ticketDate = ticketDate;
        this.ticketTime = ticketTime;
        this.ticketNumber = ticketNumber;
        this.addressDetail = addressDetail;
        this.addressStreet = addressStreet;
        this.addressPostalCode = addressPostalCode;
        this.addressCity = addressCity;
        this.instructions = instructions;
        this.customerName = customerName;
        this.account = account;
        this.po = po;
        this.contract = contract;
        this.callOff = callOff;
        this.summary = summary;
        this.originName = originName;
        this.originPhone = originPhone;
        this.product = product;
        this.thisLoad = thisLoad;
        this.pourSoFar = pourSoFar;
        this.totalOrdered = totalOrdered;
        this.volumeUnit = volumeUnit;
        this.brand = brand;
        this.works = works;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    Order.makeid = function (n) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < n; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    Order.getFormattedTime = function (date) {
        return ('0' + date.getHours()).slice(-2) + ':' + ('0' + (date.getMinutes() + 1)).slice(-2);
    };
    Order.getFormattedDate = function (date) {
        return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
    };
    /**
     * generateOrder
     */
    Order.generateOrder = function (generatedId, correlationId, title, assignee) {
        var now = new Date();
        var workflowId = "i4Hfpab2R";
        var vehicle = "4156";
        var type = "Job Order";
        var subtype = "EPOD";
        var status = "New";
        var startTimestamp = "2016-08-22T20:00:00Z";
        var address = "16-17 Avenue Elmers, KT6 4SE, Surbiton";
        var location = [51.3960439, -0.3025582];
        var completedAction = 'START';
        var ticketDate = Order.getFormattedDate(now);
        var ticketTime = Order.getFormattedTime(now);
        var ticketNumber = '12345678';
        var addressDetail = 'C/O Bespoke';
        var addressStreet = '16-17 Avenue Elmers';
        var addressPostalCode = 'KT6 4SE';
        var addressCity = 'Surbiton';
        var instructions = 'HOT WATER Y/N HOT WATER ADDED AT CUSTOMER REQUEST';
        var customerName = 'Reynolds Groundwork Services Ltd.';
        var account = '3283448';
        var po = 'P9999';
        var contract = '4567887';
        var callOff = '2144333';
        var summary = 'Normal EPOD';
        var originName = 'Tolworth RMX Prodn';
        var originPhone = '07111222333';
        var product = 'GEN1 20mm CIIIA S1';
        var thisLoad = 8.0;
        var pourSoFar = 0.0;
        var totalOrdered = 8.0;
        var volumeUnit = 'm3';
        var brand = 'AI';
        var works = 'TOL';
        return new Order(generatedId, title, correlationId, workflowId, assignee, vehicle, type, subtype, status, startTimestamp, address, location, completedAction, ticketDate, ticketTime, ticketNumber, addressDetail, addressStreet, addressPostalCode, addressCity, instructions, customerName, account, po, contract, callOff, summary, originName, originPhone, product, thisLoad, pourSoFar, totalOrdered, volumeUnit, brand, works, '', '', '');
    };
    return Order;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 146,
	"./af.js": 146,
	"./ar": 153,
	"./ar-dz": 147,
	"./ar-dz.js": 147,
	"./ar-kw": 148,
	"./ar-kw.js": 148,
	"./ar-ly": 149,
	"./ar-ly.js": 149,
	"./ar-ma": 150,
	"./ar-ma.js": 150,
	"./ar-sa": 151,
	"./ar-sa.js": 151,
	"./ar-tn": 152,
	"./ar-tn.js": 152,
	"./ar.js": 153,
	"./az": 154,
	"./az.js": 154,
	"./be": 155,
	"./be.js": 155,
	"./bg": 156,
	"./bg.js": 156,
	"./bn": 157,
	"./bn.js": 157,
	"./bo": 158,
	"./bo.js": 158,
	"./br": 159,
	"./br.js": 159,
	"./bs": 160,
	"./bs.js": 160,
	"./ca": 161,
	"./ca.js": 161,
	"./cs": 162,
	"./cs.js": 162,
	"./cv": 163,
	"./cv.js": 163,
	"./cy": 164,
	"./cy.js": 164,
	"./da": 165,
	"./da.js": 165,
	"./de": 168,
	"./de-at": 166,
	"./de-at.js": 166,
	"./de-ch": 167,
	"./de-ch.js": 167,
	"./de.js": 168,
	"./dv": 169,
	"./dv.js": 169,
	"./el": 170,
	"./el.js": 170,
	"./en-au": 171,
	"./en-au.js": 171,
	"./en-ca": 172,
	"./en-ca.js": 172,
	"./en-gb": 173,
	"./en-gb.js": 173,
	"./en-ie": 174,
	"./en-ie.js": 174,
	"./en-nz": 175,
	"./en-nz.js": 175,
	"./eo": 176,
	"./eo.js": 176,
	"./es": 178,
	"./es-do": 177,
	"./es-do.js": 177,
	"./es.js": 178,
	"./et": 179,
	"./et.js": 179,
	"./eu": 180,
	"./eu.js": 180,
	"./fa": 181,
	"./fa.js": 181,
	"./fi": 182,
	"./fi.js": 182,
	"./fo": 183,
	"./fo.js": 183,
	"./fr": 186,
	"./fr-ca": 184,
	"./fr-ca.js": 184,
	"./fr-ch": 185,
	"./fr-ch.js": 185,
	"./fr.js": 186,
	"./fy": 187,
	"./fy.js": 187,
	"./gd": 188,
	"./gd.js": 188,
	"./gl": 189,
	"./gl.js": 189,
	"./gom-latn": 190,
	"./gom-latn.js": 190,
	"./he": 191,
	"./he.js": 191,
	"./hi": 192,
	"./hi.js": 192,
	"./hr": 193,
	"./hr.js": 193,
	"./hu": 194,
	"./hu.js": 194,
	"./hy-am": 195,
	"./hy-am.js": 195,
	"./id": 196,
	"./id.js": 196,
	"./is": 197,
	"./is.js": 197,
	"./it": 198,
	"./it.js": 198,
	"./ja": 199,
	"./ja.js": 199,
	"./jv": 200,
	"./jv.js": 200,
	"./ka": 201,
	"./ka.js": 201,
	"./kk": 202,
	"./kk.js": 202,
	"./km": 203,
	"./km.js": 203,
	"./kn": 204,
	"./kn.js": 204,
	"./ko": 205,
	"./ko.js": 205,
	"./ky": 206,
	"./ky.js": 206,
	"./lb": 207,
	"./lb.js": 207,
	"./lo": 208,
	"./lo.js": 208,
	"./lt": 209,
	"./lt.js": 209,
	"./lv": 210,
	"./lv.js": 210,
	"./me": 211,
	"./me.js": 211,
	"./mi": 212,
	"./mi.js": 212,
	"./mk": 213,
	"./mk.js": 213,
	"./ml": 214,
	"./ml.js": 214,
	"./mr": 215,
	"./mr.js": 215,
	"./ms": 217,
	"./ms-my": 216,
	"./ms-my.js": 216,
	"./ms.js": 217,
	"./my": 218,
	"./my.js": 218,
	"./nb": 219,
	"./nb.js": 219,
	"./ne": 220,
	"./ne.js": 220,
	"./nl": 222,
	"./nl-be": 221,
	"./nl-be.js": 221,
	"./nl.js": 222,
	"./nn": 223,
	"./nn.js": 223,
	"./pa-in": 224,
	"./pa-in.js": 224,
	"./pl": 225,
	"./pl.js": 225,
	"./pt": 227,
	"./pt-br": 226,
	"./pt-br.js": 226,
	"./pt.js": 227,
	"./ro": 228,
	"./ro.js": 228,
	"./ru": 229,
	"./ru.js": 229,
	"./sd": 230,
	"./sd.js": 230,
	"./se": 231,
	"./se.js": 231,
	"./si": 232,
	"./si.js": 232,
	"./sk": 233,
	"./sk.js": 233,
	"./sl": 234,
	"./sl.js": 234,
	"./sq": 235,
	"./sq.js": 235,
	"./sr": 237,
	"./sr-cyrl": 236,
	"./sr-cyrl.js": 236,
	"./sr.js": 237,
	"./ss": 238,
	"./ss.js": 238,
	"./sv": 239,
	"./sv.js": 239,
	"./sw": 240,
	"./sw.js": 240,
	"./ta": 241,
	"./ta.js": 241,
	"./te": 242,
	"./te.js": 242,
	"./tet": 243,
	"./tet.js": 243,
	"./th": 244,
	"./th.js": 244,
	"./tl-ph": 245,
	"./tl-ph.js": 245,
	"./tlh": 246,
	"./tlh.js": 246,
	"./tr": 247,
	"./tr.js": 247,
	"./tzl": 248,
	"./tzl.js": 248,
	"./tzm": 250,
	"./tzm-latn": 249,
	"./tzm-latn.js": 249,
	"./tzm.js": 250,
	"./uk": 251,
	"./uk.js": 251,
	"./ur": 252,
	"./ur.js": 252,
	"./uz": 254,
	"./uz-latn": 253,
	"./uz-latn.js": 253,
	"./uz.js": 254,
	"./vi": 255,
	"./vi.js": 255,
	"./x-pseudo": 256,
	"./x-pseudo.js": 256,
	"./yo": 257,
	"./yo.js": 257,
	"./zh-cn": 258,
	"./zh-cn.js": 258,
	"./zh-hk": 259,
	"./zh-hk.js": 259,
	"./zh-tw": 260,
	"./zh-tw.js": 260
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 393;


/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"page-header\">\n  <h1>{{title}}</h1>\n</div>\n</div>\n\n<app-chart></app-chart>\n<!--<app-create-order></app-create-order>-->\n"

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"input-group\">\n        <!--<label for=\"typeahead-config\">City</label>-->\n        <input placeholder=\"City\" id=\"typeahead-config\" type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" [ngbTypeahead]=\"search\" (ngModelChange)=\"newCityValue($event)\" />\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"input-group\">\n        <input  class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                name=\"dp\" [(ngModel)]=\"date\" ngbDatepicker #d=\"ngbDatepicker\">\n        <div class=\"input-group-addon\" (click)=\"city ? d.toggle() : ''\">\n          <img src=\"assets/images/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col\">\n      <button [disabled]=\"!searchEventsEnabled()\" class=\"btn btn-primary\" type=\"submit\" (click)=\"searchEvents()\" >Search</button>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\" *ngIf=\"barChartData && barChartLabels\">\n      <div style=\"display: block\">\n        <canvas baseChart\n                [datasets]=\"barChartData\"\n                [labels]=\"barChartLabels\"\n                [options]=\"barChartOptions\"\n                [legend]=\"barChartLegend\"\n                [chartType]=\"barChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n      <!--<button (click)=\"randomize()\">Update</button>-->\n    </div>\n  </div>\n\n  \n</div>\n\n"

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>New Order Form</h3>\n    <form (ngSubmit)=\"onSubmit()\"  #orderForm=\"ngForm\"> \n\n      <div class=\"form-group\">\n        <label for=\"name\">Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" required [(ngModel)]=\"model.title\" name=\"title\" #title=\"ngModel\">\n        <div [hidden]=\"title.valid || title.pristine\"\n             class=\"alert alert-danger\">\n          Title is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"assignee\">Assignee</label>\n        <select class=\"form-control\" id=\"assignee\" required \n                [(ngModel)]=\"model.assignee\" name=\"assignee\" #assignee=\"ngModel\">\n          <option *ngFor=\"let assignee of assignees\" [ngValue]=\"assignee\">{{assignee.name}}</option>\n        </select>\n        <div [hidden]=\"assignee.valid || assignee.pristine\" class=\"alert alert-danger\">\n          Assignee is required\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!orderForm.form.valid\">Submit</button>\n\n      <hr /> \n\n      <div class=\"alert alert-info\" role=\"alert\">\n        <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Message:</span>\n        {{message}}\n      </div>\n    </form>\n    \n</div>\n"

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(272);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fh_js_sdk__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fh_js_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fh_js_sdk__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FHService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FHService = (function () {
    function FHService() {
        this.sayHello = function (endpoint, method, name) {
            return new Promise(function (resolve, reject) {
                var params = {
                    path: endpoint,
                    method: method,
                    contentType: 'application/json',
                    data: { hello: name },
                    timeout: 15000
                };
                __WEBPACK_IMPORTED_MODULE_1_fh_js_sdk__["cloud"](params, function (data) {
                    resolve(data);
                }, function (msg, err) {
                    // An error occurred during the cloud call. Alert some debugging information
                    console.log('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
                    reject({ msg: msg, err: err });
                });
            });
        };
        this.postOrder = function (endpoint, method, order) {
            return new Promise(function (resolve, reject) {
                var params = {
                    path: endpoint,
                    method: method,
                    contentType: 'application/json',
                    data: order,
                    timeout: 15000
                };
                __WEBPACK_IMPORTED_MODULE_1_fh_js_sdk__["cloud"](params, function (data) {
                    resolve(data);
                }, function (msg, err) {
                    // An error occurred during the cloud call. Alert some debugging information
                    console.log('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
                    reject({ msg: msg, err: err });
                });
            });
        };
        this.getEventsAtLocation = function (country, city) {
            return new Promise(function (resolve, reject) {
                if (!country || !city) {
                    reject({ err: 'Not enough or good parameters country: ' + country + ' city: ' + city });
                }
                var filter = {
                    eq: {
                        country: country,
                        city: city
                    }
                };
                var params = {
                    path: 'events',
                    method: 'POST',
                    contentType: 'application/json',
                    data: filter,
                    timeout: 15000
                };
                __WEBPACK_IMPORTED_MODULE_1_fh_js_sdk__["cloud"](params, function (data) {
                    resolve(data);
                }, function (msg, err) {
                    // An error occurred during the cloud call. Alert some debugging information
                    console.log('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
                    reject({ msg: msg, err: err });
                });
            });
        };
        this.getEventsAtCityOnDate = function (city, date) {
            return new Promise(function (resolve, reject) {
                if (!city || city.length <= 0) {
                    reject({ err: 'Not enough or good parameters city: ' + city });
                }
                var filter = {
                    eq: {
                        city: city.toUpperCase(),
                        date: date
                    }
                };
                var params = {
                    path: 'events',
                    method: 'POST',
                    contentType: 'application/json',
                    data: filter,
                    timeout: 15000
                };
                __WEBPACK_IMPORTED_MODULE_1_fh_js_sdk__["cloud"](params, function (data) {
                    resolve(data);
                }, function (msg, err) {
                    // An error occurred during the cloud call. Alert some debugging information
                    console.log('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
                    reject({ msg: msg, err: err });
                });
            });
        };
        this.searchAnswersByEventIdAndQuizId = function (eventId, quizId) {
            return new Promise(function (resolve, reject) {
                if (!eventId || eventId.length <= 0 ||
                    !quizId || quizId.length <= 0) {
                    reject({ err: 'Not enough or good parameters eventId: ' + eventId + ' quizId: ' + quizId });
                }
                var filter = {
                    eq: {
                        eventId: eventId,
                        quizId: quizId
                    }
                };
                var params = {
                    path: 'answers/search',
                    method: 'POST',
                    contentType: 'application/json',
                    data: filter,
                    timeout: 15000
                };
                __WEBPACK_IMPORTED_MODULE_1_fh_js_sdk__["cloud"](params, function (data) {
                    resolve(data);
                }, function (msg, err) {
                    // An error occurred during the cloud call. Alert some debugging information
                    console.log('Cloud call failed with error message:' + msg + '. Error properties:' + JSON.stringify(err));
                    reject({ msg: msg, err: err });
                });
            });
        };
    }
    return FHService;
}());
FHService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], FHService);

//# sourceMappingURL=fh.service.js.map

/***/ })

},[443]);
//# sourceMappingURL=main.bundle.js.map