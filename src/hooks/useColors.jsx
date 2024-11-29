/* eslint-disable */
import { useEffect, useState } from "react";
import { generateDecimalNumbers, generateHexColorCode, generateRGBColorCode, isValidHexColor, isValidRGBColor, hexToRgb, hexToDecimal } from '../utils/utils.js'

const useColors = () => {

    const [colors, setColors] = useState({
        hexColor: "111111",
        rgbColor: "rgb(17, 17, 17)",
        usersSavedPresetColors: ['#ffcdd2', '#f8bbd0', '#e1bee7'],
        inpHexValUp: null,
        rangeValues: null
    });

    const [inpHexValueUpdate, setInpHexValueUpdate] = useState(colors.hexColor)

    const [bgImage, setBgImage] = useState(null)
    const [bgStyle, setBgStyle] = useState({
        bgSize: 'auto',
        bgRepeat: 'repeat',
        bgPosition: 'left-top',
        bgAttachment: 'initial'
    });

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
        setColors({
            ...colors,
            hexColor: generateHexColorCode(rangeValue),
            rgbColor: generateRGBColorCode(rangeValue),
            inpHexValUp: setInpHexValueUpdate(generateHexColorCode(rangeValue))
        })

        const { name, value } = event.target;
        if (name === 'red' || name === 'green' || name === 'blue') {
            setRangeValue({
                ...rangeValue,
                [name]: parseInt(value)
            })
        }
    }

    // useEffect(() => {
    //     setColors({
    //         ...colors,
    //         hexColor: generateHexColorCode(rangeValue),
    //         rgbColor: generateRGBColorCode(rangeValue),
    //         inpHexValUp: setInpHexValueUpdate(generateHexColorCode(rangeValue))
    //     })
    // }, [handleRadioColorAdjust])


    const handleSaveColor = () => {
        if (isValidHexColor(colors.hexColor)) {
            if (!colors.usersSavedPresetColors.includes(colors.hexColor)) {
                setColors({
                    ...colors,
                    usersSavedPresetColors: [...colors.usersSavedPresetColors, `#${colors.hexColor}`]
                })
            }
        } else {
            alert("Not a valid color code")
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

    const handleBgImageChange = (e) => {
        if (e.target.files.length !== 0) {
            setBgImage(e.target.files[0])
        }
    }

    const handleBgRemove = () => {
        setBgImage(null)
    }

    const handleBgStyles = (event) => {
        const { name, value } = event.target;
        setBgStyle({
            ...bgStyle,
            [name]: value
        })
    }

    return {
        colors,
        bgImage,
        bgStyle,
        hexValue,
        rgbValue,
        handleColorModeChange,
        handleCopy,
        handleChangeColor,
        handleHexValue,
        handleRadioColorAdjust,
        handleSaveColor,
        handleBgImageChange,
        handleBgRemove,
        handleBgStyles,
        inpHexValueUpdate,
        rangeValue
    }
}

export default useColors;