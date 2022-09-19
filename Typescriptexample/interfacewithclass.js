var Developer1 = /** @class */ (function () {
    function Developer1(id, name) {
        this.id = id;
        this.name = name;
        this.tasks = ['develop', 'test'];
        this.address = {
            country: 'Austria',
            city: 'Linz'
        };
        this.id = id;
        this.name = name;
    }
    Developer1.prototype.doWork = function () {
        console.log("".concat(this.name, " writes code"));
        console.log(this.address);
    };
    return Developer1;
}());
var dev = new Developer1(1, 'Tom');
console.log(dev.name);
dev.doWork();
