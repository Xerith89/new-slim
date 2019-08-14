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
        searchResults: []
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    fetchResults = () => {
        fetch('http://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
        .then(json => this.setState({
            searchResults: json
        }))
        .catch(error => console.log(error));
    }

    handleClick = () => {
        this.toggle();
        this.fetchResults();
    }

    render() {
        return (
            <div>
                <Button color="dark" className="btn-block" data-testid="searchButton" onClick={this.handleClick}>Search</Button>
                <Modal data-testid="searchResults" isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Search Results</ModalHeader>
                    <ModalBody>
                        {this.state.searchResults.map((result) => {
                            return (
                                <h5>{result.title}</h5>
                            )
                        })}
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
