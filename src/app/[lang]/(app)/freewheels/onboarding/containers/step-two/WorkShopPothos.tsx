
import React, { useEffect } from "react"

import { useFormContext } from "react-hook-form"
import { ImageUploadSchema } from "@/application/validators/setUpSchema"
import { PanelSetup } from "../../components/PanelSetup"
import { FormUploadImages } from "../../components/FormUploadImages"


interface ChoiseServicesProps {
  handleNext: (value: boolean) => void
}

const WorkShopPothos = ({ handleNext }: ChoiseServicesProps) => {
  const { watch, formState: { errors }  } = useFormContext()

  const images = watch('images')

  console.log(images, 'PHOTOS')

  useEffect(() => {
    const validationResult = ImageUploadSchema.safeParse({
      images: images
    })

    if(!validationResult.success) {
      handleNext(true)
    } else {
      handleNext(false)
    }
  }, [images])

  return (
    <div className="flex items-start flex-wrap justify-center w-4/5 mx-auto min-h-10 h-auto">
      <PanelSetup
        title="Agregá algunas fotos de tu taller"
        description="Necesitarás al menos 4 fotos para que tu taller sea visible en la app"
      >
        <FormUploadImages
          name="images"
          description="Sube 4 imágenes de tu taller"
          maxFiles={4}
          maxSizeMB={5}
        />
      </PanelSetup>
    </div>
  )
}

export { WorkShopPothos }
