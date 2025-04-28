import { TUsers } from "@/core/domain/entities/User";
import { CustomAvatar } from "@/presentation/components/custom-avatar";
import { Medal } from "lucide-react";

/*
🥇 Oro: #FFD700

🥈 Plata: #C0C0C0

🥉 Bronce: #CD7F32
*/

export function WorkshopMembership() {
  return (
    <div className='flex flex-row gap-4 py-4 items-center justify-between'>
      <div className='flex flex-row gap-4 py-4 h-auto items-center'>
        <CustomAvatar user={{} as TUsers} className='h-16 w-16' />
        <div className='flex flex-col gap-2'>
          <div>Especialista: Suarez Mauro</div>
          <div>Miembro desde el 14 de febrero</div>
        </div>
      </div>
      <div className='flex flex-row gap-4 py-4 h-auto items-center'>
        <div className='flex flex-col gap-2'>
          <div>Especialista: Suarez Mauro</div>
          <div>Miembro desde el 14 de febrero</div>
        </div>
        <Medal width={60} height={60} color='#FFD700' />
      </div>
    </div>
  )  
}
