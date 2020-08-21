import React, {Component} from 'react';
import SearchBar from './searchBar/searchBar';
import './app.css';
import ImageList from './image/imageList';
import axios from 'axios';


class App extends Component {

    state = {
        images:[]
    }

    onSearchImage = async(search) => {
        
        console.log('App: ' + search);
        const result = await axios.get('https://api.unsplash.com/search/photos',{
            params: {
                query: search
            },
            headers: {
                Authorization: 'Client-ID 3bnY5KKwmVwpCJphZS4GKn6R2XuthOArmKJTt952I1Q'
            }
        })
        
        this.setState({
            images:result.data.results
        });
    }

    render(){
        return(
            <div className = 'app-container' >
                <SearchBar onSearchImage = {this.onSearchImage}/>
                <ImageList images = {this.state.images}/>
                
                
                
            </div>
            
        )
    }
};

export default App;