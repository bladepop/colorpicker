# Angular-ColorPicker
pure Angular.JS circle color-picker similar to google keep's color picker

Crafted by Daniel Baruch @ https://github.com/bladepop/colorpicker

Angular-ColorPicker is a simple directive made purely in angualr.js
It lets the user choose a color from a list of colors you set in a pop-over window.

It is very basic and made for a personal project, if you feel like improving it feel free to form / pull request :)

### Usage:

- include 'colorPicker.js' and 'colorPickerStyle.css' in your page
- Add 'tb-color-picker' dependency to your angular module
- use <color-picker> tag in your code
- Use any valid css color representation :)


### Options:

The directive receives 3 parameters
- color: two way binding for the selected color
- options: string array with color defintions in it, any valid css color representation works.
- onColorChanged: a method that will be called when the color changes, method should look like onColorChanged(newColor, oldColor)

Example:
````sh
<color-picker color="color" options="options" on-color-changed="colorChanged(newColor, oldColor)"></color-picker>
````

### Enjoy using this directive!