import { Container, ProjectListItem, P } from './../lib/components'
import FlipMove from 'react-flip-move'
import styled from 'styled-components'

const ProjectListWrapper = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: ${props => props.theme.siteMaxWidth};
  }
  max-width: 80vw;
  padding: ${props => props.theme.defaultSpacing};
  padding-bottom: 0;
`
export default (props) => (
  <ProjectListWrapper>
    <Container vertical>
      <FlipMove maintainContainerHeight>
        <div>
          {props.projects.length === 0
            ? <Container>
              <P>No projects found!</P>
            </Container>
            : props.projects.map(p => <ProjectListItem key={p.id} {...p} />)
          }
        </div>
      </FlipMove>
    </Container>
  </ProjectListWrapper>
)
