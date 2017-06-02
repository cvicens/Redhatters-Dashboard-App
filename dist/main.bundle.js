webpackJsonp([1,4],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"page-header\">\n  <h1>{{title}}</h1>\n</div>\n</div>\n\n<app-create-order></app-create-order>\n"

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>New Order Form</h3>\n    <form (ngSubmit)=\"onSubmit()\"  #orderForm=\"ngForm\"> \n\n      <div class=\"form-group\">\n        <label for=\"name\">Title</label>\n        <input type=\"text\" class=\"form-control\" id=\"title\" required [(ngModel)]=\"model.title\" name=\"title\" #title=\"ngModel\">\n        <div [hidden]=\"title.valid || title.pristine\"\n             class=\"alert alert-danger\">\n          Title is required\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"assignee\">Assignee</label>\n        <select class=\"form-control\" id=\"assignee\" required \n                [(ngModel)]=\"model.assignee\" name=\"assignee\" #assignee=\"ngModel\">\n          <option *ngFor=\"let assignee of assignees\" [ngValue]=\"assignee\">{{assignee.name}}</option>\n        </select>\n        <div [hidden]=\"assignee.valid || assignee.pristine\" class=\"alert alert-danger\">\n          Assignee is required\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!orderForm.form.valid\">Submit</button>\n\n      <hr /> \n\n      <div class=\"alert alert-info\" role=\"alert\">\n        <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Message:</span>\n        {{message}}\n      </div>\n    </form>\n    \n</div>\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(83);


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fh_js_sdk__ = __webpack_require__(153);
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
                    contentType: "application/json",
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
                    contentType: "application/json",
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
    }
    return FHService;
}());
FHService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FHService);

//# sourceMappingURL=fh.service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 82;


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(97);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ERP ONE Portal';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(155),
        styles: [__webpack_require__(151)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_order_create_order_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_fh_service__ = __webpack_require__(57);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__create_order_create_order_component__["a" /* CreateOrderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'orders',
                    component: __WEBPACK_IMPORTED_MODULE_6__create_order_create_order_component__["a" /* CreateOrderComponent */]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__service_fh_service__["a" /* FHService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_order__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_form_order__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_assignee__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_fh_service__ = __webpack_require__(57);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-create-order',
        template: __webpack_require__(156),
        styles: [__webpack_require__(152)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_fh_service__["a" /* FHService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_fh_service__["a" /* FHService */]) === "function" && _a || Object])
], CreateOrderComponent);

var _a;
//# sourceMappingURL=create-order.component.js.map

/***/ }),

/***/ 94:
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

/***/ 95:
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

/***/ 96:
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

/***/ 97:
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

/***/ })

},[187]);
//# sourceMappingURL=main.bundle.js.map