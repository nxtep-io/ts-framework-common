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
exports.Job = Job;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL0pvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQXFEO0FBV3JELE1BQXNCLEdBQUc7SUFJdkIsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxvQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFWSxNQUFNLENBQUMsTUFBa0I7O1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDO0tBQUE7SUFFTSxRQUFRO1FBQ2IsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxPQUFPLENBQUMsTUFBa0I7UUFDL0IscUNBQXFDO0lBQ3ZDLENBQUM7SUFFTSxTQUFTLENBQUMsTUFBa0I7UUFDakMscUNBQXFDO0lBQ3ZDLENBQUM7Q0FRRjtBQS9CRCxrQkErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIsIExvZ2dlckluc3RhbmNlIH0gZnJvbSAnbmFuby1lcnJvcnMnO1xuaW1wb3J0IHsgQmFzZVNlcnZlciB9IGZyb20gJy4vQmFzZVNlcnZlcic7XG5pbXBvcnQgeyBDb21wb25lbnREZXNjcmlwdGlvbiB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50T3B0aW9ucywgQ29tcG9uZW50VHlwZSB9IGZyb20gJy4vY29tcG9uZW50L0NvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9iT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudE9wdGlvbnMge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEpvYkRlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50RGVzY3JpcHRpb24ge1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSm9iIGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgbG9nZ2VyOiBMb2dnZXJJbnN0YW5jZTtcbiAgdHlwZTogQ29tcG9uZW50VHlwZS5KT0I7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IEpvYk9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBvbkluaXQoc2VydmVyOiBCYXNlU2VydmVyKSB7XG4gICAgcmV0dXJuIHRoaXMucnVuKHNlcnZlcik7XG4gIH1cblxuICBwdWJsaWMgZGVzY3JpYmUoKTogSm9iRGVzY3JpcHRpb24ge1xuICAgIHJldHVybiB7IG5hbWU6IHRoaXMub3B0aW9ucy5uYW1lIH07XG4gIH1cblxuICBwdWJsaWMgb25Nb3VudChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpIHtcbiAgICAvLyBEbyBub3RoaW5nLCBpcyBhIHN0YXJ0dXAgb25seSBqb2IuXG4gIH1cblxuICBwdWJsaWMgb25Vbm1vdW50KHNlcnZlcjogQmFzZVNlcnZlcikge1xuICAgIC8vIERvIG5vdGhpbmcsIGlzIGEgc3RhcnR1cCBvbmx5IGpvYi5cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGpvYiByb3V0aW5lcy5cbiAgICogXG4gICAqIEBwYXJhbSBzZXJ2ZXIgVGhlIHNlcnZlciBpbnN0YW5jZVxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGFzeW5jIHJ1bihzZXJ2ZXI6IEJhc2VTZXJ2ZXIpOiBQcm9taXNlPHZvaWQ+O1xufVxuIl19