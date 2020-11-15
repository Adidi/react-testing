import Color from 'color';

export const lighten = (color, value) => Color(color).lighten(value).hex();
