'use client'

import React, { useState } from 'react'
import { Typography } from "@/presentation/ds/typography"
import AppLayout from "../../AppLayout"
import { CustomAvatar } from "@/presentation/components/custom-avatar"
import { TUsers } from "@/core/domain/entities/User"
import { Button } from "@/presentation/ds/button"
import { LocateIcon, Pencil } from "lucide-react"
import { Separator } from "@/presentation/ds/separator"

export default function ProfileContent() {
  return (
    <AppLayout type="default">
      <section className="flex w-full px-10 flex-row gap-8 pb-10 mt-12 flex-wrap h-screen">
        <div className="flex-2 h-full">
          <div className="flex-col gap-4 flex !min-w-[300px]">
            <div
              className={`rounded-lg w-full border border-gray-200`}
            >
              <div className="items-center justify-center p-6 bg-background rounded-xl shadow-lg flex flex-col gap-2">
                <div className='relative px-4'>
                  <CustomAvatar className="w-20 h-20" user={{} as TUsers} />
                  <div className='cursor-pointer absolute py-1 -bottom-6 left-1/2 transform -translate-x-1/2 px-4 flex flew-wrap bg-background border border-gray-500 rounded-full shadow-sm items-center'>
                    <Pencil className='h-4 w-4 mr-1' />
                    <Typography variant='muted' className='text-gray-800'>Editar</Typography>
                  </div>
                </div>
                <div className="text-center py-4">
                  <Typography variant={'h3'} className=''>
                    Tony
                  </Typography>
                </div>
              </div>
            </div>
            <div
              className={`rounded-lg w-full border border-gray-200`}
            >
              <div className="items-center justify-center p-6 bg-background rounded-xl shadow-lg flex flex-col gap-2">
                <div className="text-center py-4">
                  <Typography variant={'h3'}>
                    
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 h-full">
          <div className="flex-col gap-4 flex px-4 w-full">
            <Typography variant={'h3'}>
              Acerca de Tony
            </Typography>
            <div className="py-2">
              <Button variant={'outline'}>
                Editar perfil
              </Button>
            </div>
            <Separator className="w-full" />
            <div className="py-2 flex flex-wrap">
              <LocateIcon className="mr-2" /> <Typography variant={'p'}>Vive en Buenos Aires</Typography>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  )
}
