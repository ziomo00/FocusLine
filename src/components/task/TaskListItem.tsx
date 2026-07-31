import type {Task} from "../../types/task";

interface TaskListItemProps{
    item:Task;
    onSelect:() => void;
}

const TaskListItem = ({item, onSelect}:TaskListItemProps) => {
    return(
        <div onClick={onSelect} className="cursor-pointer ...">
            <h3>{item.title}</h3>
            <p>сложность:{item.difficulty}</p>
        </div>
    )
}

export default TaskListItem;