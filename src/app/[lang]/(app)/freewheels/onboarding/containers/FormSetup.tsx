import { FadeIn } from "@/presentation/components/fade-in"

type FormSetupProps = {
  currentMainStep: number
  currentSubStep: number
  steps: Array<any>
  direction: string
}

const FormSetup = ({
  currentMainStep,
  currentSubStep,
  steps,
  direction = "forward"
}: FormSetupProps) => {
  const { content } = steps[currentMainStep].subSteps[currentSubStep]
  return (
    <div className={`flex-1 mt-4 overflow-y-auto overflow-x-hidden p-6`}>
      <FadeIn
          key={`stepper-${currentMainStep}-${currentSubStep}`}
          initial={{
            opacity: 0,
            x: direction === "forward" ? 40 : -40,
          }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: direction === "forward" ? -40 : 40,
          }}
          transition={{ duration: 0.3 }}
          mode="wait"
        >
        <div className="space-y-4">
          {content({})}
        </div>
      </FadeIn>
    </div>
  )
}

export { FormSetup }
