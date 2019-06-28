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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var CallLogOriginal = /** @class */ (function (_super) {
    __extends(CallLogOriginal, _super);
    function CallLogOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallLogOriginal.prototype.getCallLog = function (filters) { return cordova(this, "getCallLog", {}, arguments); };
    CallLogOriginal.prototype.hasReadPermission = function () { return cordova(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    CallLogOriginal.prototype.requestReadPermission = function () { return cordova(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    CallLogOriginal.pluginName = "CallLog";
    CallLogOriginal.plugin = "cordova-plugin-calllog";
    CallLogOriginal.pluginRef = "plugins.callLog";
    CallLogOriginal.repo = "https://github.com/creacore-team/cordova-plugin-calllog";
    CallLogOriginal.platforms = ["Android"];
    return CallLogOriginal;
}(IonicNativePlugin));
var CallLog = new CallLogOriginal();
export { CallLog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGwtbG9nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDM0MsMkJBQWlCOzs7O0lBTzVDLDRCQUFVLGFBQUMsT0FBd0I7SUFXbkMsbUNBQWlCO0lBV2pCLHVDQUFxQjs7Ozs7O2tCQS9EdkI7RUFrQzZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsbExvZ09iamVjdCB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBvcGVyYXRvcjogJz09JyB8ICchPScgfCAnPicgfCAnPj0nIHwgJzwnIHwgJzw9JyB8ICdsaWtlJztcbn1cblxuLyoqXG4gKiBAbmFtZSBDYWxsIExvZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhY2Nlc3MgdGhlIGNhbGwgaGlzdG9yeSBvbiBhIGRldmljZSBhbmQgdGhhdCBjYW4gYmUgZmlsdGVyZWRcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGxMb2cgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbGwtbG9nL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsbExvZzogQ2FsbExvZykgeyB9XG4gKlxuICogYGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbGxMb2dPYmplY3RcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FsbExvZycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbGxsb2cnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmNhbGxMb2cnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NyZWFjb3JlLXRlYW0vY29yZG92YS1wbHVnaW4tY2FsbGxvZycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsbExvZyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gcmV0dXJuIHRoZSBjYWxsIGxvZ3NcbiAgICogQHBhcmFtIHtDYWxsTG9nT2JqZWN0W119IGZpbHRlcnMgYXJyYXkgb2Ygb2JqZWN0IHRvIGZpbHRlciB0aGUgcXVlcnlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRDYWxsTG9nKGZpbHRlcnM6IENhbGxMb2dPYmplY3RbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHBlcm1pc3Npb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG4gIH0pXG4gIGhhc1JlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvblxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbiAgfSlcbiAgcmVxdWVzdFJlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=