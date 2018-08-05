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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50R3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50L0NvbXBvbmVudEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBK0I7QUFpQi9COztHQUVHO0FBQ0gsTUFBOEIsY0FBYztJQUsxQyxZQUFtQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUTthQUN0QixHQUFHLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUIsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUNyRCxDQUFDLENBQUM7YUFDRCxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDckIseUJBQVksSUFBSSxFQUFLLElBQUksRUFBRztRQUM5QixDQUFDLEVBQU8sRUFBRSxDQUFDLENBQUM7UUFFZCxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUN2QixVQUFVLEVBQUUsR0FBRztTQUNoQixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksT0FBTyxDQUFDLE1BQWtCO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFOUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDVSxNQUFNLENBQUMsTUFBa0I7O1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEQsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ0ksU0FBUyxDQUFDLE1BQWtCO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTLENBQUMsU0FBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUF2RUQsaUNBdUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ2dlciBmcm9tICcuLi9sb2dnZXInO1xuaW1wb3J0IEJhc2VTZXJ2ZXIgZnJvbSAnLi4vQmFzZVNlcnZlcic7XG5pbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudERlc2NyaXB0aW9uLCBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudEdyb3VwT3B0aW9ucyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGxvZ2dlcj86IExvZ2dlcjtcbiAgY2hpbGRyZW4/OiBDb21wb25lbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRHcm91cERlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50RGVzY3JpcHRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBDb21wb25lbnREZXNjcmlwdGlvbjtcbiAgfTtcbn1cblxuLyoqXG4gKiBBIGhpZ2hlciBvcmRlciBjb21wb25lbnQgdG8gaGFuZGxlIGEgZ3JvdXAgb2YgY2hpbGRyZW4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudEdyb3VwIGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgbG9nZ2VyOiBMb2dnZXI7XG4gIGNoaWxkcmVuOiBDb21wb25lbnRbXTtcbiAgdHlwZTogQ29tcG9uZW50VHlwZS5HUk9VUDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogQ29tcG9uZW50R3JvdXBPcHRpb25zKSB7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gb3B0aW9ucy5jaGlsZHJlbiB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNjcmliZXMgY3VycmVudCBjb21wb25lbnQgZ3JvdXAuXG4gICAqL1xuICBwdWJsaWMgZGVzY3JpYmUoKTogQ29tcG9uZW50R3JvdXBEZXNjcmlwdGlvbiB7XG4gICAgY29uc3QgbWFwID0gdGhpcy5jaGlsZHJlblxuICAgICAgLm1hcCgoY29tcG9uZW50OiBDb21wb25lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgW2NvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lXTogY29tcG9uZW50IH07XG4gICAgICB9KVxuICAgICAgLnJlZHVjZSgoYWdnciwgbmV4dCkgPT4ge1xuICAgICAgICByZXR1cm4geyAuLi5hZ2dyLCAuLi5uZXh0IH07XG4gICAgICB9LCAgICAgIHt9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm9wdGlvbnMubmFtZSxcbiAgICAgIGNvbXBvbmVudHM6IG1hcCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgcG9zdCBtb3VudCByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBvbk1vdW50KHNlcnZlcjogQmFzZVNlcnZlcik6IHZvaWQge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oYE1vdW50aW5nICR7dGhpcy5vcHRpb25zLm5hbWV9IGNoaWxkIGNvbXBvbmVudHNgLCB0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMuZGVzY3JpYmUoKS5uYW1lKSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW5baV0ub25Nb3VudChzZXJ2ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHByZSBpbml0aWFsaXphdGlvbiByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBvbkluaXQoc2VydmVyOiBCYXNlU2VydmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhgSW5pdGlhbGl6aW5nICR7dGhpcy5vcHRpb25zLm5hbWV9IGNoaWxkIGNvbXBvbmVudHNgLCB0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMuZGVzY3JpYmUoKS5uYW1lKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBhd2FpdCB0aGlzLmNoaWxkcmVuW2ldLm9uSW5pdChzZXJ2ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHBvc3QgdW5tb3VudCByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBvblVubW91bnQoc2VydmVyOiBCYXNlU2VydmVyKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuW2ldLm9uVW5tb3VudChzZXJ2ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGN1cnJlbnRseSByZWdpc3RlcmVkIGNvbXBvbmVudHMuXG4gICAqL1xuICBwdWJsaWMgY29tcG9uZW50cygpOiBDb21wb25lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBuZXcgY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIGNvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnB1c2goY29tcG9uZW50KTtcbiAgfVxufVxuIl19