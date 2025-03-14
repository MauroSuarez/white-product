import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/presentation/ui/atoms/card"
import { array } from "zod"

export default function AppModule() {
  return (
    <div className="flex w-full p-10 h-auto bg-transparent rounded-lg flex-wrap">
      {[...new Array(20)].map((item) => (
      <Card className="w-full h-auto">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              APP
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          FOOTER
        </CardFooter>
      </Card>
      ))}
    </div>
  )
}