import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Task, TaskStates } from "../Types.ts";

type Prop = {
  propTask: (newTask: Task) => void;
};

const FormButtonComponent: FunctionComponent<Prop> = ({ propTask }) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>("");
  const [taskState, setTaskState] = useState<TaskStates>(TaskStates.TO_DO);

  const closeDialog = () => {
    setDialog(false);
  };

  const createNewTask = () => {
    const newTask: Task = {
      nameTask: taskName,
      states: taskState,
    };
    propTask(newTask);
    closeDialog();
  };

  /**
   * Para el dialog me he servido de ayuda:
   * https://www.youtube.com/watch?v=ZMhEVSvSwwk como crear una ventana modal (popUp)
   * https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog
   * y el stopPropagation de:
   * https://stackoverflow.com/questions/387736/how-to-stop-event-propagation-with-inline-onclick-attribute
   */

  return (
    <div class="buttonForm">
      <button onClick={() => setDialog(true)}>Create</button>
      {dialog && (
        <div class="modalBackground" onClick={closeDialog}>
          <dialog open onClick={(e) => e.stopPropagation()}>
            <form method="dialog">
              <label>
                Name Task
                <input
                  type="text"
                  value={taskName}
                  onInput={(e) => setTaskName(taskName)}
                />
              </label>
            </form>

            <label>States</label>
            <select value={taskState} onChange={(e) => setTaskState(taskState)}>
              {Object.values(TaskStates).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            <div class="buttonCloseForm">
              <button onClick={createNewTask}>Create Task</button>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default FormButtonComponent;
