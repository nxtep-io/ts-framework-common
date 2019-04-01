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
const nano_errors_1 = require("nano-errors");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvRGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLHFDQUFrRDtBQUNsRCw2Q0FBd0M7QUFTeEMsTUFBOEIsUUFBUTtJQUlwQyxZQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxnQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDYixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGNBQWM7WUFDekQsT0FBTyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUU7U0FDaEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNJLFNBQVM7UUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUFBLENBQUM7SUFFRjs7T0FFRztJQUNVLE1BQU07O1lBQ2pCLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQTJCRDs7T0FFRztJQUNJLElBQUksQ0FBQyxHQUFHLElBQUk7UUFDakIsTUFBTSxJQUFJLHVCQUFTLENBQUMseUNBQXlDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPLENBQUMsR0FBRyxJQUFJO1FBQ3BCLE1BQU0sSUFBSSx1QkFBUyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxPQUFPLENBQUMsTUFBa0I7SUFDakMsQ0FBQztJQUFBLENBQUM7SUFFRjs7OztPQUlHO0lBQ1UsT0FBTyxDQUFDLE1BQWtCOztRQUN2QyxDQUFDO0tBQUE7SUFBQSxDQUFDO0NBQ0g7QUF4RkQsMkJBd0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTZXJ2ZXIgZnJvbSAnLi9CYXNlU2VydmVyJztcbmltcG9ydCB7IENvbXBvbmVudERlc2NyaXB0aW9uIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRPcHRpb25zLCBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi9jb21wb25lbnQvQ29tcG9uZW50JztcbmltcG9ydCBMb2dnZXIsIHsgTG9nZ2VySW5zdGFuY2UgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgeyBCYXNlRXJyb3IgfSBmcm9tICduYW5vLWVycm9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJhc2VPcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50T3B0aW9ucyB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJhc2VEZXNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudERlc2NyaXB0aW9uIHtcbiAgc3RhdHVzOiAnY29ubmVjdGVkJyB8ICdkaXNjb25uZWN0ZWQnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBEYXRhYmFzZSBpbXBsZW1lbnRzIENvbXBvbmVudCB7XG4gIGxvZ2dlcjogTG9nZ2VySW5zdGFuY2U7XG4gIHR5cGU6IENvbXBvbmVudFR5cGUuREFUQUJBU0U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IERhdGFiYXNlT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB0aGlzLmxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyIHx8IExvZ2dlci5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2NyaWJlcyB0aGUgZGF0YWJhc2UgaW5zdGFuY2UgZm9yIHRoZSBmcmFtZXdvcmsuXG4gICAqL1xuICBwdWJsaWMgZGVzY3JpYmUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMub3B0aW9ucy5uYW1lLFxuICAgICAgc3RhdHVzOiB0aGlzLmlzQ29ubmVjdGVkKCkgPyAnY29ubmVjdGVkJyA6ICdkaXNjb25uZWN0ZWQnLFxuICAgICAgY29udGV4dDogeyAuLi50aGlzLmVudGl0aWVzKCkgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgZGF0YWJhc2UgdW5tb3VudGluZyByb3V0aW5lcyBhbmQgZGlzY29ubmVjdC5cbiAgICovXG4gIHB1YmxpYyBvblVubW91bnQoKSB7XG4gICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIGRhdGFiYXNlIGluaXRpYWxpemF0aW9uIHJvdXRpbmUsIGNvbm5lY3RpbmcgdG8gcmVtb3RlIHNlcnZlci5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBvbkluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5jb25uZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdHMgdGhlIGN1cnJlbnQgZGF0YWJhc2UuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgY29ubmVjdCgpOiBQcm9taXNlPERhdGFiYXNlT3B0aW9ucz47XG5cbiAgLyoqXG4gICAqIERpc2Nvbm5lY3RzIHRoZSBjdXJyZW50IGRhdGFiYXNlLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGRpc2Nvbm5lY3QoKTogUHJvbWlzZTx2b2lkPjtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGlzIGN1cnJlbnRseSBjb25uZWN0ZWQgIHRvIGRhdGFiYXNlLlxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGlzQ29ubmVjdGVkKCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEdldHMgYSBtYXAgb2YgZGF0YWJhc2UgZW50aXRpZXMgYW5kIGl0cyB1bmlxdWUgbmFtZXMgKHN1Y2ggYXMgdGFibGUgb3IgY29sbGVjdGlvbiBuYW1lcykuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgZW50aXRpZXMoKTogeyBbbmFtZTogc3RyaW5nXTogYW55IH07XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIGEgcmF3IHF1ZXJ5IGluIHRoZSBkYXRhYmFzZS5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBxdWVyeShyYXdRdWVyeTogc3RyaW5nLCAuLi5hcmdzKTogUHJvbWlzZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBEcm9wcyB0aGUgY3VycmVudCBkYXRhYmFzZSBzY2hlbWEuXG4gICAqL1xuICBwdWJsaWMgZHJvcCguLi5hcmdzKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aHJvdyBuZXcgQmFzZUVycm9yKCdEYXRhYmFzZSBoYXMgbm8gc3VwcG9ydCBmb3Igc2NoZW1hIGRyb3AnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNaWdyYXRlcyB0aGUgY3VycmVudCBkYXRhYmFzZSBzY2hlbWEuXG4gICAqL1xuICBwdWJsaWMgbWlncmF0ZSguLi5hcmdzKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0aHJvdyBuZXcgQmFzZUVycm9yKCdEYXRhYmFzZSBoYXMgbm8gc3VwcG9ydCBmb3Igc2NoZW1hIG1pZ3JhdGlvbicpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdW50cyB0aGUgZGF0YWJhc2UsIHJlZ2lzdGVyaW5nIHRoZSBtb2RlbHMgYW5kIHF1ZXJ5IGJ1aWxkZXJzLlxuICAgKiBcbiAgICogQHBhcmFtIHNlcnZlciBUaGUgYmFzZSBzZXJ2ZXIgaW5zdGFuY2UuXG4gICAqL1xuICBwdWJsaWMgb25Nb3VudChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpIHtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBzZXJ2ZXIgcG9zdC1pbml0aWFsaXphdGlvbiwgbm90IHNvIHJlbGV2YW50IGZvciBhIERhdGFiYXNlIGNvbXBvbmVudCB0aGF0IHdpbGwgYmUgYWxyZWFkeSBpbml0aWFsaXplZC5cbiAgICogXG4gICAqIEBwYXJhbSBzZXJ2ZXIgVGhlIGJhc2Ugc2VydmVyIGluc3RhbmNlLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uUmVhZHkoc2VydmVyOiBCYXNlU2VydmVyKSB7XG4gIH07XG59XG4iXX0=