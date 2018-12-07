"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const cleanStack = require("clean-stack");
class BaseErrorDetails {
    constructor(data = {}) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                this[key] = data[key];
            }
        }
    }
}
exports.BaseErrorDetails = BaseErrorDetails;
/**
 * An enhanced error instance for the TS Framework.
 * <br />
 * Basic features:
 * - Unique stack id using UUID v4
 * - Serializers: toObject and toJSON
 * - Better stack trace mapping
 */
class BaseError extends Error {
    constructor(message, details = new BaseErrorDetails()) {
        const stackId = uuid.v4();
        super(`${message} (stackId: ${stackId})`);
        this.stackId = stackId;
        this.originalMessage = message;
        this.name = this.constructor.name;
        this.details = details instanceof BaseErrorDetails ? details : new BaseErrorDetails(details);
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = (new Error(message)).stack;
        }
    }
    /**
     * Generates POJO for this error instance.
     */
    toObject() {
        return {
            message: this.message,
            stackId: this.stackId,
            details: this.details,
            stack: cleanStack(this.stack),
        };
    }
    /**
     * Generates JSON for this error instance.
     *
     * @param stringify Flag to enable stringification
     */
    toJSON(stringify = false) {
        const obj = this.toObject();
        if (stringify) {
            return JSON.stringify(obj);
        }
        return obj;
    }
}
exports.default = BaseError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2Vycm9yL0Jhc2VFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQUM3QiwwQ0FBMEM7QUFFMUMsTUFBYSxnQkFBZ0I7SUFHM0IsWUFBWSxJQUFJLEdBQUcsRUFBRTtRQUNuQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkI7U0FDRjtJQUNILENBQUM7Q0FDRjtBQVZELDRDQVVDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILE1BQXFCLFNBQVUsU0FBUSxLQUFLO0lBSzFDLFlBQVksT0FBTyxFQUFFLFVBQWUsSUFBSSxnQkFBZ0IsRUFBRTtRQUN4RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLEdBQUcsT0FBTyxjQUFjLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sWUFBWSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdGLElBQUksT0FBTyxLQUFLLENBQUMsaUJBQWlCLEtBQUssVUFBVSxFQUFFO1lBQ2pELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxRQUFRO1FBQ2IsT0FBTztZQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM5QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUs7UUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksU0FBUyxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0Y7QUE1Q0QsNEJBNENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCAqIGFzIGNsZWFuU3RhY2sgZnJvbSAnY2xlYW4tc3RhY2snO1xuXG5leHBvcnQgY2xhc3MgQmFzZUVycm9yRGV0YWlscyB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICBjb25zdHJ1Y3RvcihkYXRhID0ge30pIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBlbmhhbmNlZCBlcnJvciBpbnN0YW5jZSBmb3IgdGhlIFRTIEZyYW1ld29yay5cbiAqIDxiciAvPlxuICogQmFzaWMgZmVhdHVyZXM6XG4gKiAtIFVuaXF1ZSBzdGFjayBpZCB1c2luZyBVVUlEIHY0XG4gKiAtIFNlcmlhbGl6ZXJzOiB0b09iamVjdCBhbmQgdG9KU09OXG4gKiAtIEJldHRlciBzdGFjayB0cmFjZSBtYXBwaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhY2tJZDogc3RyaW5nO1xuICBkZXRhaWxzOiBCYXNlRXJyb3JEZXRhaWxzO1xuICBvcmlnaW5hbE1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBkZXRhaWxzOiBhbnkgPSBuZXcgQmFzZUVycm9yRGV0YWlscygpKSB7XG4gICAgY29uc3Qgc3RhY2tJZCA9IHV1aWQudjQoKTtcbiAgICBzdXBlcihgJHttZXNzYWdlfSAoc3RhY2tJZDogJHtzdGFja0lkfSlgKTtcbiAgICB0aGlzLnN0YWNrSWQgPSBzdGFja0lkO1xuICAgIHRoaXMub3JpZ2luYWxNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscyBpbnN0YW5jZW9mIEJhc2VFcnJvckRldGFpbHMgPyBkZXRhaWxzIDogbmV3IEJhc2VFcnJvckRldGFpbHMoZGV0YWlscyk7XG5cbiAgICBpZiAodHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IobWVzc2FnZSkpLnN0YWNrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgUE9KTyBmb3IgdGhpcyBlcnJvciBpbnN0YW5jZS5cbiAgICovXG4gIHB1YmxpYyB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgc3RhY2tJZDogdGhpcy5zdGFja0lkLFxuICAgICAgZGV0YWlsczogdGhpcy5kZXRhaWxzLFxuICAgICAgc3RhY2s6IGNsZWFuU3RhY2sodGhpcy5zdGFjayksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgSlNPTiBmb3IgdGhpcyBlcnJvciBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHN0cmluZ2lmeSBGbGFnIHRvIGVuYWJsZSBzdHJpbmdpZmljYXRpb25cbiAgICovXG4gIHB1YmxpYyB0b0pTT04oc3RyaW5naWZ5ID0gZmFsc2UpOiBhbnkge1xuICAgIGNvbnN0IG9iaiA9IHRoaXMudG9PYmplY3QoKTtcbiAgICBpZiAoc3RyaW5naWZ5KSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxufVxuIl19