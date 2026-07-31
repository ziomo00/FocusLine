import type {Task} from "../types/task";
import {useState} from "react";
import TaskDetail from "../components/task/TaskDetail";
import TaskSidebar from "../components/task/TaskSidebar";
import TaskListContainer from "../components/task/TaskListContainer";

const mockTasks: Task[] = [
    {
        id:"one",
        title:"t-1",
        description:"d-1",
        difficulty:"easy",
        status:"done"
    }
]

function TaskPage (){
    const [tasks, setTasks] = useState<Task[]>(mockTasks);//храним состояние всех задач
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)//храним id выбранной задачи
    const activeTask = tasks.find(task => task.id === selectedTaskId) || null
    const handleAddTask = (newTask: Task) => {
        setTasks((currentTasks)=>[...currentTasks,newTask]);
    }
    return(
        <div className="workspace grid grid-cols-[238px_minmax(500px,1fr)_464px] gap-[17px] items-stretch min-h-[704px]">
            <TaskSidebar/>

            <TaskListContainer onAddTask={handleAddTask} tasks={tasks} onSelectTask={setSelectedTaskId} />

            {/* 3. Правая колонка */}
            <TaskDetail task={activeTask} />

        </div>
    );
}
export default TaskPage;