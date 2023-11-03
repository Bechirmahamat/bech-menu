import menu from "./data";
import Buttons from "./Buttons";
import Item from "./Item";
import Title from "./Title";
import { useState } from "react";
import { cat } from "./App";

export function App() {
    const [activeBtn, setActiveBtn] = useState("all");
    const [data, setData] = useState(menu);
    function handleClick(value) {
        if (value == "all") {
            setData(menu);
            setActiveBtn("all");
        } else {
            setData(menu.filter((item) => item.category == value));
            setActiveBtn(value);
        }
    }
    return (
        <main>
            {/* title come here */}
            <Title />
            <Buttons
                activeBtn={activeBtn}
                getClickbtn={handleClick}
                btns={cat}
            />
            <div className="container my-2">
                <div className="row my-1 py-1">
                    {data.map((value) => (
                        <Item key={value.id} {...value} />
                    ))}
                </div>
            </div>
        </main>
    );
}
