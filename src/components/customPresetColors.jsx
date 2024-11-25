/* eslint-disable */

export default function CustomPresetColors({ colors }) {

    const { usersSavedPresetColors } = colors;

    return (
        <div className="mt-3">
            <h1 className="text-xl text-gray-700 font-bold mb-2">Custom Preset Colors</h1>
            <hr />
            <div className="grid gap-2 grid-cols-5 mt-3">
                {
                    usersSavedPresetColors.map((color, i) => (
                        <div key={i} className="w-24 h-8 rounded-md cursor-pointer" style={{ backgroundColor: `${color}` }}></div>
                    ))
                }
            </div>
        </div>
    )
}