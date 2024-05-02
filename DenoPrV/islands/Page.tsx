import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import FormButtonComponent from "../components/FormButtonComponent.tsx";
import { Task, TaskStates } from "../Types.ts";

const Page: FunctionComponent = () => {
  const [tasksCreated, setTaskCreated] = useState<Task[]>([]);
  const taskListt = (newTask: Task) => {
    setTaskCreated([...tasksCreated, newTask]);
  };
  return (
    <div class="boxPage">
      <div class="buttonForm">
        <FormButtonComponent propTask={taskListt} />
      </div>
      <div class="spaceBtwColumns">
        <div class="column">
          <h2>To Do</h2>
          <ul>
            {tasksCreated
              .filter((tsk) => tsk.states === TaskStates.TO_DO)
              .map((e) => (
                <li>{e.nameTask}</li>
              ))}
          </ul>
        </div>
        <div class="column">
          <h2>In Progress</h2>
          <ul>
            {tasksCreated
              .filter((tsk) => tsk.states === TaskStates.IN_PROGRESS)
              .map((e) => (
                <li>{e.nameTask}</li>
              ))}
          </ul>
        </div>
        <div class="column">
          <h2>In Review</h2>
          <ul>
            {tasksCreated
              .filter((tsk) => tsk.states === TaskStates.IN_REVIEW)
              .map((e) => (
                <li>{e.nameTask}</li>
              ))}
          </ul>
        </div>
        <div class="column">
          <h2>Done</h2>
          <ul>
            {tasksCreated
              .filter((tsk) => tsk.states === TaskStates.DONE)
              .map((e) => (
                <li>{e.nameTask}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
