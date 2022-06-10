import { App } from './App'
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
// import './reset.css'

// import { ReactQueryDevtools } from 'react-query/devtools'
// import { QueryClient, QueryClientProvider } from 'react-query'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container) // type 경고가 있어서 수정했습니다.

root.render(
  // <Provider store={store}>
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      {/* <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} /> */}
      <CssBaseline />
      <App />
      {/* </QueryClientProvider> */}
    </Suspense>
  </BrowserRouter>
  // </Provider>
)

// ReactDOM.render(<App />, document.getElementById('root'))
