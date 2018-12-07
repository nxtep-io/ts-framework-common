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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvRGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLHFDQUFrRDtBQVNsRCxNQUE4QixRQUFRO0lBSXBDLFlBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLGdCQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUTtRQUNiLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsY0FBYztZQUN6RCxPQUFPLG9CQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBRTtTQUNoQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUztRQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ1UsTUFBTTs7WUFDakIsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBdUJEOzs7O09BSUc7SUFDSSxPQUFPLENBQUMsTUFBa0I7SUFDakMsQ0FBQztJQUFBLENBQUM7SUFFRjs7OztPQUlHO0lBQ1UsT0FBTyxDQUFDLE1BQWtCOztRQUN2QyxDQUFDO0tBQUE7SUFBQSxDQUFDO0NBQ0g7QUF0RUQsMkJBc0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTZXJ2ZXIgZnJvbSAnLi9CYXNlU2VydmVyJztcbmltcG9ydCB7IENvbXBvbmVudERlc2NyaXB0aW9uIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRPcHRpb25zLCBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi9jb21wb25lbnQvQ29tcG9uZW50JztcbmltcG9ydCBMb2dnZXIsIHsgTG9nZ2VySW5zdGFuY2UgfSBmcm9tICcuL2xvZ2dlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJhc2VPcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50T3B0aW9ucyB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJhc2VEZXNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudERlc2NyaXB0aW9uIHtcbiAgc3RhdHVzOiAnY29ubmVjdGVkJyB8ICdkaXNjb25uZWN0ZWQnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEYXRhYmFzZSBpbXBsZW1lbnRzIENvbXBvbmVudCB7XG4gIGxvZ2dlcjogTG9nZ2VySW5zdGFuY2U7XG4gIHR5cGU6IENvbXBvbmVudFR5cGUuREFUQUJBU0U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IERhdGFiYXNlT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB0aGlzLmxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyIHx8IExvZ2dlci5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2NyaWJlcyB0aGUgZGF0YWJhc2UgaW5zdGFuY2UgZm9yIHRoZSBmcmFtZXdvcmsuXG4gICAqL1xuICBwdWJsaWMgZGVzY3JpYmUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMub3B0aW9ucy5uYW1lLFxuICAgICAgc3RhdHVzOiB0aGlzLmlzQ29ubmVjdGVkKCkgPyAnY29ubmVjdGVkJyA6ICdkaXNjb25uZWN0ZWQnLFxuICAgICAgY29udGV4dDogeyAuLi50aGlzLmVudGl0aWVzKCkgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgZGF0YWJhc2UgdW5tb3VudGluZyByb3V0aW5lcyBhbmQgZGlzY29ubmVjdC5cbiAgICovXG4gIHB1YmxpYyBvblVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGRhdGFiYXNlIGluaXRpYWxpemF0aW9uIHJvdXRpbmUsIGNvbm5lY3RpbmcgdG8gcmVtb3RlIHNlcnZlci5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBvbkluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5jb25uZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdHMgdGhlIGN1cnJlbnQgZGF0YWJhc2UuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgY29ubmVjdCgpOiBQcm9taXNlPERhdGFiYXNlT3B0aW9ucz47XG5cbiAgLyoqXG4gICAqIERpc2Nvbm5lY3RzIHRoZSBjdXJyZW50IGRhdGFiYXNlLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGRpc2Nvbm5lY3QoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGlzIGN1cnJlbnRseSBjb25uZWN0ZWQgIHRvIGRhdGFiYXNlLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGlzQ29ubmVjdGVkKCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEdldHMgYSBtYXAgb2YgZGF0YWJhc2UgZW50aXRpZXMgYW5kIGl0cyB1bmlxdWUgbmFtZXMgKHN1Y2ggYXMgdGFibGUgb3IgY29sbGVjdGlvbiBuYW1lcykuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZW50aXRpZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH07XG5cblxuICAvKipcbiAgICogTW91bnRzIHRoZSBkYXRhYmFzZSwgcmVnaXN0ZXJpbmcgdGhlIG1vZGVscyBhbmQgcXVlcnkgYnVpbGRlcnMuXG4gICAqIFxuICAgKiBAcGFyYW0gc2VydmVyIFRoZSBiYXNlIHNlcnZlciBpbnN0YW5jZS5cbiAgICovXG4gIHB1YmxpYyBvbk1vdW50KHNlcnZlcjogQmFzZVNlcnZlcikge1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHNlcnZlciBwb3N0LWluaXRpYWxpemF0aW9uLCBub3Qgc28gcmVsZXZhbnQgZm9yIGEgRGF0YWJhc2UgY29tcG9uZW50IHRoYXQgd2lsbCBiZSBhbHJlYWR5IGluaXRpYWxpemVkLlxuICAgKiBcbiAgICogQHBhcmFtIHNlcnZlciBUaGUgYmFzZSBzZXJ2ZXIgaW5zdGFuY2UuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb25SZWFkeShzZXJ2ZXI6IEJhc2VTZXJ2ZXIpIHtcbiAgfTtcbn1cbiJdfQ==