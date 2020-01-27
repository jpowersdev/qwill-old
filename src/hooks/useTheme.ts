import { useState } from 'react';
import { createContainer } from 'unstated-next';
import preset from 'src/style/theme';
import darkPreset from 'src/style/darkmode';

function useTheme(initialState = preset) {
  let [theme, setTheme] = useState(initialState);
  let toggle = () => setTheme(v => (v === preset ? darkPreset : preset));
  let isLight = () => theme === preset;
  return { theme, toggle, isLight };
}

let Theme = createContainer(useTheme);
export default Theme;
