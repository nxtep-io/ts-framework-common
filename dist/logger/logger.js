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
        format: winston.format.combine(utils_1.enumerateErrorFormat(), winston.format.colorize(), utils_1.lineFormat()),
    }),
];
exports.default = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2xvZ2dlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBb0M7QUFDcEMsbUNBQW1DO0FBQ25DLGlFQUE0RjtBQUU1RixxQ0FBbUU7QUFDbkUsbUNBQTJEO0FBRTNELDRFQUE0RTtBQUM1RSxNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CO0lBQ3pELENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7SUFDNUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQ04sSUFBSTtZQUNGLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ25CO1FBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRztJQUNyQixDQUFDLENBQUMsRUFBRSxDQUFDO0FBV1AsTUFBcUIsTUFBTTtJQWlCekI7Ozs7T0FJRztJQUNIO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx1RkFBdUYsQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUF5QixFQUFFO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLHdEQUF3RDtZQUN4RCxxREFBcUQ7WUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUF5QixFQUFFO1FBQ2xELG9DQUFvQztRQUNwQyxNQUFNLEdBQUcsR0FBRztZQUNWLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxrQkFBa0I7U0FDNUQsQ0FBQztRQUVGLDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZSxpQkFDckMsT0FBTyxFQUFFLG1CQUFtQixFQUM1QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFDcEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsSUFDL0MsT0FBTyxDQUFDLE1BQU0sRUFDakIsQ0FBQyxDQUFDO1NBQ0w7UUFFRCxpQ0FBaUM7UUFDakMsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQW9CLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7U0FDdEU7UUFFRCxxRUFBcUU7UUFDckUsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksaUJBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLDRCQUFvQixFQUFFLENBQUMsSUFBSyxHQUFHLEVBQUcsQ0FBQztRQUFBLENBQUM7UUFFekcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7U0FDeEI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQXZFRDs7R0FFRztBQUNJLHlCQUFrQixHQUFpQztJQUN4RCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQzdCLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxPQUFPO1FBQ3ZDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDNUIsNEJBQW9CLEVBQUUsRUFDdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFDekIsa0JBQVUsRUFBRSxDQUNiO0tBQ0YsQ0FBQztDQUNILENBQUM7QUFmSix5QkEyRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBHaXQgZnJvbSBcImdpdC1yZXYtc3luY1wiO1xuaW1wb3J0ICogYXMgd2luc3RvbiBmcm9tICd3aW5zdG9uJztcbmltcG9ydCBXaW5zdG9uRWxhc3RpY3NlYXJjaCwgeyBFbGFzdGljc2VhcmNoVHJhbnNwb3J0T3B0aW9ucyB9IGZyb20gJ3dpbnN0b24tZWxhc3RpY3NlYXJjaCc7XG5pbXBvcnQgKiBhcyBUcmFuc3BvcnQgZnJvbSAnd2luc3Rvbi10cmFuc3BvcnQnO1xuaW1wb3J0IFNlbnRyeVRyYW5zcG9ydCwgeyBTZW50cnlUcmFuc3BvcnRPcHRpb25zIH0gZnJvbSAnLi9TZW50cnknO1xuaW1wb3J0IHsgZW51bWVyYXRlRXJyb3JGb3JtYXQsIGxpbmVGb3JtYXQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG4vKiBHZW5lcmF0ZXMgU2VudHJ5IHJlbGVhc2UgdmVyc2lvbiBiYXNlZCBvbiBHaXQgcmVwb3NpdG9yeSwgaWYgYXZhaWxhYmxlICovXG5jb25zdCBTT1VSQ0VfQ09ERV9SRUxFQVNFID0gcHJvY2Vzcy5lbnYuU09VUkNFX0NPREVfUkVMRUFTRVxuICA/IHByb2Nlc3MuZW52LlNFTlRSWV9SRUxFQVNFXG4gIDogKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEdpdC5sb25nKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICB9KSgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvZ2dlck9wdGlvbnMgZXh0ZW5kcyB3aW5zdG9uLkxvZ2dlck9wdGlvbnMge1xuICBzZW50cnk/OiBTZW50cnlUcmFuc3BvcnRPcHRpb25zO1xuICBlbGFzdGljc2VhcmNoPzogRWxhc3RpY3NlYXJjaFRyYW5zcG9ydE9wdGlvbnM7XG4gIHRyYW5zcG9ydHM/OiBUcmFuc3BvcnRbXTtcbn1cblxuLy8gRXhwb3J0IHRoZSB3aW5zdG9uLkxvZ2dlciB0eXBlIHNvIHdlIGRvbid0IG5lZWQgdG8gaW5zdGFsbCB0aGUgd2luc3RvbiB0eXBlcyBvbiBkZXBlbmRhbnRzXG5leHBvcnQgdHlwZSBMb2dnZXJJbnN0YW5jZSA9IHdpbnN0b24uTG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIge1xuICBwcm90ZWN0ZWQgc3RhdGljIGluc3RhbmNlOiBMb2dnZXJJbnN0YW5jZTtcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgdHJhbnNwb3J0cyB0aGF5IHdpbGwgYmUgZW5hYmxlZCBpbiB0aGUgc2luZ2xldG9uLlxuICAgKi9cbiAgc3RhdGljIERFRkFVTFRfVFJBTlNQT1JUUzogTG9nZ2VySW5zdGFuY2VbJ3RyYW5zcG9ydHMnXSA9IFtcbiAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoe1xuICAgICAgbGV2ZWw6IHByb2Nlc3MuZW52LkxPR19MRVZFTCB8fCAnc2lsbHknLFxuICAgICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5jb21iaW5lKFxuICAgICAgICBlbnVtZXJhdGVFcnJvckZvcm1hdCgpLFxuICAgICAgICB3aW5zdG9uLmZvcm1hdC5jb2xvcml6ZSgpLFxuICAgICAgICBsaW5lRm9ybWF0KCksXG4gICAgICApLFxuICAgIH0pLFxuICBdO1xuXG4gIC8qKlxuICAgKiBTaW1wbGUgbG9nZ2VyIGNvbnN0cnVjdG9yIGlzIGRlcHJlY2F0ZWQsIHVzZSBTaW1wbGVMb2dnZXIuaW5pdGlhbGl6ZSgpIGluc3RlYWQuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2ltcGxlIGxvZ2dlciBjb25zdHJ1Y3RvciBpcyBkZXByZWNhdGVkIGluIFdpbnN0b24gMywgdXNlIExvZ2dlci5pbml0aWFsaXplKCkgaW5zdGVhZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHNpbmdsZXRvbiBMb2dnZXIgaW5zdGFuY2UsIGluaXRpYWxpemluZyBpdCBpZiBuZWVkZWQuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIFRoZSBpbml0aWFsaXphdGlvbiBvcHRpb25zLCBmb3IgY29uc3RydWN0aW5nIGlmIG5vdCBhdmFpbGFibGVcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2Uob3B0aW9uczogTG9nZ2VyT3B0aW9ucyA9IHt9KTogTG9nZ2VySW5zdGFuY2Uge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgLy8gVE9ETzogVGhpcyBpcyBhIGJhZCBwcmFjdGljZSBhbmQgc2hvdWxkIGJlIGRlcGNyZWF0ZWRcbiAgICAgIC8vIFVuaXRpYWxpemVkIGxvZ2dlciBzaG91bGQgdGhyb3cgc3BlY2lmaWMgZXhjZXB0aW9uXG4gICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5pbml0aWFsaXplKG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGEgbmV3IGxvZ2dlciBpbnN0YW5jZSB1c2luZyBXaW5zdG9uIGZhY3RvcnkuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIFRoZSBsb2dnZXIgaW5pdGlhbGl6YXRpb24gb3B0aW9uc1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKG9wdGlvbnM6IExvZ2dlck9wdGlvbnMgPSB7fSk6IExvZ2dlckluc3RhbmNlIHtcbiAgICAvLyBQcmVwYXJlIGRlZmF1bHQgY29uc29sZSB0cmFuc3BvcnRcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICB0cmFuc3BvcnRzOiBvcHRpb25zLnRyYW5zcG9ydHMgfHwgTG9nZ2VyLkRFRkFVTFRfVFJBTlNQT1JUUyxcbiAgICB9O1xuXG4gICAgLy8gQWRkIHNlbnRyeSBpZiBhdmFpbGFibGVcbiAgICBpZiAob3B0aW9ucy5zZW50cnkpIHtcbiAgICAgIG9wdC50cmFuc3BvcnRzLnB1c2gobmV3IFNlbnRyeVRyYW5zcG9ydCh7XG4gICAgICAgIHJlbGVhc2U6IFNPVVJDRV9DT0RFX1JFTEVBU0UsXG4gICAgICAgIGxldmVsOiBvcHRpb25zLmxldmVsLFxuICAgICAgICBlbnZpcm9ubWVudDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JyxcbiAgICAgICAgLi4ub3B0aW9ucy5zZW50cnksXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIGVsYXN0aWNzZWFyY2ggaWYgYXZhaWxhYmxlXG4gICAgaWYgKG9wdGlvbnMuZWxhc3RpY3NlYXJjaCkge1xuICAgICAgb3B0LnRyYW5zcG9ydHMucHVzaChuZXcgV2luc3RvbkVsYXN0aWNzZWFyY2gob3B0aW9ucy5lbGFzdGljc2VhcmNoKSk7XG4gICAgfVxuXG4gICAgLy8gQ29uc3RydWN0IG5ldyBXaW5zdG9uIGxvZ2dlciBpbnN0YW5jZSB3aXRoIGVuaGFuY2VkIGVycm9yIGhhbmRsaW5nXG4gICAgY29uc3QgbG9nZ2VyID0gd2luc3Rvbi5jcmVhdGVMb2dnZXIoeyBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LmNvbWJpbmUoZW51bWVyYXRlRXJyb3JGb3JtYXQoKSksIC4uLm9wdCB9KTs7XG5cbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBsb2dnZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvZ2dlcjtcbiAgfVxufSJdfQ==