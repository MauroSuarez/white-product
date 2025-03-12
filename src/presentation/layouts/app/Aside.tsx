import { Icon } from "@/presentation/ui/atoms/icon";
import Link from "next/link";

const Aside = () => {
  return (
    <aside className={`w-20 fixed inset-y-0 left-0 hidden flex-col border-r sm:flex bg-background`}>
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <Link
          href="/app"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Icon name="LayersIcon" />
          <span className="sr-only">Acme Inc</span>
        </Link>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <Link
          href="/app/settings"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
        >
          <Icon name="GearIcon" className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Link>
      </nav>
    </aside>
  );
}

export { Aside }
