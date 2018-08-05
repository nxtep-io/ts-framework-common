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
        return {
            name: this.options.name,
            status: this.isConnected() ? 'connected' : 'disconnected',
            context: Object.assign({}, this.entities())
        };
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
     * Mounts the database, registering the models and query builders.
     *
     * @param server The base server instance.
     */
    onMount(server) {
    }
    ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvRGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUE4QjtBQWlCOUIsTUFBOEIsUUFBUTtJQUlwQyxZQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxRQUFRO1FBQ2IsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1lBQ3pELE9BQU8sb0JBQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFFO1NBQ2hDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTO1FBQ2QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFBQSxDQUFDO0lBRUY7O09BRUc7SUFDVSxNQUFNOztZQUNqQixNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixDQUFDO0tBQUE7SUF1QkQ7Ozs7T0FJRztJQUNJLE9BQU8sQ0FBQyxNQUFrQjtJQUNqQyxDQUFDO0lBQUEsQ0FBQztJQUVGOzs7O09BSUc7SUFDVSxPQUFPLENBQUMsTUFBa0I7O1FBQ3ZDLENBQUM7S0FBQTtJQUFBLENBQUM7Q0FDSDtBQXJFRCwyQkFxRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCBCYXNlU2VydmVyIGZyb20gJy4vQmFzZVNlcnZlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudE9wdGlvbnMsIENvbXBvbmVudFR5cGUgfSBmcm9tICcuL2NvbXBvbmVudC9Db21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50RGVzY3JpcHRpb24gfSBmcm9tICdjb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFiYXNlT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudE9wdGlvbnMge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJhc2VEZXNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudERlc2NyaXB0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzdGF0dXM6ICdjb25uZWN0ZWQnIHwgJ2Rpc2Nvbm5lY3RlZCc7XG4gIGNvbnRleHQ6IHtcbiAgICBbbmFtZTogc3RyaW5nXTogYW55O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIERhdGFiYXNlIGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgbG9nZ2VyOiBMb2dnZXI7XG4gIHR5cGU6IENvbXBvbmVudFR5cGUuREFUQUJBU0U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IERhdGFiYXNlT3B0aW9ucykge1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzY3JpYmVzIHRoZSBkYXRhYmFzZSBpbnN0YW5jZSBmb3IgdGhlIGZyYW1ld29yay5cbiAgICovXG4gIHB1YmxpYyBkZXNjcmliZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUsXG4gICAgICBzdGF0dXM6IHRoaXMuaXNDb25uZWN0ZWQoKSA/ICdjb25uZWN0ZWQnIDogJ2Rpc2Nvbm5lY3RlZCcsXG4gICAgICBjb250ZXh0OiB7IC4uLnRoaXMuZW50aXRpZXMoKSB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBkYXRhYmFzZSB1bm1vdW50aW5nIHJvdXRpbmVzIGFuZCBkaXNjb25uZWN0LlxuICAgKi9cbiAgcHVibGljIG9uVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgZGF0YWJhc2UgaW5pdGlhbGl6YXRpb24gcm91dGluZSwgY29ubmVjdGluZyB0byByZW1vdGUgc2VydmVyLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uSW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0cyB0aGUgY3VycmVudCBkYXRhYmFzZS5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBjb25uZWN0KCk6IFByb21pc2U8RGF0YWJhc2VPcHRpb25zPjtcblxuICAvKipcbiAgICogRGlzY29ubmVjdHMgdGhlIGN1cnJlbnQgZGF0YWJhc2UuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZGlzY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgaXMgY3VycmVudGx5IGNvbm5lY3RlZCAgdG8gZGF0YWJhc2UuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgaXNDb25uZWN0ZWQoKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogR2V0cyBhIG1hcCBvZiBkYXRhYmFzZSBlbnRpdGllcyBhbmQgaXRzIHVuaXF1ZSBuYW1lcyAoc3VjaCBhcyB0YWJsZSBvciBjb2xsZWN0aW9uIG5hbWVzKS5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBlbnRpdGllcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfTtcblxuXG4gIC8qKlxuICAgKiBNb3VudHMgdGhlIGRhdGFiYXNlLCByZWdpc3RlcmluZyB0aGUgbW9kZWxzIGFuZCBxdWVyeSBidWlsZGVycy5cbiAgICogXG4gICAqIEBwYXJhbSBzZXJ2ZXIgVGhlIGJhc2Ugc2VydmVyIGluc3RhbmNlLlxuICAgKi9cbiAgcHVibGljIG9uTW91bnQoc2VydmVyOiBCYXNlU2VydmVyKSB7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgc2VydmVyIHBvc3QtaW5pdGlhbGl6YXRpb24sIG5vdCBzbyByZWxldmFudCBmb3IgYSBEYXRhYmFzZSBjb21wb25lbnQgdGhhdCB3aWxsIGJlIGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gICAqIFxuICAgKiBAcGFyYW0gc2VydmVyIFRoZSBiYXNlIHNlcnZlciBpbnN0YW5jZS5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBvblJlYWR5KHNlcnZlcjogQmFzZVNlcnZlcikge1xuICB9O1xufVxuIl19