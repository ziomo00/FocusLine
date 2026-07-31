import type {Task} from "../../types/task"

interface TaskDetailProps{
    task: Task | null;
}

const TaskDetail = ({task}:TaskDetailProps) =>{
    if(!task){
        return(
            <aside className="panel detail">
                <h2>Выберите задачу из списка слева</h2>
            </aside>
        )
    }
    return(
        <aside className="panel detail">
            <h2>Детали задачи</h2>
            <h3>{task.title}</h3>
        </aside>
    )
}

export default TaskDetail;