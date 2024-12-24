import React from "react";
import ChipsListCard from "./ChipsListCard";

const ChipsList = ({ chipsList, handleRemoveChip }) => {
    return (
        <div className="chips-list">
            {chipsList.map((item, i) => (
                <ChipsListCard i={i} handleRemoveChip={handleRemoveChip} item={item} key={item} />
            ))}
        </div>
    )
};

export default ChipsList;
