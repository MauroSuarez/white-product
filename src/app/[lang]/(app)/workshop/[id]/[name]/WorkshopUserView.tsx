import { Typography } from "@/presentation/ds/typography";
import { getRandomNumber } from "@/presentation/utils/numberHelpers";
import { Flame } from "lucide-react";

export function WorkshopUserView() {
  const count = getRandomNumber(6)
  const text = count > 1 ? 'usuarios estan viendo este taller.' : 'usuario está viendo este taller.'
  return (
    <div className="flex w-full p-3 items-center justify-start border border-gay-200 shadow-sm rounded-lg">
      <Flame className="text-[#d35400] fill-[#f1c40f] mr-2" />
      <Typography variant={'muted'}>
        <span className="font-bold">{count}</span> {text}
      </Typography>
    </div>
  )
}
