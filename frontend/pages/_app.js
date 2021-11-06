import '../styles/globals.css'
import Sidebar from '../components/sidebar'


function MyApp({ Component, pageProps }) {
  return(
    <div className="h-full align-top m-0 font-alpino bg-grey-light">
      <div className="align-top flex flex-row flex-wrap">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
