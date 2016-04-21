/* */ 
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
require('prismjs/components/prism-asciidoc');
var core_1 = require('angular2/core');
var Asciidoc = (function () {
    function Asciidoc(el) {
        this.el = el;
    }
    Asciidoc.prototype.ngOnInit = function () {
        this.codeblock = this.el.internalElement.componentView.context;
        this.codeblock.language = 'asciidoc';
    };
    Asciidoc = __decorate([
        core_1.Directive({
            selector: 'codeblock[asciidoc]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Asciidoc);
    return Asciidoc;
}());
exports.Asciidoc = Asciidoc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNjaWlkb2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhc2NpaWRvYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsUUFBTyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQzNDLHFCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQU1wRDtJQUlFLGtCQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztJQUFLLENBQUM7SUFFdkMsMkJBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxTQUFTLEdBQVMsSUFBSSxDQUFDLEVBQUcsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDdkMsQ0FBQztJQWJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7U0FDaEMsQ0FBQzs7Z0JBQUE7SUFhRixlQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxnQkFBUSxXQVlwQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tYXNjaWlkb2MnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2NvZGVibG9ja1thc2NpaWRvY10nXG59KVxuZXhwb3J0IGNsYXNzIEFzY2lpZG9jIHtcblxuICBjb2RlYmxvY2s6YW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6RWxlbWVudFJlZikgeyAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGdldCB0aGUgaG9zdFxuICAgIHRoaXMuY29kZWJsb2NrID0gKDxhbnk+dGhpcy5lbCkuaW50ZXJuYWxFbGVtZW50LmNvbXBvbmVudFZpZXcuY29udGV4dDtcbiAgICB0aGlzLmNvZGVibG9jay5sYW5ndWFnZSA9ICdhc2NpaWRvYyc7XG4gIH1cblxufVxuIl19