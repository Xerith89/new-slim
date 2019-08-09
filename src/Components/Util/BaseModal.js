import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';

export default class BaseModal extends Component {
    state = {
        modal:false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        return (
            <div>
            <Button color="dark" style={{marginBottom: '2rem'}}
            onClick={this.toggle}>Search</Button>

            <Modal data-testid="modal" isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                <ModalBody>
                </ModalBody>
            </Modal>
        </div>
        )
    }
}
