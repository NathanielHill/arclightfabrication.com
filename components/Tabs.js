import { Button } from './../lib/components'
import { Tab as ReactTab, Tabs, TabList as ReactTabList, TabPanel } from 'react-tabs'
import styled from 'styled-components'

const TabList = styled(({
  background,
  children,
  padding,
  spaceAround,
  spaceBetween,
  vertical,
  ...rest }) => (<ReactTabList {...rest}>{children}</ReactTabList>))`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    flex-wrap: wrap;
    > {
      flex-wrap: wrap;

    }
    > * {
      min-width: 25vw;
      display: flex;
      justify-content: center;
      margin: 0.4em;
    }
    @media (min-width: 768px) {
      flex-wrap: nowrap;
      > * {
        min-width: inherit;
        margin: 1em;
      }
    }
  `

// Work-around for react-tabs + styled-components
TabList.tabsRole = 'TabList'

const Tab = (Button.withComponent(ReactTab)).extend`
  background-color: transparent;
  border: 1px solid ${props => props.theme.buttonPillColor};
  color: ${props => props.theme.brandPrimary};
  list-style-type: none;
  margin-bottom: 0;
  padding: .3rem .8rem;
  &:hover {
    background-color: ${props => props.theme.darkGrey};
  }
  &.react-tabs__tab--selected {
    background-color: ${props => props.theme.lightGrey};
  }
`
// Work-around for react-tabs + styled-components
Tab.tabsRole = 'Tab'

export { Tab, Tabs, TabList, TabPanel }
