import ContactForm from "./components/ContactForm";
import ToggleTheme from "./components/ToggleTheme";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-lg w-11/12 space-y-5"> 
        <ToggleTheme />
        <ContactForm />
        <Toaster />
      </div>
    </div>
  );
};