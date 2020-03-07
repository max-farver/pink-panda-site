import Typography from 'typography';
import oceanBeachTheme from 'typography-theme-ocean-beach';

const typography = new Typography({
  ...oceanBeachTheme,
  scaleRatio: 3,
});
// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
