import "./main.scss";
import { Buttons } from "./components/button/button";
import { tasks_1 } from "./components/lesson-1/task_1";
import { tasks_2 } from "./components/lesson-1/task_2";

const add123 = (a, b) => a + b;
const root = document.querySelector("#root");

root.insertAdjacentHTML("beforeend", Buttons());
root.insertAdjacentHTML("beforeend", tasks_1());
root.insertAdjacentHTML("beforeend", tasks_2());

const res = add123(222, 3);
console.log("Helloasda");
