"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Git = require("git-rev-sync");
const winston = require("winston");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2xvZ2dlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBb0M7QUFDcEMsbUNBQW1DO0FBQ25DLGlFQUE0RjtBQUU1RixxQ0FBbUU7QUFFbkUsNEVBQTRFO0FBQzVFLE1BQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUI7SUFDekQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYztJQUM1QixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7UUFDTixJQUFJO1lBQ0YsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkI7UUFBQyxPQUFPLEtBQUssRUFBRSxHQUFHO0lBQ3JCLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFXUCxNQUFxQixZQUFZO0lBZ0IvQjs7OztPQUlHO0lBQ0g7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHVGQUF1RixDQUFDLENBQUM7SUFDM0csQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQStCLEVBQUU7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsd0RBQXdEO1lBQ3hELHFEQUFxRDtZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQStCLEVBQUU7UUFDeEQsb0NBQW9DO1FBQ3BDLE1BQU0sR0FBRyxHQUFHO1lBQ1YsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLElBQUksWUFBWSxDQUFDLGtCQUFrQjtTQUNsRSxDQUFDO1FBRUYsMEJBQTBCO1FBQzFCLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFlLGlCQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQzVCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUNwQixXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxJQUMvQyxPQUFPLENBQUMsTUFBTSxFQUNqQixDQUFDLENBQUM7U0FDTDtRQUVELGlDQUFpQztRQUNqQyxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDekIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSwrQkFBb0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztTQUN0RTtRQUVELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBQSxDQUFDO1FBRTFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUFyRUQ7O0dBRUc7QUFDSSwrQkFBa0IsR0FBaUM7SUFDeEQsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUM3QixLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksT0FBTztRQUN2QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQ3hCO0tBQ0YsQ0FBQztDQUNILENBQUM7QUFkSiwrQkF5RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBHaXQgZnJvbSBcImdpdC1yZXYtc3luY1wiO1xuaW1wb3J0ICogYXMgd2luc3RvbiBmcm9tICd3aW5zdG9uJztcbmltcG9ydCBXaW5zdG9uRWxhc3RpY3NlYXJjaCwgeyBFbGFzdGljc2VhcmNoVHJhbnNwb3J0T3B0aW9ucyB9IGZyb20gJ3dpbnN0b24tZWxhc3RpY3NlYXJjaCc7XG5pbXBvcnQgKiBhcyBUcmFuc3BvcnQgZnJvbSAnd2luc3Rvbi10cmFuc3BvcnQnO1xuaW1wb3J0IFNlbnRyeVRyYW5zcG9ydCwgeyBTZW50cnlUcmFuc3BvcnRPcHRpb25zIH0gZnJvbSAnLi9TZW50cnknO1xuXG4vKiBHZW5lcmF0ZXMgU2VudHJ5IHJlbGVhc2UgdmVyc2lvbiBiYXNlZCBvbiBHaXQgcmVwb3NpdG9yeSwgaWYgYXZhaWxhYmxlICovXG5jb25zdCBTT1VSQ0VfQ09ERV9SRUxFQVNFID0gcHJvY2Vzcy5lbnYuU09VUkNFX0NPREVfUkVMRUFTRVxuICA/IHByb2Nlc3MuZW52LlNFTlRSWV9SRUxFQVNFXG4gIDogKCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEdpdC5sb25nKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICB9KSgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpbXBsZUxvZ2dlck9wdGlvbnMgZXh0ZW5kcyB3aW5zdG9uLkxvZ2dlck9wdGlvbnMge1xuICBzZW50cnk/OiBTZW50cnlUcmFuc3BvcnRPcHRpb25zO1xuICBlbGFzdGljc2VhcmNoPzogRWxhc3RpY3NlYXJjaFRyYW5zcG9ydE9wdGlvbnM7XG4gIHRyYW5zcG9ydHM/OiBUcmFuc3BvcnRbXTtcbn1cblxuLy8gRXhwb3J0IHRoZSB3aW5zdG9uLkxvZ2dlciB0eXBlIHNvIHdlIGRvbid0IG5lZWQgdG8gaW5zdGFsbCB0aGUgd2luc3RvbiB0eXBlcyBvbiBkZXBlbmRhbnRzXG5leHBvcnQgdHlwZSBMb2dnZXJJbnN0YW5jZSA9IHdpbnN0b24uTG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVMb2dnZXIge1xuICBwcm90ZWN0ZWQgc3RhdGljIGluc3RhbmNlOiBMb2dnZXJJbnN0YW5jZTtcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgdHJhbnNwb3J0cyB0aGF5IHdpbGwgYmUgZW5hYmxlZCBpbiB0aGUgc2luZ2xldG9uLlxuICAgKi9cbiAgc3RhdGljIERFRkFVTFRfVFJBTlNQT1JUUzogTG9nZ2VySW5zdGFuY2VbJ3RyYW5zcG9ydHMnXSA9IFtcbiAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoe1xuICAgICAgbGV2ZWw6IHByb2Nlc3MuZW52LkxPR19MRVZFTCB8fCAnc2lsbHknLFxuICAgICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5jb21iaW5lKFxuICAgICAgICB3aW5zdG9uLmZvcm1hdC5jb2xvcml6ZSgpLFxuICAgICAgICB3aW5zdG9uLmZvcm1hdC5zaW1wbGUoKVxuICAgICAgKSxcbiAgICB9KSxcbiAgXTtcblxuICAvKipcbiAgICogU2ltcGxlIGxvZ2dlciBjb25zdHJ1Y3RvciBpcyBkZXByZWNhdGVkLCB1c2UgU2ltcGxlTG9nZ2VyLmluaXRpYWxpemUoKSBpbnN0ZWFkLlxuICAgKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NpbXBsZSBsb2dnZXIgY29uc3RydWN0b3IgaXMgZGVwcmVjYXRlZCBpbiBXaW5zdG9uIDMsIHVzZSBMb2dnZXIuaW5pdGlhbGl6ZSgpIGluc3RlYWQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gTG9nZ2VyIGluc3RhbmNlLCBpbml0aWFsaXppbmcgaXQgaWYgbmVlZGVkLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgaW5pdGlhbGl6YXRpb24gb3B0aW9ucywgZm9yIGNvbnN0cnVjdGluZyBpZiBub3QgYXZhaWxhYmxlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKG9wdGlvbnM6IFNpbXBsZUxvZ2dlck9wdGlvbnMgPSB7fSk6IExvZ2dlckluc3RhbmNlIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIC8vIFRPRE86IFRoaXMgaXMgYSBiYWQgcHJhY3RpY2UgYW5kIHNob3VsZCBiZSBkZXBjcmVhdGVkXG4gICAgICAvLyBVbml0aWFsaXplZCBsb2dnZXIgc2hvdWxkIHRocm93IHNwZWNpZmljIGV4Y2VwdGlvblxuICAgICAgdGhpcy5pbnN0YW5jZSA9IHRoaXMuaW5pdGlhbGl6ZShvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIG5ldyBsb2dnZXIgaW5zdGFuY2UgdXNpbmcgV2luc3RvbiBmYWN0b3J5LlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgbG9nZ2VyIGluaXRpYWxpemF0aW9uIG9wdGlvbnNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZShvcHRpb25zOiBTaW1wbGVMb2dnZXJPcHRpb25zID0ge30pOiBMb2dnZXJJbnN0YW5jZSB7XG4gICAgLy8gUHJlcGFyZSBkZWZhdWx0IGNvbnNvbGUgdHJhbnNwb3J0XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgdHJhbnNwb3J0czogb3B0aW9ucy50cmFuc3BvcnRzIHx8IFNpbXBsZUxvZ2dlci5ERUZBVUxUX1RSQU5TUE9SVFMsXG4gICAgfTtcblxuICAgIC8vIEFkZCBzZW50cnkgaWYgYXZhaWxhYmxlXG4gICAgaWYgKG9wdGlvbnMuc2VudHJ5KSB7XG4gICAgICBvcHQudHJhbnNwb3J0cy5wdXNoKG5ldyBTZW50cnlUcmFuc3BvcnQoe1xuICAgICAgICByZWxlYXNlOiBTT1VSQ0VfQ09ERV9SRUxFQVNFLFxuICAgICAgICBsZXZlbDogb3B0aW9ucy5sZXZlbCxcbiAgICAgICAgZW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCcsXG4gICAgICAgIC4uLm9wdGlvbnMuc2VudHJ5LFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8vIEFkZCBlbGFzdGljc2VhcmNoIGlmIGF2YWlsYWJsZVxuICAgIGlmIChvcHRpb25zLmVsYXN0aWNzZWFyY2gpIHtcbiAgICAgIG9wdC50cmFuc3BvcnRzLnB1c2gobmV3IFdpbnN0b25FbGFzdGljc2VhcmNoKG9wdGlvbnMuZWxhc3RpY3NlYXJjaCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvZ2dlciA9IHdpbnN0b24uY3JlYXRlTG9nZ2VyKG9wdCk7O1xuXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbG9nZ2VyO1xuICAgIH1cblxuICAgIHJldHVybiBsb2dnZXI7XG4gIH1cbn0iXX0=