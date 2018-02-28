"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var providers_1 = require("./providers");
/**
 * @experimental Animation support is experimental.
 */
var BrowserAnimationsModule = (function () {
    function BrowserAnimationsModule() {
    }
    BrowserAnimationsModule = __decorate([
        core_1.NgModule({
            exports: [platform_browser_1.BrowserModule],
            providers: providers_1.BROWSER_ANIMATIONS_PROVIDERS,
        })
    ], BrowserAnimationsModule);
    return BrowserAnimationsModule;
}());
exports.BrowserAnimationsModule = BrowserAnimationsModule;
/**
 * @experimental Animation support is experimental.
 */
var NoopAnimationsModule = (function () {
    function NoopAnimationsModule() {
    }
    NoopAnimationsModule = __decorate([
        core_1.NgModule({
            exports: [platform_browser_1.BrowserModule],
            providers: providers_1.BROWSER_NOOP_ANIMATIONS_PROVIDERS,
        })
    ], NoopAnimationsModule);
    return NoopAnimationsModule;
}());
exports.NoopAnimationsModule = NoopAnimationsModule;
//# sourceMappingURL=module.js.map