export type TaskDifficulty = "easy" | "medium" | "hard";
export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
    id: string;
    title: string;
    description?: string;
    difficulty: TaskDifficulty;
    status: TaskStatus;
}