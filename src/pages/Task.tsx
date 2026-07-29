import type {task} from "../types/task";
import {useState} from "react";
import TaskListItem from "../components/task/TaskListItem"
import TaskModal from "../components/task/TaskModal";

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

    const handleAddTask = (newTask: task) => {
        setTasks([...tasks,newTask]);
    }
    
    return(
        <>
            <ul>
                {tasks.map((task)=>{
                    return<TaskListItem key={task.id} item={task}/>
                })}
            </ul>
            <TaskModal onAddTask={handleAddTask}/>
        </>
    );
}
export default Task;