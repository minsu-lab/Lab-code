import { currentTime } from "./time";
  
  const div = document.createElement("div");
  document.body.appendChild(div);
  setInterval(() => (div.innerText = currentTime()), 1000);