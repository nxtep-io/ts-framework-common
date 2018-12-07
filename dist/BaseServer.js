"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentGroup_1 = require("./component/ComponentGroup");
class BaseServer extends ComponentGroup_1.default {
    constructor(options) {
        super(options);
        this.options = options;
        this.options.name = options.name || this.constructor.name;
    }
}
exports.default = BaseServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9CYXNlU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0RBQW1GO0FBTW5GLE1BQThCLFVBQVcsU0FBUSx3QkFBYztJQUc3RCxZQUFtQixPQUEwQjtRQUMzQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFERSxZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUUzQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUM7Q0FZRjtBQWxCRCw2QkFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IENvbXBvbmVudEdyb3VwLCB7IENvbXBvbmVudEdyb3VwT3B0aW9ucyB9IGZyb20gJy4vY29tcG9uZW50L0NvbXBvbmVudEdyb3VwJztcbmltcG9ydCB7IExvZ2dlckluc3RhbmNlIH0gZnJvbSAnLi9sb2dnZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VTZXJ2ZXJPcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50R3JvdXBPcHRpb25zIHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZVNlcnZlciBleHRlbmRzIENvbXBvbmVudEdyb3VwIHtcbiAgYXBwOiBFeHByZXNzLkFwcGxpY2F0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvcHRpb25zOiBCYXNlU2VydmVyT3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgbGlzdGVuaW5nIGluIGNvbmZpZ3VyZWQgcG9ydC5cbiAgICovXG4gIGFic3RyYWN0IGxpc3RlbigpOiBQcm9taXNlPEJhc2VTZXJ2ZXJPcHRpb25zPjtcblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBjdXJyZW50IHNlcnZlciwgaWYgbGlzdGVuaW5nLlxuICAgKi9cbiAgYWJzdHJhY3QgY2xvc2UoKTogUHJvbWlzZTx2b2lkPjtcblxufVxuIl19