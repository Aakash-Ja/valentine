import { useTheme, type Theme } from '@/hooks/useTheme'
import { Heart, Moon, Sun, Sparkles } from 'lucide-react'

const THEMES: { value: Theme; label: string; icon: React.ReactNode }[] = [
  { value: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
  { value: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
  { value: 'romantic', label: 'Romantic', icon: <Heart className="w-4 h-4" /> },
  { value: 'sunset', label: 'Sunset', icon: <Sparkles className="w-4 h-4" /> },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-1 bg-muted p-1 rounded-lg">
      {THEMES.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`p-2 rounded transition-colors ${theme === t.value
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-input'
            }`}
          title={t.label}
        >
          {t.icon}
        </button>
      ))}
    </div>
  )
}
