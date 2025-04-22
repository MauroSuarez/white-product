import { Metadata } from 'next'
import Home from './Home';

export const metadata: Metadata = {
  title: 'Inicio | FreeWheels',
  description: '', // description to be added for SEO
};

export default async function App() {
  return <Home />
}
