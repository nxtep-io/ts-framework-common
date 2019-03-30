"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
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
        let cleanStack;
        try {
            cleanStack = require('clean-stack')(this.stack);
        }
        catch (exception) {
            console.warn('Could not clean stack trace, dependency not available: "clean-stack"', exception);
            cleanStack = this.stack;
        }
        return {
            message: this.message,
            stackId: this.stackId,
            details: this.details,
            stack: cleanStack,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2Vycm9yL0Jhc2VFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQUU3QixNQUFhLGdCQUFnQjtJQUczQixZQUFZLElBQUksR0FBRyxFQUFFO1FBQ25CLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QjtTQUNGO0lBQ0gsQ0FBQztDQUNGO0FBVkQsNENBVUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsTUFBcUIsU0FBVSxTQUFRLEtBQUs7SUFLMUMsWUFBWSxPQUFPLEVBQUUsVUFBZSxJQUFJLGdCQUFnQixFQUFFO1FBQ3hELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMxQixLQUFLLENBQUMsR0FBRyxPQUFPLGNBQWMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxZQUFZLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0YsSUFBSSxPQUFPLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxVQUFVLEVBQUU7WUFDakQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDYixJQUFJLFVBQVUsQ0FBQztRQUNmLElBQUk7WUFDRixVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqRDtRQUFDLE9BQU8sU0FBUyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0VBQXNFLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDaEcsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7U0FDeEI7UUFFRCxPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsS0FBSyxFQUFFLFVBQVU7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLO1FBQzdCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLFNBQVMsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGO0FBcERELDRCQW9EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHV1aWQgZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBjbGFzcyBCYXNlRXJyb3JEZXRhaWxzIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEgPSB7fSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFuIGVuaGFuY2VkIGVycm9yIGluc3RhbmNlIGZvciB0aGUgVFMgRnJhbWV3b3JrLlxuICogPGJyIC8+XG4gKiBCYXNpYyBmZWF0dXJlczpcbiAqIC0gVW5pcXVlIHN0YWNrIGlkIHVzaW5nIFVVSUQgdjRcbiAqIC0gU2VyaWFsaXplcnM6IHRvT2JqZWN0IGFuZCB0b0pTT05cbiAqIC0gQmV0dGVyIHN0YWNrIHRyYWNlIG1hcHBpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBzdGFja0lkOiBzdHJpbmc7XG4gIGRldGFpbHM6IEJhc2VFcnJvckRldGFpbHM7XG4gIG9yaWdpbmFsTWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGRldGFpbHM6IGFueSA9IG5ldyBCYXNlRXJyb3JEZXRhaWxzKCkpIHtcbiAgICBjb25zdCBzdGFja0lkID0gdXVpZC52NCgpO1xuICAgIHN1cGVyKGAke21lc3NhZ2V9IChzdGFja0lkOiAke3N0YWNrSWR9KWApO1xuICAgIHRoaXMuc3RhY2tJZCA9IHN0YWNrSWQ7XG4gICAgdGhpcy5vcmlnaW5hbE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzIGluc3RhbmNlb2YgQmFzZUVycm9yRGV0YWlscyA/IGRldGFpbHMgOiBuZXcgQmFzZUVycm9yRGV0YWlscyhkZXRhaWxzKTtcblxuICAgIGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcihtZXNzYWdlKSkuc3RhY2s7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBQT0pPIGZvciB0aGlzIGVycm9yIGluc3RhbmNlLlxuICAgKi9cbiAgcHVibGljIHRvT2JqZWN0KCkge1xuICAgIGxldCBjbGVhblN0YWNrO1xuICAgIHRyeSB7XG4gICAgICBjbGVhblN0YWNrID0gcmVxdWlyZSgnY2xlYW4tc3RhY2snKSh0aGlzLnN0YWNrKTtcbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IGNsZWFuIHN0YWNrIHRyYWNlLCBkZXBlbmRlbmN5IG5vdCBhdmFpbGFibGU6IFwiY2xlYW4tc3RhY2tcIicsIGV4Y2VwdGlvbik7XG4gICAgICBjbGVhblN0YWNrID0gdGhpcy5zdGFja1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBzdGFja0lkOiB0aGlzLnN0YWNrSWQsXG4gICAgICBkZXRhaWxzOiB0aGlzLmRldGFpbHMsXG4gICAgICBzdGFjazogY2xlYW5TdGFjayxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBKU09OIGZvciB0aGlzIGVycm9yIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0gc3RyaW5naWZ5IEZsYWcgdG8gZW5hYmxlIHN0cmluZ2lmaWNhdGlvblxuICAgKi9cbiAgcHVibGljIHRvSlNPTihzdHJpbmdpZnkgPSBmYWxzZSk6IGFueSB7XG4gICAgY29uc3Qgb2JqID0gdGhpcy50b09iamVjdCgpO1xuICAgIGlmIChzdHJpbmdpZnkpIHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG59XG4iXX0=