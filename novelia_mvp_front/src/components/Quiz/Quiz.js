import React from 'react';

class Quiz extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Square />
            </div>
        )
    }
}

class Square extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const style={
            width:"581px",
            height:"1081px",
            'background-color': "#D9D9D9",
        };
        return(
            <div style = {style}>

            </div>
        )
    }
}

export default Quiz;