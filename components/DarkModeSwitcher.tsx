import { useTheme } from 'next-themes';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';

export default function DarkModeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="grid w-full h-12 border-t cursor-pointer place-items-center"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <RiMoonClearLine /> : <RiSunLine />}
    </button>
  );
}
