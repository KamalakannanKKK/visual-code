var Developer = /** @class */ (function () {
    function Developer(id, name, tasks) {
        this.id = id;
        this.name = name;
        this.tasks = tasks;
        this.id = id;
        this.name = name;
        this.tasks = tasks;
    }
    Developer.prototype.doWork = function () {
        console.log("".concat(this.name, " writes code"));
    };
    return Developer;
}());
var dev = new Developer(1, 'Tom', ['develop', 'test', 'ship']);
console.log(dev.name);
dev.doWork();
