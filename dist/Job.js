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
    onMount(server) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.run(server);
        });
    }
    onUnmount(server) {
        return __awaiter(this, void 0, void 0, function* () {
            // Do nothing, is a startup only job.
        });
    }
}
exports.default = Job;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm9iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL0pvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBU0E7SUFFZSxPQUFPLENBQUMsTUFBYzs7WUFDakMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUM7S0FBQTtJQUVZLFNBQVMsQ0FBQyxNQUFjOztZQUNuQyxxQ0FBcUM7UUFDdkMsQ0FBQztLQUFBO0NBS0Y7QUFiRCxzQkFhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4vU2VydmVyJztcbmltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50T3B0aW9ucywgQ29tcG9uZW50RGVzY3JpcHRpb24gfSBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSm9iT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudE9wdGlvbnMge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEpvYkRlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50RGVzY3JpcHRpb24ge1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBKb2IgaW1wbGVtZW50cyBDb21wb25lbnQge1xuXG4gIHB1YmxpYyBhc3luYyBvbk1vdW50KHNlcnZlcjogU2VydmVyKSB7XG4gICAgcmV0dXJuIHRoaXMucnVuKHNlcnZlcik7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgb25Vbm1vdW50KHNlcnZlcjogU2VydmVyKSB7XG4gICAgLy8gRG8gbm90aGluZywgaXMgYSBzdGFydHVwIG9ubHkgam9iLlxuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IGRlc2NyaWJlKCk6IEpvYkRlc2NyaXB0aW9uO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyBydW4oc2VydmVyOiBTZXJ2ZXIpOiBQcm9taXNlPHZvaWQ+O1xufVxuIl19