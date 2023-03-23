import { expect } from "chai";

import { hexToRgb, rgbToHex } from "../src/color-converter";

describe("Color Code Converter", () => {
  describe("RGB to HEX color conversion", () => {
    it("Should covert RGB to HEX", () => {
      const redHexValue = rgbToHex(255, 0, 0);
      const greenHexValue = rgbToHex(0, 255, 0);
      const blueHexValue = rgbToHex(0, 0, 255);

      expect(redHexValue).to.equal("FF0000");
      expect(greenHexValue).to.equal("00FF00");
      expect(blueHexValue).to.equal("0000FF");
    });
  });

  describe("HEX to RGB color conversion", () => {
    it("Should covert HEX to RGB", () => {
      const redRgbValues = hexToRgb("FF0000");
      const greenRgbValues = hexToRgb("00FF00");
      const blueRgbValues = hexToRgb("0000FF");

      expect(redRgbValues).to.deep.equal([255, 0, 0]);
      expect(greenRgbValues).to.deep.equal([0, 255, 0]);
      expect(blueRgbValues).to.deep.equal([0, 0, 255]);
    });
  });
});
