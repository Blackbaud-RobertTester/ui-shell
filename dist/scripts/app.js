/******/!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}// webpackBootstrap
/******/
var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var o=n(1),r=n(2),i=n(3);n(4),n(8),angular.module("uiShell",["restangular","ui.router","uiShell.main","uiShell.common","sky"]).config(o.config).config(r.routerConfig).run(i.runBlock)},function(e,t){"use strict";function n(e,t){"ngInject";e.debugEnabled(!0),t.html5Mode({enabled:!0,requireBase:!1})}Object.defineProperty(t,"__esModule",{value:!0}),t.config=n,n.$inject=["$logProvider","$locationProvider"]},function(e,t){"use strict";function n(e,t){"ngInject";e.state("home",{url:"/",templateUrl:"app/domain1/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=n,n.$inject=["$stateProvider","$urlRouterProvider"]},function(e,t){"use strict";function n(){"ngInject"}Object.defineProperty(t,"__esModule",{value:!0}),t.runBlock=n},function(e,t,n){"use strict";var o=n(5),r=n(6),i=n(7);angular.module("uiShell.main",["restangular","ui.router"]).controller("MainController",o.MainController).directive("helloWorldTitle",function(){return new i.HelloWorldTitle}).service("ExampleService",r.ExampleService)},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(t){"ngInject";n(this,e),this.message="Hello World!!";for(var o=new Array,r=0;10>r;r++)o.push(r);this.sizeOfArray=o.length,this.exampleService=t,this.tabs=[{title:"Tab 1",content:"1 content"},{title:"Tab 2",content:"2 content"},{title:"Tab 3",content:"3 content"}],this.tabCount=4}return e.$inject=["ExampleService"],o(e,[{key:"logMessage",value:function(e){this.exampleService.logMessage(e)}},{key:"closeTab",value:function(e,t){t.preventDefault(),t.tabs.splice(e,1)}},{key:"openTab",value:function(){var e="Tab "+this.tabCount.toString(),t=this.tabCount.toString()+" content";this.tabs.push({title:e,content:t}),this.tabCount++}},{key:"addTab",value:function(){}}]),e}();t.MainController=r,r.$inject=["ExampleService"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(t){n(this,e),this.logger=t}return o(e,[{key:"logMessage",value:function(e){this.logger.log(e)}}]),e}();t.ExampleService=r,r.$inject=["$log"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function r(){n(this,r),this.restrict="E",this.templateUrl="app/domain1/partials/example-directive-template.html",this.scope={message:"=message"}};t.HelloWorldTitle=o},function(e,t,n){"use strict";var o=n(9);angular.module("uiShell.common",["restangular","ui.router"]).directive("helloWorldCommon",function(){return new o.HelloWorldCommon})},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function r(){n(this,r),this.restrict="E",this.template="<span>Hello World from the Common Area</span>"};t.HelloWorldCommon=o}]),angular.module("uiShell").run(["$templateCache",function(e){e.put("app/domain1/main.html",'<div>Blah2<br><hello-world-title message="main.message"></hello-world-title>{{main.sizeOfArray}}</div><hello-world-common></hello-world-common><button ng-click="main.logMessage(\'blah\')">Click Me</button><br>Here is a sky component<br><tabset bb-tabset-add="main.addTab()" bb-tabset-open="main.openTab()" bb-tabset-collapsible=""><tab bb-tab-collapse-header="t.title" ng-repeat="t in main.tabs" class="bb-tab-close"><tab-heading>{{t.title}} <button type="button" class="bb-tab-close-icon" ng-click="main.closeTab($index, $event)"></button></tab-heading>{{t.content}}</tab></tabset>'),e.put("app/domain1/partials/example-directive-template.html","<p>Hello World</p>")}]);
//# sourceMappingURL=../maps/scripts/app.js.map