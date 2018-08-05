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
class Job {
    constructor(options) {
        this.options = options;
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
}
exports.default = Job;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL0pvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBU0EsTUFBOEIsR0FBRztJQUcvQixZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQ3RDLENBQUM7SUFFTSxPQUFPLENBQUMsTUFBa0I7UUFDL0IscUNBQXFDO0lBQ3ZDLENBQUM7SUFFTSxTQUFTLENBQUMsTUFBa0I7UUFDakMscUNBQXFDO0lBQ3ZDLENBQUM7SUFFWSxNQUFNLENBQUMsTUFBa0I7O1lBQ3BDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDO0tBQUE7Q0FLRjtBQXJCRCxzQkFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNlcnZlciBmcm9tICcuL0Jhc2VTZXJ2ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRPcHRpb25zLCBDb21wb25lbnREZXNjcmlwdGlvbiwgQ29tcG9uZW50VHlwZSB9IGZyb20gJy4vY29tcG9uZW50L0NvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9iT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudE9wdGlvbnMge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEpvYkRlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50RGVzY3JpcHRpb24ge1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBKb2IgaW1wbGVtZW50cyBDb21wb25lbnQge1xuICB0eXBlOiBDb21wb25lbnRUeXBlLkpPQjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogSm9iT3B0aW9ucykge1xuICB9XG5cbiAgcHVibGljIG9uTW91bnQoc2VydmVyOiBCYXNlU2VydmVyKSB7XG4gICAgLy8gRG8gbm90aGluZywgaXMgYSBzdGFydHVwIG9ubHkgam9iLlxuICB9XG5cbiAgcHVibGljIG9uVW5tb3VudChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpIHtcbiAgICAvLyBEbyBub3RoaW5nLCBpcyBhIHN0YXJ0dXAgb25seSBqb2IuXG4gIH1cblxuICBwdWJsaWMgYXN5bmMgb25Jbml0KHNlcnZlcjogQmFzZVNlcnZlcikge1xuICAgIHJldHVybiB0aGlzLnJ1bihzZXJ2ZXIpO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IGRlc2NyaWJlKCk6IEpvYkRlc2NyaXB0aW9uO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyBydW4oc2VydmVyOiBCYXNlU2VydmVyKTogUHJvbWlzZTx2b2lkPjtcbn1cbiJdfQ==