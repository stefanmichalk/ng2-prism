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
require('prismjs/components/prism-perl');
var core_1 = require('angular2/core');
var Perl = (function () {
    function Perl(el) {
        this.el = el;
    }
    Perl.prototype.ngOnInit = function () {
        this.codeblock = this.el.internalElement.componentView.context;
        this.codeblock.language = 'perl';
    };
    Perl = __decorate([
        core_1.Directive({
            selector: 'codeblock[perl]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Perl);
    return Perl;
}());
exports.Perl = Perl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFFBQU8sK0JBQStCLENBQUMsQ0FBQTtBQUN2QyxxQkFBb0MsZUFBZSxDQUFDLENBQUE7QUFNcEQ7SUFJRSxjQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztJQUFLLENBQUM7SUFFdkMsdUJBQVEsR0FBUjtRQUVFLElBQUksQ0FBQyxTQUFTLEdBQVMsSUFBSSxDQUFDLEVBQUcsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDbkMsQ0FBQztJQWJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7U0FDNUIsQ0FBQzs7WUFBQTtJQWFGLFdBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLFlBQUksT0FZaEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXBlcmwnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2NvZGVibG9ja1twZXJsXSdcbn0pXG5leHBvcnQgY2xhc3MgUGVybCB7XG5cbiAgY29kZWJsb2NrOmFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOkVsZW1lbnRSZWYpIHsgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBnZXQgdGhlIGhvc3RcbiAgICB0aGlzLmNvZGVibG9jayA9ICg8YW55PnRoaXMuZWwpLmludGVybmFsRWxlbWVudC5jb21wb25lbnRWaWV3LmNvbnRleHQ7XG4gICAgdGhpcy5jb2RlYmxvY2subGFuZ3VhZ2UgPSAncGVybCc7XG4gIH1cblxufVxuIl19