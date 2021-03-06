"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const nano_errors_1 = require("nano-errors");
class Service {
    constructor(options) {
        this.options = options;
        this.options.name = options.name || this.constructor.name;
        this.logger = options.logger || nano_errors_1.Logger.getInstance();
    }
    describe() {
        return { name: this.options.name };
    }
}
exports.Service = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9TZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFxRDtBQVdyRCxNQUFzQixPQUFPO0lBSTNCLFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLG9CQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDcEMsQ0FBQztDQVNGO0FBcEJELDBCQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2dlciwgTG9nZ2VySW5zdGFuY2UgfSBmcm9tICduYW5vLWVycm9ycyc7XG5pbXBvcnQgeyBCYXNlU2VydmVyIH0gZnJvbSAnLi9CYXNlU2VydmVyJztcbmltcG9ydCB7IENvbXBvbmVudERlc2NyaXB0aW9uIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRPcHRpb25zLCBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi9jb21wb25lbnQvQ29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudE9wdGlvbnMge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2VEZXNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudERlc2NyaXB0aW9uIHtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlcnZpY2UgaW1wbGVtZW50cyBDb21wb25lbnQge1xuICBsb2dnZXI6IExvZ2dlckluc3RhbmNlO1xuICB0eXBlOiBDb21wb25lbnRUeXBlLlNFUlZJQ0U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IFNlcnZpY2VPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBwdWJsaWMgZGVzY3JpYmUoKTogU2VydmljZURlc2NyaXB0aW9uIHtcbiAgICByZXR1cm4geyBuYW1lOiB0aGlzLm9wdGlvbnMubmFtZSB9XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3Qgb25Nb3VudChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpOiB2b2lkO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBvblVubW91bnQoc2VydmVyOiBCYXNlU2VydmVyKTogdm9pZDtcblxuICBwdWJsaWMgYWJzdHJhY3Qgb25Jbml0KHNlcnZlcjogQmFzZVNlcnZlcik6IFByb21pc2U8dm9pZD47XG5cbiAgcHVibGljIGFic3RyYWN0IG9uUmVhZHkoc2VydmVyOiBCYXNlU2VydmVyKTogUHJvbWlzZTx2b2lkPjtcbn1cbiJdfQ==