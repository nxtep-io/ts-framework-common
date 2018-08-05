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
        return { name: this.options.name, context: map };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50R3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50L0NvbXBvbmVudEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBK0I7QUFrQi9COztHQUVHO0FBQ0gsTUFBOEIsY0FBYztJQUsxQyxZQUFtQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUTthQUN0QixHQUFHLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUIsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUNyRCxDQUFDLENBQUM7YUFDRCxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDckIseUJBQVksSUFBSSxFQUFLLElBQUksRUFBRztRQUM5QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFVCxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPLENBQUMsTUFBa0I7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU5RyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNVLE1BQU0sQ0FBQyxNQUFrQjs7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoRCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDVSxPQUFPLENBQUMsTUFBa0I7O1lBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO29CQUM1QixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN4QzthQUNGO1FBQ0gsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDSSxTQUFTLENBQUMsTUFBa0I7UUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNJLFNBQVMsQ0FBQyxTQUFvQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQS9FRCxpQ0ErRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2xvZ2dlcic7XG5pbXBvcnQgQmFzZVNlcnZlciBmcm9tICcuLi9CYXNlU2VydmVyJztcbmltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50VHlwZSB9IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudERlc2NyaXB0aW9uIH0gZnJvbSAnLi9Db21wb25lbnREZXNjcmlwdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50R3JvdXBPcHRpb25zIHtcbiAgbmFtZT86IHN0cmluZztcbiAgbG9nZ2VyPzogTG9nZ2VyO1xuICBjaGlsZHJlbj86IENvbXBvbmVudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudEdyb3VwRGVzY3JpcHRpb24gZXh0ZW5kcyBDb21wb25lbnREZXNjcmlwdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29udGV4dDoge1xuICAgIFtrZXk6IHN0cmluZ106IENvbXBvbmVudDtcbiAgfTtcbn1cblxuLyoqXG4gKiBBIGhpZ2hlciBvcmRlciBjb21wb25lbnQgdG8gaGFuZGxlIGEgZ3JvdXAgb2YgY2hpbGRyZW4uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudEdyb3VwIGltcGxlbWVudHMgQ29tcG9uZW50IHtcbiAgbG9nZ2VyOiBMb2dnZXI7XG4gIGNoaWxkcmVuOiBDb21wb25lbnRbXTtcbiAgdHlwZTogQ29tcG9uZW50VHlwZS5HUk9VUDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogQ29tcG9uZW50R3JvdXBPcHRpb25zKSB7XG4gICAgdGhpcy5sb2dnZXIgPSBvcHRpb25zLmxvZ2dlciB8fCBMb2dnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gb3B0aW9ucy5jaGlsZHJlbiB8fCBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXNjcmliZXMgY3VycmVudCBjb21wb25lbnQgZ3JvdXAuXG4gICAqL1xuICBwdWJsaWMgZGVzY3JpYmUoKTogQ29tcG9uZW50R3JvdXBEZXNjcmlwdGlvbiB7XG4gICAgY29uc3QgbWFwID0gdGhpcy5jaGlsZHJlblxuICAgICAgLm1hcCgoY29tcG9uZW50OiBDb21wb25lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgW2NvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lXTogY29tcG9uZW50IH07XG4gICAgICB9KVxuICAgICAgLnJlZHVjZSgoYWdnciwgbmV4dCkgPT4ge1xuICAgICAgICByZXR1cm4geyAuLi5hZ2dyLCAuLi5uZXh0IH07XG4gICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4geyBuYW1lOiB0aGlzLm9wdGlvbnMubmFtZSwgY29udGV4dDogbWFwIH07XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBwb3N0IG1vdW50IHJvdXRpbmVzLlxuICAgKi9cbiAgcHVibGljIG9uTW91bnQoc2VydmVyOiBCYXNlU2VydmVyKTogdm9pZCB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhgTW91bnRpbmcgJHt0aGlzLm9wdGlvbnMubmFtZX0gY2hpbGQgY29tcG9uZW50c2AsIHRoaXMuY2hpbGRyZW4ubWFwKGMgPT4gYy5kZXNjcmliZSgpLm5hbWUpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5jaGlsZHJlbltpXS5vbk1vdW50KHNlcnZlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgcHJlIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uSW5pdChzZXJ2ZXI6IEJhc2VTZXJ2ZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKGBJbml0aWFsaXppbmcgJHt0aGlzLm9wdGlvbnMubmFtZX0gY2hpbGQgY29tcG9uZW50c2AsIHRoaXMuY2hpbGRyZW4ubWFwKGMgPT4gYy5kZXNjcmliZSgpLm5hbWUpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGF3YWl0IHRoaXMuY2hpbGRyZW5baV0ub25Jbml0KHNlcnZlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgcG9zdCBpbml0aWFsaXphdGlvbiByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBvblJlYWR5KHNlcnZlcjogQmFzZVNlcnZlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHRoaXMuY2hpbGRyZW5baV0ub25SZWFkeSkge1xuICAgICAgICBhd2FpdCB0aGlzLmNoaWxkcmVuW2ldLm9uUmVhZHkoc2VydmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBwb3N0IHVubW91bnQgcm91dGluZXMuXG4gICAqL1xuICBwdWJsaWMgb25Vbm1vdW50KHNlcnZlcjogQmFzZVNlcnZlcik6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5jaGlsZHJlbltpXS5vblVubW91bnQoc2VydmVyKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBjdXJyZW50bHkgcmVnaXN0ZXJlZCBjb21wb25lbnRzLlxuICAgKi9cbiAgcHVibGljIGNvbXBvbmVudHMoKTogQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbmV3IGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBjb21wb25lbnQoY29tcG9uZW50OiBDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5wdXNoKGNvbXBvbmVudCk7XG4gIH1cbn1cbiJdfQ==