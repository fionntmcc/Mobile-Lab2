"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ex2 = /** @class */ (function () {
    function Ex2() {
        this.myList = ["hi", "hello", "wassup"];
    }
    Ex2.prototype.addTask = function (task) {
        this.myList.push(task);
        console.log("Task %s pushed to myList", task);
        return this.myList.length;
    };
    Ex2.prototype.listAllTasks = function () {
        this.myList.forEach(function (element) {
            console.log(element);
        });
    };
    //d
    Ex2.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.myList.length; i++) {
            if (this.myList[i] == task) {
                this.myList.splice(i, 1);
                return;
            }
        }
    };
    return Ex2;
}());
var tasks = new Ex2();
tasks.addTask("hey");
console.log("\n");
tasks.listAllTasks();
console.log("\n");
tasks.deleteTask("hi");
console.log("\n");
tasks.listAllTasks();
