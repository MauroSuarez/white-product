import { Button } from "@/presentation/ds/button"

type FooterProps = {
  currentMainStep: number
  currentSubStep: number
  steps: Array<any>
  isNextDisabled?: boolean
  handleNext?: () => void
  handleBack?: () => void
}

const Footer = ({
  currentMainStep,
  currentSubStep,
  steps,
  handleNext,
  handleBack,
  isNextDisabled = false
}: FooterProps) => {
  const generatePercentBar = (index: number) => {
    const percentBar = Math.ceil(100 / steps[currentMainStep].subSteps?.length)
    const countBar = (currentSubStep + 1) === 1 ? percentBar : percentBar * currentSubStep

    if(currentMainStep > index)
      return <div className="w-full rounded-full bg-neutral-500" />
    
    
    if(index > currentMainStep) {
      return <></>
    }

    if(currentSubStep === 0)
      return <></>


    return <div
        style={{
          width: `${countBar}%`
        }}
        className="bg-neutral-500 rounded-full"
      />
  }

  return (
    <div className="">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div className={`flex ${currentMainStep === 0 && currentSubStep === 0 ? '' : 'space-x-2'} w-full`}>
          {steps.map((step, index) => {
            return (
              <div 
                key={index}
                className={`flex border border-neutral-100 w-full ${currentMainStep === 0 && currentSubStep === 0 ? '' : 'rounded-full'} min-h-2 bg-neutral-100`}
              >
                {generatePercentBar(index)}
              </div>
            )}
          )}
        </div>
      </div>
      <div className={`flex ${currentMainStep === 0 && currentSubStep === 0 ? 'justify-end' : 'justify-between'}`}>
        {currentMainStep > 0 || currentSubStep > 0 ? (
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentMainStep === 0 && currentSubStep === 0}
            className="h-12"
          >
            Atrás
          </Button>
        ) : null}
        <Button
          onClick={handleNext}
          variant={'ghost'}
          type={currentMainStep === steps.length - 1 && currentSubStep === steps[currentMainStep].subSteps.length - 1 ? "submit" : "button"}
          // form="setup-form"
          // cuando el boton debe transformarse en submit
          // disabled={currentMainStep === steps.length - 1 && currentSubStep === steps[currentMainStep].subSteps.length - 1}
          disabled={isNextDisabled}
          className={`py-4 h-12 text-white ${currentMainStep === 0 && currentSubStep === 0 ? 'bg-destructive' : 'bg-neutral-600 hover:bg-neutral-500 hover:text-neutral-50'} `}
        >
          {currentMainStep === 0 && currentSubStep === 0
            ? 'Empezar'
              : currentMainStep === steps.length - 1 && currentSubStep === steps[currentMainStep].subSteps.length - 1
                ? 'Listo, terminamos'
                  : 'Siguiente'}
        </Button>
      </div>
    </div>
  )
}

export { Footer }

