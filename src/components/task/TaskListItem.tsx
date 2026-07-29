import type {task} from "../../types/task";

interface TaskListItemProps{
    item:task;
}

export default function TaskListItem({item}:TaskListItemProps){
    return(
        <div>
            <h3>{item.title}</h3>
            <p>сложность:{item.difficulty}</p>
        </div>
    )
}