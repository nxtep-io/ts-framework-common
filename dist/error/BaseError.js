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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2Vycm9yL0Jhc2VFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQUM3QiwwQ0FBMEM7QUFFMUMsTUFBYSxnQkFBZ0I7SUFHM0IsWUFBWSxJQUFJLEdBQUcsRUFBRTtRQUNuQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkI7U0FDRjtJQUNILENBQUM7Q0FDRjtBQVZELDRDQVVDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILE1BQXFCLFNBQVUsU0FBUSxLQUFLO0lBSTFDLFlBQVksT0FBTyxFQUFFLFVBQWUsSUFBSSxnQkFBZ0IsRUFBRTtRQUN4RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLEdBQUcsT0FBTyxjQUFjLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sWUFBWSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdGLElBQUksT0FBTyxLQUFLLENBQUMsaUJBQWlCLEtBQUssVUFBVSxFQUFFO1lBQ2pELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxRQUFRO1FBQ2IsT0FBTztZQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM5QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUs7UUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksU0FBUyxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0Y7QUExQ0QsNEJBMENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCAqIGFzIGNsZWFuU3RhY2sgZnJvbSAnY2xlYW4tc3RhY2snO1xuXG5leHBvcnQgY2xhc3MgQmFzZUVycm9yRGV0YWlscyB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcblxuICBjb25zdHJ1Y3RvcihkYXRhID0ge30pIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBlbmhhbmNlZCBlcnJvciBpbnN0YW5jZSBmb3IgdGhlIFRTIEZyYW1ld29yay5cbiAqIDxiciAvPlxuICogQmFzaWMgZmVhdHVyZXM6XG4gKiAtIFVuaXF1ZSBzdGFjayBpZCB1c2luZyBVVUlEIHY0XG4gKiAtIFNlcmlhbGl6ZXJzOiB0b09iamVjdCBhbmQgdG9KU09OXG4gKiAtIEJldHRlciBzdGFjayB0cmFjZSBtYXBwaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhY2tJZDogc3RyaW5nO1xuICBkZXRhaWxzOiBCYXNlRXJyb3JEZXRhaWxzO1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGRldGFpbHM6IGFueSA9IG5ldyBCYXNlRXJyb3JEZXRhaWxzKCkpIHtcbiAgICBjb25zdCBzdGFja0lkID0gdXVpZC52NCgpO1xuICAgIHN1cGVyKGAke21lc3NhZ2V9IChzdGFja0lkOiAke3N0YWNrSWR9KWApO1xuICAgIHRoaXMuc3RhY2tJZCA9IHN0YWNrSWQ7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHMgaW5zdGFuY2VvZiBCYXNlRXJyb3JEZXRhaWxzID8gZGV0YWlscyA6IG5ldyBCYXNlRXJyb3JEZXRhaWxzKGRldGFpbHMpO1xuXG4gICAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKG1lc3NhZ2UpKS5zdGFjaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIFBPSk8gZm9yIHRoaXMgZXJyb3IgaW5zdGFuY2UuXG4gICAqL1xuICBwdWJsaWMgdG9PYmplY3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIHN0YWNrSWQ6IHRoaXMuc3RhY2tJZCxcbiAgICAgIGRldGFpbHM6IHRoaXMuZGV0YWlscyxcbiAgICAgIHN0YWNrOiBjbGVhblN0YWNrKHRoaXMuc3RhY2spLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIEpTT04gZm9yIHRoaXMgZXJyb3IgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSBzdHJpbmdpZnkgRmxhZyB0byBlbmFibGUgc3RyaW5naWZpY2F0aW9uXG4gICAqL1xuICBwdWJsaWMgdG9KU09OKHN0cmluZ2lmeSA9IGZhbHNlKTogYW55IHtcbiAgICBjb25zdCBvYmogPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgaWYgKHN0cmluZ2lmeSkge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cbn1cbiJdfQ==