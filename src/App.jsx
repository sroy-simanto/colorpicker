/* eslint-disable */
import ColorFormate from "./components/colorFormate";
import DisplayColor from "./components/displayColor";
import CustomPresetColors from "./components/customPresetColors";
import PresetColors from "./components/presetColors";
import BackgroundPreferences from "./components/backgroundPreferences";
import useColors from "./hooks/useColors";

export default function App() {
	
	const {
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
	} = useColors();

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
					handleRadioColorAdjust={handleRadioColorAdjust}
					handleSaveColor={handleSaveColor}
					hexValue={hexValue}
					rgbValue={rgbValue}
					handleColorModeChange={handleColorModeChange}
					handleCopy={handleCopy}
					inpHexValueUpdate={inpHexValueUpdate}
					rangeValue={rangeValue}
				/>
				<PresetColors />
				<CustomPresetColors 
					colors={colors}
				/>
				<BackgroundPreferences 
					bgImage={bgImage}
					handleBgImageChange={handleBgImageChange}
					handleBgRemove={handleBgRemove}
					handleBgStyles={handleBgStyles}
				/>
			</div>
		</div>
	)
}
