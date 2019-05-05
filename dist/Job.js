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
exports.default = Job;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL0pvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsNkNBQXFEO0FBUXJELE1BQThCLEdBQUc7SUFJL0IsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxvQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFWSxNQUFNLENBQUMsTUFBa0I7O1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDO0tBQUE7SUFFTSxRQUFRO1FBQ2IsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxPQUFPLENBQUMsTUFBa0I7UUFDL0IscUNBQXFDO0lBQ3ZDLENBQUM7SUFFTSxTQUFTLENBQUMsTUFBa0I7UUFDakMscUNBQXFDO0lBQ3ZDLENBQUM7Q0FRRjtBQS9CRCxzQkErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNlcnZlciBmcm9tICcuL0Jhc2VTZXJ2ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRPcHRpb25zLCBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi9jb21wb25lbnQvQ29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudERlc2NyaXB0aW9uIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nZ2VySW5zdGFuY2UsIExvZ2dlciB9IGZyb20gJ25hbm8tZXJyb3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBKb2JPcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50T3B0aW9ucyB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9iRGVzY3JpcHRpb24gZXh0ZW5kcyBDb21wb25lbnREZXNjcmlwdGlvbiB7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEpvYiBpbXBsZW1lbnRzIENvbXBvbmVudCB7XG4gIGxvZ2dlcjogTG9nZ2VySW5zdGFuY2U7XG4gIHR5cGU6IENvbXBvbmVudFR5cGUuSk9CO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBKb2JPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgb25Jbml0KHNlcnZlcjogQmFzZVNlcnZlcikge1xuICAgIHJldHVybiB0aGlzLnJ1bihzZXJ2ZXIpO1xuICB9XG5cbiAgcHVibGljIGRlc2NyaWJlKCk6IEpvYkRlc2NyaXB0aW9uIHtcbiAgICByZXR1cm4geyBuYW1lOiB0aGlzLm9wdGlvbnMubmFtZSB9O1xuICB9XG5cbiAgcHVibGljIG9uTW91bnQoc2VydmVyOiBCYXNlU2VydmVyKSB7XG4gICAgLy8gRG8gbm90aGluZywgaXMgYSBzdGFydHVwIG9ubHkgam9iLlxuICB9XG5cbiAgcHVibGljIG9uVW5tb3VudChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpIHtcbiAgICAvLyBEbyBub3RoaW5nLCBpcyBhIHN0YXJ0dXAgb25seSBqb2IuXG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBqb2Igcm91dGluZXMuXG4gICAqIFxuICAgKiBAcGFyYW0gc2VydmVyIFRoZSBzZXJ2ZXIgaW5zdGFuY2VcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyBydW4oc2VydmVyOiBCYXNlU2VydmVyKTogUHJvbWlzZTx2b2lkPjtcbn1cbiJdfQ==