import Typography from 'typography';
import lincolnTheme from 'typography-theme-lincoln';
lincolnTheme.googleFonts = [
  {
    name: 'Varela Round',
    styles: ['400'],
  },
  {
    name: 'Roboto',
    styles: ['400', '400i', '700'],
  },
];

lincolnTheme.bodyFontFamily = ['Roboto', 'sans-serif'];

const typography = new Typography({
  ...lincolnTheme,
  scaleRatio: 3,
  blockMarginBottom: 1.2,
});
// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
