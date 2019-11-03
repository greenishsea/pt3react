import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap';

const propTypes = {
  show: React.PropTypes.bool.isRequired,
  content: React.PropTypes.object.isRequired
};

class ModalCommon extends Component {
  constructor(props) {
    super(props);
  }

  onClickButton(actionCreator, plusModalHide) {
    if (actionCreator) {
      // dispatch designated action
      this.props.dispatchAction(actionCreator);
    }

    if (plusModalHide) {
      // hide modal
      this.props.dispatchAction(this.props.content.attr.onHide);
    }
  }

  render() {
    const {show, content} = this.props;
    if (show === false || content === null) {
      return null;
    }

    let btns = null;
    if (content.buttons) {
      btns =
        content.buttons.map(
          (button, index) =>
            <Button key={index}
                    className={button.className}
                    onClick={() => {
                      this.onClickButton(button.onClick, button.plusModalHide)
                    }}
            >
              {button.label}
            </Button>
        )
    }

    return (
      <Modal
        {...content.attr}
        show={show}
        onHide={() => this.onClickButton(content.attr.onHide, false)}
        animation={false}
      >
        <Modal.Header closeButton={content.attr.backdrop === true ? true : false}>
          <Modal.Title>{content.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{content.subTitle}</h4>
          <p>{content.bodyText}</p>
        </Modal.Body>
        <Modal.Footer>
          {btns}
        </Modal.Footer>
      </Modal>
    );
  }
}

ModalCommon.propTypes = propTypes;

function mapStateToProps(state, ownProps) {
  return {
    show: state.modal.show,
    content: state.modal.content
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatchAction: (actionCreator) => {
    dispatch(actionCreator())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalCommon);
