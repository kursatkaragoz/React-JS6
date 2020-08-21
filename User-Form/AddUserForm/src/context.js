import React, { Component } from 'react';
import axios from "axios";

const UserContext = React.createContext();

// Spread Operatörü: Parçalara ayırma operatörüdür, unique bir şekilde parçalara ayırır.
// Action içinde gönderilen payload ve type parçalara ayrılır.
// users üzerinde filtre ile dolanarak her bir user'a ait payload kontrol edilir.
// payload parametresinde id yer alır, payload ile user.id uyuşmadığı taktirde filtreye yakalanır
// bu durumda eski state (...state) ile yeni state arasındaki farklar gider ve kullanıcı silinmiş olur.

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case "UPDATE_USER":
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
            }
        default:
            return state
    }
}


export class UserProvider extends Component {

    state = {
        users: [  ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    componentDidMount =async() => {
        const response = await axios.get("http://localhost:3003/users");
        this.setState({
            users:response.data
        })
    }
    
  

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;
// Diğer taraflardan çekmek için kullanacağız.

export default UserConsumer;
