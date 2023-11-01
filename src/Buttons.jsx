import React from "react";

const Buttons = ({ activeBtn, getClickbtn, btns }) => {
    function active(btn) {
        if (btn == activeBtn) {
            return "btn btn-outline-orange active";
        } else {
            return "btn btn-outline-orange";
        }
    }

    return (
        <div className="btn-container mt-2">
            {btns.map((name, index) => {
                return (
                    <button
                        key={index}
                        className={active(name)}
                        onClick={() => getClickbtn(name)}
                    >
                        {name}
                    </button>
                );
            })}
        </div>
    );
};

export default Buttons;
