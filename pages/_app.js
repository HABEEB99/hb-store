import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import store from '../redux/app/store';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              backgroundColor: 'white',
              filter: `invert()`,
              opacity: 0,
            },
          }}
        >
          <Layout>
            <ToastContainer />
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
