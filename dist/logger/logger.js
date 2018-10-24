"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const SentryTransport = require("winston-raven-sentry");
class SimpleLogger extends winston.Logger {
    constructor(options = {}) {
        // Prepare default console transport
        const opt = {
            transports: options.transports || SimpleLogger.DEFAULT_TRANSPORTS,
        };
        // Add sentry if available
        if (options.sentry || process.env.SENTRY_DNS) {
            opt.transports.push(new SentryTransport(options.sentry || {
                dsn: process.env.SENTRY_DNS,
            }));
        }
        super(opt);
    }
    static getInstance(options) {
        if (!this.instance || options !== undefined) {
            const logger = new SimpleLogger(options);
            if (!this.instance) {
                this.instance = logger;
            }
            return logger;
        }
        return this.instance;
    }
}
SimpleLogger.DEFAULT_TRANSPORTS = [
    new (winston.transports.Console)({
        // TODO: Get from default configuration layer
        level: process.env.LOG_LEVEL || 'silly',
        colorize: true,
    }),
];
exports.default = SimpleLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2xvZ2dlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFFbkMsd0RBQXdEO0FBZXhELE1BQXFCLFlBQWEsU0FBUSxPQUFPLENBQUMsTUFBTTtJQVd0RCxZQUFtQixVQUErQixFQUFFO1FBQ2xELG9DQUFvQztRQUNwQyxNQUFNLEdBQUcsR0FBRztZQUNWLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxrQkFBa0I7U0FDbEUsQ0FBQztRQUVGLDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDNUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSTtnQkFDeEQsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTthQUM1QixDQUFDLENBQUMsQ0FBQztTQUNMO1FBRUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBNkI7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUMzQyxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7YUFDeEI7WUFDRCxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7O0FBbENNLCtCQUFrQixHQUFnQztJQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQiw2Q0FBNkM7UUFDN0MsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLE9BQU87UUFDdkMsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDO0NBQ0gsQ0FBQztBQVRKLCtCQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdpbnN0b24gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgKiBhcyBSYXZlbiBmcm9tICdyYXZlbic7XG5pbXBvcnQgKiBhcyBTZW50cnlUcmFuc3BvcnQgZnJvbSAnd2luc3Rvbi1yYXZlbi1zZW50cnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbnRyeVRyYW5zcG9ydE9wdGlvbnMgZXh0ZW5kcyBSYXZlbi5Db25zdHJ1Y3Rvck9wdGlvbnMge1xuICBkc246IHN0cmluZztcbiAgbGV2ZWw/OiBzdHJpbmc7XG4gIGxldmVsc01hcD86IGFueTtcbiAgaW5zdGFsbD86IGJvb2xlYW47XG4gIHJhdmVuPzogUmF2ZW4uQ2xpZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbXBsZUxvZ2dlck9wdGlvbnMgZXh0ZW5kcyB3aW5zdG9uLkxvZ2dlck9wdGlvbnMge1xuICBzZW50cnk/OiBTZW50cnlUcmFuc3BvcnRPcHRpb25zO1xuICB0cmFuc3BvcnRzPzogd2luc3Rvbi5UcmFuc3BvcnRJbnN0YW5jZVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVMb2dnZXIgZXh0ZW5kcyB3aW5zdG9uLkxvZ2dlciB7XG4gIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2U6IFNpbXBsZUxvZ2dlcjtcblxuICBzdGF0aWMgREVGQVVMVF9UUkFOU1BPUlRTOiB3aW5zdG9uLlRyYW5zcG9ydEluc3RhbmNlW10gPSBbXG4gICAgbmV3ICh3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSkoe1xuICAgICAgLy8gVE9ETzogR2V0IGZyb20gZGVmYXVsdCBjb25maWd1cmF0aW9uIGxheWVyXG4gICAgICBsZXZlbDogcHJvY2Vzcy5lbnYuTE9HX0xFVkVMIHx8ICdzaWxseScsXG4gICAgICBjb2xvcml6ZTogdHJ1ZSxcbiAgICB9KSxcbiAgXTtcblxuICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogU2ltcGxlTG9nZ2VyT3B0aW9ucyA9IHt9KSB7XG4gICAgLy8gUHJlcGFyZSBkZWZhdWx0IGNvbnNvbGUgdHJhbnNwb3J0XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgdHJhbnNwb3J0czogb3B0aW9ucy50cmFuc3BvcnRzIHx8IFNpbXBsZUxvZ2dlci5ERUZBVUxUX1RSQU5TUE9SVFMsXG4gICAgfTtcblxuICAgIC8vIEFkZCBzZW50cnkgaWYgYXZhaWxhYmxlXG4gICAgaWYgKG9wdGlvbnMuc2VudHJ5IHx8IHByb2Nlc3MuZW52LlNFTlRSWV9ETlMpIHtcbiAgICAgIG9wdC50cmFuc3BvcnRzLnB1c2gobmV3IFNlbnRyeVRyYW5zcG9ydChvcHRpb25zLnNlbnRyeSB8fCB7XG4gICAgICAgIGRzbjogcHJvY2Vzcy5lbnYuU0VOVFJZX0ROUyxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzdXBlcihvcHQpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZShvcHRpb25zPzogU2ltcGxlTG9nZ2VyT3B0aW9ucyk6IHdpbnN0b24uTG9nZ2VySW5zdGFuY2Uge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSB8fCBvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBTaW1wbGVMb2dnZXIob3B0aW9ucyk7XG5cbiAgICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gbG9nZ2VyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxvZ2dlcjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cbn1cbiJdfQ==