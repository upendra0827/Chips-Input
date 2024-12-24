import React from "react";

const ChipsListCard = ({ item, handleRemoveChip, i }) => {
    return (
        <div className="chip">
            <span className="chip__item">
                {item}
            </span>
            <span onClick={() => handleRemoveChip({ index: i })} className="chip__close">X</span>
        </div>
    )
};

export default ChipsListCard;
