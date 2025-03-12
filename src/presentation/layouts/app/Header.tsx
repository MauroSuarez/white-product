import { useTheme } from "next-themes";
import { Button } from "@/presentation/ui/atoms/button";
import { Icon } from "@/presentation/ui/atoms/icon";
import { Input } from "@/presentation/ui/atoms/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/ui/atoms/avatar";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <div className="flex w-full pl-4">
        <Button size="icon" variant="outline" className="sm:hidden">
          <Icon name="HamburgerMenuIcon" className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="relative ml-auto flex-1 md:grow-0 ">
          <Icon name="MagnifyingGlassIcon" className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar..."
            className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[320px]"
          />
        </div>
        <div className="w-auto flex justify-end items-center">
          <Button variant='link' className="" onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}>
            {theme === "light" ? (
              <div className="text-foreground"><Icon name="MoonIcon" /></div>
            ) : (
              <div className="text-foreground"><Icon name="SunIcon" /></div>
            )}
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </header>
  );
}

export { Header }
