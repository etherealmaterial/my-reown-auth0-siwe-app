import { UserProvider } from '@auth0/nextjs-auth0';
import WalletProviderWrapper from '../components/providers/wallet-provider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <WalletProviderWrapper>
        <Component {...pageProps} />
      </WalletProviderWrapper>
    </UserProvider>
  );
}

export default MyApp;