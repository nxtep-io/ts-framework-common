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
    }
    /**
     * Describes current component group.
     */
    describe() {
        const map = this.children
            .map((component) => {
            return { [component.constructor.prototype.name]: component };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50R3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvY29tcG9uZW50L0NvbXBvbmVudEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBK0I7QUFnQi9COztHQUVHO0FBQ0g7SUFLRSxZQUFtQixPQUE4QjtRQUE5QixZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxRQUFRO1FBQ2IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDdEIsR0FBRyxDQUFDLENBQUMsU0FBb0IsRUFBRSxFQUFFO1lBQzVCLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDO1FBQy9ELENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNyQix5QkFBWSxJQUFJLEVBQUssSUFBSSxFQUFHO1FBQzlCLENBQUMsRUFBTyxFQUFFLENBQUMsQ0FBQztRQUVkLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQ3ZCLFVBQVUsRUFBRSxHQUFHO1NBQ2hCLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPLENBQUMsTUFBa0I7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU5RyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNVLE1BQU0sQ0FBQyxNQUFrQjs7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoRCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDSSxTQUFTLENBQUMsTUFBa0I7UUFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNJLFNBQVMsQ0FBQyxTQUFvQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQXRFRCxpQ0FzRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2xvZ2dlcic7XG5pbXBvcnQgQmFzZVNlcnZlciBmcm9tICcuLi9CYXNlU2VydmVyJztcbmltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RGVzY3JpcHRpb24sIENvbXBvbmVudFR5cGUgfSBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50R3JvdXBPcHRpb25zIHtcbiAgbmFtZT86IHN0cmluZztcbiAgbG9nZ2VyPzogTG9nZ2VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudEdyb3VwRGVzY3JpcHRpb24gZXh0ZW5kcyBDb21wb25lbnREZXNjcmlwdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29tcG9uZW50czoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IENvbXBvbmVudERlc2NyaXB0aW9uO1xuICB9O1xufVxuXG4vKipcbiAqIEEgaGlnaGVyIG9yZGVyIGNvbXBvbmVudCB0byBoYW5kbGUgYSBncm91cCBvZiBjaGlsZHJlbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50R3JvdXAgaW1wbGVtZW50cyBDb21wb25lbnQge1xuICBjaGlsZHJlbjogQ29tcG9uZW50W107XG4gIGxvZ2dlcjogTG9nZ2VyO1xuICB0eXBlOiBDb21wb25lbnRUeXBlLkdST1VQO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBDb21wb25lbnRHcm91cE9wdGlvbnMpIHtcbiAgICB0aGlzLmxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyIHx8IExvZ2dlci5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2NyaWJlcyBjdXJyZW50IGNvbXBvbmVudCBncm91cC5cbiAgICovXG4gIHB1YmxpYyBkZXNjcmliZSgpOiBDb21wb25lbnRHcm91cERlc2NyaXB0aW9uIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLmNoaWxkcmVuXG4gICAgICAubWFwKChjb21wb25lbnQ6IENvbXBvbmVudCkgPT4ge1xuICAgICAgICByZXR1cm4geyBbY29tcG9uZW50LmNvbnN0cnVjdG9yLnByb3RvdHlwZS5uYW1lXTogY29tcG9uZW50IH07XG4gICAgICB9KVxuICAgICAgLnJlZHVjZSgoYWdnciwgbmV4dCkgPT4ge1xuICAgICAgICByZXR1cm4geyAuLi5hZ2dyLCAuLi5uZXh0IH07XG4gICAgICB9LCAgICAgIHt9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm9wdGlvbnMubmFtZSxcbiAgICAgIGNvbXBvbmVudHM6IG1hcCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgcG9zdCBtb3VudCByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBvbk1vdW50KHNlcnZlcjogQmFzZVNlcnZlcik6IHZvaWQge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oYE1vdW50aW5nICR7dGhpcy5vcHRpb25zLm5hbWV9IGNoaWxkIGNvbXBvbmVudHNgLCB0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMuZGVzY3JpYmUoKS5uYW1lKSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuY2hpbGRyZW5baV0ub25Nb3VudChzZXJ2ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHByZSBpbml0aWFsaXphdGlvbiByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBvbkluaXQoc2VydmVyOiBCYXNlU2VydmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhgSW5pdGlhbGl6aW5nICR7dGhpcy5vcHRpb25zLm5hbWV9IGNoaWxkIGNvbXBvbmVudHNgLCB0aGlzLmNoaWxkcmVuLm1hcChjID0+IGMuZGVzY3JpYmUoKS5uYW1lKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBhd2FpdCB0aGlzLmNoaWxkcmVuW2ldLm9uSW5pdChzZXJ2ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHBvc3QgdW5tb3VudCByb3V0aW5lcy5cbiAgICovXG4gIHB1YmxpYyBvblVubW91bnQoc2VydmVyOiBCYXNlU2VydmVyKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuW2ldLm9uVW5tb3VudChzZXJ2ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGN1cnJlbnRseSByZWdpc3RlcmVkIGNvbXBvbmVudHMuXG4gICAqL1xuICBwdWJsaWMgY29tcG9uZW50cygpOiBDb21wb25lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBuZXcgY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIGNvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnB1c2goY29tcG9uZW50KTtcbiAgfVxufVxuIl19