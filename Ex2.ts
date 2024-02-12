import { Tasks } from "./TodoInterface";

class Ex2 implements Tasks {
    myList: string[] = ["hi" , "hello", "wassup"];
    addTask(task:string):number {
        this.myList.push(task);
        console.log("Task %s pushed to myList", task);
        return this.myList.length;
    }

    listAllTasks():void {
        this.myList.forEach(element => {
            console.log(element)
        });
    }
    
    //d
    deleteTask(task:string):void {
        for (let i = 0; i < this.myList.length; i++) {
            if (this.myList[i] == task) {
                this.myList.splice(i, 1)
                return
            }
        }
    }
}

let tasks = new Ex2();
tasks.addTask("hey");
console.log("\n");
tasks.listAllTasks();
console.log("\n");
tasks.deleteTask("hi");
console.log("\n");
tasks.listAllTasks();
    