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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2xvZ2dlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtQ0FBbUM7QUFFbkMsd0RBQXdEO0FBQ3hELGlFQUE0RjtBQW1CNUYsTUFBcUIsWUFBWTtJQWEvQjs7OztPQUlHO0lBQ0g7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLGdGQUFnRixDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQStCLEVBQUU7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUErQixFQUFFO1FBQ3hELG9DQUFvQztRQUNwQyxNQUFNLEdBQUcsR0FBRztZQUNWLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxrQkFBa0I7U0FDbEUsQ0FBQztRQUVGLDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxpQ0FBaUM7UUFDakMsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQW9CLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7U0FDdEU7UUFFRCxPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7QUFyREQ7O0dBRUc7QUFDSSwrQkFBa0IsR0FBaUM7SUFDeEQsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUM3QixLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksT0FBTztRQUN2QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7S0FDbEMsQ0FBQztDQUNILENBQUM7QUFYSiwrQkF5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSYXZlbiBmcm9tICdyYXZlbic7XG5pbXBvcnQgKiBhcyB3aW5zdG9uIGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0ICogYXMgVHJhbnNwb3J0IGZyb20gJ3dpbnN0b24tdHJhbnNwb3J0JztcbmltcG9ydCAqIGFzIFNlbnRyeVRyYW5zcG9ydCBmcm9tICd3aW5zdG9uLXJhdmVuLXNlbnRyeSc7XG5pbXBvcnQgV2luc3RvbkVsYXN0aWNzZWFyY2gsIHsgRWxhc3RpY3NlYXJjaFRyYW5zcG9ydE9wdGlvbnMgfSBmcm9tICd3aW5zdG9uLWVsYXN0aWNzZWFyY2gnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpbXBsZUxvZ2dlck9wdGlvbnMgZXh0ZW5kcyB3aW5zdG9uLkxvZ2dlck9wdGlvbnMge1xuICBzZW50cnk/OiBTZW50cnlUcmFuc3BvcnRPcHRpb25zO1xuICBlbGFzdGljc2VhcmNoPzogRWxhc3RpY3NlYXJjaFRyYW5zcG9ydE9wdGlvbnM7XG4gIHRyYW5zcG9ydHM/OiBUcmFuc3BvcnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZW50cnlUcmFuc3BvcnRPcHRpb25zIGV4dGVuZHMgUmF2ZW4uQ29uc3RydWN0b3JPcHRpb25zIHtcbiAgZHNuOiBzdHJpbmc7XG4gIGxldmVsPzogc3RyaW5nO1xuICBsZXZlbHNNYXA/OiBhbnk7XG4gIGluc3RhbGw/OiBib29sZWFuO1xuICByYXZlbj86IFJhdmVuLkNsaWVudDtcbn1cblxuLy8gRXhwb3J0IHRoZSB3aW5zdG9uLkxvZ2dlciB0eXBlIHNvIHdlIGRvbid0IG5lZWQgdG8gaW5zdGFsbCB0aGUgd2luc3RvbiB0eXBlcyBvbiBkZXBlbmRhbnRzXG5leHBvcnQgdHlwZSBMb2dnZXJJbnN0YW5jZSA9IHdpbnN0b24uTG9nZ2VyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVMb2dnZXIge1xuICBwcm90ZWN0ZWQgc3RhdGljIGluc3RhbmNlOiB3aW5zdG9uLkxvZ2dlcjtcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgdHJhbnNwb3J0cyB0aGF5IHdpbGwgYmUgZW5hYmxlZCBpbiB0aGUgc2luZ2xldG9uLlxuICAgKi9cbiAgc3RhdGljIERFRkFVTFRfVFJBTlNQT1JUUzogd2luc3Rvbi5Mb2dnZXJbJ3RyYW5zcG9ydHMnXSA9IFtcbiAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoe1xuICAgICAgbGV2ZWw6IHByb2Nlc3MuZW52LkxPR19MRVZFTCB8fCAnc2lsbHknLFxuICAgICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5jb2xvcml6ZSgpLFxuICAgIH0pLFxuICBdO1xuXG4gIC8qKlxuICAgKiBTaW1wbGUgbG9nZ2VyIGNvbnN0cnVjdG9yIGlzIGRlcHJlY2F0ZWQsIHVzZSBTaW1wbGVMb2dnZXIuaW5pdGlhbGl6ZSgpIGluc3RlYWQuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2ltcGxlIGxvZ2dlciBjb25zdHJ1Y3RvciBpcyBkZXByZWNhdGVkLCB1c2UgU2ltcGxlTG9nZ2VyLmluaXRpYWxpemUoKSBpbnN0ZWFkJyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc2luZ2xldG9uIExvZ2dlciBpbnN0YW5jZSwgaW5pdGlhbGl6aW5nIGl0IGlmIG5lZWRlZC5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlIGluaXRpYWxpemF0aW9uIG9wdGlvbnMsIGZvciBjb25zdHJ1Y3RpbmcgaWYgbm90IGF2YWlsYWJsZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZShvcHRpb25zOiBTaW1wbGVMb2dnZXJPcHRpb25zID0ge30pOiB3aW5zdG9uLkxvZ2dlciB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5pbml0aWFsaXplKG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGEgbmV3IGxvZ2dlciBpbnN0YW5jZSB1c2luZyBXaW5zdG9uIGZhY3RvcnkuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIFRoZSBsb2dnZXIgaW5pdGlhbGl6YXRpb24gb3B0aW9uc1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKG9wdGlvbnM6IFNpbXBsZUxvZ2dlck9wdGlvbnMgPSB7fSk6IHdpbnN0b24uTG9nZ2VyIHtcbiAgICAvLyBQcmVwYXJlIGRlZmF1bHQgY29uc29sZSB0cmFuc3BvcnRcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICB0cmFuc3BvcnRzOiBvcHRpb25zLnRyYW5zcG9ydHMgfHwgU2ltcGxlTG9nZ2VyLkRFRkFVTFRfVFJBTlNQT1JUUyxcbiAgICB9O1xuXG4gICAgLy8gQWRkIHNlbnRyeSBpZiBhdmFpbGFibGVcbiAgICBpZiAob3B0aW9ucy5zZW50cnkpIHtcbiAgICAgIG9wdC50cmFuc3BvcnRzLnB1c2gobmV3IFNlbnRyeVRyYW5zcG9ydChvcHRpb25zLnNlbnRyeSkpO1xuICAgIH1cblxuICAgIC8vIEFkZCBlbGFzdGljc2VhcmNoIGlmIGF2YWlsYWJsZVxuICAgIGlmIChvcHRpb25zLmVsYXN0aWNzZWFyY2gpIHtcbiAgICAgIG9wdC50cmFuc3BvcnRzLnB1c2gobmV3IFdpbnN0b25FbGFzdGljc2VhcmNoKG9wdGlvbnMuZWxhc3RpY3NlYXJjaCkpO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5zdG9uLmNyZWF0ZUxvZ2dlcihvcHQpO1xuICB9XG59Il19