import React from 'react';

class Registerpage6 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Text/>
                <Square/>
                
            </div>
        )
    }
}
class Square extends React.Component{
    constructor(props){
        super(props);

        }
        
        render(){
            const style ={
                'width':"582px",
                'height':"867px",
                'margin-left':"669px",
                'margin-left':"110px",
                'background-color':'#D9D9D9',
            };
            return(
<div style ={style}>

</div>
            )
        }
}
class Text extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const style={
          'position':"absolute",
          'top':"90px",
          'left':"669px",
          'Font-family':"Roboto",
          'Font-style':"Regular",
          'Font-size':"16px",
          'line-height':"19px",
          'align':"left",
          'text-align':"left",
          'color':"#666666",

        }
        const style1={
          'position':"absolute",
          'top':"130px",
          'left':"669px",
          'Font-family':"Roboto",
          'Font-style':"Regular",
          'Font-size':"16px",
          'line-height':"19px",
          'align':"left",
          'text-align':"left",
          'color':"#666666",


        }
        const style2={
            'position':"absolute",
            'top':"240px",
            'left':"669px",
            'width':"Hug",
            'height':"Hug",
            'Font-family':"Roboto",
            'Font-weight':400,
            'Font-size':"16px",
            'line-height':"100%",
            'Vertical-align':"center",
            'text-align':"center",
            'text-color':"#666666",
        }
        return(
            <div>
<div style={style}>
    <h5>닉네임*</h5>
</div>

<form style={style1}>
                <input type="text"placeholder="한글,영어,숫자 가능"></input>
 </form>
<button style ={style2}>
    중복확인
</button>

</div>
        )
    }

}
export default Registerpage6;