"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentType;
(function (ComponentType) {
    ComponentType["MIDDLEWARE"] = "middleware";
    ComponentType["DATABASE"] = "database";
    ComponentType["SERVICE"] = "service";
    ComponentType["GROUP"] = "group";
    ComponentType["JOB"] = "job";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2NvbXBvbmVudC9Db21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxJQUFZLGFBTVg7QUFORCxXQUFZLGFBQWE7SUFDdkIsMENBQXlCLENBQUE7SUFDekIsc0NBQXFCLENBQUE7SUFDckIsb0NBQW1CLENBQUE7SUFDbkIsZ0NBQWUsQ0FBQTtJQUNmLDRCQUFXLENBQUE7QUFDYixDQUFDLEVBTlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFNeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXJJbnN0YW5jZSB9IGZyb20gJ25hbm8tZXJyb3JzJztcbmltcG9ydCB7IEJhc2VTZXJ2ZXIgfSBmcm9tICcuLi9CYXNlU2VydmVyJztcbmltcG9ydCB7IENvbXBvbmVudERlc2NyaXB0aW9uIH0gZnJvbSAnLi9Db21wb25lbnREZXNjcmlwdGlvbic7XG5cbmV4cG9ydCBlbnVtIENvbXBvbmVudFR5cGUge1xuICBNSURETEVXQVJFID0gJ21pZGRsZXdhcmUnLFxuICBEQVRBQkFTRSA9ICdkYXRhYmFzZScsXG4gIFNFUlZJQ0UgPSAnc2VydmljZScsXG4gIEdST1VQID0gJ2dyb3VwJyxcbiAgSk9CID0gJ2pvYicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50T3B0aW9ucyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGxvZ2dlcj86IExvZ2dlckluc3RhbmNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudCB7XG4gIHR5cGU6IENvbXBvbmVudFR5cGU7XG4gIGxvZ2dlcj86IExvZ2dlckluc3RhbmNlO1xuICBvcHRpb25zOiBDb21wb25lbnRPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBEZXNjcmliZXMgY3VycmVudCBjb21wb25lbnQuXG4gICAqL1xuICBkZXNjcmliZSgpOiBDb21wb25lbnREZXNjcmlwdGlvbjtcblxuICAvKipcbiAgICogSGFuZGxlcyBwb3N0IG1vdW50IHJvdXRpbmVzLlxuICAgKi9cbiAgb25Nb3VudChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHByZSBpbml0aWFsaXphdGlvbiByb3V0aW5lcy5cbiAgICovXG4gIG9uSW5pdChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHBvc3QgdW5tb3VudCByb3V0aW5lcy5cbiAgICovXG4gIG9uVW5tb3VudChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHBvc3QgaW5pdGlhbGl6YXRpb24gcm91dGluZXMuXG4gICAqL1xuICBvblJlYWR5PyhzZXJ2ZXI6IEJhc2VTZXJ2ZXIpOiBQcm9taXNlPHZvaWQ+O1xufVxuIl19