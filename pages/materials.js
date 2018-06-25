import gql from 'graphql-tag'
import { Container, H1, Layout } from './../src/lib/components'
import pageWrapper from './../src/lib/pageWrapper'

export default pageWrapper(gql`
  query allMaterials {
    allMaterials(orderBy: order_ASC) {
      name
      description
    }
  }
`, ({ data: { loading, error, allMaterials: materials }, ...props }) => (
  <Layout title='Arclight Fabrication | Materials' {...props}>
    <Container padding vertical>
      {materials && materials.map(m =>
        <Container background padding vertical>
          <H1>{m.name}</H1>
          {m.description}
        </Container>
      )}
    </Container>
  </Layout>
)
)
