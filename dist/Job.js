"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const nano_errors_1 = require("nano-errors");
class Job {
    constructor(options) {
        this.options = options;
        this.options.name = options.name || this.constructor.name;
        this.logger = options.logger || nano_errors_1.Logger.getInstance();
    }
    onInit(server) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.run(server);
        });
    }
    describe() {
        return { name: this.options.name };
    }
    onMount(server) {
        // Do nothing, is a startup only job.
    }
    onUnmount(server) {
        // Do nothing, is a startup only job.
    }
}
exports.Job = Job;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL0pvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBcUQ7QUFXckQsTUFBc0IsR0FBRztJQUl2QixZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLG9CQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVZLE1BQU0sQ0FBQyxNQUFrQjs7WUFDcEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUM7S0FBQTtJQUVNLFFBQVE7UUFDYixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVNLE9BQU8sQ0FBQyxNQUFrQjtRQUMvQixxQ0FBcUM7SUFDdkMsQ0FBQztJQUVNLFNBQVMsQ0FBQyxNQUFrQjtRQUNqQyxxQ0FBcUM7SUFDdkMsQ0FBQztDQVFGO0FBL0JELGtCQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2dlciwgTG9nZ2VySW5zdGFuY2UgfSBmcm9tICduYW5vLWVycm9ycyc7XG5pbXBvcnQgeyBCYXNlU2VydmVyIH0gZnJvbSAnLi9CYXNlU2VydmVyJztcbmltcG9ydCB7IENvbXBvbmVudERlc2NyaXB0aW9uIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRPcHRpb25zLCBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi9jb21wb25lbnQvQ29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBKb2JPcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50T3B0aW9ucyB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9iRGVzY3JpcHRpb24gZXh0ZW5kcyBDb21wb25lbnREZXNjcmlwdGlvbiB7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBKb2IgaW1wbGVtZW50cyBDb21wb25lbnQge1xuICBsb2dnZXI6IExvZ2dlckluc3RhbmNlO1xuICB0eXBlOiBDb21wb25lbnRUeXBlLkpPQjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogSm9iT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB0aGlzLmxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyIHx8IExvZ2dlci5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIG9uSW5pdChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpIHtcbiAgICByZXR1cm4gdGhpcy5ydW4oc2VydmVyKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXNjcmliZSgpOiBKb2JEZXNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHsgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUgfTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vdW50KHNlcnZlcjogQmFzZVNlcnZlcikge1xuICAgIC8vIERvIG5vdGhpbmcsIGlzIGEgc3RhcnR1cCBvbmx5IGpvYi5cbiAgfVxuXG4gIHB1YmxpYyBvblVubW91bnQoc2VydmVyOiBCYXNlU2VydmVyKSB7XG4gICAgLy8gRG8gbm90aGluZywgaXMgYSBzdGFydHVwIG9ubHkgam9iLlxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgam9iIHJvdXRpbmVzLlxuICAgKiBcbiAgICogQHBhcmFtIHNlcnZlciBUaGUgc2VydmVyIGluc3RhbmNlXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgcnVuKHNlcnZlcjogQmFzZVNlcnZlcik6IFByb21pc2U8dm9pZD47XG59XG4iXX0=