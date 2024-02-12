export interface Tasks {
    myList:string[];
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):void; 
}