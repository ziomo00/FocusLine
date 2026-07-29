import type { taskStatus, task, taskDifficulty} from "../../types/task"
import { useState } from "react";

interface TaskModalProps{
    onAddTask:(newTask: task)=>void;
}

export default function TaskModal({onAddTask}: TaskModalProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [difficulty, setDifficulty] = useState<taskDifficulty>("easy");
    const [status, setStatus] = useState<taskStatus>("todo");

    return(
        <div className="mt-5 p-[10px] border border-white">
            <input
                type="text"
                placeholder="Название задачи"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                className="text-black"
            />
            <input
                type="text"
                placeholder="Описание задачи"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                className="text-black"
            />
            <select
                value={difficulty}
                onChange={(e)=>setDifficulty(e.target.value as taskDifficulty)}
                className="text-black"
            >
                <option value="easy">Легко</option>
                <option value="medium">Средне</option>
                <option value="hard">Сложно</option>
            </select>
            <select
                value={status}
                onChange={(e)=>setStatus(e.target.value as taskStatus)}
                className="text-black"
            >
                <option value="todo">К выполнению</option>
                <option value="in-progress">В прогрессе</option>
                <option value="done">Сделано</option>
            </select>

            <button 
                onClick={() => {
                    onAddTask({
                    id:Date.now().toString(),
                    title:title,
                    description:description,
                    difficulty:difficulty,
                    status:status
                });

                setTitle("");
                setDescription("")
                }}>
                Сохранить задачу
            </button>
        </div>
    );
}