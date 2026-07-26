import type {task} from "../types/task";
import {useState} from "react";
import TaskListItem from "../components/task/TaskListItem"

const mockTasks: task[] = [
    {
        id:"one",
        title:"t-1",
        description:"d-1",
        difficulty:"easy",
        status:"done"
    }
]

function Task (){
    const [tasks, setTasks] = useState<task[]>(mockTasks);
    
    return(
        <ul>
            {tasks.map((task)=>{
                return<TaskListItem key={task.id} item={task}/>
            })}
        </ul>
    );
}
export default Task;