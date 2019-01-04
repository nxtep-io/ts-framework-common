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
const error_1 = require("./error");
class Database {
    constructor(options) {
        this.options = options;
        this.options.name = options.name || this.constructor.name;
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
     * Drops the current database schema.
     */
    drop(...args) {
        throw new error_1.BaseError('Database has no support for schema drop');
    }
    /**
     * Migrates the current database schema.
     */
    migrate(...args) {
        throw new error_1.BaseError('Database has no support for schema migration');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvRGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLHFDQUFrRDtBQUNsRCxtQ0FBb0M7QUFTcEMsTUFBOEIsUUFBUTtJQUlwQyxZQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxnQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDYixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGNBQWM7WUFDekQsT0FBTyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUU7U0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNJLFNBQVM7UUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUFBLENBQUM7SUFFRjs7T0FFRztJQUNVLE1BQU07O1lBQ2pCLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQTJCRDs7T0FFRztJQUNJLElBQUksQ0FBQyxHQUFHLElBQUk7UUFDakIsTUFBTSxJQUFJLGlCQUFTLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPLENBQUMsR0FBRyxJQUFJO1FBQ3BCLE1BQU0sSUFBSSxpQkFBUyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxPQUFPLENBQUMsTUFBa0I7SUFDakMsQ0FBQztJQUFBLENBQUM7SUFFRjs7OztPQUlHO0lBQ1UsT0FBTyxDQUFDLE1BQWtCOztRQUN2QyxDQUFDO0tBQUE7SUFBQSxDQUFDO0NBQ0g7QUF4RkQsMkJBd0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTZXJ2ZXIgZnJvbSAnLi9CYXNlU2VydmVyJztcbmltcG9ydCB7IENvbXBvbmVudERlc2NyaXB0aW9uIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRPcHRpb25zLCBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi9jb21wb25lbnQvQ29tcG9uZW50JztcbmltcG9ydCBMb2dnZXIsIHsgTG9nZ2VySW5zdGFuY2UgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyBCYXNlRXJyb3IgfSBmcm9tICcuL2Vycm9yJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhYmFzZU9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnRPcHRpb25zIHtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhYmFzZURlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50RGVzY3JpcHRpb24ge1xuICBzdGF0dXM6ICdjb25uZWN0ZWQnIHwgJ2Rpc2Nvbm5lY3RlZCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIERhdGFiYXNlIGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgbG9nZ2VyOiBMb2dnZXJJbnN0YW5jZTtcbiAgdHlwZTogQ29tcG9uZW50VHlwZS5EQVRBQkFTRTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogRGF0YWJhc2VPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzY3JpYmVzIHRoZSBkYXRhYmFzZSBpbnN0YW5jZSBmb3IgdGhlIGZyYW1ld29yay5cbiAgICovXG4gIHB1YmxpYyBkZXNjcmliZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUsXG4gICAgICBzdGF0dXM6IHRoaXMuaXNDb25uZWN0ZWQoKSA/ICdjb25uZWN0ZWQnIDogJ2Rpc2Nvbm5lY3RlZCcsXG4gICAgICBjb250ZXh0OiB7IC4uLnRoaXMuZW50aXRpZXMoKSB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBkYXRhYmFzZSB1bm1vdW50aW5nIHJvdXRpbmVzIGFuZCBkaXNjb25uZWN0LlxuICAgKi9cbiAgcHVibGljIG9uVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgZGF0YWJhc2UgaW5pdGlhbGl6YXRpb24gcm91dGluZSwgY29ubmVjdGluZyB0byByZW1vdGUgc2VydmVyLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uSW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmNvbm5lY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0cyB0aGUgY3VycmVudCBkYXRhYmFzZS5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBjb25uZWN0KCk6IFByb21pc2U8RGF0YWJhc2VPcHRpb25zPjtcblxuICAvKipcbiAgICogRGlzY29ubmVjdHMgdGhlIGN1cnJlbnQgZGF0YWJhc2UuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZGlzY29ubmVjdCgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgaXMgY3VycmVudGx5IGNvbm5lY3RlZCAgdG8gZGF0YWJhc2UuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgaXNDb25uZWN0ZWQoKTogYm9vbGVhbjtcblxuICAvKipcbiAgICogR2V0cyBhIG1hcCBvZiBkYXRhYmFzZSBlbnRpdGllcyBhbmQgaXRzIHVuaXF1ZSBuYW1lcyAoc3VjaCBhcyB0YWJsZSBvciBjb2xsZWN0aW9uIG5hbWVzKS5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBlbnRpdGllcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfTtcblxuICAvKipcbiAgICogRXhlY3V0ZXMgYSByYXcgcXVlcnkgaW4gdGhlIGRhdGFiYXNlLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IHF1ZXJ5KHJhd1F1ZXJ5OiBzdHJpbmcsIC4uLmFyZ3MpOiBQcm9taXNlPGFueT47XG5cbiAgLyoqXG4gICAqIERyb3BzIHRoZSBjdXJyZW50IGRhdGFiYXNlIHNjaGVtYS5cbiAgICovXG4gIHB1YmxpYyBkcm9wKC4uLmFyZ3MpOiBQcm9taXNlPGFueT4ge1xuICAgIHRocm93IG5ldyBCYXNlRXJyb3IoJ0RhdGFiYXNlIGhhcyBubyBzdXBwb3J0IGZvciBzY2hlbWEgZHJvcCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1pZ3JhdGVzIHRoZSBjdXJyZW50IGRhdGFiYXNlIHNjaGVtYS5cbiAgICovXG4gIHB1YmxpYyBtaWdyYXRlKC4uLmFyZ3MpOiBQcm9taXNlPGFueT4ge1xuICAgIHRocm93IG5ldyBCYXNlRXJyb3IoJ0RhdGFiYXNlIGhhcyBubyBzdXBwb3J0IGZvciBzY2hlbWEgbWlncmF0aW9uJyk7XG4gIH1cblxuICAvKipcbiAgICogTW91bnRzIHRoZSBkYXRhYmFzZSwgcmVnaXN0ZXJpbmcgdGhlIG1vZGVscyBhbmQgcXVlcnkgYnVpbGRlcnMuXG4gICAqIFxuICAgKiBAcGFyYW0gc2VydmVyIFRoZSBiYXNlIHNlcnZlciBpbnN0YW5jZS5cbiAgICovXG4gIHB1YmxpYyBvbk1vdW50KHNlcnZlcjogQmFzZVNlcnZlcikge1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHNlcnZlciBwb3N0LWluaXRpYWxpemF0aW9uLCBub3Qgc28gcmVsZXZhbnQgZm9yIGEgRGF0YWJhc2UgY29tcG9uZW50IHRoYXQgd2lsbCBiZSBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgKiBcbiAgICogQHBhcmFtIHNlcnZlciBUaGUgYmFzZSBzZXJ2ZXIgaW5zdGFuY2UuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb25SZWFkeShzZXJ2ZXI6IEJhc2VTZXJ2ZXIpIHtcbiAgfTtcbn1cbiJdfQ==