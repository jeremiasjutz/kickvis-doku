import { useTheme } from 'next-themes';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';

export default function DarkModeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="fixed z-30 grid w-12 h-12 text-white border-t border-white cursor-pointer mix-blend-difference place-items-center bottom-6 left-6"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <RiMoonClearLine /> : <RiSunLine />}
    </button>
  );
}
