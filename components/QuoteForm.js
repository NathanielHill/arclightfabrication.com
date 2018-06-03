/* global alert */
import { Button, Center, Input, P, TextArea } from './../lib/components'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const FormButton = styled(({
  isVerified,
  children,
  ...rest
}) => (<Button {...rest}>{children}</Button>)
)`
    background: ${props => props.isVerified ? props.theme.lightGrey : props.theme.grey};
    color: ${props => props.isVerified ? props.theme.brandPrimary : props.theme.darkGrey};
    cursor: ${props => props.isVerified ? 'pointer' : 'not-allowed'};
    margin-bottom: ${props => props.theme.defaultSpacing};
`
export default class QuoteForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formData: {
        name: '',
        phoneNumber: '',
        eMail: '',
        notes: ''
      },
      error: '',
      isVerified: props.isVerified
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  handleFormSubmitted () {
    // Make this time based, like a 30 second lockout
    // Session.set('formSubmitted', true)
    alert('Form Submitted!')
    this.props.onAfterSubmit()
  }
  onChange (e) {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        [e.target.id]: e.target.value
      }
    })
  }
  onSubmit (e) {
    e.preventDefault()
    this.setState({ error: '' })
    // Meteor.call('quotes.insert', this.state.formData, (err, res) => {
    //   if (!err) {
    //     this.handleFormSubmitted()
    //   } else {
    //     this.setState({ error: err.reason })
    //   }
    // })
  }
  render () {
    return (
      <Form onSubmit={this.onSubmit}>
        <Input type='text' placeholder='Your full name please.' id='name' key={1}
          value={this.state.name} onChange={this.onChange} />
        <Input type='text' placeholder='Your phone number (optional)' id='phoneNumber'
          value={this.state.phoneNumber} onChange={this.onChange} />
        <Input type='email' placeholder='Your Email.' id='eMail'
          value={this.state.eMail} onChange={this.onChange} />
        <TextArea rows='4' type='textarea' maxLength='280' placeholder='Describe your project...' id='notes'
          value={this.state.notes} onChange={this.onChange} />
        <FormButton
          isVerified={this.props.isVerified}
          disabled={!this.props.isVerified}
        >
          Request Quote
        </FormButton>
        <Center>
          {this.state.error ? <P>{this.state.error}</P> : undefined}
        </Center>
      </Form>
    )
  }
}
