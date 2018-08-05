"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
class Job {
    constructor(options) {
        this.options = options;
        this.logger = options.logger || logger_1.Logger.getInstance();
    }
    onMount(server) {
        // Do nothing, is a startup only job.
    }
    onUnmount(server) {
        // Do nothing, is a startup only job.
    }
    onInit(server) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.run(server);
        });
    }
    describe() {
        return { name: this.options.name || 'Job' };
    }
}
exports.default = Job;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL0pvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEscUNBQWtDO0FBUWxDLE1BQThCLEdBQUc7SUFJL0IsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksZUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFTSxPQUFPLENBQUMsTUFBa0I7UUFDL0IscUNBQXFDO0lBQ3ZDLENBQUM7SUFFTSxTQUFTLENBQUMsTUFBa0I7UUFDakMscUNBQXFDO0lBQ3ZDLENBQUM7SUFFWSxNQUFNLENBQUMsTUFBa0I7O1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDO0tBQUE7SUFFTSxRQUFRO1FBQ2IsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0NBR0Y7QUF6QkQsc0JBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTZXJ2ZXIgZnJvbSAnLi9CYXNlU2VydmVyJztcbmltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50T3B0aW9ucywgQ29tcG9uZW50RGVzY3JpcHRpb24sIENvbXBvbmVudFR5cGUgfSBmcm9tICcuL2NvbXBvbmVudC9Db21wb25lbnQnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEpvYk9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnRPcHRpb25zIHtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBKb2JEZXNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudERlc2NyaXB0aW9uIHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgSm9iIGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgbG9nZ2VyOiBMb2dnZXI7XG4gIHR5cGU6IENvbXBvbmVudFR5cGUuSk9CO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBKb2JPcHRpb25zKSB7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vdW50KHNlcnZlcjogQmFzZVNlcnZlcikge1xuICAgIC8vIERvIG5vdGhpbmcsIGlzIGEgc3RhcnR1cCBvbmx5IGpvYi5cbiAgfVxuXG4gIHB1YmxpYyBvblVubW91bnQoc2VydmVyOiBCYXNlU2VydmVyKSB7XG4gICAgLy8gRG8gbm90aGluZywgaXMgYSBzdGFydHVwIG9ubHkgam9iLlxuICB9XG5cbiAgcHVibGljIGFzeW5jIG9uSW5pdChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpIHtcbiAgICByZXR1cm4gdGhpcy5ydW4oc2VydmVyKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXNjcmliZSgpOiBKb2JEZXNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHsgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUgfHwgJ0pvYicgfTtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyBydW4oc2VydmVyOiBCYXNlU2VydmVyKTogUHJvbWlzZTx2b2lkPjtcbn1cbiJdfQ==