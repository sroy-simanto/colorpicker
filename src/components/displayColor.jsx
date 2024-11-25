/* eslint-disable */
import React from "react";

export default function DisplayColor ({ handleChangeColor, bgColor }) {

    return (
        <div>
            <div className="flex flex-column justify-between items-center mb-2">
                <h1 className="text-xl text-gray-700 font-bold">Display Color</h1>
                <button onClick={() => handleChangeColor()} className="text-red-500 font-medium">Random Color</button>
            </div>
            <hr />
            <div className="w-full h-24 mt-3" style={{ backgroundColor: `#${bgColor}`}}></div>
        </div>
    )
}