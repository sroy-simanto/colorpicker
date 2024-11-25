/* eslint-disable */

import React, { useState } from "react";
import Title from "./reuseable-components/Title";
import Button from "./reuseable-components/Button";
import Input from "./reuseable-components/Input";
import Label from "./reuseable-components/Label";

export default function ColorFormate({ colors, handleHexValue, handleRadioRedColorAdjust, handleRadioGreenColorAdjust, handleRadioBlueColorAdjust, handleSaveColor }) {

    const [colorMode, setColorMode] = useState()
    const [hexValue, _setHexValue] = useState("hex");
    const [rgbValue, _setRgbValue] = useState("rgb");

    const handleColorModeChange = e => {
        setColorMode(e.target.value);
    }

    const handleCopy = () => {
        if (colorMode != 'undefined') {
            if (colorMode === 'hex') {
                window.navigator.clipboard.writeText(`#${colors.hexColor}`)
                alert(`#${colors.hexColor} copied`)
            } else if (colorMode === 'rgb') {
                window.navigator.clipboard.writeText(colors.rgbColor)
                alert(`${colors.rgbColor} copied`)
            }
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mt-5 mb-2">
                <Title
                    text="Change & Copy Colors"
                    className="text-xl text-gray-700 font-bold"
                />
                <div className="flex items-center gap-1">
                    <Button
                        text="Save"
                        className="text-red-500 font-medium"
                        handler={handleSaveColor}
                    />
                    <Button
                        text="Copy"
                        className="text-red-500 font-medium"
                        handler={handleCopy}
                    />
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-3">
                <Title
                    text="Select Copy Mode"
                    className="text-md text-gray-700 font-bold"
                />
                <div className="flex items-center gap-3">
                    <div>
                        <Input
                            type="radio"
                            value={hexValue}
                            id="color-mode-hex"
                            className={''}
                            handler={handleColorModeChange}
                            defaultChecked={true}
                            name="color-mode"
                        />
                        <Label
                            text="Hex"
                            className="ml-1"
                            htmlFor="color-mode-hex"
                        />
                    </div>
                    <div>
                        <Input
                            type="radio"
                            value={rgbValue}
                            id="color-mode-rgb"
                            className={''}
                            handler={handleColorModeChange}
                            defaultChecked={false}
                            name="color-mode"
                        />
                        <Label
                            text="RGB"
                            className="ml-1"
                            htmlFor="color-mode-rgb"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-5 flex items-center justify-between">
                <div className="relative">
                    <Label
                        text="Hex"
                        className="block mb-1 font-semibold text-gray-600"
                        htmlFor="input-hex"
                    />
                    <Input
                        type="text"
                        value={colors.hexColor}
                        id="input-hex"
                        className="border outline-none pl-7"
                        handler={handleHexValue}
                        defaultChecked={false}
                        name=""
                        disabled={false}
                    />
                    <div className="absolute bg-black text-white px-2 top-7 ">#</div>
                </div>
                <div className="relative">
                    <Label
                        text="RGB"
                        className="block mb-1 font-semibold text-gray-600"
                        htmlFor="input-rgb"
                    />
                    <Input
                        type="text"
                        value={colors.rgbColor}
                        id="input-rgb"
                        className="border pl-2"
                        handler={f=>f}
                        defaultChecked={false}
                        name=""
                        disabled={true}
                    />
                </div>
            </div>
            <div className="mt-5">
                <Title
                    text="Adjust RGB Colors"
                    className="text-md text-gray-700 font-bold"
                />
                <div className="flex items-center justify-between mt-3">
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-600">Red</p>
                            <p className="text-gray-600">{colors.red}</p>
                        </div>
                        <Input 
                            type="range"
                            min="0"
                            max="255"
                            handler={handleRadioRedColorAdjust}
                            value={colors.red}
                        />
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-600">Green</p>
                            <p className="text-gray-600">{colors.green}</p>
                        </div>
                        <Input 
                            type="range"
                            min="0"
                            max="255"
                            handler={handleRadioGreenColorAdjust}
                            value={colors.green}
                        />
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-600">Blue</p>
                            <p className="text-gray-600">{colors.blue}</p>
                        </div>
                        <Input 
                            type="range"
                            min="0"
                            max="255"
                            handler={handleRadioBlueColorAdjust}
                            value={colors.blue}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}