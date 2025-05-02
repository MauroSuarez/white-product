import { Metadata } from 'next'
import AccountContent from './Account';

export const metadata: Metadata = {
  title: 'Mi cuenta | FreeWheels',
  description: '', // description to be added for SEO
};

export default async function Profile() {
  return <AccountContent />
}
