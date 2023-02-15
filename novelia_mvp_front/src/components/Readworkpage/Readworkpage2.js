import React from 'react';

class Readworkpage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Text />
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
            'margin-left':'670px',
            'background-color': "#D9D9D9",
        };
        return(
            <div style = {style}>

            </div>
        )
    }
}

class Text extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){

        const style = {
            'position':'absolute',
            'width':"56px",
            'height':"35px",
            'left':"669px",
            'font-family':'Roboto',
            'font-weight':400,
            'font-size':"30px",
            'line-height':"35.16px",
            'align':"center",
            'text-color':'#000000'
        }

        const style1 = {
            'position':'absolute',
            'width':"83px",
            'height':"35px",
            'top':"143px",
            'left':"669px",
            'font-family':'Roboto',
            'font-weight':400,
            'font-size':"30px",
            'line-height':"35.16px",
            'align':"center",
            'text-color':'#000000'
        }

        const style2 = {
            'position':'absolute',
            'width':"30px",
            'height':"19px",
            'top':"175px",
            'left':"1047px",
            'font-family':'Roboto',
            'font-weight':400,
            'font-size':"16px",
            'line-height':"18.75px",
            'align':"center",
            'text-color':'#000000'
        }

        const style3 = {
            'position':'absolute',
            'width':"72px",
            'height':"30px",
            'top':"190px",
            'left':"1075px",
            'align':"center",
            'background-color':"#FFFFFF",
        }
        const style4 = {
            'position':'absolute',
            'width':"30px",
            'height':"19px",
            'top':"175px",
            'left':"1150px",
            'font-family':'Roboto',
            'font-weight':400,
            'font-size':"16px",
            'line-height':"18.75px",
            'align':"center",
            'text-color':'#000000'
        }
        const style5 = {
            'position':'absolute',
            'width':"72px",
            'height':"30px",
            'top':"190px",
            'left':"1178px",
            'align':"center",
            'background-color':"#FFFFFF",
        }
        const style6 = {
            'position':'absolute',
            'width':"30px",
            'height':"12px",
            'top':"220px",
            'left':"669px",
            'font-family':'Roboto',
            'font-style':'Regular',
            'font-weight':400,
            'font-size':"10px",
            'line-height':"100%",
            'align':"center",
            'Vertical-align':"center",
            'text-color':'#000000'
        }
        const style7 = {
            'position':'absolute',
            'width':"Hug",
            'height':"Hug",
            'top':"1000px",
            'left':"900px",
            'font-family':'Roboto',
            'font-style':'Regular',
            'font-weight':400,
            'font-size':"16px",
            'line-height':"19px",
            'align':"center",
            'Vertical-align':"center",
            'text-color':'#000000'
        }
        return(
            <div>
            <div style={style}>
                <h5>제목</h5>
            </div>
            <div style={style1}>
                <h5>소제목</h5>
            </div>
            <div style={style2}>
                <h5>크기</h5>
            </div>
            <div style={style3}>
                <select>

                </select>
            </div>
            <div style = {style4}>
                <h5>간격</h5>
            </div> 
            <div style = {style5}>
            <select>

            </select>    
                
            </div> 
            <div style={style6}>
                <h6>본문</h6>
            </div>
            <div>
                <button style={style7}>
                    다음화보기
                </button>
            </div>

            </div>
        )
    }
}

export default Readworkpage;