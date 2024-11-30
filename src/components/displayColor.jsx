/* eslint-disable */
import React from "react";
import Title from "./shared/Title";
import Button from "./shared/Button";

export default function DisplayColor ({ handleChangeColor, bgColor }) {

    return (
        <>
            <div className="flex flex-column justify-between items-center mb-2">
                <Title 
                    text="Display Colors"
                    className="text-xl text-gray-700 font-bold"
                />
                <Button 
                    text="Random Color"
                    className="text-red-500 font-medium"
                    handler={handleChangeColor}
                />
            </div>
            <hr />
            <div className="w-full h-24 mt-3" style={{ backgroundColor: `#${bgColor}`}}></div>
        </>
    )
}