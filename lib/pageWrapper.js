import globalCSS from './../lib/globalCSS'
import { graphql } from 'react-apollo'
import { injectGlobal, ThemeProvider } from 'styled-components'
import theme from './../lib/theme'
import withData from './../lib/withData'

export default (data, component) => {
  const WrappedComponent = withData(graphql(data)(component))

  class Wrapper extends React.PureComponent {
    constructor (props) {
      super(props)
      injectGlobal`${globalCSS}`
    }

    render () {
      return (
        <ThemeProvider theme={theme}>
          <WrappedComponent {...this.props} />
        </ThemeProvider>
      )
    }
  }
  return Wrapper
}

export const landingWrapper = (WrappedComponent) => {
  class Wrapper extends React.PureComponent {
    constructor (props) {
      super(props)
      injectGlobal`${globalCSS}`
    }

    render () {
      return (
        <ThemeProvider theme={theme}>
          <WrappedComponent {...this.props} />
        </ThemeProvider>
      )
    }
  }
  return Wrapper
}
