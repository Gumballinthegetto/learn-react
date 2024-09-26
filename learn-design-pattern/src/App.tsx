import DarkModeButton from './components/DarkModeButton';
import Userform from './components/UserForm';
import ThemeProvider from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className='flex items-center justify-center min-h-screen bg-background text-foreground'>
        <div className='max-w-md border shadow-sm rounded-md px-6 py-6 w-11/12'>
          <h1 className='text-2xl font-bold text-center'>Design Pattern and shadcn/ui</h1>
          <Userform />
          <DarkModeButton />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
