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
class Database {
    constructor(options) {
        this.options = options;
        this.options.name = options.name || this.constructor.name;
        this.logger = options.logger || nano_errors_1.Logger.getInstance();
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
        throw new nano_errors_1.BaseError('Database has no support for schema drop');
    }
    /**
     * Migrates the current database schema.
     */
    migrate(...args) {
        throw new nano_errors_1.BaseError('Database has no support for schema migration');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvRGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZDQUFnRTtBQVloRSxNQUE4QixRQUFRO0lBSXBDLFlBQW1CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLG9CQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksUUFBUTtRQUNiLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsY0FBYztZQUN6RCxPQUFPLG9CQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBRTtTQUNoQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUztRQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ1UsTUFBTTs7WUFDakIsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBMkJEOztPQUVHO0lBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSTtRQUNqQixNQUFNLElBQUksdUJBQVMsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7T0FFRztJQUNJLE9BQU8sQ0FBQyxHQUFHLElBQUk7UUFDcEIsTUFBTSxJQUFJLHVCQUFTLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE9BQU8sQ0FBQyxNQUFrQjtJQUNqQyxDQUFDO0lBQUEsQ0FBQztJQUVGOzs7O09BSUc7SUFDVSxPQUFPLENBQUMsTUFBa0I7O1FBQ3ZDLENBQUM7S0FBQTtJQUFBLENBQUM7Q0FDSDtBQXhGRCwyQkF3RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRXJyb3IsIExvZ2dlciwgTG9nZ2VySW5zdGFuY2UgfSBmcm9tICduYW5vLWVycm9ycyc7XG5pbXBvcnQgQmFzZVNlcnZlciBmcm9tICcuL0Jhc2VTZXJ2ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50RGVzY3JpcHRpb24gfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudE9wdGlvbnMsIENvbXBvbmVudFR5cGUgfSBmcm9tICcuL2NvbXBvbmVudC9Db21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFiYXNlT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudE9wdGlvbnMge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFiYXNlRGVzY3JpcHRpb24gZXh0ZW5kcyBDb21wb25lbnREZXNjcmlwdGlvbiB7XG4gIHN0YXR1czogJ2Nvbm5lY3RlZCcgfCAnZGlzY29ubmVjdGVkJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRGF0YWJhc2UgaW1wbGVtZW50cyBDb21wb25lbnQge1xuICBsb2dnZXI6IExvZ2dlckluc3RhbmNlO1xuICB0eXBlOiBDb21wb25lbnRUeXBlLkRBVEFCQVNFO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBEYXRhYmFzZU9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNjcmliZXMgdGhlIGRhdGFiYXNlIGluc3RhbmNlIGZvciB0aGUgZnJhbWV3b3JrLlxuICAgKi9cbiAgcHVibGljIGRlc2NyaWJlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm9wdGlvbnMubmFtZSxcbiAgICAgIHN0YXR1czogdGhpcy5pc0Nvbm5lY3RlZCgpID8gJ2Nvbm5lY3RlZCcgOiAnZGlzY29ubmVjdGVkJyxcbiAgICAgIGNvbnRleHQ6IHsgLi4udGhpcy5lbnRpdGllcygpIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGRhdGFiYXNlIHVubW91bnRpbmcgcm91dGluZXMgYW5kIGRpc2Nvbm5lY3QuXG4gICAqL1xuICBwdWJsaWMgb25Vbm1vdW50KCkge1xuICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBkYXRhYmFzZSBpbml0aWFsaXphdGlvbiByb3V0aW5lLCBjb25uZWN0aW5nIHRvIHJlbW90ZSBzZXJ2ZXIuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb25Jbml0KCkge1xuICAgIGF3YWl0IHRoaXMuY29ubmVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3RzIHRoZSBjdXJyZW50IGRhdGFiYXNlLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGNvbm5lY3QoKTogUHJvbWlzZTxEYXRhYmFzZU9wdGlvbnM+O1xuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0cyB0aGUgY3VycmVudCBkYXRhYmFzZS5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBkaXNjb25uZWN0KCk6IFByb21pc2U8dm9pZD47XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBpcyBjdXJyZW50bHkgY29ubmVjdGVkICB0byBkYXRhYmFzZS5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBpc0Nvbm5lY3RlZCgpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgbWFwIG9mIGRhdGFiYXNlIGVudGl0aWVzIGFuZCBpdHMgdW5pcXVlIG5hbWVzIChzdWNoIGFzIHRhYmxlIG9yIGNvbGxlY3Rpb24gbmFtZXMpLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGVudGl0aWVzKCk6IHsgW25hbWU6IHN0cmluZ106IGFueSB9O1xuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBhIHJhdyBxdWVyeSBpbiB0aGUgZGF0YWJhc2UuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgcXVlcnkocmF3UXVlcnk6IHN0cmluZywgLi4uYXJncyk6IFByb21pc2U8YW55PjtcblxuICAvKipcbiAgICogRHJvcHMgdGhlIGN1cnJlbnQgZGF0YWJhc2Ugc2NoZW1hLlxuICAgKi9cbiAgcHVibGljIGRyb3AoLi4uYXJncyk6IFByb21pc2U8YW55PiB7XG4gICAgdGhyb3cgbmV3IEJhc2VFcnJvcignRGF0YWJhc2UgaGFzIG5vIHN1cHBvcnQgZm9yIHNjaGVtYSBkcm9wJyk7XG4gIH1cblxuICAvKipcbiAgICogTWlncmF0ZXMgdGhlIGN1cnJlbnQgZGF0YWJhc2Ugc2NoZW1hLlxuICAgKi9cbiAgcHVibGljIG1pZ3JhdGUoLi4uYXJncyk6IFByb21pc2U8YW55PiB7XG4gICAgdGhyb3cgbmV3IEJhc2VFcnJvcignRGF0YWJhc2UgaGFzIG5vIHN1cHBvcnQgZm9yIHNjaGVtYSBtaWdyYXRpb24nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3VudHMgdGhlIGRhdGFiYXNlLCByZWdpc3RlcmluZyB0aGUgbW9kZWxzIGFuZCBxdWVyeSBidWlsZGVycy5cbiAgICogXG4gICAqIEBwYXJhbSBzZXJ2ZXIgVGhlIGJhc2Ugc2VydmVyIGluc3RhbmNlLlxuICAgKi9cbiAgcHVibGljIG9uTW91bnQoc2VydmVyOiBCYXNlU2VydmVyKSB7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgc2VydmVyIHBvc3QtaW5pdGlhbGl6YXRpb24sIG5vdCBzbyByZWxldmFudCBmb3IgYSBEYXRhYmFzZSBjb21wb25lbnQgdGhhdCB3aWxsIGJlIGFscmVhZHkgaW5pdGlhbGl6ZWQuXG4gICAqIFxuICAgKiBAcGFyYW0gc2VydmVyIFRoZSBiYXNlIHNlcnZlciBpbnN0YW5jZS5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBvblJlYWR5KHNlcnZlcjogQmFzZVNlcnZlcikge1xuICB9O1xufVxuIl19