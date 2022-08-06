import create from "zustand";

type Task = {
  title: string;
  type: string;
  isComplete: boolean;
};

type State = {
  tasks: Array<Task>;
  addTask: (task: Task) => void;
  completeTask: (taskType: string) => void;
};

export const useTaskStore = create<State>((set) => ({
  tasks: [
    { title: "Upload Photo", type: "photoTask", isComplete: false },
    { title: "Purchase Ad", type: "adTask", isComplete: false },
  ],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  completeTask: (taskType) =>
    set((state) => ({
      tasks: state.tasks.map((task) => {
        if (task.type === taskType) {
          task.isComplete = true;
        }
        return task;
      }),
    })),
}));
