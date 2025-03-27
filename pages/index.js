import SIWELogin from '../components/SIWELogin';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <h1>SIWE + Auth0 Integration</h1>
      {user ? <p>Logged in as {user.name}</p> : <SIWELogin />}
    </div>
  );
}