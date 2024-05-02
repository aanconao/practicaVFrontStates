export type Task = {
  nameTask: string;
  states: TaskStates;
};

export enum TaskStates {
  TO_DO = "To Do",
  IN_PROGRESS = "In Progress",
  IN_REVIEW = "In Review",
  DONE = "Done",
}

export type States = {
  task: Task[];
};
