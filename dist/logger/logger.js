"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const Git = require("git-rev-sync");
const winston_elasticsearch_1 = require("winston-elasticsearch");
const Sentry_1 = require("./Sentry");
/* Generates Sentry release version based on Git repository, if available */
const SOURCE_CODE_RELEASE = process.env.SOURCE_CODE_RELEASE
    ? process.env.SENTRY_RELEASE
    : (() => {
        try {
            return Git.long();
        }
        catch (error) { }
    })();
class SimpleLogger {
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
            transports: options.transports || SimpleLogger.DEFAULT_TRANSPORTS,
        };
        // Add sentry if available
        if (options.sentry) {
            opt.transports.push(new Sentry_1.default(Object.assign({ release: SOURCE_CODE_RELEASE, level: options.level, environment: process.env.NODE_ENV || 'development' }, options.sentry)));
        }
        // Add elasticsearch if available
        if (options.elasticsearch) {
            opt.transports.push(new winston_elasticsearch_1.default(options.elasticsearch));
        }
        const logger = winston.createLogger(opt);
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
SimpleLogger.DEFAULT_TRANSPORTS = [
    new winston.transports.Console({
        level: process.env.LOG_LEVEL || 'silly',
        format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    }),
];
exports.default = SimpleLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2xvZ2dlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsb0NBQW9DO0FBQ3BDLGlFQUE0RjtBQUU1RixxQ0FBbUU7QUFFbkUsNEVBQTRFO0FBQzVFLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUI7SUFDekQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYztJQUM1QixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7UUFDSixJQUFJO1lBQ0YsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkI7UUFBQyxPQUFPLEtBQUssRUFBRSxHQUFFO0lBQ3BCLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFXVCxNQUFxQixZQUFZO0lBZ0IvQjs7OztPQUlHO0lBQ0g7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHVGQUF1RixDQUFDLENBQUM7SUFDM0csQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQStCLEVBQUU7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsd0RBQXdEO1lBQ3hELHFEQUFxRDtZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQStCLEVBQUU7UUFDeEQsb0NBQW9DO1FBQ3BDLE1BQU0sR0FBRyxHQUFHO1lBQ1YsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDLGtCQUFrQjtTQUNsRSxDQUFDO1FBRUYsMEJBQTBCO1FBQzFCLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFlLGlCQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQzVCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUNwQixXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxJQUMvQyxPQUFPLENBQUMsTUFBTSxFQUNqQixDQUFDLENBQUM7U0FDTDtRQUVELGlDQUFpQztRQUNqQyxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDekIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBb0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztTQUN0RTtRQUVELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBQSxDQUFDO1FBRTFDLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFyRUQ7O0dBRUc7QUFDSSwrQkFBa0IsR0FBaUM7SUFDeEQsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUM3QixLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksT0FBTztRQUN2QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQ3hCO0tBQ0YsQ0FBQztDQUNILENBQUM7QUFkSiwrQkF5RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3aW5zdG9uIGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0ICogYXMgR2l0IGZyb20gXCJnaXQtcmV2LXN5bmNcIjtcbmltcG9ydCBXaW5zdG9uRWxhc3RpY3NlYXJjaCwgeyBFbGFzdGljc2VhcmNoVHJhbnNwb3J0T3B0aW9ucyB9IGZyb20gJ3dpbnN0b24tZWxhc3RpY3NlYXJjaCc7XG5pbXBvcnQgKiBhcyBUcmFuc3BvcnQgZnJvbSAnd2luc3Rvbi10cmFuc3BvcnQnO1xuaW1wb3J0IFNlbnRyeVRyYW5zcG9ydCwgeyBTZW50cnlUcmFuc3BvcnRPcHRpb25zIH0gZnJvbSAnLi9TZW50cnknO1xuXG4vKiBHZW5lcmF0ZXMgU2VudHJ5IHJlbGVhc2UgdmVyc2lvbiBiYXNlZCBvbiBHaXQgcmVwb3NpdG9yeSwgaWYgYXZhaWxhYmxlICovXG5jb25zdCBTT1VSQ0VfQ09ERV9SRUxFQVNFID0gcHJvY2Vzcy5lbnYuU09VUkNFX0NPREVfUkVMRUFTRVxuICA/IHByb2Nlc3MuZW52LlNFTlRSWV9SRUxFQVNFXG4gIDogKCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBHaXQubG9uZygpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfSkoKTtcblxuZXhwb3J0IGludGVyZmFjZSBTaW1wbGVMb2dnZXJPcHRpb25zIGV4dGVuZHMgd2luc3Rvbi5Mb2dnZXJPcHRpb25zIHtcbiAgc2VudHJ5PzogU2VudHJ5VHJhbnNwb3J0T3B0aW9ucztcbiAgZWxhc3RpY3NlYXJjaD86IEVsYXN0aWNzZWFyY2hUcmFuc3BvcnRPcHRpb25zO1xuICB0cmFuc3BvcnRzPzogVHJhbnNwb3J0W107XG59XG5cbi8vIEV4cG9ydCB0aGUgd2luc3Rvbi5Mb2dnZXIgdHlwZSBzbyB3ZSBkb24ndCBuZWVkIHRvIGluc3RhbGwgdGhlIHdpbnN0b24gdHlwZXMgb24gZGVwZW5kYW50c1xuZXhwb3J0IHR5cGUgTG9nZ2VySW5zdGFuY2UgPSB3aW5zdG9uLkxvZ2dlcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlTG9nZ2VyIHtcbiAgcHJvdGVjdGVkIHN0YXRpYyBpbnN0YW5jZTogd2luc3Rvbi5Mb2dnZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IHRyYW5zcG9ydHMgdGhheSB3aWxsIGJlIGVuYWJsZWQgaW4gdGhlIHNpbmdsZXRvbi5cbiAgICovXG4gIHN0YXRpYyBERUZBVUxUX1RSQU5TUE9SVFM6IHdpbnN0b24uTG9nZ2VyWyd0cmFuc3BvcnRzJ10gPSBbXG4gICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKHtcbiAgICAgIGxldmVsOiBwcm9jZXNzLmVudi5MT0dfTEVWRUwgfHwgJ3NpbGx5JyxcbiAgICAgIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuY29tYmluZShcbiAgICAgICAgd2luc3Rvbi5mb3JtYXQuY29sb3JpemUoKSxcbiAgICAgICAgd2luc3Rvbi5mb3JtYXQuc2ltcGxlKClcbiAgICAgICksXG4gICAgfSksXG4gIF07XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBsb2dnZXIgY29uc3RydWN0b3IgaXMgZGVwcmVjYXRlZCwgdXNlIFNpbXBsZUxvZ2dlci5pbml0aWFsaXplKCkgaW5zdGVhZC5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaW1wbGUgbG9nZ2VyIGNvbnN0cnVjdG9yIGlzIGRlcHJlY2F0ZWQgaW4gV2luc3RvbiAzLCB1c2UgTG9nZ2VyLmluaXRpYWxpemUoKSBpbnN0ZWFkJyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc2luZ2xldG9uIExvZ2dlciBpbnN0YW5jZSwgaW5pdGlhbGl6aW5nIGl0IGlmIG5lZWRlZC5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlIGluaXRpYWxpemF0aW9uIG9wdGlvbnMsIGZvciBjb25zdHJ1Y3RpbmcgaWYgbm90IGF2YWlsYWJsZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZShvcHRpb25zOiBTaW1wbGVMb2dnZXJPcHRpb25zID0ge30pOiB3aW5zdG9uLkxvZ2dlciB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAvLyBUT0RPOiBUaGlzIGlzIGEgYmFkIHByYWN0aWNlIGFuZCBzaG91bGQgYmUgZGVwY3JlYXRlZFxuICAgICAgLy8gVW5pdGlhbGl6ZWQgbG9nZ2VyIHNob3VsZCB0aHJvdyBzcGVjaWZpYyBleGNlcHRpb25cbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLmluaXRpYWxpemUob3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBuZXcgbG9nZ2VyIGluc3RhbmNlIHVzaW5nIFdpbnN0b24gZmFjdG9yeS5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlIGxvZ2dlciBpbml0aWFsaXphdGlvbiBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUob3B0aW9uczogU2ltcGxlTG9nZ2VyT3B0aW9ucyA9IHt9KTogd2luc3Rvbi5Mb2dnZXIge1xuICAgIC8vIFByZXBhcmUgZGVmYXVsdCBjb25zb2xlIHRyYW5zcG9ydFxuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIHRyYW5zcG9ydHM6IG9wdGlvbnMudHJhbnNwb3J0cyB8fCBTaW1wbGVMb2dnZXIuREVGQVVMVF9UUkFOU1BPUlRTLFxuICAgIH07XG5cbiAgICAvLyBBZGQgc2VudHJ5IGlmIGF2YWlsYWJsZVxuICAgIGlmIChvcHRpb25zLnNlbnRyeSkge1xuICAgICAgb3B0LnRyYW5zcG9ydHMucHVzaChuZXcgU2VudHJ5VHJhbnNwb3J0KHtcbiAgICAgICAgcmVsZWFzZTogU09VUkNFX0NPREVfUkVMRUFTRSxcbiAgICAgICAgbGV2ZWw6IG9wdGlvbnMubGV2ZWwsXG4gICAgICAgIGVudmlyb25tZW50OiBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnLFxuICAgICAgICAuLi5vcHRpb25zLnNlbnRyeSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgZWxhc3RpY3NlYXJjaCBpZiBhdmFpbGFibGVcbiAgICBpZiAob3B0aW9ucy5lbGFzdGljc2VhcmNoKSB7XG4gICAgICBvcHQudHJhbnNwb3J0cy5wdXNoKG5ldyBXaW5zdG9uRWxhc3RpY3NlYXJjaChvcHRpb25zLmVsYXN0aWNzZWFyY2gpKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2dnZXIgPSB3aW5zdG9uLmNyZWF0ZUxvZ2dlcihvcHQpOztcblxuICAgIGlmKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbG9nZ2VyO1xuICAgIH1cblxuICAgIHJldHVybiBsb2dnZXI7XG4gIH1cbn0iXX0=