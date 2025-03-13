import { useTheme } from "next-themes"
import { Button } from "@/presentation/ui/atoms/button"
import { Icon } from "@/presentation/ui/atoms/icon"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/ui/atoms/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/presentation/ui/atoms/dropdown-menu"
import { Wrench } from "lucide-react"

const Header = () => {
  const { theme, setTheme } = useTheme()
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-neutral-900">
      <div className="container mx-auto flex items-center justify-between px-4 py-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
            alt="Airbnb Logo"
            className="h-8"
          />
        </div>

        {/* Menú de navegación */}
        <div className="flex items-center space-x-4">
          <Button variant="default" className="hidden md:flex">
            Subí tu WorkShop
            <Wrench />
          </Button>

          <Button variant='link' className="" onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}>
            {theme === "light" ? (
              <div className="text-foreground"><Icon name="MoonIcon" /></div>
            ) : (
              <div className="text-foreground"><Icon name="SunIcon" /></div>
            )}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full border border-gray-300 p-2">
                <div className="flex items-center space-x-2">
                  <Icon name="HamburgerMenuIcon" className="h-5 w-5" />
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[20rem]">
              <DropdownMenuItem>Regístrate</DropdownMenuItem>
              <DropdownMenuItem>Iniciar sesión</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Ayudaf</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export { Header }
