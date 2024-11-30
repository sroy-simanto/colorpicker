/* eslint-disable */
import {  useEffect, useState } from "react";
import { generateDecimalNumbers, generateHexColorCode, generateRGBColorCode, isValidHexColor, isValidRGBColor, hexToRgb, hexToDecimal } from '../utils/utils.js'

const useColors = () => {

    const [colors, setColors] = useState({
        hexColor: "111111",
        rgbColor: "rgb(17, 17, 17)",
        usersSavedPresetColors: ['ffcdd2', 'f8bbd0', 'e1bee7', 'ff8a80'],
        inpHexValUp: null,
        rangeValues: null
    });

    const [inpHexValueUpdate, setInpHexValueUpdate] = useState(colors.hexColor)

    const [colorMode, setColorMode] = useState("hex")
    const [hexValue, _setHexValue] = useState("hex");
    const [rgbValue, _setRgbValue] = useState("rgb");
    const [rangeValue, setRangeValue] = useState({
        red: 17,
        green: 17,
        blue: 17
    })

    const handleChangeColor = () => {
        const color = generateDecimalNumbers()

        setColors({
            ...colors,
            hexColor: generateHexColorCode(color),
            rgbColor: generateRGBColorCode(color),
            inpHexValUp: setInpHexValueUpdate(generateHexColorCode(color)),
            rangeValues: setRangeValue({ red: color.red, green: color.green, blue: color.blue })
        })
    }

    const handleHexValue = (e) => {
        let color = e.target.value;
        setInpHexValueUpdate(color);
        if (color && isValidHexColor(color)) {
            let { r, g, b } = hexToDecimal(color)
            setColors({
                ...colors,
                hexColor: color,
                rgbColor: hexToRgb(color),
                inpHexValUp: color,
                rangeValues: setRangeValue({ red: r, green: g, blue: b })
            })
        }
    }

    const handleRadioColorAdjust = (event) => {
        const { name, value } = event.target;
        if (name === 'red' || name === 'green' || name === 'blue') {
            setRangeValue({
                ...rangeValue,
                [name]: parseInt(value)
            })
        }
    }

    useEffect(() => {
        setColors({
            ...colors,
            hexColor: generateHexColorCode(rangeValue),
            rgbColor: generateRGBColorCode(rangeValue),
            inpHexValUp: setInpHexValueUpdate(generateHexColorCode(rangeValue))
        })
    }, [rangeValue])

    const handleSaveColor = () => {
        let color = colors.hexColor;
        if (colors.usersSavedPresetColors.includes(color)) {
            alert('Colors Already Saved');
            return
        } else {
            setColors({
                ...colors,
                usersSavedPresetColors: [color, ...colors.usersSavedPresetColors]
            })
        }
    }

    const handleColorModeChange = e => {
        setColorMode(e.target.value);
    }

    const handleCopy = () => {
        if (colorMode != 'undefined') {
            if (colorMode === 'hex') {
                if (isValidHexColor(colors.hexColor)) {
                    window.navigator.clipboard.writeText(`#${colors.hexColor}`)
                    alert(`#${colors.hexColor} copied`)
                } else {
                    alert(`color is not valid`)
                }
            } else if (colorMode === 'rgb') {
                if (isValidRGBColor(colors.rgbColor)) {
                    window.navigator.clipboard.writeText(colors.rgbColor)
                    alert(`${colors.rgbColor} copied`)
                } else {
                    alert('color is not valid')
                }
            }
        }
    }

    return {
        colors,
        hexValue,
        rgbValue,
        handleColorModeChange,
        handleCopy,
        handleChangeColor,
        handleHexValue,
        handleRadioColorAdjust,
        handleSaveColor,
        inpHexValueUpdate,
        rangeValue
    }
}

export default useColors;