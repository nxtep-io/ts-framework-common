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
    toObject() {
        return {
            message: this.message,
            stackId: this.stackId,
            details: this.details,
            stack: cleanStack(this.stack),
        };
    }
    toJSON(stringify = false) {
        const obj = this.toObject();
        if (stringify) {
            return JSON.stringify(obj);
        }
        return obj;
    }
}
exports.default = BaseError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2Vycm9yL0Jhc2VFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE2QjtBQUM3QiwwQ0FBMEM7QUFFMUMsTUFBYSxnQkFBZ0I7SUFHM0IsWUFBWSxJQUFJLEdBQUcsRUFBRTtRQUNuQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkI7U0FDRjtJQUNILENBQUM7Q0FDRjtBQVZELDRDQVVDO0FBRUQsTUFBcUIsU0FBVSxTQUFRLEtBQUs7SUFJMUMsWUFBWSxPQUFPLEVBQUUsVUFBZSxJQUFJLGdCQUFnQixFQUFFO1FBQ3hELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMxQixLQUFLLENBQUMsR0FBRyxPQUFPLGNBQWMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxZQUFZLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0YsSUFBSSxPQUFPLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxVQUFVLEVBQUU7WUFDakQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUN6QztJQUNILENBQUM7SUFFTSxRQUFRO1FBQ2IsT0FBTztZQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM5QixDQUFDO0lBQ0osQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSztRQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRjtBQWxDRCw0QkFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dWlkIGZyb20gJ3V1aWQnO1xuaW1wb3J0ICogYXMgY2xlYW5TdGFjayBmcm9tICdjbGVhbi1zdGFjayc7XG5cbmV4cG9ydCBjbGFzcyBCYXNlRXJyb3JEZXRhaWxzIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEgPSB7fSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHN0YWNrSWQ6IHN0cmluZztcbiAgZGV0YWlsczogQmFzZUVycm9yRGV0YWlscztcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBkZXRhaWxzOiBhbnkgPSBuZXcgQmFzZUVycm9yRGV0YWlscygpKSB7XG4gICAgY29uc3Qgc3RhY2tJZCA9IHV1aWQudjQoKTtcbiAgICBzdXBlcihgJHttZXNzYWdlfSAoc3RhY2tJZDogJHtzdGFja0lkfSlgKTtcbiAgICB0aGlzLnN0YWNrSWQgPSBzdGFja0lkO1xuICAgIHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzIGluc3RhbmNlb2YgQmFzZUVycm9yRGV0YWlscyA/IGRldGFpbHMgOiBuZXcgQmFzZUVycm9yRGV0YWlscyhkZXRhaWxzKTtcblxuICAgIGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcihtZXNzYWdlKSkuc3RhY2s7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBzdGFja0lkOiB0aGlzLnN0YWNrSWQsXG4gICAgICBkZXRhaWxzOiB0aGlzLmRldGFpbHMsXG4gICAgICBzdGFjazogY2xlYW5TdGFjayh0aGlzLnN0YWNrKSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHRvSlNPTihzdHJpbmdpZnkgPSBmYWxzZSk6IG9iamVjdCB8IHN0cmluZyB7XG4gICAgY29uc3Qgb2JqID0gdGhpcy50b09iamVjdCgpO1xuICAgIGlmIChzdHJpbmdpZnkpIHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG59XG4iXX0=