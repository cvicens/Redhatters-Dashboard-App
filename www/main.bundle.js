webpackJsonp([1,4],{

/***/ 327:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 327;


/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(345);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
        template: __webpack_require__(452),
        styles: [__webpack_require__(445)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_order_create_order_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_fh_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_chart_chart_component__ = __webpack_require__(340);
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

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_fh_service__ = __webpack_require__(82);
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
var departments = ['Sales', 'Presales', 'Marketing', 'HR', 'Services'];
var depAbrv = {
    Sales: 'S',
    Presales: 'PS',
    Marketing: 'MK',
    HR: 'HR',
    Services: 'SR'
};
var resultAbrv = {
    CORRECT: 'OK',
    WRONG: 'KO'
};
var INITIAL_DATA_SETS = [
    { stack: 'CORRECT', data: [0, 0, 0, 0, 0], label: 'S-OK' },
    { stack: 'CORRECT', data: [0, 0, 0, 0, 0], label: 'PS-OK' },
    { stack: 'CORRECT', data: [0, 0, 0, 0, 0], label: 'MK-OK' },
    { stack: 'CORRECT', data: [0, 0, 0, 0, 0], label: 'HR-OK' },
    { stack: 'CORRECT', data: [0, 0, 0, 0, 0], label: 'SR-OK' },
    { stack: 'WRONG', data: [0, 0, 0, 0, 0], label: 'S-KO' },
    { stack: 'WRONG', data: [0, 0, 0, 0, 0], label: 'PS-KO' },
    { stack: 'WRONG', data: [0, 0, 0, 0, 0], label: 'MK-KO' },
    { stack: 'WRONG', data: [0, 0, 0, 0, 0], label: 'HR-KO' },
    { stack: 'WRONG', data: [0, 0, 0, 0, 0], label: 'SR-KO' }
];
var INITIAL_LABELS = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'];
var ChartComponent = (function () {
    //public barChartLabels: string[];
    //public barChartData: any[];
    // constructor
    function ChartComponent(fhService, config) {
        var _this = this;
        this.fhService = fhService;
        // Timer to trigger search automatically
        this.ticks = 0;
        this.events = [];
        // Quiz results
        this.answers = [];
        // Barchart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                xAxes: [{
                        stacked: true
                    }],
                yAxes: [{
                        stacked: true,
                        ticks: { beginAtZero: true }
                    }]
            }
        };
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartLabels = INITIAL_LABELS;
        this.barChartData = INITIAL_DATA_SETS;
        this.barChartColors = [
            { backgroundColor: 'rgba(196, 30, 61,0.6)', borderColor: 'rgba(196, 30, 61,1)' },
            { backgroundColor: 'rgba(164, 14, 76,0.6)', borderColor: 'rgba(164, 14, 76,1)' },
            { backgroundColor: 'rgba(137,  2, 62,0.6)', borderColor: 'rgba(137,  2, 62,1)' },
            { backgroundColor: 'rgba(234, 99,140,0.6)', borderColor: 'rgba(234, 99,140,1)' },
            { backgroundColor: 'rgba(245, 60,160,0.6)', borderColor: 'rgba(245, 60,160,1)' },
            { backgroundColor: 'rgba( 50,151, 73,0.6)', borderColor: 'rgba( 50,151, 73,1)' },
            { backgroundColor: 'rgba(161,195, 48,0.6)', borderColor: 'rgba(161,195, 48,1)' },
            { backgroundColor: 'rgba(202,213,147,0.6)', borderColor: 'rgba(202,213,147,1)' },
            { backgroundColor: 'rgba( 19,117, 71,0.6)', borderColor: 'rgba( 19,117, 71,1)' },
            { backgroundColor: 'rgba( 10,180, 50,0.6)', borderColor: 'rgba( 10,180, 50,1)' },
        ];
        this.searchCity = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : cities.filter(function (v) { return v.toLowerCase().startsWith(term.toLocaleLowerCase()); }).splice(0, 10); });
        };
        this.searchDepartment = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : departments.filter(function (v) { return v.toLowerCase().startsWith(term.toLocaleLowerCase()); }).splice(0, 10); });
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
                    _this.answers = results;
                    if (Array.isArray(_this.answers) && _this.answers.length > 0) {
                        _this.generateChartDataAllDepartments(_this.answers);
                    }
                    else {
                        _this.barChartData = INITIAL_DATA_SETS;
                        _this.topDepartments = [];
                        _this.topUsers = [];
                    }
                })
                    .catch(function (err) {
                    console.error('Error in searchAnswersByEventIdAndQuizId', err);
                });
            }
        };
        this.getUniqueQuestionsFromReceivedAnswers = function () {
            return _this.answers
                .map(function (elem, i, array) {
                return elem.question;
            })
                .filter(function (elem, i, array) {
                return array.indexOf(elem) === i;
            }).sort(); // We need to sort.. otherwise result will fall in a different question!
        };
        this.getUniqueResultsFromReceivedAnswers = function () {
            return _this.answers
                .map(function (elem, i, array) {
                return elem.result;
            })
                .filter(function (elem, i, array) {
                return array.indexOf(elem) === i;
            });
        };
        this.getLabel = function (department, result) {
            return depAbrv[department] + '-' + resultAbrv[result];
        };
        this.getTopUsers = function () {
            var topUsersObject = _this.answers
                .filter(function (elem, i, array) {
                return elem.result === 'CORRECT';
            })
                .map(function (elem, i, array) {
                return { username: elem.username, question: elem.question };
            })
                .reduce(function (accumulator, elem) {
                accumulator[elem.username] = (accumulator[elem.username] || 0) + 1;
                return accumulator;
            }, {});
            return Object.keys(topUsersObject).map(function (key, i, array) {
                return { username: key, score: topUsersObject[key] };
            })
                .sort(function (a, b) {
                return b.score - a.score;
            })
                .filter(function (elem, i) {
                return i < 5;
            });
        };
        this.getTopDepartments = function () {
            var topDeparmentsObject = _this.answers
                .filter(function (elem, i, array) {
                return elem.result === 'CORRECT';
            })
                .map(function (elem, i, array) {
                return { department: elem.department, question: elem.question };
            })
                .reduce(function (accumulator, elem) {
                accumulator[elem.department] = (accumulator[elem.department] || 0) + 1;
                return accumulator;
            }, {});
            return Object.keys(topDeparmentsObject).map(function (key, i, array) {
                return { name: key, score: topDeparmentsObject[key] };
            })
                .sort(function (a, b) {
                return b.score - a.score;
            })
                .filter(function (elem, i) {
                return i < 5;
            });
        };
        this.generateChartDataAllDepartments = function (results) {
            console.log(_this.barChartLabels);
            console.log(_this.barChartData);
            _this.topUsers = _this.getTopUsers();
            console.log('topUsers', _this.topUsers);
            _this.topDepartments = _this.getTopDepartments();
            console.log('topDepartments', _this.topDepartments);
            // Labels X-axis values come from the questions... so far just the number of questions
            var uniqueQuestions = _this.getUniqueQuestionsFromReceivedAnswers();
            console.log('uniqueQuestions', uniqueQuestions);
            // PROBLEMS GENERATING LABELS DYNAMICALLY
            // Labels are the literal 'Question ' [plus the question (which is a zero index of the array of questions in the quiz) + 1]
            _this.barChartLabels = uniqueQuestions.map(function (elem) { return 'Question ' + (elem + 1); });
            //console.log(this.barChartLabels);
            // Series of data are based on the result (CORRECT, WRONG, ...)
            var uniqueResults = _this.getUniqueResultsFromReceivedAnswers();
            console.log('uniqueResults', uniqueResults);
            // For each question (X-axis value)
            var answersByQuestions = [];
            uniqueQuestions.forEach(function (currentQuestion, index) {
                // Let's accumulate values per result (CORRECT, WRONG)
                var resultsByCurrentQuestion = _this.answers
                    .filter(function (elem, i, array) {
                    return _this.department ? elem.department.toLowerCase() === _this.department.toLowerCase() : true;
                })
                    .filter(function (elem, i, array) {
                    return elem.question === currentQuestion;
                })
                    .reduce(function (accumulator, elem) {
                    accumulator[elem.result] = (accumulator[elem.result] || 0) + 1;
                    return accumulator;
                }, {});
                answersByQuestions.push(resultsByCurrentQuestion);
            });
            console.log(answersByQuestions);
            // Totals
            var totals = answersByQuestions.map(function (result) {
                var data = Object.keys(result).map(function (key, i, array) {
                    return result[key];
                }).reduce(function (accumulator, elem) {
                    return accumulator + elem;
                }, 0);
                return data;
            });
            console.log('totals', totals);
            // For each unique result (CORRECT, WRONG)
            var _departments = _this.department ? [_this.department] : departments;
            var answersByUniqueResult = [];
            uniqueResults.forEach(function (currentUniqueResult, index) {
                _departments.forEach(function (currentDepartment) {
                    // Les's accumulate answers per question for current result (CORRECT, WRONG)
                    var answersByCurrentUniqueResult = _this.answers
                        .filter(function (elem, i, array) {
                        return elem.department.toLowerCase() === currentDepartment.toLowerCase(); // Filter by department (SALES, ...)
                    })
                        .filter(function (elem, i, array) {
                        return elem.result === currentUniqueResult;
                    })
                        .reduce(function (accumulator, elem) {
                        accumulator.data[elem.question] = (accumulator.data[elem.question] || 0) + 1;
                        return accumulator;
                    }, { stack: currentUniqueResult, label: _this.getLabel(currentDepartment, currentUniqueResult), data: {} });
                    answersByUniqueResult.push(answersByCurrentUniqueResult);
                });
            });
            console.log('Antes de barChartData', answersByUniqueResult);
            // barChartData => array of series, in our case, 1 serie per unique result => label CORRECT, label WRONG
            _this.barChartData = answersByUniqueResult.map(function (result) {
                var data = uniqueQuestions.map(function (currentQuestion, index) {
                    //return result.data[currentQuestion] / totals[index] * 100 || 0;
                    return result.data[currentQuestion] || 0;
                });
                return { stack: result.stack, label: result.label, data: data };
            });
            console.log('barChartData', _this.barChartData);
        };
        // customize default values of typeaheads used by this component tree
        config.showHint = true;
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(2000, 5000);
        // subscribing to a observable returns a subscription object
        this.sub = this.timer.subscribe(function (t) { return _this.tickerFunc(t); });
    };
    ChartComponent.prototype.tickerFunc = function (tick) {
        this.ticks = tick;
        console.log('tickerFunc', this.ticks);
        if (this.searchEventsEnabled()) {
            this.searchEvents();
        }
    };
    ChartComponent.prototype.ngOnDestroy = function () {
        console.log('Destroy timer');
        // unsubscribe here
        this.sub.unsubscribe();
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
        template: __webpack_require__(453),
        styles: [__webpack_require__(446)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbTypeaheadConfig */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__service_fh_service__["a" /* FHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_fh_service__["a" /* FHService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbTypeaheadConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbTypeaheadConfig */]) === "function" && _b || Object])
], ChartComponent);

var _a, _b;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_order__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_form_order__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_assignee__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_fh_service__ = __webpack_require__(82);
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
        template: __webpack_require__(454),
        styles: [__webpack_require__(447)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_fh_service__["a" /* FHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_fh_service__["a" /* FHService */]) === "function" && _a || Object])
], CreateOrderComponent);

var _a;
//# sourceMappingURL=create-order.component.js.map

/***/ }),

/***/ 342:
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

/***/ 343:
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

/***/ 344:
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

/***/ 345:
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

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)();
// imports


// module
exports.push([module.i, ".theme {\n  /* body styles here */\n  \n\n}\n\n:host {\n    \n    color: #333333 ;\n\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)();
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 168,
	"./af.js": 168,
	"./ar": 175,
	"./ar-dz": 169,
	"./ar-dz.js": 169,
	"./ar-kw": 170,
	"./ar-kw.js": 170,
	"./ar-ly": 171,
	"./ar-ly.js": 171,
	"./ar-ma": 172,
	"./ar-ma.js": 172,
	"./ar-sa": 173,
	"./ar-sa.js": 173,
	"./ar-tn": 174,
	"./ar-tn.js": 174,
	"./ar.js": 175,
	"./az": 176,
	"./az.js": 176,
	"./be": 177,
	"./be.js": 177,
	"./bg": 178,
	"./bg.js": 178,
	"./bn": 179,
	"./bn.js": 179,
	"./bo": 180,
	"./bo.js": 180,
	"./br": 181,
	"./br.js": 181,
	"./bs": 182,
	"./bs.js": 182,
	"./ca": 183,
	"./ca.js": 183,
	"./cs": 184,
	"./cs.js": 184,
	"./cv": 185,
	"./cv.js": 185,
	"./cy": 186,
	"./cy.js": 186,
	"./da": 187,
	"./da.js": 187,
	"./de": 190,
	"./de-at": 188,
	"./de-at.js": 188,
	"./de-ch": 189,
	"./de-ch.js": 189,
	"./de.js": 190,
	"./dv": 191,
	"./dv.js": 191,
	"./el": 192,
	"./el.js": 192,
	"./en-au": 193,
	"./en-au.js": 193,
	"./en-ca": 194,
	"./en-ca.js": 194,
	"./en-gb": 195,
	"./en-gb.js": 195,
	"./en-ie": 196,
	"./en-ie.js": 196,
	"./en-nz": 197,
	"./en-nz.js": 197,
	"./eo": 198,
	"./eo.js": 198,
	"./es": 200,
	"./es-do": 199,
	"./es-do.js": 199,
	"./es.js": 200,
	"./et": 201,
	"./et.js": 201,
	"./eu": 202,
	"./eu.js": 202,
	"./fa": 203,
	"./fa.js": 203,
	"./fi": 204,
	"./fi.js": 204,
	"./fo": 205,
	"./fo.js": 205,
	"./fr": 208,
	"./fr-ca": 206,
	"./fr-ca.js": 206,
	"./fr-ch": 207,
	"./fr-ch.js": 207,
	"./fr.js": 208,
	"./fy": 209,
	"./fy.js": 209,
	"./gd": 210,
	"./gd.js": 210,
	"./gl": 211,
	"./gl.js": 211,
	"./gom-latn": 212,
	"./gom-latn.js": 212,
	"./he": 213,
	"./he.js": 213,
	"./hi": 214,
	"./hi.js": 214,
	"./hr": 215,
	"./hr.js": 215,
	"./hu": 216,
	"./hu.js": 216,
	"./hy-am": 217,
	"./hy-am.js": 217,
	"./id": 218,
	"./id.js": 218,
	"./is": 219,
	"./is.js": 219,
	"./it": 220,
	"./it.js": 220,
	"./ja": 221,
	"./ja.js": 221,
	"./jv": 222,
	"./jv.js": 222,
	"./ka": 223,
	"./ka.js": 223,
	"./kk": 224,
	"./kk.js": 224,
	"./km": 225,
	"./km.js": 225,
	"./kn": 226,
	"./kn.js": 226,
	"./ko": 227,
	"./ko.js": 227,
	"./ky": 228,
	"./ky.js": 228,
	"./lb": 229,
	"./lb.js": 229,
	"./lo": 230,
	"./lo.js": 230,
	"./lt": 231,
	"./lt.js": 231,
	"./lv": 232,
	"./lv.js": 232,
	"./me": 233,
	"./me.js": 233,
	"./mi": 234,
	"./mi.js": 234,
	"./mk": 235,
	"./mk.js": 235,
	"./ml": 236,
	"./ml.js": 236,
	"./mr": 237,
	"./mr.js": 237,
	"./ms": 239,
	"./ms-my": 238,
	"./ms-my.js": 238,
	"./ms.js": 239,
	"./my": 240,
	"./my.js": 240,
	"./nb": 241,
	"./nb.js": 241,
	"./ne": 242,
	"./ne.js": 242,
	"./nl": 244,
	"./nl-be": 243,
	"./nl-be.js": 243,
	"./nl.js": 244,
	"./nn": 245,
	"./nn.js": 245,
	"./pa-in": 246,
	"./pa-in.js": 246,
	"./pl": 247,
	"./pl.js": 247,
	"./pt": 249,
	"./pt-br": 248,
	"./pt-br.js": 248,
	"./pt.js": 249,
	"./ro": 250,
	"./ro.js": 250,
	"./ru": 251,
	"./ru.js": 251,
	"./sd": 252,
	"./sd.js": 252,
	"./se": 253,
	"./se.js": 253,
	"./si": 254,
	"./si.js": 254,
	"./sk": 255,
	"./sk.js": 255,
	"./sl": 256,
	"./sl.js": 256,
	"./sq": 257,
	"./sq.js": 257,
	"./sr": 259,
	"./sr-cyrl": 258,
	"./sr-cyrl.js": 258,
	"./sr.js": 259,
	"./ss": 260,
	"./ss.js": 260,
	"./sv": 261,
	"./sv.js": 261,
	"./sw": 262,
	"./sw.js": 262,
	"./ta": 263,
	"./ta.js": 263,
	"./te": 264,
	"./te.js": 264,
	"./tet": 265,
	"./tet.js": 265,
	"./th": 266,
	"./th.js": 266,
	"./tl-ph": 267,
	"./tl-ph.js": 267,
	"./tlh": 268,
	"./tlh.js": 268,
	"./tr": 269,
	"./tr.js": 269,
	"./tzl": 270,
	"./tzl.js": 270,
	"./tzm": 272,
	"./tzm-latn": 271,
	"./tzm-latn.js": 271,
	"./tzm.js": 272,
	"./uk": 273,
	"./uk.js": 273,
	"./ur": 274,
	"./ur.js": 274,
	"./uz": 276,
	"./uz-latn": 275,
	"./uz-latn.js": 275,
	"./uz.js": 276,
	"./vi": 277,
	"./vi.js": 277,
	"./x-pseudo": 278,
	"./x-pseudo.js": 278,
	"./yo": 279,
	"./yo.js": 279,
	"./zh-cn": 280,
	"./zh-cn.js": 280,
	"./zh-hk": 281,
	"./zh-hk.js": 281,
	"./zh-tw": 282,
	"./zh-tw.js": 282
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
webpackContext.id = 449;


/***/ }),

/***/ 452:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"page-header\">\n  <h1 class=\"display-3 text-center\">{{title}}</h1>\n</div>\n</div>\n\n<app-chart></app-chart>\n<!--<app-create-order></app-create-order>-->\n"

/***/ }),

/***/ 453:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"input-group\">\n        <input placeholder=\"City\" id=\"typeahead-config\" type=\"text\" class=\"form-control\" [(ngModel)]=\"city\" [ngbTypeahead]=\"searchCity\" (ngModelChange)=\"newCityValue($event)\" />\n      </div>\n    </div>\n    <!-- we cannot filter out by dept if stacked, because chart.js is not ready to decrease the array -->\n    <!--<div class=\"col\">\n       <div class=\"input-group\">\n        <input placeholder=\"Department\" id=\"typeahead-config\" type=\"text\" class=\"form-control\" [(ngModel)]=\"department\" [ngbTypeahead]=\"searchDepartment\"/>\n      </div>\n    </div>-->\n    <div class=\"col\">\n      <div class=\"input-group\">\n        <input  class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                name=\"dp\" [(ngModel)]=\"date\" ngbDatepicker #d=\"ngbDatepicker\">\n        <div class=\"input-group-addon\" (click)=\"city ? d.toggle() : ''\">\n          <img src=\"assets/images/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col\">\n      <button [disabled]=\"!searchEventsEnabled()\" class=\"btn btn-primary float-right\" type=\"submit\" (click)=\"searchEvents()\" >Search</button>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n  </div>\n\n  <div class=\"row\" style=\"padding-top: 10px\" *ngIf=\"!topUsers\">\n    <div class=\"col-md-12\">\n    <div class=\"jumbotron\">\n\n      <p class=\"lead text-center\">Please click search after setting city and date</p>\n      \n    </div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"padding-top: 10px\" [hidden]=\"!topUsers\">\n    <div class=\"col-md-12\" *ngIf=\"barChartData && barChartLabels\">\n      <div >\n        <canvas baseChart\n                [datasets]=\"barChartData\"\n                [labels]=\"barChartLabels\"\n                [options]=\"barChartOptions\"\n                [legend]=\"barChartLegend\"\n                [chartType]=\"barChartType\"\n                [colors]=\"barChartColors\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n      <!--<button (click)=\"randomize()\">Update</button>-->\n    </div>\n    <!--<div class=\"col-md-6\" style=\"margin-bottom: 10px\">\n    <table class=\"table table-responsive table-condensed\">\n      <tr>\n        <th *ngFor=\"let label of barChartLabels\">{{label}}</th>\n      </tr>\n      <tr *ngFor=\"let d of barChartData\">\n        <td *ngFor=\"let label of barChartLabels; let j=index\">{{d && d.data[j]}}</td>\n      </tr>\n    </table>\n    </div>-->\n  </div>\n\n  <div class=\"row\" style=\"padding-top: 10px\" *ngIf=\"topUsers && topUsers.length > 0\" >\n    <div class=\"col-md-6\">\n    <table class=\"table table-responsive table-condensed\">\n      <tr>\n        <th class=\"text-center\">#Position</th><th >Username</th><th class=\"text-center\">Score</th>\n      </tr>\n      <tr *ngFor=\"let user of topUsers; let i = index\">\n        <td class=\"text-center\">{{i + 1}}</td><td>{{user.username}}</td><td class=\"text-center\">{{user.score}}</td>\n      </tr>\n    </table>\n    </div>\n    <div class=\"col-md-6\">\n    <table class=\"table table-responsive table-condensed\">\n      <tr>\n        <th >#Position</th><th >Department</th><th >Score</th>\n      </tr>\n      <tr *ngFor=\"let department of topDepartments; let i = index\">\n        <td class=\"text-center\">{{i + 1}}</td><td>{{department.name | uppercase}}</td><td class=\"text-center\">{{department.score}}</td>\n      </tr>\n    </table>\n    </div>\n  </div>\n  \n</div>\n\n"

/***/ }),

/***/ 454:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>New Order Form</h3>\n    <form (ngSubmit)=\"onSubmit()\"  #orderForm=\"ngForm\"> \n\n      <div class=\"form-group\">\n        <label for=\"name\">Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" required [(ngModel)]=\"model.title\" name=\"title\" #title=\"ngModel\">\n        <div [hidden]=\"title.valid || title.pristine\"\n             class=\"alert alert-danger\">\n          Title is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"assignee\">Assignee</label>\n        <select class=\"form-control\" id=\"assignee\" required \n                [(ngModel)]=\"model.assignee\" name=\"assignee\" #assignee=\"ngModel\">\n          <option *ngFor=\"let assignee of assignees\" [ngValue]=\"assignee\">{{assignee.name}}</option>\n        </select>\n        <div [hidden]=\"assignee.valid || assignee.pristine\" class=\"alert alert-danger\">\n          Assignee is required\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!orderForm.form.valid\">Submit</button>\n\n      <hr /> \n\n      <div class=\"alert alert-info\" role=\"alert\">\n        <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Message:</span>\n        {{message}}\n      </div>\n    </form>\n    \n</div>\n"

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(328);


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fh_js_sdk__ = __webpack_require__(448);
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

},[718]);
//# sourceMappingURL=main.bundle.js.map