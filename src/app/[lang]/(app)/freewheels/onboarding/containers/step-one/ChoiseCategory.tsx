import { useCategoriesStore } from "@/infraestructure/stores/categoriesStore"
import { Typography } from "@/presentation/ds/typography"
import { CardCategory } from "@/presentation/components/card-category"

import { z } from 'zod'
import { Button } from '@/presentation/ds/button'
import { FormContainer } from "@/presentation/components/form/FormContainer"
import { CreditCard, Banknote, Bitcoin } from 'lucide-react'
import { FormRadioGroupCardCategory } from "@/presentation/components/form/FormRadioGroupCardCategory"


const paymentSchema = z.object({
  paymentMethod: z.string().min(1),
})

const ChoiseCategory = () => {
  const handleSubmit = (data: z.infer<typeof paymentSchema>) => {
    console.log('Método de pago seleccionado:', data.paymentMethod)
    // Lógica para procesar el formulario
  }
  const { categories } = useCategoriesStore()
  return (
    <div className="flex items-start flex-wrap justify-center w-4/5 mx-auto min-h-10 h-auto">
      <div className="flex-wrap w-full flex h-auto">
        <Typography variant={'h2'} className="text-center w-full font-semibold border-none">
          ¿Cuál de estas opciones describe mejor tu taller?
        </Typography>
      </div>
      <div className="flex w-full flex-wrap mt-4 justify-center">
        <FormContainer
          schema={paymentSchema}
          onSubmit={handleSubmit}
        >
          {(methods) => (
            <>
              <FormRadioGroupCardCategory
                name="paymentMethod"
                options={categories}
                className="flex w-full"
              />
              <Button 
                type="submit" 
                className="w-full mt-4"
                disabled={!methods.formState.isValid}
              >
                Continuar con el pago
              </Button> 
            </>
          )}
        </FormContainer>
        </div>
      </div>
  )
}

export { ChoiseCategory }
