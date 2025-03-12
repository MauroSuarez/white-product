import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/presentation/ui/atoms/card"

export default function GeneralModule() {
  return (
    <div className="space-y-8">
      <Card className="w-full h-auto bg-success">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              SUCCESS
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          FOOTER
        </CardFooter>
      </Card>

      <Card className="w-full h-auto bg-warning">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              WARNING
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          FOOTER
        </CardFooter>
      </Card>

      <Card className="w-full h-auto bg-destructive">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              DESTRUCTIVE
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          FOOTER
        </CardFooter>
      </Card>
    </div>
  )
}
