"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sentry = require("@sentry/node");
const Transport = require("winston-transport");
const error_1 = require("../error");
const winstonLevelToSentryLevel = {
    silly: 'debug',
    verbose: 'debug',
    info: 'info',
    debug: 'debug',
    warn: 'warning',
    error: 'error'
};
/**
 * @param {Error} error
 */
const errorHandler = (error) => {
    console.log(error);
};
class SentryTransport extends Transport {
    constructor(options) {
        super(options);
        this.options = Object.assign({ dsn: '', patchGlobal: false, install: false, tags: {}, extra: {} }, options);
        Sentry.init(Object.assign({ logLevel: 2 }, this.options));
    }
    /**
     * @param {{}} info
     * @param {string} info.level
     * @param {Error|string} info.message
     * @param {Function} done
     */
    log(info, done) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.silent)
                return done(null, true);
            // tslint:disable-next-line:prefer-const
            let { message, level } = info, extra = __rest(info, ["message", "level"]);
            let eventId;
            const event = {
                extra,
                level: winstonLevelToSentryLevel[level],
            };
            if (info instanceof error_1.BaseError) {
                event.message = info.originalMessage;
                event.tags = event.tags || {};
                event.tags.stackId = info.stackId;
                event.extra.stack = info.stack;
                eventId = Sentry.captureEvent(event);
            }
            else if (info instanceof Error) {
                eventId = Sentry.captureException(info);
            }
            else {
                event.message = message;
                eventId = Sentry.captureEvent(event);
            }
            try {
                done(null, eventId);
            }
            catch (error) {
                done(error);
            }
        });
    }
}
exports.default = SentryTransport;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VudHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2xvZ2dlci9TZW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUV2QywrQ0FBK0M7QUFDL0Msb0NBQXFDO0FBR3JDLE1BQU0seUJBQXlCLEdBQUc7SUFDaEMsS0FBSyxFQUFFLE9BQU87SUFDZCxPQUFPLEVBQUUsT0FBTztJQUNoQixJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxPQUFPO0lBQ2QsSUFBSSxFQUFFLFNBQVM7SUFDZixLQUFLLEVBQUUsT0FBTztDQUNmLENBQUM7QUFFRjs7R0FFRztBQUNILE1BQU0sWUFBWSxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFhRixNQUFxQixlQUFnQixTQUFRLFNBQVM7SUFJcEQsWUFBWSxPQUErQjtRQUN6QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsT0FBTyxtQkFDVixHQUFHLEVBQUUsRUFBRSxFQUNQLFdBQVcsRUFBRSxLQUFLLEVBQ2xCLE9BQU8sRUFBRSxLQUFLLEVBQ2QsSUFBSSxFQUFFLEVBQUUsRUFDUixLQUFLLEVBQUUsRUFBRSxJQUNOLE9BQU8sQ0FDWCxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksaUJBQ1QsUUFBUSxFQUFFLENBQUMsSUFDUixJQUFJLENBQUMsT0FBTyxFQUFHLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0csR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJOztZQUNsQixJQUFJLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6Qyx3Q0FBd0M7WUFDeEMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEtBQWUsSUFBSSxFQUFqQiwwQ0FBaUIsQ0FBQztZQUV4QyxJQUFJLE9BQWUsQ0FBQztZQUNwQixNQUFNLEtBQUssR0FBdUI7Z0JBQ2hDLEtBQUs7Z0JBQ0wsS0FBSyxFQUFFLHlCQUF5QixDQUFDLEtBQUssQ0FBQzthQUN4QyxDQUFDO1lBRUYsSUFBSSxJQUFJLFlBQVksaUJBQVMsRUFBRTtnQkFDN0IsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNyQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMvQixPQUFPLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QztpQkFBTSxJQUFHLElBQUksWUFBWSxLQUFLLEVBQUU7Z0JBQy9CLE9BQU8sR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3hCLE9BQU8sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3JDO1lBRUQsSUFBSTtnQkFDRixJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3JCO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2I7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQXpERCxrQ0F5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTZW50cnkgZnJvbSAnQHNlbnRyeS9ub2RlJztcbmltcG9ydCAqIGFzIFBhY2thZ2UgZnJvbSAncGpzb24nO1xuaW1wb3J0ICogYXMgVHJhbnNwb3J0IGZyb20gJ3dpbnN0b24tdHJhbnNwb3J0JztcbmltcG9ydCB7IEJhc2VFcnJvciB9IGZyb20gJy4uL2Vycm9yJztcbmltcG9ydCB7IGV4Y2VwdGlvbnMgfSBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvd2luc3Rvbic7XG5cbmNvbnN0IHdpbnN0b25MZXZlbFRvU2VudHJ5TGV2ZWwgPSB7XG4gIHNpbGx5OiAnZGVidWcnLFxuICB2ZXJib3NlOiAnZGVidWcnLFxuICBpbmZvOiAnaW5mbycsXG4gIGRlYnVnOiAnZGVidWcnLFxuICB3YXJuOiAnd2FybmluZycsXG4gIGVycm9yOiAnZXJyb3InXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yXG4gKi9cbmNvbnN0IGVycm9ySGFuZGxlciA9IChlcnJvcikgPT4ge1xuICBjb25zb2xlLmxvZyhlcnJvcik7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbnRyeVRyYW5zcG9ydE9wdGlvbnMgZXh0ZW5kcyBTZW50cnkuTm9kZU9wdGlvbnMge1xuICBkc246IHN0cmluZztcbiAgcGF0Y2hHbG9iYWw/OiBmYWxzZSxcbiAgbGV2ZWw/OiBzdHJpbmc7XG4gIGluc3RhbGw/OiBib29sZWFuO1xuICBjbGllbnQ/OiBTZW50cnkuTm9kZUNsaWVudDtcbiAgbGV2ZWxzTWFwPzogYW55O1xuICB0YWdzPzogYW55O1xuICBleHRyYT86IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VudHJ5VHJhbnNwb3J0IGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgcHVibGljIGNsaWVudDogU2VudHJ5Lk5vZGVDbGllbnQ7XG4gIHB1YmxpYyBvcHRpb25zOiBTZW50cnlUcmFuc3BvcnRPcHRpb25zXG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogU2VudHJ5VHJhbnNwb3J0T3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgZHNuOiAnJyxcbiAgICAgIHBhdGNoR2xvYmFsOiBmYWxzZSxcbiAgICAgIGluc3RhbGw6IGZhbHNlLFxuICAgICAgdGFnczoge30sXG4gICAgICBleHRyYToge30sXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG5cbiAgICBTZW50cnkuaW5pdCh7IFxuICAgICAgbG9nTGV2ZWw6IDIsIFxuICAgICAgLi4udGhpcy5vcHRpb25zIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7e319IGluZm9cbiAgICogQHBhcmFtIHtzdHJpbmd9IGluZm8ubGV2ZWxcbiAgICogQHBhcmFtIHtFcnJvcnxzdHJpbmd9IGluZm8ubWVzc2FnZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkb25lXG4gICAqL1xuICBhc3luYyBsb2coaW5mbywgZG9uZSkge1xuICAgIGlmICh0aGlzLnNpbGVudCkgcmV0dXJuIGRvbmUobnVsbCwgdHJ1ZSk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1jb25zdFxuICAgIGxldCB7IG1lc3NhZ2UsIGxldmVsLCAuLi5leHRyYSB9ID0gaW5mbztcblxuICAgIGxldCBldmVudElkOiBzdHJpbmc7XG4gICAgY29uc3QgZXZlbnQ6IFNlbnRyeS5TZW50cnlFdmVudCA9IHtcbiAgICAgIGV4dHJhLFxuICAgICAgbGV2ZWw6IHdpbnN0b25MZXZlbFRvU2VudHJ5TGV2ZWxbbGV2ZWxdLFxuICAgIH07XG5cbiAgICBpZiAoaW5mbyBpbnN0YW5jZW9mIEJhc2VFcnJvcikge1xuICAgICAgZXZlbnQubWVzc2FnZSA9IGluZm8ub3JpZ2luYWxNZXNzYWdlO1xuICAgICAgZXZlbnQudGFncyA9IGV2ZW50LnRhZ3MgfHwge307XG4gICAgICBldmVudC50YWdzLnN0YWNrSWQgPSBpbmZvLnN0YWNrSWQ7XG4gICAgICBldmVudC5leHRyYS5zdGFjayA9IGluZm8uc3RhY2s7XG4gICAgICBldmVudElkID0gU2VudHJ5LmNhcHR1cmVFdmVudChldmVudCk7XG4gICAgfSBlbHNlIGlmKGluZm8gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgZXZlbnRJZCA9IFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKGluZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgIGV2ZW50SWQgPSBTZW50cnkuY2FwdHVyZUV2ZW50KGV2ZW50KVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBkb25lKG51bGwsIGV2ZW50SWQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkb25lKGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==