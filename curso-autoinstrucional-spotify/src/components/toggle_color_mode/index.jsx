import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, useColorScheme } from "@mui/material";

export default function ToggleColorMode() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <FormControl>
      <FormLabel id="demo-theme-toggle">Theme</FormLabel>
      <RadioGroup
        aria-labelledby="demo-theme-toggle"
        name="theme-toggle"
        row
        value={mode}
        onChange={(event) => setMode(event.target.value)}
      >
        <FormControlLabel value="system" control={<Radio />} label="System" />
        <FormControlLabel value="light" control={<Radio />} label="Light" />
        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
      </RadioGroup>
    </FormControl>
  );
}
