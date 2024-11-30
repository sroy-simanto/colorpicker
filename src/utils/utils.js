export const generateDecimalNumbers = () => {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    return {
        red,
        green,
        blue
    }
}

export const generateHexColorCode = ({red, green, blue}) => {
    const getTwoCode = (value) => {
        const hex = value.toString(16)
        return hex.length === 1 ? `0${hex}` : hex;
    }
    return `${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`.toUpperCase();
}

export const generateRGBColorCode = ({red, green, blue}) => {
    return `rgb(${red}, ${green}, ${blue})`
}

export const isValidHexColor = (color) => {
    if (color.length !== 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}

export const isValidRGBColor = (color) => {
    return /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.test(color)
}

export const hexToRgb = (hex) => {
    hex = hex.replace(/^#/, '');

    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return `rgb(${r}, ${g}, ${b})`;
}

export const hexToDecimal = (hex) => {
    hex = hex.replace(/^#/, '');

    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return {
        r,
        g, 
        b
    }
}

export const findDuplicates = (arr) => {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        const index = Math.abs(arr[i]) - 1;
        if (arr[index] < 0) {
            duplicates.push(Math.abs(arr[i]));
        } else {
            arr[index] = -arr[index];
        }
    }
    return duplicates;
}