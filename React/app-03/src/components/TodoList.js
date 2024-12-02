import { TodoItem } from "./TodoItem";
import { useState } from "react";


const TASK_LIST =[
    {
        id: 1,
        name: "Tarefa 1",
        isComplete: false
    },

    {
        id: 2,
        name: "Tarefa 2",
        isComplete: false
    },

    {
        id: 3,
        name: "Tarefa 3",
        isComplete: false
    },

    {
        id: 4,
        name: "Tarefa 4",
        isComplete: false
    },
];

export function TodoList() {
    const [tasks, setTasks] = useState(TASK_LIST);

    function handleOnChange (task) {
        const updatedList = task.map(())
    }

    return (
        <section className="task-list-container">
            <ul>
                {tasks.map((task) =>
                <li key = {task.id}>
                    <TodoItem task={task} onCheck={handleOnChange} />
                </li>)}
            </ul>
        </section>
    )
}