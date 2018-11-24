import ReactModal from 'react-modal'
import styled, { injectGlobal } from 'styled-components'

function ReactModalAdapter ({ className, modalClassName, ...props }) {
  ReactModal.setAppElement('body')
  return (
    <ReactModal
      className={modalClassName}
      portalClassName={className}
      {...props}
    />
  )
}

/* Remove this for mobile? */
/* Remove scroll on the body when react-modal is open */
injectGlobal`
  .ReactModal__Body--open {
      overflow: hidden;
    }
`
const Modal = styled(ReactModalAdapter).attrs({
  overlayClassName: 'BoxedViewModalOverlay',
  modalClassName: 'BoxedViewModal'
})`
    .BoxedViewModalOverlay {
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .BoxedViewModal {
      background-color: ${props => props.theme.boxedViewBackground};
      padding: 2.4rem;
      text-align: center;
      width: 24rem;
    }
`

export default Modal
