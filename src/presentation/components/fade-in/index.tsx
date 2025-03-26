import { motion } from 'framer-motion'

type FadeInProps = {
  children: React.ReactNode
}

const FadeIn = ({
  children
}: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Estado inicial: invisible
      animate={{ opacity: 1 }} // Estado final: visible
      transition={{ duration: 1 }} // Duración de la animación
      style={{
        width: 'w-full',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {children}
    </motion.div>
  )
}

export { FadeIn }
