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
class Database {
    constructor(options) {
        this.options = options;
        this.logger = options.logger || logger_1.default.getInstance();
    }
    /**
     * Describes the database instance for the framework.
     */
    describe() {
        return { name: this.options.name || 'Database' };
    }
    /**
     * Handles the database unmounting routines and disconnect.
     */
    onUnmount() {
        this.disconnect();
    }
    ;
    /**
     * Handles the database initialization routine, connecting to remote server.
     */
    onInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
        });
    }
    /**
     * Handles server post-initialization, not so relevant for a Database component that will be already initialized.
     *
     * @param server The base server instance.
     */
    onReady(server) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    ;
}
exports.default = Database;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvRGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUE4QjtBQVU5QixNQUE4QixRQUFRO0lBSXBDLFlBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxnQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDYixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRDs7T0FFRztJQUNJLFNBQVM7UUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUFBLENBQUM7SUFFRjs7T0FFRztJQUNVLE1BQU07O1lBQ2pCLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQW1CRDs7OztPQUlHO0lBQ1UsT0FBTyxDQUFDLE1BQWtCOztRQUN2QyxDQUFDO0tBQUE7SUFBQSxDQUFDO0NBQ0g7QUFyREQsMkJBcURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgQmFzZVNlcnZlciBmcm9tICcuL0Jhc2VTZXJ2ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRPcHRpb25zLCBDb21wb25lbnREZXNjcmlwdGlvbiwgQ29tcG9uZW50VHlwZSB9IGZyb20gJy4vY29tcG9uZW50L0NvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJhc2VPcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50T3B0aW9ucyB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJhc2VEZXNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudERlc2NyaXB0aW9uIHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRGF0YWJhc2UgaW1wbGVtZW50cyBDb21wb25lbnQge1xuICBsb2dnZXI6IExvZ2dlcjtcbiAgdHlwZTogQ29tcG9uZW50VHlwZS5EQVRBQkFTRTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogRGF0YWJhc2VPcHRpb25zKSB7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNjcmliZXMgdGhlIGRhdGFiYXNlIGluc3RhbmNlIGZvciB0aGUgZnJhbWV3b3JrLlxuICAgKi9cbiAgcHVibGljIGRlc2NyaWJlKCkge1xuICAgIHJldHVybiB7IG5hbWU6IHRoaXMub3B0aW9ucy5uYW1lIHx8ICdEYXRhYmFzZScgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBkYXRhYmFzZSB1bm1vdW50aW5nIHJvdXRpbmVzIGFuZCBkaXNjb25uZWN0LlxuICAgKi9cbiAgcHVibGljIG9uVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgZGF0YWJhc2UgaW5pdGlhbGl6YXRpb24gcm91dGluZSwgY29ubmVjdGluZyB0byByZW1vdGUgc2VydmVyLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uSW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0cyB0aGUgY3VycmVudCBkYXRhYmFzZS5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBjb25uZWN0KCk6IFByb21pc2U8RGF0YWJhc2VPcHRpb25zPjtcblxuICAvKipcbiAgICogRGlzY29ubmVjdHMgdGhlIGN1cnJlbnQgZGF0YWJhc2UuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZGlzY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBNb3VudHMgdGhlIGRhdGFiYXNlLCByZWdpc3RlcmluZyB0aGUgbW9kZWxzIGFuZCBxdWVyeSBidWlsZGVycy5cbiAgICogXG4gICAqIEBwYXJhbSBzZXJ2ZXIgVGhlIGJhc2Ugc2VydmVyIGluc3RhbmNlLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IG9uTW91bnQoc2VydmVyOiBCYXNlU2VydmVyKTogdm9pZDtcblxuICAvKipcbiAgICogSGFuZGxlcyBzZXJ2ZXIgcG9zdC1pbml0aWFsaXphdGlvbiwgbm90IHNvIHJlbGV2YW50IGZvciBhIERhdGFiYXNlIGNvbXBvbmVudCB0aGF0IHdpbGwgYmUgYWxyZWFkeSBpbml0aWFsaXplZC5cbiAgICogXG4gICAqIEBwYXJhbSBzZXJ2ZXIgVGhlIGJhc2Ugc2VydmVyIGluc3RhbmNlLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uUmVhZHkoc2VydmVyOiBCYXNlU2VydmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIH07XG59XG4iXX0=