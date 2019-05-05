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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50R3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50L0NvbXBvbmVudEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBcUQ7QUFnQnJEOztHQUVHO0FBQ0gsTUFBOEIsY0FBYztJQUsxQyxZQUFtQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksb0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUTthQUN0QixHQUFHLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUIsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pDLHVCQUNFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLElBQ3BDLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsRUFDOUI7UUFDSixDQUFDLENBQUM7YUFDRCxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDckIseUJBQVksSUFBSSxFQUFLLElBQUksRUFBRztRQUM5QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFVCxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPLENBQUMsTUFBa0I7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDVSxNQUFNLENBQUMsTUFBa0I7O1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDNUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hELE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNVLE9BQU8sQ0FBQyxNQUFrQjs7WUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3hDO2FBQ0Y7UUFDSCxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNJLFNBQVMsQ0FBQyxNQUFrQjtRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFVBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUyxDQUFDLFNBQW9CO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBbEZELGlDQWtGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2dlciwgTG9nZ2VySW5zdGFuY2UgfSBmcm9tICduYW5vLWVycm9ycyc7XG5pbXBvcnQgQmFzZVNlcnZlciBmcm9tICcuLi9CYXNlU2VydmVyJztcbmltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50T3B0aW9ucywgQ29tcG9uZW50VHlwZSB9IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudERlc2NyaXB0aW9uIH0gZnJvbSAnLi9Db21wb25lbnREZXNjcmlwdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50R3JvdXBPcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50T3B0aW9ucyB7XG4gIGNoaWxkcmVuPzogQ29tcG9uZW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50R3JvdXBEZXNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudERlc2NyaXB0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb250ZXh0OiB7XG4gICAgW2tleTogc3RyaW5nXTogQ29tcG9uZW50O1xuICB9O1xufVxuXG4vKipcbiAqIEEgaGlnaGVyIG9yZGVyIGNvbXBvbmVudCB0byBoYW5kbGUgYSBncm91cCBvZiBjaGlsZHJlbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50R3JvdXAgaW1wbGVtZW50cyBDb21wb25lbnQge1xuICBwdWJsaWMgY2hpbGRyZW46IENvbXBvbmVudFtdO1xuICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXJJbnN0YW5jZTtcbiAgcHVibGljIHR5cGU6IENvbXBvbmVudFR5cGUuR1JPVVA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IENvbXBvbmVudEdyb3VwT3B0aW9ucykge1xuICAgIHRoaXMubG9nZ2VyID0gb3B0aW9ucy5sb2dnZXIgfHwgTG9nZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IG9wdGlvbnMuY2hpbGRyZW4gfHwgW107XG4gIH1cblxuICAvKipcbiAgICogRGVzY3JpYmVzIGN1cnJlbnQgY29tcG9uZW50IGdyb3VwLlxuICAgKi9cbiAgcHVibGljIGRlc2NyaWJlKCk6IENvbXBvbmVudEdyb3VwRGVzY3JpcHRpb24ge1xuICAgIGNvbnN0IG1hcCA9IHRoaXMuY2hpbGRyZW5cbiAgICAgIC5tYXAoKGNvbXBvbmVudDogQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY29tcG9uZW50LmRlc2NyaWJlKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgW2NvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lXTogY29tcG9uZW50LFxuICAgICAgICAgIC4uLihkZXNjcmlwdGlvbi5jb250ZXh0IHx8IHt9KVxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5yZWR1Y2UoKGFnZ3IsIG5leHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4uYWdnciwgLi4ubmV4dCB9O1xuICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHsgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUsIGNvbnRleHQ6IG1hcCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgcG9zdCBtb3VudCByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBvbk1vdW50KHNlcnZlcjogQmFzZVNlcnZlcik6IHZvaWQge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oYE1vdW50aW5nICR7dGhpcy5vcHRpb25zLm5hbWV9IGNvbXBvbmVudHNgLCB0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMuZGVzY3JpYmUoKS5uYW1lKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuW2ldLm9uTW91bnQoc2VydmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBwcmUgaW5pdGlhbGl6YXRpb24gcm91dGluZXMuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb25Jbml0KHNlcnZlcjogQmFzZVNlcnZlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oYEluaXRpYWxpemluZyAke3RoaXMub3B0aW9ucy5uYW1lfSBjb21wb25lbnRzYCwgdGhpcy5jaGlsZHJlbi5tYXAoYyA9PiBjLmRlc2NyaWJlKCkubmFtZSkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgYXdhaXQgdGhpcy5jaGlsZHJlbltpXS5vbkluaXQoc2VydmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBwb3N0IGluaXRpYWxpemF0aW9uIHJvdXRpbmVzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uUmVhZHkoc2VydmVyOiBCYXNlU2VydmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5jaGlsZHJlbltpXS5vblJlYWR5KSB7XG4gICAgICAgIGF3YWl0IHRoaXMuY2hpbGRyZW5baV0ub25SZWFkeShzZXJ2ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHBvc3QgdW5tb3VudCByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBvblVubW91bnQoc2VydmVyOiBCYXNlU2VydmVyKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuW2ldLm9uVW5tb3VudChzZXJ2ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGN1cnJlbnRseSByZWdpc3RlcmVkIGNvbXBvbmVudHMuXG4gICAqL1xuICBwdWJsaWMgY29tcG9uZW50cygpOiBDb21wb25lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBuZXcgY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIGNvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnB1c2goY29tcG9uZW50KTtcbiAgfVxufVxuIl19