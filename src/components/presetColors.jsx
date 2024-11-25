/* eslint-disable */

export default function PresetColors () {

    const defaultPresetColors = [
        '#ffcdd2',
        '#f8bbd0',
        '#e1bee7',
        '#ff8a80',
        '#ff80ab',
        '#ea80fc',
        '#b39ddb',
        '#9fa8da',
        '#90caf9',
        '#b388ff',
        '#8c9eff',
        '#82b1ff',
        '#03a9f4',
        '#00bcd4',
        '#009688',
        '#80d8ff',
        '#84ffff',
        '#a7ffeb',
        '#c8e6c9',
        '#dcedc8',
        '#f0f4c3',
        '#b9f6ca',
        '#ccff90'
    ]

    return (
        <div>
            <h1 className="text-xl text-gray-700 font-bold mb-2">Preset Colors</h1>
            <hr />
            <div className="grid gap-2 grid-cols-5 mt-3">
                {
                    defaultPresetColors.map((color, i) => (
                        <div key={i} className="w-24 h-8 rounded-md cursor-pointer" style={{ backgroundColor: `${color}`}}></div>
                    ))
                }            
            </div>
        </div>
    )
}