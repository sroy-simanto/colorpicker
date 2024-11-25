import { useState } from "react"
import ColorFormate from "./components/colorFormate";
import DisplayColor from "./components/displayColor";
import CustomPresetColors from "./components/customPresetColors";
import PresetColors from "./components/presetColors";
import BackgroundPreferences from "./components/backgroundPreferences";

export default function App() {

	const [colors, setColors] = useState({
		hexColor: "111111",
		rgbColor: "rgb(17, 17, 17)",
		usersSavedPresetColors: ['#ffcdd2', '#f8bbd0', '#e1bee7'],
		red: 17,
		green: 17,
		blue: 17
	})
	const [bgImage, setBgImage] = useState(null)
	const [bgStyle, setBgStyle] = useState({
		bgSize: 'auto',
		bgRepeat: 'repeat',
		bgPosition: 'left-top',
		bgAttachment: 'initial'
	})

    const handleChangeColor = () => {
        const red = Math.floor(Math.random()*255)
        const green = Math.floor(Math.random()*255)
        const blue = Math.floor(Math.random()*255)
        const hexColor = `${red.toString(16)}${green.toString(16)}${blue.toString(16)}`.toUpperCase();
		const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        setColors({
			...colors,
			hexColor: hexColor,
			rgbColor: rgbColor,
			red: red,
			green: green,
			blue: blue
		})
    }

	const handleHexValue = (e) => {
		const {r, g, b} = rgbColorSplit(colors.hexColor)
        setColors({
			...colors,
			hexColor: e.target.value,
			rgbColor: hexToRgb(colors.hexColor),
			red: r,
			green: g,
			blue: b
		})
    }

	const handleRadioRedColorAdjust = e => {
		const {r, g, b} = rgbColorSplit(colors.hexColor)
		setColors({
			...colors,
			hexColor: rgbToHex(r, g, b),
			rgbColor: hexToRgb(colors.hexColor),
			red: e.target.value
		})
	}

	const handleRadioGreenColorAdjust = e => {
		const {r, g, b} = rgbColorSplit(colors.hexColor)
		setColors({
			...colors,
			hexColor: rgbToHex(r, g, b),
			rgbColor: hexToRgb(colors.hexColor),
			green: e.target.value
		})
	}

	const handleRadioBlueColorAdjust = e => {
	const {r, g, b} = rgbColorSplit(colors.hexColor)
		setColors({
			...colors,
			hexColor: rgbToHex(r, g, b),
			rgbColor: hexToRgb(colors.hexColor),
			blue: e.target.value
		})
	}

	const handleSaveColor = () => {
		setColors({
			...colors,
			usersSavedPresetColors: [...colors.usersSavedPresetColors, `#${colors.hexColor}`]
		})
	}

	const handleBgImageChange = (e) => {
        if (e.target.files.length !== 0) {
            setBgImage(e.target.files[0])
        }
    }

    const handleBgRemove = () => {
        setBgImage(null)
    }

	const handleBgSize = e => {
		setBgStyle({
			...bgStyle,
			bgSize: e.target.value
		})
	}

	const handleBgRepeat = e => {
		setBgStyle({
			...bgStyle,
			bgRepeat: e.target.value
		})
	}

	const handleBgPosition = e => {
		setBgStyle({
			...bgStyle,
			bgPosition: e.target.value
		})
	}

	const handleBgAttachment = e => {
		setBgStyle({
			...bgStyle,
			bgAttachment: e.target.value
		})
	}
	

	// utils function 
	const hexToRgb = (hexColor) => {
		let r = parseInt(hexColor.slice(1, 3), 16)
		let g = parseInt(hexColor.slice(2, 5), 16)
		let b = parseInt(hexColor.slice(5, 7), 16)
		return `rgb(${r}, ${g}, ${b})`;
	}

	const rgbColorSplit = (hexColor) => {
		let r = parseInt(hexColor.slice(1, 3), 16)
		let g = parseInt(hexColor.slice(2, 5), 16)
		let b = parseInt(hexColor.slice(5, 7), 16)
		return {
			r,
			g,
			b
		}
	}

	const rgbToHex = (r, g, b) => {
		return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
	

	return (
		<div 
			style={{ 
				backgroundImage: `url(${ bgImage && URL.createObjectURL(bgImage)})`,
				backgroundSize: `${bgStyle.bgSize}`,
				backgroundRepeat: `${bgStyle.bgRepeat}`,
				backgroundPosition: `${bgStyle.bgPosition}`,
				backgroundAttachment: `${bgStyle.bgAttachment}`
			}} 
			className="bg-slate-200 py-10 font-OpenSans mx-auto"
		>
			<div className="mx-auto bg-white shadow-md p-5" style={{ width: '600px'}}>
				<DisplayColor 
					handleChangeColor={handleChangeColor} 
					bgColor={colors.hexColor}	
				/>
				<ColorFormate 
					colors={colors}
					handleHexValue={handleHexValue}
					handleRadioRedColorAdjust={handleRadioRedColorAdjust}
					handleRadioGreenColorAdjust={handleRadioGreenColorAdjust}
					handleRadioBlueColorAdjust={handleRadioBlueColorAdjust}
					handleSaveColor={handleSaveColor}
				/>
				<PresetColors />
				<CustomPresetColors 
					colors={colors}
				/>
				<BackgroundPreferences 
					bgImage={bgImage}
					handleBgImageChange={handleBgImageChange}
					handleBgRemove={handleBgRemove}
					handleBgSize={handleBgSize}
					handleBgRepeat={handleBgRepeat}
					handleBgPosition={handleBgPosition}
					handleBgAttachment={handleBgAttachment}
				/>
			</div>
		</div>
	)
}
