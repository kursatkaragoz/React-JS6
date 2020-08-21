import React, {Component} from 'react'

class DecideSport extends Component{
    constructor(props){
        super(props);

        this.state ={
            longitude:0,
            err:' '
        };
    }
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                console.log(position,'okey');

                this.setState({
                    longitude:position.coords.longitude
                });
            },
            (err) => {
                console.log(err,'İzin verilmedi');
                this.setState({
                    error:err.message + ' ' + '(Lokasyona izin verilmedi)'
                });               
            }
        );
        
        const {longitude, error} = this.state;
        if (longitude !== 0 && !error){
            return (
                <div>
                    Boylam: {longitude}
                </div>
            )
        }else if(longitude == 0 && error){
            return (
                <div>
                    Hata: {error}
                </div>
            )
        }
        return(
            <div> 
                yükleniyor...
            </div>
        )
    }
}
export default DecideSport;