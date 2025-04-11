'use client'

import { useCallback, useState, useMemo, useEffect, Key } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/presentation/ds/form'
import { Camera, X } from "lucide-react"
import { Button } from '@/presentation/ds/button'
import { cn } from '@/presentation/utils/uiHelpers'

interface FormUploadImagesProps {
  name: string
  label?: string
  description?: string
  className?: string
  maxFiles?: number
  maxSizeMB?: number
}

type TImage = {
  url: any
  id: string
  file: Blob | MediaSource
  preview: any
}

export function FormUploadImages({
  name,
  label,
  description,
  className = '',
  maxFiles = 5,
  maxSizeMB = 5,
}: FormUploadImagesProps) {
  const { control, setValue, watch, trigger } = useFormContext()
  const [isDragging, setIsDragging] = useState(false)
  const currentValue = watch(name) || []

  // Crear URLs de previsualización
  const processedImages = useMemo(() => {
    return currentValue.map((item: TImage) => {
      // Si ya tiene ID, mantenerlo (para edición)
      const id = item.id || Math.random().toString(36).substring(2, 9)
      
      // Si es un string (URL existente)
      if (typeof item === 'string') {
        return { id, url: item }
      }
      
      // Si es un objeto con file
      if (item.file) {
        return {
          id,
          file: item.file,
          preview: item.preview || URL.createObjectURL(item.file)
        }
      }
      
      // Mantener cualquier otra estructura
      return { ...item, id }
    })
  }, [currentValue])

  // useEffect(() => {
  //   return () => {
  //     processedImages.forEach((image: TImage) => {
  //       if (image.preview && image.preview.startsWith('blob:')) {
  //         URL.revokeObjectURL(image.preview)
  //       }
  //     })
  //   }
  // }, [processedImages])

  const handleFileChange = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files)
    
    if (processedImages.length + fileArray.length > maxFiles) {
      alert(`Solo puedes subir un máximo de ${maxFiles} imágenes`)
      return
    }

    const newImages = fileArray.map(file => ({
      id: Math.random().toString(36).substring(2, 9),
      file,
      preview: URL.createObjectURL(file)
    }))

    setValue(name, [...processedImages, ...newImages], { shouldValidate: true })
    trigger(name)
  }, [processedImages, maxFiles, name, setValue, trigger])

  const handleRemove = useCallback((id: string) => {
    const newValue = processedImages.filter((img: TImage) => img.id !== id)
    setValue(name, newValue, { shouldValidate: true })
    trigger(name)
  }, [processedImages, name, setValue, trigger])

  // Handlers para Drag & Drop
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files)
    }
  }, [handleFileChange])

  return (
    <div className='w-full flex items-center justify-center mt-8'>
      <FormField
        control={control}
        name={name}
        render={({ fieldState }) => (
          <FormItem className={cn('',className)}>
            {label && <FormLabel>{label}</FormLabel>}
            
            <FormControl>
              <div className="space-y-4">
                {/* Área de Drag & Drop */}
                <div
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className={cn(
                    'border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors',
                    isDragging ? 'border-primary bg-primary/10' : 'border-muted hover:border-primary/50',
                    fieldState.error ? 'border-destructive' : ''
                  )}
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Camera className="h-20 w-20 text-muted-foreground" />
                    <p className="font-medium">
                      Arrastra y suelta tus imágenes aquí, o haz clic para seleccionar
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Formatos soportados: JPG, PNG (Máx. {maxSizeMB}MB cada una)
                    </p>
                    <input
                      type="file"
                      accept="image/jpeg,image/png"
                      multiple
                      className="hidden"
                      id={`${name}-file-input`}
                      onChange={(e) => e.target.files && handleFileChange(e.target.files)}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => document.getElementById(`${name}-file-input`)?.click()}
                    >
                      Seleccionar imágenes
                    </Button>
                  </div>
                </div>

                {/* Previsualización de imágenes */}
                {processedImages.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {processedImages.map((image: TImage) => (
                      <div key={image.id} className="relative group">
                        <div className="aspect-square overflow-hidden rounded-md border">
                          <img
                            src={image.preview || image.url}
                            alt={`Previsualización ${image.id}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6"
                            onClick={() => image.id && handleRemove(image.id as string)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                    ))}
                  </div>
                )}
              </div>
            </FormControl>
            
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}