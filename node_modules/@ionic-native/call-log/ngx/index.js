var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var CallLog = /** @class */ (function (_super) {
    __extends(CallLog, _super);
    function CallLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallLog.prototype.getCallLog = function (filters) { return cordova(this, "getCallLog", {}, arguments); };
    CallLog.prototype.hasReadPermission = function () { return cordova(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    CallLog.prototype.requestReadPermission = function () { return cordova(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    CallLog.pluginName = "CallLog";
    CallLog.plugin = "cordova-plugin-calllog";
    CallLog.pluginRef = "plugins.callLog";
    CallLog.repo = "https://github.com/creacore-team/cordova-plugin-calllog";
    CallLog.platforms = ["Android"];
    CallLog = __decorate([
        Injectable()
    ], CallLog);
    return CallLog;
}(IonicNativePlugin));
export { CallLog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGwtbG9nL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDM0MsMkJBQWlCOzs7O0lBTzVDLDRCQUFVLGFBQUMsT0FBd0I7SUFXbkMsbUNBQWlCO0lBV2pCLHVDQUFxQjs7Ozs7O0lBN0JWLE9BQU87UUFEbkIsVUFBVSxFQUFFO09BQ0EsT0FBTztrQkFsQ3BCO0VBa0M2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxMb2dPYmplY3Qge1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgb3BlcmF0b3I6ICc9PScgfCAnIT0nIHwgJz4nIHwgJz49JyB8ICc8JyB8ICc8PScgfCAnbGlrZSc7XG59XG5cbi8qKlxuICogQG5hbWUgQ2FsbCBMb2dcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gYWNjZXNzIHRoZSBjYWxsIGhpc3Rvcnkgb24gYSBkZXZpY2UgYW5kIHRoYXQgY2FuIGJlIGZpbHRlcmVkXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYWxsTG9nIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYWxsLWxvZy9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbGxMb2c6IENhbGxMb2cpIHsgfVxuICpcbiAqIGBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDYWxsTG9nT2JqZWN0XG4gKlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbGxMb2cnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jYWxsbG9nJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5jYWxsTG9nJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jcmVhY29yZS10ZWFtL2NvcmRvdmEtcGx1Z2luLWNhbGxsb2cnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGxMb2cgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJldHVybiB0aGUgY2FsbCBsb2dzXG4gICAqIEBwYXJhbSB7Q2FsbExvZ09iamVjdFtdfSBmaWx0ZXJzIGFycmF5IG9mIG9iamVjdCB0byBmaWx0ZXIgdGhlIHF1ZXJ5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0Q2FsbExvZyhmaWx0ZXJzOiBDYWxsTG9nT2JqZWN0W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBoYXNSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG4gIH0pXG4gIHJlcXVlc3RSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19