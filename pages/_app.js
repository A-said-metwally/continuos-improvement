import DataContextProvider from '../context/context'
// import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

//   useEffect(() => {
//     import ("bootstrap/dist/js/bootstrap");
// }, []);
  
  // if (Component.getLayout){
  //   return Component.getLayout(
  //     <DataContextProvider>
  //         <Component {...pageProps} />
  //     </DataContextProvider>
  //   )
  // }

  return (
     
      <DataContextProvider>
          {/* <Header/> */}
          <Component {...pageProps} />
      </DataContextProvider>
    
  )
  
}


export default MyApp
