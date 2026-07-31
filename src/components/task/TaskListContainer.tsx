import {useState} from "react";
import type {Task} from "../../types/task";
import TaskListItem from "../task/TaskListItem";
import TaskModal from "../task/TaskModal";

interface TaskListContainerProps {
    tasks:Task[];
    onAddTask: (newTask:Task) => void;
    onSelectTask:(taskId:string) => void;
}

const TaskListContainer = ({tasks, onAddTask, onSelectTask}:TaskListContainerProps) => {

    return(
        <section>
            <ul>
                {tasks.map((task)=>(
                    <TaskListItem 
                        key={task.id} 
                        item={task}
                        onSelect={()=> onSelectTask(task.id)}
                    />
                ))}
            </ul>
            <TaskModal onAddTask={onAddTask}/>
        </section>
    );
}


export default TaskListContainer;