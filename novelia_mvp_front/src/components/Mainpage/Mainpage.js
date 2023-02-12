import React from 'react'

function Mainpage(){
    return(
        <div>
            <Image />
            <Text />
        </div>
    );
}

class Image extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        const style ={
            'width':"540.4px",
            'height':"160px",
            'margin-top':"35px",
            'margin-left':"300px",
            'background-color':"#D9D9D9",
        }

        return(
            <div style={style}>

            </div>
        )
    }

}

const Text = () => {

    const style={
        'width':'107px',
        'height':'45px',
        'margin-top':"443px",
        'margin-left':"1307px",
        'font-family':"Roboto",
        'font-weight': 400,
        'font-size':"16px",
        'line-height':"18.75px",
        'text-align':"center",

    }

    return(
        <div style={style}>
            <table>
                <tr>
                    <td style={{width:"107px"}}><u>추천순</u></td>
                    <td style={{width:"107px"}}><u>최신순</u></td>
                </tr>
                <tr>

                </tr>
            </table>
        </div>
    )
}

export default Mainpage;