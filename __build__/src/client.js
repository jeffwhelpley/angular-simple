"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// polyfills
require("core-js/es6/reflect");
require("core-js/es7/reflect");
require("zone.js/dist/zone");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
// *********** the root component *****************
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n      <h1>\n          {{title}}\n      </h1>\n  ",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
// *********** our top level module *****************
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [AppComponent],
        imports: [platform_browser_1.BrowserModule],
        providers: [],
        bootstrap: [AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
// *********** start the client side app *****************
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule)
    .then(function () {
    console.log('Angular bootstrapped!!!');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qZWZmd2hlbHBsZXkvb3BlbnNvdXJjZS9hbmd1bGFyLXNpbXBsZS8iLCJzb3VyY2VzIjpbInNyYy9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLFlBQVk7QUFDWiwrQkFBNkI7QUFDN0IsK0JBQTZCO0FBQzdCLDZCQUEyQjtBQUUzQiw4REFBMEQ7QUFDMUQsOEVBQTJFO0FBQzNFLHNDQUFvRDtBQUVwRCxtREFBbUQ7QUFTbkQsSUFBTSxZQUFZO0lBUmxCO1FBU0UsVUFBSyxHQUFHLFlBQVksQ0FBQztJQUN2QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZLLFlBQVk7SUFSakIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxvREFJVDtLQUNGLENBQUM7O0dBQ0ksWUFBWSxDQUVqQjtBQUdELHFEQUFxRDtBQU9yRCxJQUFNLFNBQVM7SUFBZjtJQUFrQixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQW5CLElBQW1CO0FBQWIsU0FBUztJQU5kLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztRQUM1QixPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxDQUFDO1FBQ3hCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO0tBQzFCLENBQUM7O0dBQ0ksU0FBUyxDQUFJO0FBR25CLDBEQUEwRDtBQUMxRCxpREFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7S0FDOUMsSUFBSSxDQUFDO0lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDIn0=