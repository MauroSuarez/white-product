import { Button } from "@/presentation/ds/button"
import { Progress } from "@/presentation/ds/progress"

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
  
  const generatePercentBar = (index: number) => {
    const percentBar = Math.ceil(100 / steps[currentMainStep].subSteps?.length)
    const countBar = (currentSubStep + 1) === 1 ? percentBar : percentBar * currentSubStep
    
    
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
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div className="flex space-x-2 w-full">
          {steps.map((step, index) => {
            return (
              <div 
                key={index}
                className="flex border border-neutral-100 w-full rounded-full min-h-2 bg-neutral-100"
              >
                {currentMainStep > index ? <Progress value={100} className="bg-neutral-500  rounded-full" /> : 
                  generatePercentBar(index)
                }
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

          >
            Anterior
          </Button>
        ) : null}
        <Button
          onClick={handleNext}
          variant={'ghost'}
          // disabled={currentMainStep === steps.length - 1 && currentSubStep === steps[currentMainStep].subSteps.length}
          className={`py-4 uppercase h-12 text-white ${currentMainStep === 0 && currentSubStep === 0 ? 'bg-destructive' : 'bg-neutral-600 hover:bg-neutral-500 hover:text-neutral-50'} `}
        >
          {currentMainStep === 0 && currentSubStep === 0 ? 'Empezar' : 'Siguiente'}
        </Button>
      </div>
    </div>
  )
}

export { Footer }

