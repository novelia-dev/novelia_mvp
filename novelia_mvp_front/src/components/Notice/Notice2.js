import React from 'react';

class Notice2 extends React.Component{
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
            width:"582px",
            height:"867px",
            'background-color': "#D9D9D9",
        };
        return(
            <div style = {style}>

            </div>
        )
    }
}

export default Notice2;