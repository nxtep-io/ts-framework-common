"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const SentryTransport = require("winston-raven-sentry");
const winston_elasticsearch_1 = require("winston-elasticsearch");
class SimpleLogger {
    /**
     * Simple logger constructor is deprecated, use SimpleLogger.initialize() instead.
     *
     * @deprecated
     */
    constructor() {
        throw new Error('Simple logger constructor is deprecated, use SimpleLogger.initialize() instead');
    }
    /**
     * Gets the singleton Logger instance, initializing it if needed.
     *
     * @param options The initialization options, for constructing if not available
     */
    static getInstance(options = {}) {
        if (!this.instance) {
            this.instance = this.initialize(options);
        }
        return this.instance;
    }
    /**
     * Initialize a new logger instance using Winston factory.
     *
     * @param options The logger initialization options
     */
    static initialize(options = {}) {
        // Prepare default console transport
        const opt = {
            transports: options.transports || SimpleLogger.DEFAULT_TRANSPORTS,
        };
        // Add sentry if available
        if (options.sentry) {
            opt.transports.push(new SentryTransport(options.sentry));
        }
        // Add elasticsearch if available
        if (options.elasticsearch) {
            opt.transports.push(new winston_elasticsearch_1.default(options.elasticsearch));
        }
        return winston.createLogger(opt);
    }
}
/**
 * The default transports thay will be enabled in the singleton.
 */
SimpleLogger.DEFAULT_TRANSPORTS = [
    new winston.transports.Console({
        level: process.env.LOG_LEVEL || 'silly',
        format: winston.format.colorize(),
    }),
];
exports.default = SimpleLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvbG9nZ2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbUNBQW1DO0FBRW5DLHdEQUF3RDtBQUN4RCxpRUFBNEY7QUFnQjVGLE1BQXFCLFlBQVk7SUFhL0I7Ozs7T0FJRztJQUNIO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUErQixFQUFFO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBK0IsRUFBRTtRQUN4RCxvQ0FBb0M7UUFDcEMsTUFBTSxHQUFHLEdBQUc7WUFDVixVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsa0JBQWtCO1NBQ2xFLENBQUM7UUFFRiwwQkFBMEI7UUFDMUIsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBRUQsaUNBQWlDO1FBQ2pDLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTtZQUN6QixHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFvQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO1FBRUQsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7O0FBckREOztHQUVHO0FBQ0ksK0JBQWtCLEdBQWlDO0lBQ3hELElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDN0IsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLE9BQU87UUFDdkMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO0tBQ2xDLENBQUM7Q0FDSCxDQUFDO0FBWEosK0JBeURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmF2ZW4gZnJvbSAncmF2ZW4nO1xuaW1wb3J0ICogYXMgd2luc3RvbiBmcm9tICd3aW5zdG9uJztcbmltcG9ydCAqIGFzIFRyYW5zcG9ydCBmcm9tICd3aW5zdG9uLXRyYW5zcG9ydCc7XG5pbXBvcnQgKiBhcyBTZW50cnlUcmFuc3BvcnQgZnJvbSAnd2luc3Rvbi1yYXZlbi1zZW50cnknO1xuaW1wb3J0IFdpbnN0b25FbGFzdGljc2VhcmNoLCB7IEVsYXN0aWNzZWFyY2hUcmFuc3BvcnRPcHRpb25zIH0gZnJvbSAnd2luc3Rvbi1lbGFzdGljc2VhcmNoJztcblxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVMb2dnZXJPcHRpb25zIGV4dGVuZHMgd2luc3Rvbi5Mb2dnZXJPcHRpb25zIHtcbiAgc2VudHJ5PzogU2VudHJ5VHJhbnNwb3J0T3B0aW9ucztcbiAgZWxhc3RpY3NlYXJjaD86IEVsYXN0aWNzZWFyY2hUcmFuc3BvcnRPcHRpb25zO1xuICB0cmFuc3BvcnRzPzogVHJhbnNwb3J0W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VudHJ5VHJhbnNwb3J0T3B0aW9ucyBleHRlbmRzIFJhdmVuLkNvbnN0cnVjdG9yT3B0aW9ucyB7XG4gIGRzbjogc3RyaW5nO1xuICBsZXZlbD86IHN0cmluZztcbiAgbGV2ZWxzTWFwPzogYW55O1xuICBpbnN0YWxsPzogYm9vbGVhbjtcbiAgcmF2ZW4/OiBSYXZlbi5DbGllbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZUxvZ2dlciB7XG4gIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2U6IHdpbnN0b24uTG9nZ2VyO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCB0cmFuc3BvcnRzIHRoYXkgd2lsbCBiZSBlbmFibGVkIGluIHRoZSBzaW5nbGV0b24uXG4gICAqL1xuICBzdGF0aWMgREVGQVVMVF9UUkFOU1BPUlRTOiB3aW5zdG9uLkxvZ2dlclsndHJhbnNwb3J0cyddID0gW1xuICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSh7XG4gICAgICBsZXZlbDogcHJvY2Vzcy5lbnYuTE9HX0xFVkVMIHx8ICdzaWxseScsXG4gICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LmNvbG9yaXplKCksXG4gICAgfSksXG4gIF07XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBsb2dnZXIgY29uc3RydWN0b3IgaXMgZGVwcmVjYXRlZCwgdXNlIFNpbXBsZUxvZ2dlci5pbml0aWFsaXplKCkgaW5zdGVhZC5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaW1wbGUgbG9nZ2VyIGNvbnN0cnVjdG9yIGlzIGRlcHJlY2F0ZWQsIHVzZSBTaW1wbGVMb2dnZXIuaW5pdGlhbGl6ZSgpIGluc3RlYWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gTG9nZ2VyIGluc3RhbmNlLCBpbml0aWFsaXppbmcgaXQgaWYgbmVlZGVkLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgaW5pdGlhbGl6YXRpb24gb3B0aW9ucywgZm9yIGNvbnN0cnVjdGluZyBpZiBub3QgYXZhaWxhYmxlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKG9wdGlvbnM6IFNpbXBsZUxvZ2dlck9wdGlvbnMgPSB7fSk6IHdpbnN0b24uTG9nZ2VyIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLmluaXRpYWxpemUob3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBuZXcgbG9nZ2VyIGluc3RhbmNlIHVzaW5nIFdpbnN0b24gZmFjdG9yeS5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlIGxvZ2dlciBpbml0aWFsaXphdGlvbiBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUob3B0aW9uczogU2ltcGxlTG9nZ2VyT3B0aW9ucyA9IHt9KTogd2luc3Rvbi5Mb2dnZXIge1xuICAgIC8vIFByZXBhcmUgZGVmYXVsdCBjb25zb2xlIHRyYW5zcG9ydFxuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIHRyYW5zcG9ydHM6IG9wdGlvbnMudHJhbnNwb3J0cyB8fCBTaW1wbGVMb2dnZXIuREVGQVVMVF9UUkFOU1BPUlRTLFxuICAgIH07XG5cbiAgICAvLyBBZGQgc2VudHJ5IGlmIGF2YWlsYWJsZVxuICAgIGlmIChvcHRpb25zLnNlbnRyeSkge1xuICAgICAgb3B0LnRyYW5zcG9ydHMucHVzaChuZXcgU2VudHJ5VHJhbnNwb3J0KG9wdGlvbnMuc2VudHJ5KSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIGVsYXN0aWNzZWFyY2ggaWYgYXZhaWxhYmxlXG4gICAgaWYgKG9wdGlvbnMuZWxhc3RpY3NlYXJjaCkge1xuICAgICAgb3B0LnRyYW5zcG9ydHMucHVzaChuZXcgV2luc3RvbkVsYXN0aWNzZWFyY2gob3B0aW9ucy5lbGFzdGljc2VhcmNoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbnN0b24uY3JlYXRlTG9nZ2VyKG9wdCk7XG4gIH1cbn1cbiJdfQ==