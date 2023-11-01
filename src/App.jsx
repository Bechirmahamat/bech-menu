import menu from "./data";
// console.log(menu);
import Buttons from "./Buttons";
import Item from "./Item";
import Title from "./Title";
import { useEffect, useState } from "react";
const cat = new Set().add("all");
menu.forEach((e) => cat.add(e.category));
function App() {
    const [activeBtn, setActiveBtn] = useState("all");
    const [data, setData] = useState(menu);

    function handleClick(value) {
        setActiveBtn((old) => {
            return value;
        });
    }
    function display(id) {
        if (id == "all") {
            setData((old) => {
                return menu;
            });
        } else {
            setData((old) => {
                return menu.filter((item) => item.category == activeBtn);
            });
        }
    }

    useEffect(() => {
        if (activeBtn) {
            display(activeBtn);
        }
    }, [activeBtn]);

    return (
        <main>
            {/* title come here */}
            <Title />
            <Buttons
                activeBtn={activeBtn}
                getClickbtn={handleClick}
                btns={[...cat]}
            />
            <div className="container my-2">
                {/* buttons comes here */}

                <div className="row my-1 py-1">
                    {
                        /* items come here */
                        data.map((value) => (
                            <Item key={value.id} {...value} />
                        ))
                    }
                </div>
            </div>
        </main>
    );
}

export default App;
