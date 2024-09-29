import { useTheme } from "@/hooks/useTheme";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@/assets/assets";

export default function ToggleTheme() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <Card className="py-0">
      <CardHeader className="flex-row items-center justify-between space-y-0 py-4">
        <CardTitle>Frontendmentor.io</CardTitle>
        <div className="flex items-center">
          <Button onClick={() => toggleDarkMode()} variant='ghost' size='icon' className="transition-all">
            {isDarkMode ? <MoonIcon width='20' color="#FFFFFF" /> : <SunIcon width='20' />}
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}