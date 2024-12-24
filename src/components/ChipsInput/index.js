import React, { useEffect, useState } from "react";
import Input from "./Input";
import ChipsList from "./ChipsList";
import './styles.css'

const ChipsInput = () => {
    const [chipValue, setChipValue] = useState('')
    const [chipsList, setChipsList] = useState([])

    const handleInputChange = (e) => {
        const value = e.target.value

        setChipValue(value)
    }

    const handleInputSubmit = (e) => {
        e.preventDefault()

        setChipsList(prev => [...prev, chipValue])
        setChipValue('')
    }

    const handleRemoveChip = ({ index }) => {
        setChipsList(prev => {
            let clone = [...prev]
            clone.splice(index, 1)
            return clone
        })
    }

    return (
        <>
            <div className="chips-container">
                <h1>Chips Input</h1>
                <Input handleInputSubmit={handleInputSubmit} chipValue={chipValue} handleInputChange={handleInputChange} />
                <ChipsList handleRemoveChip={handleRemoveChip} chipsList={chipsList} />
            </div>
        </>
    )
};

export default ChipsInput;
