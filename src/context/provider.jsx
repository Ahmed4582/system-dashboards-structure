import React from 'react'
// import { ThemeProvider } from './ThemeProvider'
// import ReactQueryProvider from './react-query-provider'
import { I18nProvider } from './translate-api'
import ReactQueryClientProvider from './ReactQueryClientProvider'

const Provider = ({children,initialLocale}) => {
  return (
    <div>
        <I18nProvider initialLocale={initialLocale}>
       <ReactQueryClientProvider>
        {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
      {children}
      {/* </ThemeProvider> */}
      </ReactQueryClientProvider>
      </I18nProvider>
    </div>
  )
}

export default Provider
