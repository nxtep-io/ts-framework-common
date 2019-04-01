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
const nano_errors_1 = require("nano-errors");
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
        Sentry.init(Object.assign({}, this.options));
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
            if (info instanceof nano_errors_1.BaseError) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VudHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2xvZ2dlci9TZW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2QywrQ0FBK0M7QUFFL0MsNkNBQXdDO0FBRXhDLE1BQU0seUJBQXlCLEdBQUc7SUFDaEMsS0FBSyxFQUFFLE9BQU87SUFDZCxPQUFPLEVBQUUsT0FBTztJQUNoQixJQUFJLEVBQUUsTUFBTTtJQUNaLEtBQUssRUFBRSxPQUFPO0lBQ2QsSUFBSSxFQUFFLFNBQVM7SUFDZixLQUFLLEVBQUUsT0FBTztDQUNmLENBQUM7QUFhRixNQUFxQixlQUFnQixTQUFRLFNBQVM7SUFJcEQsWUFBWSxPQUErQjtRQUN6QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixJQUFJLENBQUMsT0FBTyxtQkFDVixHQUFHLEVBQUUsRUFBRSxFQUNQLFdBQVcsRUFBRSxLQUFLLEVBQ2xCLE9BQU8sRUFBRSxLQUFLLEVBQ2QsSUFBSSxFQUFFLEVBQUUsRUFDUixLQUFLLEVBQUUsRUFBRSxJQUNOLE9BQU8sQ0FDWCxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksbUJBQU0sSUFBSSxDQUFDLE9BQU8sRUFBRyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSTs7WUFDbEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN6QjtZQUVELHdDQUF3QztZQUN4QyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssS0FBZSxJQUFJLEVBQWpCLDBDQUFpQixDQUFDO1lBRXhDLElBQUksT0FBZSxDQUFDO1lBQ3BCLE1BQU0sS0FBSyxHQUF1QjtnQkFDaEMsS0FBSztnQkFDTCxLQUFLLEVBQUUseUJBQXlCLENBQUMsS0FBSyxDQUFDO2FBQ3hDLENBQUM7WUFFRixJQUFJLElBQUksWUFBWSx1QkFBUyxFQUFFO2dCQUM3Qix3RUFBd0U7Z0JBQ3hFLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3JFLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQy9CLE9BQU8sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RDO2lCQUFNLElBQUksSUFBSSxZQUFZLEtBQUssRUFBRTtnQkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDTCxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFBQSxDQUFDO2dCQUNqRSxPQUFPLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUNyQztZQUVELElBQUk7Z0JBQ0YsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNyQjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNiO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUEzREQsa0NBMkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvbm9kZSc7XG5pbXBvcnQgKiBhcyBUcmFuc3BvcnQgZnJvbSAnd2luc3Rvbi10cmFuc3BvcnQnO1xuaW1wb3J0IHsgTG9nTGV2ZWwgfSBmcm9tICdAc2VudHJ5L2NvcmUnO1xuaW1wb3J0IHsgQmFzZUVycm9yIH0gZnJvbSAnbmFuby1lcnJvcnMnO1xuXG5jb25zdCB3aW5zdG9uTGV2ZWxUb1NlbnRyeUxldmVsID0ge1xuICBzaWxseTogJ2RlYnVnJyxcbiAgdmVyYm9zZTogJ2RlYnVnJyxcbiAgaW5mbzogJ2luZm8nLFxuICBkZWJ1ZzogJ2RlYnVnJyxcbiAgd2FybjogJ3dhcm5pbmcnLFxuICBlcnJvcjogJ2Vycm9yJ1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBTZW50cnlUcmFuc3BvcnRPcHRpb25zIGV4dGVuZHMgU2VudHJ5Lk5vZGVPcHRpb25zIHtcbiAgZHNuOiBzdHJpbmc7XG4gIHBhdGNoR2xvYmFsPzogYm9vbGVhbixcbiAgbGV2ZWw/OiBzdHJpbmc7XG4gIGluc3RhbGw/OiBib29sZWFuO1xuICBjbGllbnQ/OiBTZW50cnkuTm9kZUNsaWVudDtcbiAgbGV2ZWxzTWFwPzogYW55O1xuICB0YWdzPzogYW55O1xuICBleHRyYT86IGFueTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VudHJ5VHJhbnNwb3J0IGV4dGVuZHMgVHJhbnNwb3J0IHtcbiAgcHVibGljIGNsaWVudDogU2VudHJ5Lk5vZGVDbGllbnQ7XG4gIHB1YmxpYyBvcHRpb25zOiBTZW50cnlUcmFuc3BvcnRPcHRpb25zXG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogU2VudHJ5VHJhbnNwb3J0T3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgZHNuOiAnJyxcbiAgICAgIHBhdGNoR2xvYmFsOiBmYWxzZSxcbiAgICAgIGluc3RhbGw6IGZhbHNlLFxuICAgICAgdGFnczoge30sXG4gICAgICBleHRyYToge30sXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG5cbiAgICBTZW50cnkuaW5pdCh7IC4uLnRoaXMub3B0aW9ucyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3t9fSBpbmZvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbmZvLmxldmVsXG4gICAqIEBwYXJhbSB7RXJyb3J8c3RyaW5nfSBpbmZvLm1lc3NhZ2VcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZG9uZVxuICAgKi9cbiAgYXN5bmMgbG9nKGluZm8sIGRvbmUpIHtcbiAgICBpZiAodGhpcy5zaWxlbnQpIHtcbiAgICAgIHJldHVybiBkb25lKG51bGwsIHRydWUpO1xuICAgIH1cbiAgICBcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cHJlZmVyLWNvbnN0XG4gICAgbGV0IHsgbWVzc2FnZSwgbGV2ZWwsIC4uLmV4dHJhIH0gPSBpbmZvO1xuXG4gICAgbGV0IGV2ZW50SWQ6IHN0cmluZztcbiAgICBjb25zdCBldmVudDogU2VudHJ5LlNlbnRyeUV2ZW50ID0ge1xuICAgICAgZXh0cmEsXG4gICAgICBsZXZlbDogd2luc3RvbkxldmVsVG9TZW50cnlMZXZlbFtsZXZlbF0sXG4gICAgfTtcblxuICAgIGlmIChpbmZvIGluc3RhbmNlb2YgQmFzZUVycm9yKSB7XG4gICAgICAvLyBTdHJpcCBzdGFjayBpZCBpbmZvcm1hdGlvbiBmcm9tIG1lc3NhZ2UgZm9yIGJldHRlciBncm91cGluZyBpbiBTZW50cnlcbiAgICAgIGV2ZW50Lm1lc3NhZ2UgPSBpbmZvLm9yaWdpbmFsTWVzc2FnZS5yZXBsYWNlKC9cXChzdGFja0lkOi4rP1xcKS9nLCAnJyk7XG4gICAgICBldmVudC50YWdzID0gZXZlbnQudGFncyB8fCB7fTtcbiAgICAgIGV2ZW50LnRhZ3Muc3RhY2tJZCA9IGluZm8uc3RhY2tJZDtcbiAgICAgIGV2ZW50LmV4dHJhLnN0YWNrID0gaW5mby5zdGFjaztcbiAgICAgIGV2ZW50SWQgPSBTZW50cnkuY2FwdHVyZUV2ZW50KGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKGluZm8gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgZXZlbnRJZCA9IFNlbnRyeS5jYXB0dXJlRXhjZXB0aW9uKGluZm8pO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC5tZXNzYWdlID0gKG1lc3NhZ2UgfHwgJycpLnJlcGxhY2UoL1xcKHN0YWNrSWQ6Lis/XFwpL2csICcnKTs7XG4gICAgICBldmVudElkID0gU2VudHJ5LmNhcHR1cmVFdmVudChldmVudClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgZG9uZShudWxsLCBldmVudElkKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZG9uZShlcnJvcik7XG4gICAgfVxuICB9XG59XG4iXX0=