import React from 'react';
import faker from "faker";
import {Button, Row, Col, Modal} from 'reactstrap'
import Links from './Links';
import SearchBar from './searchBar';
import LinksModal from './LinksModal';
import Container from 'reactstrap/lib/Container';


export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            links: [],
            modalShow: false,
            value: ''
        }
    }

    addToStorage = () => {
        let arr = this.state.links
        localStorage.setItem('links', JSON.stringify(arr));
    }


    addLink = (link) => {
        console.log('wow')
        let newLinkArray = this.state.links.concat([{ url: link.url, title: link.title, tags: [link.tags]}])
        this.setState({
            links: newLinkArray
        })
    }

    renderLinks(url, title, tags) {
        return (<Links url={url} title={title} tags={tags}/>
        ); 

    }

    filterItems = (arr, query) => {
        return arr.filter(el => el.title.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1 || el.url.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1) ;   
    };

    handleChangeValue = (e) => {
        e.preventDefault()
        this.setState({value: e.target.value})
    };



    render(){
        this.addToStorage()
        var linksStore = JSON.parse(localStorage.getItem('links'));
        var lengthOflinks = linksStore.length
        // var result = this.filterItems(this.state.links, this.state.value)
        // console.log(result)

        var result = this.filterItems(this.state.links, this.state.value)

        return (
            <Container>
                <Row>
                    <Col md={5} sm={12} xs={12} className="justify-content-md-center">
                        <div style={profileBox}>
                            <img src={faker.image.avatar()} style={imageStyle}/>
                            <h2>Game of Falls</h2>
                            <p>Now you have {lengthOflinks} links!</p>
                            <LinksModal addLink={this.addLink}/>
                        </div>
                    </Col>
                    <Col md={7} sm={12} xs={12} className="justify-content-md-center">
                        <SearchBar value={this.state.value} onChangeValue={this.handleChangeValue} onSubmitValue={this.searchResult}/>
                            {result.map((link) => this.renderLinks(link.url, link.title, link.tags))}
                    </Col>
                </Row>
            </Container>

            
        )
    }
}

const profileBox = {
    height: '100%',
    width: '100%',
    border: "3px solid",
    margin: 'auto',
    width: '60%',
    padding: '10px'
}

const imageStyle = {
    padding: 5
}

