import { User as TUser } from "@/core/domain/entities/User"
import { User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/presentation/ds/avatar"
import { getFirstLettersRegex } from '@/presentation/utils/stringHelper'

export function CustomAvatar({ user }: { user: TUser }) {
  return (
    <Avatar className="h-10 w-10 dark:bg-gray-300 bg-foreground rounded-full flex items-center justify-center">
      <AvatarImage src={`${user?.user_metadata?.avatar}`} alt={`${user?.user_metadata?.first_name} ${user?.user_metadata?.last_name}`} />
      <AvatarFallback>
        {!user ? (<User className="h-5 w-5 dark:text-background" />) : getFirstLettersRegex(`${user?.user_metadata?.first_name} ${user?.user_metadata?.last_name}`)}
      </AvatarFallback>
    </Avatar>
  )
}