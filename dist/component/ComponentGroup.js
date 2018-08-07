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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50R3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50L0NvbXBvbmVudEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBK0I7QUFrQi9COztHQUVHO0FBQ0gsTUFBOEIsY0FBYztJQUsxQyxZQUE2QixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUTthQUN0QixHQUFHLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUIsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pDLHVCQUNFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLElBQ3BDLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsRUFDOUI7UUFDSixDQUFDLENBQUM7YUFDRCxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDckIseUJBQVksSUFBSSxFQUFLLElBQUksRUFBRztRQUM5QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFVCxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPLENBQXVCLE1BQVM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDVSxNQUFNLENBQXVCLE1BQVM7O1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDNUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hELE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdkM7UUFDSCxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNVLE9BQU8sQ0FBdUIsTUFBUzs7WUFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7b0JBQzVCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3hDO2FBQ0Y7UUFDSCxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNJLFNBQVMsQ0FBdUIsTUFBUztRQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFVBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUyxDQUFDLFNBQW9CO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBbEZELGlDQWtGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dnZXIgZnJvbSAnLi4vbG9nZ2VyJztcbmltcG9ydCBCYXNlU2VydmVyIGZyb20gJy4uL0Jhc2VTZXJ2ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50RGVzY3JpcHRpb24gfSBmcm9tICcuL0NvbXBvbmVudERlc2NyaXB0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRHcm91cE9wdGlvbnMge1xuICBuYW1lPzogc3RyaW5nO1xuICBsb2dnZXI/OiBMb2dnZXI7XG4gIGNoaWxkcmVuPzogQ29tcG9uZW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50R3JvdXBEZXNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudERlc2NyaXB0aW9uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb250ZXh0OiB7XG4gICAgW2tleTogc3RyaW5nXTogQ29tcG9uZW50O1xuICB9O1xufVxuXG4vKipcbiAqIEEgaGlnaGVyIG9yZGVyIGNvbXBvbmVudCB0byBoYW5kbGUgYSBncm91cCBvZiBjaGlsZHJlbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50R3JvdXAgaW1wbGVtZW50cyBDb21wb25lbnQge1xuICBsb2dnZXI6IExvZ2dlcjtcbiAgY2hpbGRyZW46IENvbXBvbmVudFtdO1xuICB0eXBlOiBDb21wb25lbnRUeXBlLkdST1VQO1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogQ29tcG9uZW50R3JvdXBPcHRpb25zKSB7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gb3B0aW9ucy5jaGlsZHJlbiB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNjcmliZXMgY3VycmVudCBjb21wb25lbnQgZ3JvdXAuXG4gICAqL1xuICBwdWJsaWMgZGVzY3JpYmUoKTogQ29tcG9uZW50R3JvdXBEZXNjcmlwdGlvbiB7XG4gICAgY29uc3QgbWFwID0gdGhpcy5jaGlsZHJlblxuICAgICAgLm1hcCgoY29tcG9uZW50OiBDb21wb25lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBjb21wb25lbnQuZGVzY3JpYmUoKTtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgW2NvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lXTogY29tcG9uZW50LFxuICAgICAgICAgIC4uLihkZXNjcmlwdGlvbi5jb250ZXh0IHx8IHt9KVxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5yZWR1Y2UoKGFnZ3IsIG5leHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4uYWdnciwgLi4ubmV4dCB9O1xuICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHsgbmFtZTogdGhpcy5vcHRpb25zLm5hbWUsIGNvbnRleHQ6IG1hcCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgcG9zdCBtb3VudCByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBvbk1vdW50PFQgZXh0ZW5kcyBCYXNlU2VydmVyPihzZXJ2ZXI6IFQpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKGBNb3VudGluZyAke3RoaXMub3B0aW9ucy5uYW1lfSBjb21wb25lbnRzYCwgdGhpcy5jaGlsZHJlbi5tYXAoYyA9PiBjLmRlc2NyaWJlKCkubmFtZSkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5jaGlsZHJlbltpXS5vbk1vdW50KHNlcnZlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgcHJlIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uSW5pdDxUIGV4dGVuZHMgQmFzZVNlcnZlcj4oc2VydmVyOiBUKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhgSW5pdGlhbGl6aW5nICR7dGhpcy5vcHRpb25zLm5hbWV9IGNvbXBvbmVudHNgLCB0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMuZGVzY3JpYmUoKS5uYW1lKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBhd2FpdCB0aGlzLmNoaWxkcmVuW2ldLm9uSW5pdChzZXJ2ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHBvc3QgaW5pdGlhbGl6YXRpb24gcm91dGluZXMuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb25SZWFkeTxUIGV4dGVuZHMgQmFzZVNlcnZlcj4oc2VydmVyOiBUKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodGhpcy5jaGlsZHJlbltpXS5vblJlYWR5KSB7XG4gICAgICAgIGF3YWl0IHRoaXMuY2hpbGRyZW5baV0ub25SZWFkeShzZXJ2ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHBvc3QgdW5tb3VudCByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBvblVubW91bnQ8VCBleHRlbmRzIEJhc2VTZXJ2ZXI+KHNlcnZlcjogVCk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5jaGlsZHJlbltpXS5vblVubW91bnQoc2VydmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBjdXJyZW50bHkgcmVnaXN0ZXJlZCBjb21wb25lbnRzLlxuICAgKi9cbiAgcHVibGljIGNvbXBvbmVudHMoKTogQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbmV3IGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBjb21wb25lbnQoY29tcG9uZW50OiBDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5wdXNoKGNvbXBvbmVudCk7XG4gIH1cbn1cbiJdfQ==