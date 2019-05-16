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
const nano_errors_1 = require("nano-errors");
/**
 * A higher order component to handle a group of children.
 */
class ComponentGroup {
    constructor(options) {
        this.options = options;
        this.logger = options.logger || nano_errors_1.Logger.getInstance();
        this.children = options.children || [];
    }
    /**
     * Describes current component group.
     */
    describe() {
        const map = this.children
            .map((component) => {
            const description = component.describe();
            return Object.assign({ [component.constructor.name]: component }, (description.context || {}));
        })
            .reduce((aggr, next) => {
            return Object.assign({}, aggr, next);
        }, {});
        return { name: this.options.name, context: map };
    }
    /**
     * Handles post mount routines.
     */
    onMount(server) {
        this.logger.info(`Mounting ${this.options.name} components`, this.children.map(c => c.describe().name));
        for (let i = 0; i < this.children.length; i += 1) {
            this.children[i].onMount(server);
        }
    }
    /**
     * Handles pre initialization routines.
     */
    onInit(server) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info(`Initializing ${this.options.name} components`, this.children.map(c => c.describe().name));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50R3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50L0NvbXBvbmVudEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBcUQ7QUFnQnJEOztHQUVHO0FBQ0gsTUFBOEIsY0FBYztJQUsxQyxZQUFtQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksb0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUTthQUN0QixHQUFHLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUIsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pDLHVCQUNFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLElBQ3BDLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsRUFDOUI7UUFDSixDQUFDLENBQUM7YUFDRCxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDckIseUJBQVksSUFBSSxFQUFLLElBQUksRUFBRztRQUM5QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFVCxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPLENBQUMsTUFBa0I7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDVSxNQUFNLENBQUMsTUFBa0I7O1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDNUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hELE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNVLE9BQU8sQ0FBQyxNQUFrQjs7WUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3hDO2FBQ0Y7UUFDSCxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNJLFNBQVMsQ0FBQyxNQUFrQjtRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFVBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUyxDQUFDLFNBQW9CO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBbEZELGlDQWtGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2dlciwgTG9nZ2VySW5zdGFuY2UgfSBmcm9tICduYW5vLWVycm9ycyc7XG5pbXBvcnQgeyBCYXNlU2VydmVyIH0gZnJvbSAnLi4vQmFzZVNlcnZlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudE9wdGlvbnMsIENvbXBvbmVudFR5cGUgfSBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnREZXNjcmlwdGlvbiB9IGZyb20gJy4vQ29tcG9uZW50RGVzY3JpcHRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudEdyb3VwT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudE9wdGlvbnMge1xuICBjaGlsZHJlbj86IENvbXBvbmVudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudEdyb3VwRGVzY3JpcHRpb24gZXh0ZW5kcyBDb21wb25lbnREZXNjcmlwdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29udGV4dDoge1xuICAgIFtrZXk6IHN0cmluZ106IENvbXBvbmVudDtcbiAgfTtcbn1cblxuLyoqXG4gKiBBIGhpZ2hlciBvcmRlciBjb21wb25lbnQgdG8gaGFuZGxlIGEgZ3JvdXAgb2YgY2hpbGRyZW4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudEdyb3VwIGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgcHVibGljIGNoaWxkcmVuOiBDb21wb25lbnRbXTtcbiAgcHVibGljIGxvZ2dlcjogTG9nZ2VySW5zdGFuY2U7XG4gIHB1YmxpYyB0eXBlOiBDb21wb25lbnRUeXBlLkdST1VQO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBDb21wb25lbnRHcm91cE9wdGlvbnMpIHtcbiAgICB0aGlzLmxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyIHx8IExvZ2dlci5nZXRJbnN0YW5jZSgpO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBvcHRpb25zLmNoaWxkcmVuIHx8IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2NyaWJlcyBjdXJyZW50IGNvbXBvbmVudCBncm91cC5cbiAgICovXG4gIHB1YmxpYyBkZXNjcmliZSgpOiBDb21wb25lbnRHcm91cERlc2NyaXB0aW9uIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLmNoaWxkcmVuXG4gICAgICAubWFwKChjb21wb25lbnQ6IENvbXBvbmVudCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNvbXBvbmVudC5kZXNjcmliZSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtjb21wb25lbnQuY29uc3RydWN0b3IubmFtZV06IGNvbXBvbmVudCxcbiAgICAgICAgICAuLi4oZGVzY3JpcHRpb24uY29udGV4dCB8fCB7fSlcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAucmVkdWNlKChhZ2dyLCBuZXh0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IC4uLmFnZ3IsIC4uLm5leHQgfTtcbiAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiB7IG5hbWU6IHRoaXMub3B0aW9ucy5uYW1lLCBjb250ZXh0OiBtYXAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHBvc3QgbW91bnQgcm91dGluZXMuXG4gICAqL1xuICBwdWJsaWMgb25Nb3VudChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKGBNb3VudGluZyAke3RoaXMub3B0aW9ucy5uYW1lfSBjb21wb25lbnRzYCwgdGhpcy5jaGlsZHJlbi5tYXAoYyA9PiBjLmRlc2NyaWJlKCkubmFtZSkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5jaGlsZHJlbltpXS5vbk1vdW50KHNlcnZlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgcHJlIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uSW5pdChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKGBJbml0aWFsaXppbmcgJHt0aGlzLm9wdGlvbnMubmFtZX0gY29tcG9uZW50c2AsIHRoaXMuY2hpbGRyZW4ubWFwKGMgPT4gYy5kZXNjcmliZSgpLm5hbWUpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGF3YWl0IHRoaXMuY2hpbGRyZW5baV0ub25Jbml0KHNlcnZlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgcG9zdCBpbml0aWFsaXphdGlvbiByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBvblJlYWR5KHNlcnZlcjogQmFzZVNlcnZlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuY2hpbGRyZW5baV0ub25SZWFkeSkge1xuICAgICAgICBhd2FpdCB0aGlzLmNoaWxkcmVuW2ldLm9uUmVhZHkoc2VydmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBwb3N0IHVubW91bnQgcm91dGluZXMuXG4gICAqL1xuICBwdWJsaWMgb25Vbm1vdW50KHNlcnZlcjogQmFzZVNlcnZlcik6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5jaGlsZHJlbltpXS5vblVubW91bnQoc2VydmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBjdXJyZW50bHkgcmVnaXN0ZXJlZCBjb21wb25lbnRzLlxuICAgKi9cbiAgcHVibGljIGNvbXBvbmVudHMoKTogQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbmV3IGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBjb21wb25lbnQoY29tcG9uZW50OiBDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5wdXNoKGNvbXBvbmVudCk7XG4gIH1cbn1cbiJdfQ==