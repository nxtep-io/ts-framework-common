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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL0pvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEscUNBQWtDO0FBV2xDLE1BQThCLEdBQUc7SUFJL0IsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksZUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFWSxNQUFNLENBQUMsTUFBa0I7O1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDO0tBQUE7SUFFTSxRQUFRO1FBQ2IsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxPQUFPLENBQUMsTUFBa0I7UUFDL0IscUNBQXFDO0lBQ3ZDLENBQUM7SUFFTSxTQUFTLENBQUMsTUFBa0I7UUFDakMscUNBQXFDO0lBQ3ZDLENBQUM7Q0FRRjtBQTlCRCxzQkE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNlcnZlciBmcm9tICcuL0Jhc2VTZXJ2ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRPcHRpb25zLCBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi9jb21wb25lbnQvQ29tcG9uZW50JztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IENvbXBvbmVudERlc2NyaXB0aW9uIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEpvYk9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnRPcHRpb25zIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEpvYkRlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50RGVzY3JpcHRpb24ge1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBKb2IgaW1wbGVtZW50cyBDb21wb25lbnQge1xuICBsb2dnZXI6IExvZ2dlcjtcbiAgdHlwZTogQ29tcG9uZW50VHlwZS5KT0I7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IEpvYk9wdGlvbnMpIHtcbiAgICB0aGlzLmxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyIHx8IExvZ2dlci5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIG9uSW5pdChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpIHtcbiAgICByZXR1cm4gdGhpcy5ydW4oc2VydmVyKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXNjcmliZSgpOiBKb2JEZXNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHsgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUgfTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1vdW50KHNlcnZlcjogQmFzZVNlcnZlcikge1xuICAgIC8vIERvIG5vdGhpbmcsIGlzIGEgc3RhcnR1cCBvbmx5IGpvYi5cbiAgfVxuXG4gIHB1YmxpYyBvblVubW91bnQoc2VydmVyOiBCYXNlU2VydmVyKSB7XG4gICAgLy8gRG8gbm90aGluZywgaXMgYSBzdGFydHVwIG9ubHkgam9iLlxuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgam9iIHJvdXRpbmVzLlxuICAgKiBcbiAgICogQHBhcmFtIHNlcnZlciBUaGUgc2VydmVyIGluc3RhbmNlXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgYXN5bmMgcnVuKHNlcnZlcjogQmFzZVNlcnZlcik6IFByb21pc2U8dm9pZD47XG59XG4iXX0=