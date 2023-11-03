import menu from "./data";
import { App } from "./App.1";
export const cat = ["all", ...new Set(menu.map((e) => e.category))];
export default App;
