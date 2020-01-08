import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'typeface-roboto';
import { blueGrey } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown } from '@fortawesome/free-regular-svg-icons';
import Typography from '@material-ui/core/Typography';



const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
});


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bin: '',
      dec: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleConvert = this.handleConvert.bind(this);
  }
  
  handleChange(e){
    if ((/[^01]/).test(e.target.value)){
      this.setState({bin:this.state.bin});
      document.getElementById("hide-ele").style.display='block';
      setTimeout(function(){document.getElementById("hide-ele").style.display='none'}, 2000);
    }
    else{
      if((/^00/).test(e.target.value)||(/^01/).test(e.target.value)){
        this.setState({bin:e.target.value.substring(1)})
      }
      else {
      this.setState({bin:e.target.value})
      }
    }
  }

  handleConvert(){
    let decimal = 0;
    for (let i = 0; i <this.state.bin.length; i++){
      if (this.state.bin.charAt(i)=== '1'){
      decimal = decimal + Math.pow(2, (this.state.bin.length - i - 1));
      }
    }
    this.setState({dec:decimal})
  }

  render(){
    return (
    <div className="App">
      <div className="header">Binary to Decimal Convertor</div>
      <Container maxWidth="sm" className="container">
        <div className="alert-box" id="hide-ele">Please enter a binary number(1 or 0).</div>
      <ThemeProvider theme={theme}>
        <TextField
          style={{marginTop:"5%"}}
          className='input'
          label="A Binary Number"
          id="bin"
          variant="filled" value={this.state.bin} onChange={this.handleChange}/>
        </ThemeProvider>
        <Button style={{marginTop:'3%', minWidth:"50%", fontSize:'20px', border:"solid 1px rgba(170, 200, 200,0.8)"}} onClick={this.handleConvert}>
          <FontAwesomeIcon className='icon' icon={faCaretSquareDown} size="lg"></FontAwesomeIcon>Convert</Button>
        <div className='dec-box'><Typography color="textPrimary" variant='h2'>{this.state.dec}</Typography></div>
      </Container>
      <div className="footer">Written by Dwan W.</div>
    </div>
    );
  }
}

export default App;
