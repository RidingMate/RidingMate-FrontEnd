import RouteList from './routes'
import Layout from './components/common/Layout'
import GlobalStyle from 'src/styles/GlobalStyle'
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <RouteList />
      </Layout>
    </>
  )
}
