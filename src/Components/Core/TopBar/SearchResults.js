import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';

export default class SearchResults extends Component {
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
                <Button color="dark" className="btn-block" data-testid="searchButton" onClick={this.toggle}>Search</Button>

                <Modal data-testid="searchResults" isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Search Results</ModalHeader>
                    <ModalBody>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
