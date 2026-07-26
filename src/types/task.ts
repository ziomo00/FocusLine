export type taskDifficulty = "easy" | "medium" | "hard";
export type taskStatus = "todo" | "in-progress" | "done";

export interface task {
    id: string;
    title: string;
    description?: string;
    difficulty: taskDifficulty;
    status: taskStatus;
}