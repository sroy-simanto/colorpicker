/* eslint-disable */
import ColorFormate from "./components/colorFormate";
import DisplayColor from "./components/displayColor";
import CustomPresetColors from "./components/customPresetColors";
import useColors from "./hooks/useColors";

export default function App() {
	
	const {
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
	} = useColors();

	return (
		<div className="py-10 font-OpenSans mx-auto">
			<div className="mx-auto bg-white shadow-md p-5" style={{ width: '600px'}}>
				<DisplayColor 
					handleChangeColor={handleChangeColor} 
					bgColor={colors.hexColor}	
				/>
				<ColorFormate 
					colors={colors}
					handleHexValue={handleHexValue}
					handleRadioColorAdjust={handleRadioColorAdjust}
					handleSaveColor={handleSaveColor}
					hexValue={hexValue}
					rgbValue={rgbValue}
					handleColorModeChange={handleColorModeChange}
					handleCopy={handleCopy}
					inpHexValueUpdate={inpHexValueUpdate}
					rangeValue={rangeValue}
				/>
				<CustomPresetColors 
					colors={colors}
				/>
			</div>
		</div>
	)
}
