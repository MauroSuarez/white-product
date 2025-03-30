import { Button } from "@/presentation/ds/button"

type FooterProps = {
  currentMainStep: number
  currentSubStep: number
  steps: Array<any>
  handleNext?: () => void
  handleBack?: () => void
}

const Footer = ({
  currentMainStep,
  currentSubStep,
  steps,
  handleNext,
  handleBack,
}: FooterProps) => {
  const generatePercentBar = () => {

  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div className="flex space-x-2 w-full">
          {steps.map((step, index) => {
            const percentBar = Math.ceil(100 / steps[currentMainStep].subSteps?.length)
            console.log(index, 'A VEr')
            return (
              <div 
                key={index}
                className="flex border border-neutral-100 w-full rounded-full min-h-2 bg-neutral-100"
              >
                {/*steps[currentMainStep].subSteps.length*/}
                {currentMainStep > index && <div className="w-full h-full bg-destructive" />}
                {/* {currentMainStep === index && <div className="w-full h-full bg-destructive" />} */}
              </div>
            )}
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentMainStep === 0 && currentSubStep === 0}

        >
          Anterior
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentMainStep === steps.length - 1 && currentSubStep === steps[currentMainStep].subSteps.length - 1}
        >
          Siguiente
        </Button>
      </div>
    </div>
  )
}

export { Footer }

