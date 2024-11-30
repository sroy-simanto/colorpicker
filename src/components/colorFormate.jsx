/* eslint-disable */ 
import Title from "./shared/Title";
import Button from "./shared/Button";
import Input from "./shared/Input";
import Label from "./shared/Label";

export default function ColorFormate({ colors, handleColorModeChange, handleCopy, hexValue, rgbValue, handleHexValue, inpHexValueUpdate, handleRadioColorAdjust, handleSaveColor, rangeValue }) {
    const {red, green, blue} = rangeValue;

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
                        value={inpHexValueUpdate}
                        id="input-hex"
                        className="border outline-none pl-7 uppercase"
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
                            <p className="text-gray-600">{red}</p>
                        </div>
                        <Input 
                            type="range"
                            name="red"
                            min="0"
                            max="255"
                            handler={handleRadioColorAdjust}
                            value={red}
                        />
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-600">Green</p>
                            <p className="text-gray-600">{green}</p>
                        </div>
                        <Input 
                            type="range"
                            name="green"
                            min="0"
                            max="255"
                            handler={handleRadioColorAdjust}
                            value={green}
                        />
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-600">Blue</p>
                            <p className="text-gray-600">{blue}</p>
                        </div>
                        <Input 
                            type="range"
                            name="blue"
                            min="0"
                            max="255"
                            handler={handleRadioColorAdjust}
                            value={blue}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}