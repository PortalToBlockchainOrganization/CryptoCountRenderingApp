import React from 'react'
import styled from 'styled-components'
import { Button, Spinner, Form, Modal } from "react-bootstrap";



const sliderThumbStyles = (props) => (`
    width: 25px;
    height: 25px;
    background: ${props.color};
    cursor: pointer;
    outline: 5px solid oragne;
    opacity: ${props.opacity};
    -webkit-transition: .2s;
    transition: opacity .2s 
`)

const Styles = styled.div`
    align-item: center;
    color: white;
    border-radius: 8px;
    background-color: rgb(76, 63, 63);
    margin-top:5px;

    .value{
        display: flex;
        margin-top: 50px;
        margin-left: -80px;
        font-size: 2rem;
 
    }

    .value4{
        display: flex;
        flex-direction: column;
        position:inherit;
        font-size: 1em;
        margin: 10px 10px 10px 10px;
        // align-items: center;
        padding: auto;
  
  
        



    }
    .wrap{
        margin: auto;
    }

    .value5{
        display: flex;
        flex-direction: column;
        position:relative;
        justify-content: center;
        align-items: center;
        font-size: 3em;
        margin: 20px 20px 20px 20px;
        padding: auto;
        // background: rgba(51, 170, 51, .1) 
    }
    .leftWrap{
        position: inherit;
        left: 0;
        top: 20px;
        /* right: 50%; */
        width: 50%;
        margin-right: 50%;
        padding: auto;
        margin-left: 170px;

    }
    
    .rightWrap{
        top: 20px;
        position: inherit;
        right: 0;
        /* right: 50%; */
        width: 50%;
        margin-left: 50%;
        padding: auto;
        margin-right: 10px;
    }

    .slider{
        -webkit-appearance: none;
        width: 500px;
        height: 15px;
        border-radius: 5px;
        background: blue;
        outline: none;
        margin: auto;
        padding: auto;
        margin-right: 50px;
        margin-left:50px;
        width: 70%;
        align-items: center;

        &::-webkit-slider-thumb{
            -webkit-appearance: none;
            appearance: none;
            ${props => sliderThumbStyles(props)}
        }

        &::-moz-range-thumb{
            ${props => sliderThumbStyles(props)}
        }
    }
`;

export default class Slider extends React.Component{
    state={
        value: 10
    }

    handleOnChange = (e) => this.setState({value: e.target.value})
    

    render(){
        return(
            <Styles color={this.props.color }>
                <div className='value4'>Select Quantity From Current Position</div>
                 {/* <div className='value4'>${(this.state.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div> */}
                 <br></br>
                 <div >
                        <input type='range' min={0} step={1} max={250} value={this.state.value} className='slider' onChange={this.handleOnChange}></input>
                 </div>
                 <br></br>
                 <div className='leftWrap'>{(this.state.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} SDAO    </div>
                 <div className='rightWrap'>
           
                 </div>
               
            
                 {/* <div className='value4'>Expected Annual Return</div> */}
                {/* <div className='value5'>${(Math.round((this.state.value * .0616)*10)/10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div> */}


            </Styles>
        )
    }

}
