/* eslint-disable */

import Title from "./shared/Title";

export default function CustomPresetColors({ colors }) {

    const { usersSavedPresetColors } = colors;

    return (
        <div className="mt-3">
            <Title 
                text="Custom Preset Colors"
                className="text-xl text-gray-700 font-bold mb-2"
            />
            <hr />
            <div className="grid gap-2 grid-cols-5 mt-3">
                {
                    usersSavedPresetColors && usersSavedPresetColors.map((color, i) => (
                        <div key={i} className="w-24 h-8 rounded-md cursor-pointer" style={{ backgroundColor: `#${color}` }}></div>
                    ))
                }
            </div>
        </div>
    )
}