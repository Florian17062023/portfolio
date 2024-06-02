
import '../styles/globals.css';
import Header from '../composents/Header';
import Navbar from '../composents/Navbar';
import Footer from '../composents/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;

