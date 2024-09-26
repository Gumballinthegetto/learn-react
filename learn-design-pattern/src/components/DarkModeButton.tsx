import useDarkMode from "../hooks/useDarkMode";
import { Button } from "./ui/button";

export default function DarkModeButton() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <div>
      <Button variant='default' onClick={toggleDarkMode}>Toggle Dark Mode</Button>
    </div>
  );
}