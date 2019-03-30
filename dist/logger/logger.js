"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const winston_elasticsearch_1 = require("winston-elasticsearch");
const Sentry_1 = require("./Sentry");
const utils_1 = require("./utils");
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
            /* Generates Sentry release version based on Git repository, if available */
            const SOURCE_CODE_RELEASE = process.env.SOURCE_CODE_RELEASE
                ? process.env.SENTRY_RELEASE
                : (() => {
                    try {
                        const Git = require("git-rev-sync");
                        return Git.long();
                    }
                    catch (error) {
                        console.warn('Could not get git revision hash for sentry logger', error);
                    }
                })();
            /* Add sentry transport to logger */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2xvZ2dlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsaUVBQTRGO0FBRTVGLHFDQUFtRTtBQUNuRSxtQ0FBMkQ7QUFXM0QsTUFBcUIsTUFBTTtJQWlCekI7Ozs7T0FJRztJQUNIO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx1RkFBdUYsQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUF5QixFQUFFO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLHdEQUF3RDtZQUN4RCxxREFBcUQ7WUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUF5QixFQUFFO1FBQ2xELG9DQUFvQztRQUNwQyxNQUFNLEdBQUcsR0FBRztZQUNWLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxrQkFBa0I7U0FDNUQsQ0FBQztRQUVGLDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsNEVBQTRFO1lBQzVFLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUI7Z0JBQ3pELENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtvQkFDTixJQUFJO3dCQUNGLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzt3QkFDcEMsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7cUJBQ25CO29CQUFDLE9BQU8sS0FBSyxFQUFFO3dCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsbURBQW1ELEVBQUUsS0FBSyxDQUFDLENBQUM7cUJBQzFFO2dCQUNILENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFUCxvQ0FBb0M7WUFDcEMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZSxpQkFDckMsT0FBTyxFQUFFLG1CQUFtQixFQUM1QixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFDcEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLGFBQWEsSUFDL0MsT0FBTyxDQUFDLE1BQU0sRUFDakIsQ0FBQyxDQUFDO1NBQ0w7UUFFRCxpQ0FBaUM7UUFDakMsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQW9CLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7U0FDdEU7UUFFRCxxRUFBcUU7UUFDckUsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksaUJBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLDRCQUFvQixFQUFFLENBQUMsSUFBSyxHQUFHLEVBQUcsQ0FBQztRQUFBLENBQUM7UUFFekcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7U0FDeEI7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztBQXBGRDs7R0FFRztBQUNJLHlCQUFrQixHQUFpQztJQUN4RCxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQzdCLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxPQUFPO1FBQ3ZDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDNUIsNEJBQW9CLEVBQUUsRUFDdEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFDekIsa0JBQVUsRUFBRSxDQUNiO0tBQ0YsQ0FBQztDQUNILENBQUM7QUFmSix5QkF3RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3aW5zdG9uIGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IFdpbnN0b25FbGFzdGljc2VhcmNoLCB7IEVsYXN0aWNzZWFyY2hUcmFuc3BvcnRPcHRpb25zIH0gZnJvbSAnd2luc3Rvbi1lbGFzdGljc2VhcmNoJztcbmltcG9ydCAqIGFzIFRyYW5zcG9ydCBmcm9tICd3aW5zdG9uLXRyYW5zcG9ydCc7XG5pbXBvcnQgU2VudHJ5VHJhbnNwb3J0LCB7IFNlbnRyeVRyYW5zcG9ydE9wdGlvbnMgfSBmcm9tICcuL1NlbnRyeSc7XG5pbXBvcnQgeyBlbnVtZXJhdGVFcnJvckZvcm1hdCwgbGluZUZvcm1hdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nZ2VyT3B0aW9ucyBleHRlbmRzIHdpbnN0b24uTG9nZ2VyT3B0aW9ucyB7XG4gIHNlbnRyeT86IFNlbnRyeVRyYW5zcG9ydE9wdGlvbnM7XG4gIGVsYXN0aWNzZWFyY2g/OiBFbGFzdGljc2VhcmNoVHJhbnNwb3J0T3B0aW9ucztcbiAgdHJhbnNwb3J0cz86IFRyYW5zcG9ydFtdO1xufVxuXG4vLyBFeHBvcnQgdGhlIHdpbnN0b24uTG9nZ2VyIHR5cGUgc28gd2UgZG9uJ3QgbmVlZCB0byBpbnN0YWxsIHRoZSB3aW5zdG9uIHR5cGVzIG9uIGRlcGVuZGFudHNcbmV4cG9ydCB0eXBlIExvZ2dlckluc3RhbmNlID0gd2luc3Rvbi5Mb2dnZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG4gIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2U6IExvZ2dlckluc3RhbmNlO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCB0cmFuc3BvcnRzIHRoYXkgd2lsbCBiZSBlbmFibGVkIGluIHRoZSBzaW5nbGV0b24uXG4gICAqL1xuICBzdGF0aWMgREVGQVVMVF9UUkFOU1BPUlRTOiBMb2dnZXJJbnN0YW5jZVsndHJhbnNwb3J0cyddID0gW1xuICAgIG5ldyB3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSh7XG4gICAgICBsZXZlbDogcHJvY2Vzcy5lbnYuTE9HX0xFVkVMIHx8ICdzaWxseScsXG4gICAgICBmb3JtYXQ6IHdpbnN0b24uZm9ybWF0LmNvbWJpbmUoXG4gICAgICAgIGVudW1lcmF0ZUVycm9yRm9ybWF0KCksXG4gICAgICAgIHdpbnN0b24uZm9ybWF0LmNvbG9yaXplKCksXG4gICAgICAgIGxpbmVGb3JtYXQoKSxcbiAgICAgICksXG4gICAgfSksXG4gIF07XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBsb2dnZXIgY29uc3RydWN0b3IgaXMgZGVwcmVjYXRlZCwgdXNlIFNpbXBsZUxvZ2dlci5pbml0aWFsaXplKCkgaW5zdGVhZC5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaW1wbGUgbG9nZ2VyIGNvbnN0cnVjdG9yIGlzIGRlcHJlY2F0ZWQgaW4gV2luc3RvbiAzLCB1c2UgTG9nZ2VyLmluaXRpYWxpemUoKSBpbnN0ZWFkJyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc2luZ2xldG9uIExvZ2dlciBpbnN0YW5jZSwgaW5pdGlhbGl6aW5nIGl0IGlmIG5lZWRlZC5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlIGluaXRpYWxpemF0aW9uIG9wdGlvbnMsIGZvciBjb25zdHJ1Y3RpbmcgaWYgbm90IGF2YWlsYWJsZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZShvcHRpb25zOiBMb2dnZXJPcHRpb25zID0ge30pOiBMb2dnZXJJbnN0YW5jZSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAvLyBUT0RPOiBUaGlzIGlzIGEgYmFkIHByYWN0aWNlIGFuZCBzaG91bGQgYmUgZGVwY3JlYXRlZFxuICAgICAgLy8gVW5pdGlhbGl6ZWQgbG9nZ2VyIHNob3VsZCB0aHJvdyBzcGVjaWZpYyBleGNlcHRpb25cbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLmluaXRpYWxpemUob3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBuZXcgbG9nZ2VyIGluc3RhbmNlIHVzaW5nIFdpbnN0b24gZmFjdG9yeS5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlIGxvZ2dlciBpbml0aWFsaXphdGlvbiBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUob3B0aW9uczogTG9nZ2VyT3B0aW9ucyA9IHt9KTogTG9nZ2VySW5zdGFuY2Uge1xuICAgIC8vIFByZXBhcmUgZGVmYXVsdCBjb25zb2xlIHRyYW5zcG9ydFxuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIHRyYW5zcG9ydHM6IG9wdGlvbnMudHJhbnNwb3J0cyB8fCBMb2dnZXIuREVGQVVMVF9UUkFOU1BPUlRTLFxuICAgIH07XG5cbiAgICAvLyBBZGQgc2VudHJ5IGlmIGF2YWlsYWJsZVxuICAgIGlmIChvcHRpb25zLnNlbnRyeSkge1xuICAgICAgLyogR2VuZXJhdGVzIFNlbnRyeSByZWxlYXNlIHZlcnNpb24gYmFzZWQgb24gR2l0IHJlcG9zaXRvcnksIGlmIGF2YWlsYWJsZSAqL1xuICAgICAgY29uc3QgU09VUkNFX0NPREVfUkVMRUFTRSA9IHByb2Nlc3MuZW52LlNPVVJDRV9DT0RFX1JFTEVBU0VcbiAgICAgICAgPyBwcm9jZXNzLmVudi5TRU5UUllfUkVMRUFTRVxuICAgICAgICA6ICgoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IEdpdCA9IHJlcXVpcmUoXCJnaXQtcmV2LXN5bmNcIik7XG4gICAgICAgICAgICByZXR1cm4gR2l0LmxvbmcoKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgZ2V0IGdpdCByZXZpc2lvbiBoYXNoIGZvciBzZW50cnkgbG9nZ2VyJywgZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcblxuICAgICAgLyogQWRkIHNlbnRyeSB0cmFuc3BvcnQgdG8gbG9nZ2VyICovXG4gICAgICBvcHQudHJhbnNwb3J0cy5wdXNoKG5ldyBTZW50cnlUcmFuc3BvcnQoe1xuICAgICAgICByZWxlYXNlOiBTT1VSQ0VfQ09ERV9SRUxFQVNFLFxuICAgICAgICBsZXZlbDogb3B0aW9ucy5sZXZlbCxcbiAgICAgICAgZW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCcsXG4gICAgICAgIC4uLm9wdGlvbnMuc2VudHJ5LFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8vIEFkZCBlbGFzdGljc2VhcmNoIGlmIGF2YWlsYWJsZVxuICAgIGlmIChvcHRpb25zLmVsYXN0aWNzZWFyY2gpIHtcbiAgICAgIG9wdC50cmFuc3BvcnRzLnB1c2gobmV3IFdpbnN0b25FbGFzdGljc2VhcmNoKG9wdGlvbnMuZWxhc3RpY3NlYXJjaCkpO1xuICAgIH1cblxuICAgIC8vIENvbnN0cnVjdCBuZXcgV2luc3RvbiBsb2dnZXIgaW5zdGFuY2Ugd2l0aCBlbmhhbmNlZCBlcnJvciBoYW5kbGluZ1xuICAgIGNvbnN0IGxvZ2dlciA9IHdpbnN0b24uY3JlYXRlTG9nZ2VyKHsgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5jb21iaW5lKGVudW1lcmF0ZUVycm9yRm9ybWF0KCkpLCAuLi5vcHQgfSk7O1xuXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbG9nZ2VyO1xuICAgIH1cblxuICAgIHJldHVybiBsb2dnZXI7XG4gIH1cbn0iXX0=