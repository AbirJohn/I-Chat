import { ContextProvider } from '../context';
import '../styles/auth.css';
import '../styles/chats.css';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
    <Component {...pageProps} />
    </ContextProvider>
  );
  
}

export default MyApp
