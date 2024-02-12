/*
//a
let myList:string[] = ["hi", "hey", "hello"]

//b
function addTask(task:string):number {
    myList.push(task)
    console.log("Task added to end of array myList")
    return myList.length
}

//c
function listAllTasks() {
    myList.forEach(element => {
        console.log(element)
    });
}

//d
function deleteTask(task:string) {
    for (let i = 0; i < myList.length; i++) {
        if (myList[i] == task) {
            myList.splice(i, 1)
            return
        }
    }
}

console.log(addTask("yo"))
listAllTasks()
deleteTask("hey")
listAllTasks()
*/