import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  FormGroup
} from "reactstrap";

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
        title: "",
        year: "",
        image: "https://www.goodclic.fr/www/images/no-image.png",
        rating: 0
      
    };

    this.toggle = this.toggle.bind(this);
  }
  addNewMovie=()=>{
    const {title,year,image,rating}=this.state
    const newMovie={
      title,year,image,rating
    }
    this.toggle();
    return this.props.addMovie(newMovie);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className="add-movie">
        <Button color="danger" onClick={this.toggle}>
          ADD
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Movie</ModalHeader>
          <ModalBody className="modal-body">
            <from>
              <FormGroup>
                <Label>Movie Name</Label>
                <Input
                  onChange={e => {
                    this.setState({
                      title: e.target.value
                    });
                  }}
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label>Movie Year</Label>
                <Input
                  onChange={e => {
                    this.setState({
                      year: e.target.value
                    });
                  }}
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label>Movie Image Link</Label>
                <Input
                  onChange={e => {
                    this.setState({
                      image: e.target.value
                    });
                  }}
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label>Movie Rate</Label>
                <Input
                  onChange={e => {
                    this.setState({
                      rating: e.target.value
                    });
                  }}
                  type="text"
                />
              </FormGroup>
            </from>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addNewMovie}>
              ADD
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;
