import React from "react";

const Input = ({ handleInputChange, handleInputSubmit, chipValue }) => {
    return (
        <div>
            <form onSubmit={handleInputSubmit}>
                <input className="chip-input" onChange={handleInputChange} value={chipValue} />
            </form>
        </div>
    )
};

export default Input;
