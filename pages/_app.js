import '../styles/globals.css'

import { DefaultLayout } from '../layouts'
import { ContextProvider } from '../context/Context'

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <ContextProvider>
      <DefaultLayout>
        {getLayout(<Component {...pageProps} />)}
      </DefaultLayout>
    </ContextProvider>
  )
}

export default MyApp
