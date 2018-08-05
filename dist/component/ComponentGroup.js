"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../logger");
/**
 * A higher order component to handle a group of children.
 */
class ComponentGroup {
    constructor(options) {
        this.options = options;
        this.logger = options.logger || logger_1.default.getInstance();
        this.children = options.children || [];
    }
    /**
     * Describes current component group.
     */
    describe() {
        const map = this.children
            .map((component) => {
            return { [component.constructor.name]: component };
        })
            .reduce((aggr, next) => {
            return Object.assign({}, aggr, next);
        }, {});
        return {
            name: this.options.name,
            components: map,
        };
    }
    /**
     * Handles post mount routines.
     */
    onMount(server) {
        this.logger.info(`Mounting ${this.options.name} child components`, this.children.map(c => c.describe().name));
        for (let i = 0; i < this.children.length; i += 1) {
            this.children[i].onMount(server);
        }
    }
    /**
     * Handles pre initialization routines.
     */
    onInit(server) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info(`Initializing ${this.options.name} child components`, this.children.map(c => c.describe().name));
            for (let i = 0; i < this.children.length; i += 1) {
                yield this.children[i].onInit(server);
            }
        });
    }
    /**
     * Handles post initialization routines.
     */
    onReady(server) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.children.length; i += 1) {
                if (this.children[i].onReady) {
                    yield this.children[i].onReady(server);
                }
            }
        });
    }
    /**
     * Handles post unmount routines.
     */
    onUnmount(server) {
        for (let i = 0; i < this.children.length; i += 1) {
            this.children[i].onUnmount(server);
        }
    }
    /**
     * Gets currently registered components.
     */
    components() {
        return this.children;
    }
    /**
     * Register a new component.
     */
    component(component) {
        return this.children.push(component);
    }
}
exports.default = ComponentGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50R3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50L0NvbXBvbmVudEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBK0I7QUFpQi9COztHQUVHO0FBQ0gsTUFBOEIsY0FBYztJQUsxQyxZQUFtQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUTthQUN0QixHQUFHLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUIsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUNyRCxDQUFDLENBQUM7YUFDRCxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDckIseUJBQVksSUFBSSxFQUFLLElBQUksRUFBRztRQUM5QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFVCxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUN2QixVQUFVLEVBQUUsR0FBRztTQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksT0FBTyxDQUFDLE1BQWtCO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFOUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDVSxNQUFNLENBQUMsTUFBa0I7O1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEQsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ1UsT0FBTyxDQUFDLE1BQWtCOztZQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRTtvQkFDNUIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDeEM7YUFDRjtRQUNILENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ0ksU0FBUyxDQUFDLE1BQWtCO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTLENBQUMsU0FBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUFsRkQsaUNBa0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ2dlciBmcm9tICcuLi9sb2dnZXInO1xuaW1wb3J0IEJhc2VTZXJ2ZXIgZnJvbSAnLi4vQmFzZVNlcnZlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudERlc2NyaXB0aW9uLCBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudEdyb3VwT3B0aW9ucyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGxvZ2dlcj86IExvZ2dlcjtcbiAgY2hpbGRyZW4/OiBDb21wb25lbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRHcm91cERlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50RGVzY3JpcHRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBDb21wb25lbnREZXNjcmlwdGlvbjtcbiAgfTtcbn1cblxuLyoqXG4gKiBBIGhpZ2hlciBvcmRlciBjb21wb25lbnQgdG8gaGFuZGxlIGEgZ3JvdXAgb2YgY2hpbGRyZW4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudEdyb3VwIGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgbG9nZ2VyOiBMb2dnZXI7XG4gIGNoaWxkcmVuOiBDb21wb25lbnRbXTtcbiAgdHlwZTogQ29tcG9uZW50VHlwZS5HUk9VUDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogQ29tcG9uZW50R3JvdXBPcHRpb25zKSB7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gb3B0aW9ucy5jaGlsZHJlbiB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNjcmliZXMgY3VycmVudCBjb21wb25lbnQgZ3JvdXAuXG4gICAqL1xuICBwdWJsaWMgZGVzY3JpYmUoKTogQ29tcG9uZW50R3JvdXBEZXNjcmlwdGlvbiB7XG4gICAgY29uc3QgbWFwID0gdGhpcy5jaGlsZHJlblxuICAgICAgLm1hcCgoY29tcG9uZW50OiBDb21wb25lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgW2NvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lXTogY29tcG9uZW50IH07XG4gICAgICB9KVxuICAgICAgLnJlZHVjZSgoYWdnciwgbmV4dCkgPT4ge1xuICAgICAgICByZXR1cm4geyAuLi5hZ2dyLCAuLi5uZXh0IH07XG4gICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUsXG4gICAgICBjb21wb25lbnRzOiBtYXAsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHBvc3QgbW91bnQgcm91dGluZXMuXG4gICAqL1xuICBwdWJsaWMgb25Nb3VudChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKGBNb3VudGluZyAke3RoaXMub3B0aW9ucy5uYW1lfSBjaGlsZCBjb21wb25lbnRzYCwgdGhpcy5jaGlsZHJlbi5tYXAoYyA9PiBjLmRlc2NyaWJlKCkubmFtZSkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuW2ldLm9uTW91bnQoc2VydmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBwcmUgaW5pdGlhbGl6YXRpb24gcm91dGluZXMuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb25Jbml0KHNlcnZlcjogQmFzZVNlcnZlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oYEluaXRpYWxpemluZyAke3RoaXMub3B0aW9ucy5uYW1lfSBjaGlsZCBjb21wb25lbnRzYCwgdGhpcy5jaGlsZHJlbi5tYXAoYyA9PiBjLmRlc2NyaWJlKCkubmFtZSkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgYXdhaXQgdGhpcy5jaGlsZHJlbltpXS5vbkluaXQoc2VydmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBwb3N0IGluaXRpYWxpemF0aW9uIHJvdXRpbmVzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uUmVhZHkoc2VydmVyOiBCYXNlU2VydmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5jaGlsZHJlbltpXS5vblJlYWR5KSB7XG4gICAgICAgIGF3YWl0IHRoaXMuY2hpbGRyZW5baV0ub25SZWFkeShzZXJ2ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHBvc3QgdW5tb3VudCByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBvblVubW91bnQoc2VydmVyOiBCYXNlU2VydmVyKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuW2ldLm9uVW5tb3VudChzZXJ2ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGN1cnJlbnRseSByZWdpc3RlcmVkIGNvbXBvbmVudHMuXG4gICAqL1xuICBwdWJsaWMgY29tcG9uZW50cygpOiBDb21wb25lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBuZXcgY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIGNvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnB1c2goY29tcG9uZW50KTtcbiAgfVxufVxuIl19