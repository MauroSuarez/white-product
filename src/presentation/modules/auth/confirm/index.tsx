
import { Typography } from '@/presentation/ui/atoms/typography';
import { FormConfirm } from './Form'

export default function ConfirmModule() {
  return (
    <section className="h-full w-full flex items-center">
      <div className="w-full flex min-h-80 h-fit justify-center items-center my-10 flex-wrap py-8 px-12">
        <div className="flex w-full h-12 justify-center items-center">
          <Typography component='h3' variant='h3'>
            Un pasito más para tener tu cuenta
          </Typography>
        </div>
        <div className="flex w-full h-10 justify-center items-center mb-8">
          <Typography component='p' variant='muted'>
            Ingresá el código que te enviamos a tu email
          </Typography>
        </div>
        <FormConfirm />
      </div>
    </section>
  );
}