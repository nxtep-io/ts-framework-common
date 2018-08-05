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
        if (options.sentry) {
            opt.transports.push(new SentryTransport(options.sentry));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2xvZ2dlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFFbkMsd0RBQXdEO0FBZXhELE1BQXFCLFlBQWEsU0FBUSxPQUFPLENBQUMsTUFBTTtJQVd0RCxZQUFtQixVQUErQixFQUFFO1FBQ2xELG9DQUFvQztRQUNwQyxNQUFNLEdBQUcsR0FBRztZQUNWLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxrQkFBa0I7U0FDbEUsQ0FBQztRQUVGLDBCQUEwQjtRQUMxQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUE2QjtRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzNDLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXpDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQzthQUN4QjtZQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7QUFoQ00sK0JBQWtCLEdBQWdDO0lBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLDZDQUE2QztRQUM3QyxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksT0FBTztRQUN2QyxRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUM7Q0FDSCxDQUFDO0FBVEosK0JBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2luc3RvbiBmcm9tICd3aW5zdG9uJztcbmltcG9ydCAqIGFzIFJhdmVuIGZyb20gJ3JhdmVuJztcbmltcG9ydCAqIGFzIFNlbnRyeVRyYW5zcG9ydCBmcm9tICd3aW5zdG9uLXJhdmVuLXNlbnRyeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VudHJ5VHJhbnNwb3J0T3B0aW9ucyBleHRlbmRzIFJhdmVuLkNvbnN0cnVjdG9yT3B0aW9ucyB7XG4gIGRzbjogc3RyaW5nO1xuICBsZXZlbD86IHN0cmluZztcbiAgbGV2ZWxzTWFwPzogYW55O1xuICBpbnN0YWxsPzogYm9vbGVhbjtcbiAgcmF2ZW4/OiBSYXZlbi5DbGllbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2ltcGxlTG9nZ2VyT3B0aW9ucyBleHRlbmRzIHdpbnN0b24uTG9nZ2VyT3B0aW9ucyB7XG4gIHNlbnRyeT86IFNlbnRyeVRyYW5zcG9ydE9wdGlvbnM7XG4gIHRyYW5zcG9ydHM/OiB3aW5zdG9uLlRyYW5zcG9ydEluc3RhbmNlW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXBsZUxvZ2dlciBleHRlbmRzIHdpbnN0b24uTG9nZ2VyIHtcbiAgcHJvdGVjdGVkIHN0YXRpYyBpbnN0YW5jZTogU2ltcGxlTG9nZ2VyO1xuXG4gIHN0YXRpYyBERUZBVUxUX1RSQU5TUE9SVFM6IHdpbnN0b24uVHJhbnNwb3J0SW5zdGFuY2VbXSA9IFtcbiAgICBuZXcgKHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKSh7XG4gICAgICAvLyBUT0RPOiBHZXQgZnJvbSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gbGF5ZXJcbiAgICAgIGxldmVsOiBwcm9jZXNzLmVudi5MT0dfTEVWRUwgfHwgJ3NpbGx5JyxcbiAgICAgIGNvbG9yaXplOiB0cnVlLFxuICAgIH0pLFxuICBdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBTaW1wbGVMb2dnZXJPcHRpb25zID0ge30pIHtcbiAgICAvLyBQcmVwYXJlIGRlZmF1bHQgY29uc29sZSB0cmFuc3BvcnRcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICB0cmFuc3BvcnRzOiBvcHRpb25zLnRyYW5zcG9ydHMgfHwgU2ltcGxlTG9nZ2VyLkRFRkFVTFRfVFJBTlNQT1JUUyxcbiAgICB9O1xuXG4gICAgLy8gQWRkIHNlbnRyeSBpZiBhdmFpbGFibGVcbiAgICBpZiAob3B0aW9ucy5zZW50cnkpIHtcbiAgICAgIG9wdC50cmFuc3BvcnRzLnB1c2gobmV3IFNlbnRyeVRyYW5zcG9ydChvcHRpb25zLnNlbnRyeSkpO1xuICAgIH1cblxuICAgIHN1cGVyKG9wdCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKG9wdGlvbnM/OiBTaW1wbGVMb2dnZXJPcHRpb25zKTogd2luc3Rvbi5Mb2dnZXJJbnN0YW5jZSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlIHx8IG9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbG9nZ2VyID0gbmV3IFNpbXBsZUxvZ2dlcihvcHRpb25zKTtcblxuICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBsb2dnZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxufVxuIl19