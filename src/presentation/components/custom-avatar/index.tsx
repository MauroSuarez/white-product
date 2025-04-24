import { TUsers } from "@/core/domain/entities/User"
import { User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/ds/avatar"
import { getFirstLettersRegex } from '@/presentation/utils/stringHelper'
import { cn } from "@/presentation/utils/uiHelpers"

export function CustomAvatar({ user, className }: { user: TUsers, className?: string }) {
  return (
    <Avatar className={cn(`h-10 w-10 dark:bg-gray-300 bg-foreground rounded-full flex items-center justify-center`, className)}>
      <AvatarImage src={`${user?.avatar_url}`} alt={`${user?.first_name} ${user?.last_name}`} />
      <AvatarFallback>
        {!user ? (<User className="h-5 w-5 dark:text-background" />) : getFirstLettersRegex(`${user?.first_name} ${user?.last_name}`)}
      </AvatarFallback>
    </Avatar>
  )
}