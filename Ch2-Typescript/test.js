var Report = /** @class */ (function () {
    function Report(data) {
        this.data = data;
    }
    Report.prototype.run = function () {
        this.data.forEach(function (line) { console.log(line); });
    };
    return Report;
}());
var p = new Report(["mohamed", "ahmed", "ali"]);
p.run();
