/* eslint-disable */

import React, { useState } from "react";

export default function ColorFormate({ colors, handleHexValue, handleRadioRedColorAdjust, handleRadioGreenColorAdjust, handleRadioBlueColorAdjust, handleSaveColor }) {

    const [colorMode, setColorMode] = useState()
    const [hexValue, _setHexValue] = useState("hex");
    const [rgbValue, _setRgbValue] = useState("rgb");

    const handleColorModeChange = e => {
        setColorMode(e.target.value);
    }

    const handleCopy = () => {
        if(colorMode != 'undefined') {
            if(colorMode === 'hex') {
                window.navigator.clipboard.writeText(colors.hexColor)
                alert(`${colors.hexColor} copied`)
            } else if(colorMode === 'rgb') {
                window.navigator.clipboard.writeText(colors.rgbColor)
                alert(`${colors.rgbColor} copied`)
            }
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mt-5 mb-2">
                <h1 className="text-xl text-gray-700 font-bold">Change & Copy Color</h1>
                <div className="flex items-center gap-1">
                    <button onClick={handleSaveColor} className="text-red-500 font-medium">Save</button>
                    <button onClick={handleCopy} className="text-red-500 font-medium">Copy</button>
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-3">
                <h3 className="text-md text-gray-700 font-bold">Select Copy Mode</h3>
                <div className="flex items-center gap-3">
                    <div>
                        <input type="radio" onChange={handleColorModeChange} value={hexValue} id="color-mode-hex" name="color-mode" defaultChecked/>
                        <label className="ml-1" htmlFor="color-mode-hex">Hex</label>
                    </div>
                    <div>
                        <input type="radio" onChange={handleColorModeChange} value={rgbValue} id="color-mode-rgb" name="color-mode"/>
                        <label className="ml-1" htmlFor="color-mode-rgb">RGB</label>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
                <div className="relative">
                    <label className="block mb-1 font-semibold text-gray-600" htmlFor="input-hex">Hex</label>
                    <input className="border outline-none pl-7" onChange={handleHexValue} value={colors.hexColor} type="text" placeholder="dddeee" id="input-hex" />
                    <div className="absolute bg-black text-white px-2 top-7 ">#</div>
                </div>
                <div className="relative">
                    <label className="block mb-1 font-semibold text-gray-600" htmlFor="input-rgb">RGB</label>
                    <input className="border pl-2" type="text" value={colors.rgbColor} placeholder="rgb(221, 222, 238)" id="input-rgb" disabled />
                </div>
            </div>
            <div className="mt-5">
                <h3 className="text-md text-gray-700 font-bold">Adjust RGB Colors</h3>
                <div className="flex items-center justify-between mt-3">
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-600">Red</p>
                            <p className="text-gray-600">{colors.red}</p>
                        </div>
                        <input type="range" min="0" max="255" onChange={handleRadioRedColorAdjust} value={colors.red} />
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-600">Green</p>
                            <p className="text-gray-600">{colors.green}</p> 
                        </div>
                        <input type="range" min="0" max="255" onChange={handleRadioGreenColorAdjust} value={colors.green} />
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-600">Blue</p>
                            <p className="text-gray-600">{colors.blue}</p>
                        </div>
                        <input type="range" min="0" max="255" onChange={handleRadioBlueColorAdjust} value={colors.blue} />
                    </div>
                </div>
            </div>
        </div>
    )
}