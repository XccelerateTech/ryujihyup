import * as React from 'react';

import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input} from 'reactstrap'    





class LinksModal extends React.Component{
   constructor(props) {
     super(props);
     this.state = {
       modal: false,
       url: null,
       title: null,
       tags: null
     };
   }

    toggle = () => {
     this.setState({
       modal: !this.state.modal
     });
    }
    
    handleUrl = (e)=> {
      e.preventDefault()
      this.setState({
          url: e.target.value
      }
      )
  }
    handleTitle = (e)=> {
      e.preventDefault()
      this.setState({
          title: e.target.value
      }
      )
  }
    handleTags = (e)=> {
      e.preventDefault()
      this.setState({
          tags: e.target.value
      }
      )
  }

  test = () => {
    console.log(this.state.title)
  }
  
  storeValue = (e) => {
      e.preventDefault();
      console.log(this.state)
        this.props.addLink(this.state);
        this.setState({
            url: '',
            title: '',
            tags: ''
        })
        this.toggle()
    }

    render() {
     return (
       <div>
         <Button color="danger" onClick={this.toggle}>Add Link</Button>
         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
           <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
           <ModalBody>
             <Form>
               <FormGroup>
                 <Label>URL</Label>
                 <Input type="text" placeholder="URL" value={this.state.url} onChange={this.handleUrl}/>
               </FormGroup>
               <FormGroup>
                 <Label>Title</Label>
                 <Input type="text" placeholder="Title" value={this.state.title} onChange={this.handleTitle}/>
               </FormGroup>
               <FormGroup>
                 <Label>Tags</Label>
                 <Input type="text" placeholder="Tags" value={this.state.tags} onChange={this.handleTags}/>
               </FormGroup>
             </Form>
           </ModalBody>
           <ModalFooter>
             <Button color="primary" onClick={this.storeValue}>Add Links</Button>{' '}
             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
           </ModalFooter>
         </Modal>
       </div>
      );
    }
  }
   export default LinksModal;