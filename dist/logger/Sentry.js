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
            if (this.silent) {
                return done(null, true);
            }
            // tslint:disable-next-line:prefer-const
            let { message, level } = info, extra = __rest(info, ["message", "level"]);
            let eventId;
            const event = {
                extra,
                level: winstonLevelToSentryLevel[level],
            };
            if (info instanceof error_1.BaseError) {
                // Strip stack id information from message for better grouping in Sentry
                event.message = info.originalMessage.replace(/\(stackId:.+?\)/g, '');
                event.tags = event.tags || {};
                event.tags.stackId = info.stackId;
                event.extra.stack = info.stack;
                eventId = Sentry.captureEvent(event);
            }
            else if (info instanceof Error) {
                eventId = Sentry.captureException(info);
            }
            else {
                event.message = (message || '').replace(/\(stackId:.+?\)/g, '');
                ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VudHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2xvZ2dlci9TZW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2QywrQ0FBK0M7QUFDL0Msb0NBQXFDO0FBRXJDLE1BQU0seUJBQXlCLEdBQUc7SUFDaEMsS0FBSyxFQUFFLE9BQU87SUFDZCxPQUFPLEVBQUUsT0FBTztJQUNoQixJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxPQUFPO0lBQ2QsSUFBSSxFQUFFLFNBQVM7SUFDZixLQUFLLEVBQUUsT0FBTztDQUNmLENBQUM7QUFhRixNQUFxQixlQUFnQixTQUFRLFNBQVM7SUFJcEQsWUFBWSxPQUErQjtRQUN6QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsT0FBTyxtQkFDVixHQUFHLEVBQUUsRUFBRSxFQUNQLFdBQVcsRUFBRSxLQUFLLEVBQ2xCLE9BQU8sRUFBRSxLQUFLLEVBQ2QsSUFBSSxFQUFFLEVBQUUsRUFDUixLQUFLLEVBQUUsRUFBRSxJQUNOLE9BQU8sQ0FDWCxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksaUJBQ1QsUUFBUSxFQUFFLENBQUMsSUFDUixJQUFJLENBQUMsT0FBTyxFQUNmLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDRyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUk7O1lBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDekI7WUFFRCx3Q0FBd0M7WUFDeEMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEtBQWUsSUFBSSxFQUFqQiwwQ0FBaUIsQ0FBQztZQUV4QyxJQUFJLE9BQWUsQ0FBQztZQUNwQixNQUFNLEtBQUssR0FBdUI7Z0JBQ2hDLEtBQUs7Z0JBQ0wsS0FBSyxFQUFFLHlCQUF5QixDQUFDLEtBQUssQ0FBQzthQUN4QyxDQUFDO1lBRUYsSUFBSSxJQUFJLFlBQVksaUJBQVMsRUFBRTtnQkFDN0Isd0VBQXdFO2dCQUN4RSxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRSxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMvQixPQUFPLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QztpQkFBTSxJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7Z0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQUEsQ0FBQztnQkFDakUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDckM7WUFFRCxJQUFJO2dCQUNGLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDckI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDYjtRQUNILENBQUM7S0FBQTtDQUNGO0FBOURELGtDQThEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNlbnRyeSBmcm9tICdAc2VudHJ5L25vZGUnO1xuaW1wb3J0ICogYXMgVHJhbnNwb3J0IGZyb20gJ3dpbnN0b24tdHJhbnNwb3J0JztcbmltcG9ydCB7IEJhc2VFcnJvciB9IGZyb20gJy4uL2Vycm9yJztcblxuY29uc3Qgd2luc3RvbkxldmVsVG9TZW50cnlMZXZlbCA9IHtcbiAgc2lsbHk6ICdkZWJ1ZycsXG4gIHZlcmJvc2U6ICdkZWJ1ZycsXG4gIGluZm86ICdpbmZvJyxcbiAgZGVidWc6ICdkZWJ1ZycsXG4gIHdhcm46ICd3YXJuaW5nJyxcbiAgZXJyb3I6ICdlcnJvcidcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VudHJ5VHJhbnNwb3J0T3B0aW9ucyBleHRlbmRzIFNlbnRyeS5Ob2RlT3B0aW9ucyB7XG4gIGRzbjogc3RyaW5nO1xuICBwYXRjaEdsb2JhbD86IGZhbHNlLFxuICBsZXZlbD86IHN0cmluZztcbiAgaW5zdGFsbD86IGJvb2xlYW47XG4gIGNsaWVudD86IFNlbnRyeS5Ob2RlQ2xpZW50O1xuICBsZXZlbHNNYXA/OiBhbnk7XG4gIHRhZ3M/OiBhbnk7XG4gIGV4dHJhPzogYW55O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZW50cnlUcmFuc3BvcnQgZXh0ZW5kcyBUcmFuc3BvcnQge1xuICBwdWJsaWMgY2xpZW50OiBTZW50cnkuTm9kZUNsaWVudDtcbiAgcHVibGljIG9wdGlvbnM6IFNlbnRyeVRyYW5zcG9ydE9wdGlvbnNcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBTZW50cnlUcmFuc3BvcnRPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBkc246ICcnLFxuICAgICAgcGF0Y2hHbG9iYWw6IGZhbHNlLFxuICAgICAgaW5zdGFsbDogZmFsc2UsXG4gICAgICB0YWdzOiB7fSxcbiAgICAgIGV4dHJhOiB7fSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcblxuICAgIFNlbnRyeS5pbml0KHtcbiAgICAgIGxvZ0xldmVsOiAyLFxuICAgICAgLi4udGhpcy5vcHRpb25zXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHt7fX0gaW5mb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5mby5sZXZlbFxuICAgKiBAcGFyYW0ge0Vycm9yfHN0cmluZ30gaW5mby5tZXNzYWdlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRvbmVcbiAgICovXG4gIGFzeW5jIGxvZyhpbmZvLCBkb25lKSB7XG4gICAgaWYgKHRoaXMuc2lsZW50KSB7XG4gICAgICByZXR1cm4gZG9uZShudWxsLCB0cnVlKTtcbiAgICB9XG4gICAgXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnByZWZlci1jb25zdFxuICAgIGxldCB7IG1lc3NhZ2UsIGxldmVsLCAuLi5leHRyYSB9ID0gaW5mbztcblxuICAgIGxldCBldmVudElkOiBzdHJpbmc7XG4gICAgY29uc3QgZXZlbnQ6IFNlbnRyeS5TZW50cnlFdmVudCA9IHtcbiAgICAgIGV4dHJhLFxuICAgICAgbGV2ZWw6IHdpbnN0b25MZXZlbFRvU2VudHJ5TGV2ZWxbbGV2ZWxdLFxuICAgIH07XG5cbiAgICBpZiAoaW5mbyBpbnN0YW5jZW9mIEJhc2VFcnJvcikge1xuICAgICAgLy8gU3RyaXAgc3RhY2sgaWQgaW5mb3JtYXRpb24gZnJvbSBtZXNzYWdlIGZvciBiZXR0ZXIgZ3JvdXBpbmcgaW4gU2VudHJ5XG4gICAgICBldmVudC5tZXNzYWdlID0gaW5mby5vcmlnaW5hbE1lc3NhZ2UucmVwbGFjZSgvXFwoc3RhY2tJZDouKz9cXCkvZywgJycpO1xuICAgICAgZXZlbnQudGFncyA9IGV2ZW50LnRhZ3MgfHwge307XG4gICAgICBldmVudC50YWdzLnN0YWNrSWQgPSBpbmZvLnN0YWNrSWQ7XG4gICAgICBldmVudC5leHRyYS5zdGFjayA9IGluZm8uc3RhY2s7XG4gICAgICBldmVudElkID0gU2VudHJ5LmNhcHR1cmVFdmVudChldmVudCk7XG4gICAgfSBlbHNlIGlmIChpbmZvIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGV2ZW50SWQgPSBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihpbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQubWVzc2FnZSA9IChtZXNzYWdlIHx8ICcnKS5yZXBsYWNlKC9cXChzdGFja0lkOi4rP1xcKS9nLCAnJyk7O1xuICAgICAgZXZlbnRJZCA9IFNlbnRyeS5jYXB0dXJlRXZlbnQoZXZlbnQpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGRvbmUobnVsbCwgZXZlbnRJZCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRvbmUoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIl19