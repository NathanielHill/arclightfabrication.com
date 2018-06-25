import gql from 'graphql-tag'
import { Layout, P, ProjectList, Tab, TabList, TabPanel, Tabs } from './../src/lib/components'
import pageWrapper from './../src/lib/pageWrapper'

export default pageWrapper(gql`
  query allCategories {
    allCategories(orderBy: order_ASC) {
      id,
      name,
      description,
      projects {
        id,
        name,
        description,
        photos {
          handle,
          width,
          height
        }
      }
    }
  }
`, ({ data: { loading, error, allCategories: cats }, ...props }) => (
  <Layout title='Arclight Fabrication | Photo Gallery' {...props}>
    <Tabs
      defaultFocus
      // selectedIndex={this.state.tabIndex}
      // onSelect={tabIndex => this.setState({ tabIndex })}>
    >
      <TabList spaceAround>
        {cats && cats.map(c =>
          <Tab key={c.id}>
            {c.name}
          </Tab>)}
      </TabList>
      {loading ? <P>Loading...</P> : undefined}
      {cats && cats.map(c =>
        <TabPanel key={c.id}>
          <ProjectList {...c} {...props} />
        </TabPanel>)}
    </Tabs>
  </Layout>
)
)
