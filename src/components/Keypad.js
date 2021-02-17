import React, { Component } from 'react';
// Code Keypad Component Here

class Keypad extends React.Component {

    onKeyUp = () => console.log('Entering password...')
        
    render() {
        return (
            <div>
                <input 
                    type="password"
                    onKeyUp={this.onKeyUp}
                />
            </div>
           
       )
   }
}   
    

 




export default Keypad

