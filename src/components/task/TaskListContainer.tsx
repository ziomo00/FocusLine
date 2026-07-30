import {useState} from "react";
import type {Task} from "../../types/task";
import TaskListItem from "../task/TaskListItem";
import TaskModal from "../task/TaskModal";

interface TaskListContainerProps {
    tasks:Task[];
    onAddTask: (newTask:Task) => void;
}

const TaskListContainer = ({tasks, onAddTask}:TaskListContainerProps) => {

    return(
        <>
            <ul>
                {tasks.map((task)=>{
                    return<TaskListItem key={task.id} item={task}/>
                })}
            </ul>
            <TaskModal onAddTask={onAddTask}/>
        </>
    );
}


export default TaskListContainer;