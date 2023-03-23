export function rgbToHex(
  redValue: number,
  greenValue: number,
  blueValue: number
) {
  function padHexValue(hexValue: string) {
    return hexValue.length === 1 ? `0${hexValue}` : hexValue;
  }

  const redHexValue = padHexValue(redValue.toString(16));
  const greenHexValue = padHexValue(greenValue.toString(16));
  const blueHexValue = padHexValue(blueValue.toString(16));
  return `${redHexValue}${blueHexValue}${greenHexValue}`;
}

export function hexToRgb(hexValue: string) {
  const redValue = parseInt(hexValue.substring(0, 2), 16);
  const greenValue = parseInt(hexValue.substring(2, 4), 16);
  const blueValue = parseInt(hexValue.substring(4, 6), 16);
  return [redValue, greenValue, blueValue];
}
