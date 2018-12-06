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
        this.logger = options.logger || logger_1.Logger.getInstance();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50R3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50L0NvbXBvbmVudEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxzQ0FBbUQ7QUFlbkQ7O0dBRUc7QUFDSCxNQUE4QixjQUFjO0lBSzFDLFlBQW1CLE9BQThCO1FBQTlCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxlQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxRQUFRO1FBQ2IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDdEIsR0FBRyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFO1lBQzVCLE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN6Qyx1QkFDRSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxJQUNwQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEVBQzlCO1FBQ0osQ0FBQyxDQUFDO2FBQ0QsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3JCLHlCQUFZLElBQUksRUFBSyxJQUFJLEVBQUc7UUFDOUIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVQsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksT0FBTyxDQUFDLE1BQWtCO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ1UsTUFBTSxDQUFDLE1BQWtCOztZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoRCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDVSxPQUFPLENBQUMsTUFBa0I7O1lBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO29CQUM1QixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN4QzthQUNGO1FBQ0gsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDSSxTQUFTLENBQUMsTUFBa0I7UUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNJLFNBQVMsQ0FBQyxTQUFvQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQWxGRCxpQ0FrRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNlcnZlciBmcm9tICcuLi9CYXNlU2VydmVyJztcbmltcG9ydCB7IExvZ2dlciwgTG9nZ2VySW5zdGFuY2UgfSBmcm9tICcuLi9sb2dnZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRPcHRpb25zLCBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50RGVzY3JpcHRpb24gfSBmcm9tICcuL0NvbXBvbmVudERlc2NyaXB0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRHcm91cE9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnRPcHRpb25zIHtcbiAgY2hpbGRyZW4/OiBDb21wb25lbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRHcm91cERlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50RGVzY3JpcHRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbnRleHQ6IHtcbiAgICBba2V5OiBzdHJpbmddOiBDb21wb25lbnQ7XG4gIH07XG59XG5cbi8qKlxuICogQSBoaWdoZXIgb3JkZXIgY29tcG9uZW50IHRvIGhhbmRsZSBhIGdyb3VwIG9mIGNoaWxkcmVuLlxuICovXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnRHcm91cCBpbXBsZW1lbnRzIENvbXBvbmVudCB7XG4gIHB1YmxpYyBjaGlsZHJlbjogQ29tcG9uZW50W107XG4gIHB1YmxpYyBsb2dnZXI6IExvZ2dlckluc3RhbmNlO1xuICBwdWJsaWMgdHlwZTogQ29tcG9uZW50VHlwZS5HUk9VUDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogQ29tcG9uZW50R3JvdXBPcHRpb25zKSB7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gb3B0aW9ucy5jaGlsZHJlbiB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNjcmliZXMgY3VycmVudCBjb21wb25lbnQgZ3JvdXAuXG4gICAqL1xuICBwdWJsaWMgZGVzY3JpYmUoKTogQ29tcG9uZW50R3JvdXBEZXNjcmlwdGlvbiB7XG4gICAgY29uc3QgbWFwID0gdGhpcy5jaGlsZHJlblxuICAgICAgLm1hcCgoY29tcG9uZW50OiBDb21wb25lbnQpID0+IHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBjb21wb25lbnQuZGVzY3JpYmUoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBbY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWVdOiBjb21wb25lbnQsXG4gICAgICAgICAgLi4uKGRlc2NyaXB0aW9uLmNvbnRleHQgfHwge30pXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLnJlZHVjZSgoYWdnciwgbmV4dCkgPT4ge1xuICAgICAgICByZXR1cm4geyAuLi5hZ2dyLCAuLi5uZXh0IH07XG4gICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4geyBuYW1lOiB0aGlzLm9wdGlvbnMubmFtZSwgY29udGV4dDogbWFwIH07XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBwb3N0IG1vdW50IHJvdXRpbmVzLlxuICAgKi9cbiAgcHVibGljIG9uTW91bnQoc2VydmVyOiBCYXNlU2VydmVyKTogdm9pZCB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhgTW91bnRpbmcgJHt0aGlzLm9wdGlvbnMubmFtZX0gY29tcG9uZW50c2AsIHRoaXMuY2hpbGRyZW4ubWFwKGMgPT4gYy5kZXNjcmliZSgpLm5hbWUpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW5baV0ub25Nb3VudChzZXJ2ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHByZSBpbml0aWFsaXphdGlvbiByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBvbkluaXQoc2VydmVyOiBCYXNlU2VydmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhgSW5pdGlhbGl6aW5nICR7dGhpcy5vcHRpb25zLm5hbWV9IGNvbXBvbmVudHNgLCB0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMuZGVzY3JpYmUoKS5uYW1lKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBhd2FpdCB0aGlzLmNoaWxkcmVuW2ldLm9uSW5pdChzZXJ2ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHBvc3QgaW5pdGlhbGl6YXRpb24gcm91dGluZXMuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb25SZWFkeShzZXJ2ZXI6IEJhc2VTZXJ2ZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldLm9uUmVhZHkpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5jaGlsZHJlbltpXS5vblJlYWR5KHNlcnZlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgcG9zdCB1bm1vdW50IHJvdXRpbmVzLlxuICAgKi9cbiAgcHVibGljIG9uVW5tb3VudChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW5baV0ub25Vbm1vdW50KHNlcnZlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgY3VycmVudGx5IHJlZ2lzdGVyZWQgY29tcG9uZW50cy5cbiAgICovXG4gIHB1YmxpYyBjb21wb25lbnRzKCk6IENvbXBvbmVudFtdIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG5ldyBjb21wb25lbnQuXG4gICAqL1xuICBwdWJsaWMgY29tcG9uZW50KGNvbXBvbmVudDogQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ucHVzaChjb21wb25lbnQpO1xuICB9XG59XG4iXX0=