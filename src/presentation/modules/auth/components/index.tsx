import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Separator } from "@/presentation/ui/atoms/separator";
import { Typography } from "@/presentation/ui/atoms/typography";
import { Button } from "@/presentation/ui/atoms/button";

const SocialAuthBlock = () => {
  return (
    <>
      <div className="w-full h-4 py-4 flex items-center flex-nowrap justify-centerº">
        <div className="flex w-2/5">
          <Separator className="bg-neutral-600" />
        </div>
        <div className="flex w-1/5 justify-center">
          <Typography component="p" variant={'muted'}>O</Typography>
        </div>
        <div className="flex w-2/5">
          <Separator className="bg-neutral-600" />
        </div>
      </div>
      <Button type="submit" variant={'secondary'} className="w-full py-6">
        <GitHubLogoIcon className="mr-2 h-4 w-4" /> Iniciar con github
      </Button>
    </>
  );
}

export { SocialAuthBlock }
