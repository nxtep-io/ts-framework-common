"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Git = require("git-rev-sync");
const winston = require("winston");
const winston_elasticsearch_1 = require("winston-elasticsearch");
const Sentry_1 = require("./Sentry");
const utils_1 = require("./utils");
/* Generates Sentry release version based on Git repository, if available */
const SOURCE_CODE_RELEASE = process.env.SOURCE_CODE_RELEASE
    ? process.env.SENTRY_RELEASE
    : (() => {
        try {
            return Git.long();
        }
        catch (error) { }
    })();
class Logger {
    /**
     * Simple logger constructor is deprecated, use SimpleLogger.initialize() instead.
     *
     * @deprecated
     */
    constructor() {
        throw new Error('Simple logger constructor is deprecated in Winston 3, use Logger.initialize() instead');
    }
    /**
     * Gets the singleton Logger instance, initializing it if needed.
     *
     * @param options The initialization options, for constructing if not available
     */
    static getInstance(options = {}) {
        if (!this.instance) {
            // TODO: This is a bad practice and should be depcreated
            // Unitialized logger should throw specific exception
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
            transports: options.transports || Logger.DEFAULT_TRANSPORTS,
        };
        // Add sentry if available
        if (options.sentry) {
            opt.transports.push(new Sentry_1.default(Object.assign({ release: SOURCE_CODE_RELEASE, level: options.level, environment: process.env.NODE_ENV || 'development' }, options.sentry)));
        }
        // Add elasticsearch if available
        if (options.elasticsearch) {
            opt.transports.push(new winston_elasticsearch_1.default(options.elasticsearch));
        }
        // Construct new Winston logger instance with enhanced error handling
        const logger = winston.createLogger(Object.assign({ format: winston.format.combine(utils_1.enumerateErrorFormat()) }, opt));
        ;
        if (!this.instance) {
            this.instance = logger;
        }
        return logger;
    }
}
/**
 * The default transports thay will be enabled in the singleton.
 */
Logger.DEFAULT_TRANSPORTS = [
    new winston.transports.Console({
        level: process.env.LOG_LEVEL || 'silly',
        format: winston.format.combine(utils_1.enumerateErrorFormat(), winston.format.timestamp(), winston.format.colorize(), utils_1.lineFormat()),
    }),
];
exports.default = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2xvZ2dlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBb0M7QUFDcEMsbUNBQW1DO0FBQ25DLGlFQUE0RjtBQUU1RixxQ0FBbUU7QUFDbkUsbUNBQTJEO0FBRTNELDRFQUE0RTtBQUM1RSxNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CO0lBQ3pELENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7SUFDNUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQ04sSUFBSTtZQUNGLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CO1FBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRztJQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDO0FBV1AsTUFBcUIsTUFBTTtJQWtCekI7Ozs7T0FJRztJQUNIO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx1RkFBdUYsQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUF5QixFQUFFO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLHdEQUF3RDtZQUN4RCxxREFBcUQ7WUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUF5QixFQUFFO1FBQ2xELG9DQUFvQztRQUNwQyxNQUFNLEdBQUcsR0FBRztZQUNWLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxrQkFBa0I7U0FDNUQsQ0FBQztRQUVGLDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZSxpQkFDckMsT0FBTyxFQUFFLG1CQUFtQixFQUM1QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFDcEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsSUFDL0MsT0FBTyxDQUFDLE1BQU0sRUFDakIsQ0FBQyxDQUFDO1NBQ0w7UUFFRCxpQ0FBaUM7UUFDakMsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQW9CLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7U0FDdEU7UUFFRCxxRUFBcUU7UUFDckUsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksaUJBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLDRCQUFvQixFQUFFLENBQUMsSUFBSyxHQUFHLEVBQUcsQ0FBQztRQUFBLENBQUM7UUFFekcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7U0FDeEI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQXhFRDs7R0FFRztBQUNJLHlCQUFrQixHQUFpQztJQUN4RCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQzdCLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxPQUFPO1FBQ3ZDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDNUIsNEJBQW9CLEVBQUUsRUFDdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFDekIsa0JBQVUsRUFBRSxDQUNiO0tBQ0YsQ0FBQztDQUNILENBQUM7QUFoQkoseUJBNEVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgR2l0IGZyb20gXCJnaXQtcmV2LXN5bmNcIjtcbmltcG9ydCAqIGFzIHdpbnN0b24gZnJvbSAnd2luc3Rvbic7XG5pbXBvcnQgV2luc3RvbkVsYXN0aWNzZWFyY2gsIHsgRWxhc3RpY3NlYXJjaFRyYW5zcG9ydE9wdGlvbnMgfSBmcm9tICd3aW5zdG9uLWVsYXN0aWNzZWFyY2gnO1xuaW1wb3J0ICogYXMgVHJhbnNwb3J0IGZyb20gJ3dpbnN0b24tdHJhbnNwb3J0JztcbmltcG9ydCBTZW50cnlUcmFuc3BvcnQsIHsgU2VudHJ5VHJhbnNwb3J0T3B0aW9ucyB9IGZyb20gJy4vU2VudHJ5JztcbmltcG9ydCB7IGVudW1lcmF0ZUVycm9yRm9ybWF0LCBsaW5lRm9ybWF0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuLyogR2VuZXJhdGVzIFNlbnRyeSByZWxlYXNlIHZlcnNpb24gYmFzZWQgb24gR2l0IHJlcG9zaXRvcnksIGlmIGF2YWlsYWJsZSAqL1xuY29uc3QgU09VUkNFX0NPREVfUkVMRUFTRSA9IHByb2Nlc3MuZW52LlNPVVJDRV9DT0RFX1JFTEVBU0VcbiAgPyBwcm9jZXNzLmVudi5TRU5UUllfUkVMRUFTRVxuICA6ICgoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBHaXQubG9uZygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgfSkoKTtcblxuZXhwb3J0IGludGVyZmFjZSBMb2dnZXJPcHRpb25zIGV4dGVuZHMgd2luc3Rvbi5Mb2dnZXJPcHRpb25zIHtcbiAgc2VudHJ5PzogU2VudHJ5VHJhbnNwb3J0T3B0aW9ucztcbiAgZWxhc3RpY3NlYXJjaD86IEVsYXN0aWNzZWFyY2hUcmFuc3BvcnRPcHRpb25zO1xuICB0cmFuc3BvcnRzPzogVHJhbnNwb3J0W107XG59XG5cbi8vIEV4cG9ydCB0aGUgd2luc3Rvbi5Mb2dnZXIgdHlwZSBzbyB3ZSBkb24ndCBuZWVkIHRvIGluc3RhbGwgdGhlIHdpbnN0b24gdHlwZXMgb24gZGVwZW5kYW50c1xuZXhwb3J0IHR5cGUgTG9nZ2VySW5zdGFuY2UgPSB3aW5zdG9uLkxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcbiAgcHJvdGVjdGVkIHN0YXRpYyBpbnN0YW5jZTogTG9nZ2VySW5zdGFuY2U7XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHRyYW5zcG9ydHMgdGhheSB3aWxsIGJlIGVuYWJsZWQgaW4gdGhlIHNpbmdsZXRvbi5cbiAgICovXG4gIHN0YXRpYyBERUZBVUxUX1RSQU5TUE9SVFM6IExvZ2dlckluc3RhbmNlWyd0cmFuc3BvcnRzJ10gPSBbXG4gICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKHtcbiAgICAgIGxldmVsOiBwcm9jZXNzLmVudi5MT0dfTEVWRUwgfHwgJ3NpbGx5JyxcbiAgICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZShcbiAgICAgICAgZW51bWVyYXRlRXJyb3JGb3JtYXQoKSxcbiAgICAgICAgd2luc3Rvbi5mb3JtYXQudGltZXN0YW1wKCksXG4gICAgICAgIHdpbnN0b24uZm9ybWF0LmNvbG9yaXplKCksXG4gICAgICAgIGxpbmVGb3JtYXQoKSxcbiAgICAgICksXG4gICAgfSksXG4gIF07XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBsb2dnZXIgY29uc3RydWN0b3IgaXMgZGVwcmVjYXRlZCwgdXNlIFNpbXBsZUxvZ2dlci5pbml0aWFsaXplKCkgaW5zdGVhZC5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaW1wbGUgbG9nZ2VyIGNvbnN0cnVjdG9yIGlzIGRlcHJlY2F0ZWQgaW4gV2luc3RvbiAzLCB1c2UgTG9nZ2VyLmluaXRpYWxpemUoKSBpbnN0ZWFkJyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc2luZ2xldG9uIExvZ2dlciBpbnN0YW5jZSwgaW5pdGlhbGl6aW5nIGl0IGlmIG5lZWRlZC5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlIGluaXRpYWxpemF0aW9uIG9wdGlvbnMsIGZvciBjb25zdHJ1Y3RpbmcgaWYgbm90IGF2YWlsYWJsZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZShvcHRpb25zOiBMb2dnZXJPcHRpb25zID0ge30pOiBMb2dnZXJJbnN0YW5jZSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAvLyBUT0RPOiBUaGlzIGlzIGEgYmFkIHByYWN0aWNlIGFuZCBzaG91bGQgYmUgZGVwY3JlYXRlZFxuICAgICAgLy8gVW5pdGlhbGl6ZWQgbG9nZ2VyIHNob3VsZCB0aHJvdyBzcGVjaWZpYyBleGNlcHRpb25cbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLmluaXRpYWxpemUob3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBuZXcgbG9nZ2VyIGluc3RhbmNlIHVzaW5nIFdpbnN0b24gZmFjdG9yeS5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlIGxvZ2dlciBpbml0aWFsaXphdGlvbiBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUob3B0aW9uczogTG9nZ2VyT3B0aW9ucyA9IHt9KTogTG9nZ2VySW5zdGFuY2Uge1xuICAgIC8vIFByZXBhcmUgZGVmYXVsdCBjb25zb2xlIHRyYW5zcG9ydFxuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIHRyYW5zcG9ydHM6IG9wdGlvbnMudHJhbnNwb3J0cyB8fCBMb2dnZXIuREVGQVVMVF9UUkFOU1BPUlRTLFxuICAgIH07XG5cbiAgICAvLyBBZGQgc2VudHJ5IGlmIGF2YWlsYWJsZVxuICAgIGlmIChvcHRpb25zLnNlbnRyeSkge1xuICAgICAgb3B0LnRyYW5zcG9ydHMucHVzaChuZXcgU2VudHJ5VHJhbnNwb3J0KHtcbiAgICAgICAgcmVsZWFzZTogU09VUkNFX0NPREVfUkVMRUFTRSxcbiAgICAgICAgbGV2ZWw6IG9wdGlvbnMubGV2ZWwsXG4gICAgICAgIGVudmlyb25tZW50OiBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnLFxuICAgICAgICAuLi5vcHRpb25zLnNlbnRyeSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgZWxhc3RpY3NlYXJjaCBpZiBhdmFpbGFibGVcbiAgICBpZiAob3B0aW9ucy5lbGFzdGljc2VhcmNoKSB7XG4gICAgICBvcHQudHJhbnNwb3J0cy5wdXNoKG5ldyBXaW5zdG9uRWxhc3RpY3NlYXJjaChvcHRpb25zLmVsYXN0aWNzZWFyY2gpKTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1Y3QgbmV3IFdpbnN0b24gbG9nZ2VyIGluc3RhbmNlIHdpdGggZW5oYW5jZWQgZXJyb3IgaGFuZGxpbmdcbiAgICBjb25zdCBsb2dnZXIgPSB3aW5zdG9uLmNyZWF0ZUxvZ2dlcih7IGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZShlbnVtZXJhdGVFcnJvckZvcm1hdCgpKSwgLi4ub3B0IH0pOztcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGxvZ2dlcjtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9nZ2VyO1xuICB9XG59Il19