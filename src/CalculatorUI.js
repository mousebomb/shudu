import React, {Component} from 'react';
import CalculatorModel from "./CalculatorModel";


export default class CalculatorUI extends Component
{

  state = {isLoading:false};

  componentDidMount()
  {
    this.model = new CalculatorModel();
  }

  render()
  {
    return (
      <div className="CalculatorUI">
        <table>
          <tbody>
          <tr>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
          </tr>
          <tr>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
          </tr>
          <tr>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
          </tr>
          <tr className="hrBefore">
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
          </tr>
          <tr>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
          </tr>
          <tr>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
          </tr>
          <tr className="hrBefore">
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
          </tr>
          <tr>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
          </tr>
          <tr>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td className="vrBefore"><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
            <td><input type="text" className="inputTf" name="" id=""/></td>
          </tr>
          </tbody>
        </table>


        {this.state.isLoading === false && <p><a onClick={() => {
          this.runGrid()
        }}> Calculate </a></p>
        }

        {this.state.isLoading === false && <p><a onClick={() => {
          this.readTest()
        }}>Read Test Grid </a></p>
        }
        {this.state.isLoading === false && <p><a onClick={() => {
          this.clear()
        }}>Clear</a></p>
        }
      </div>);
  }

  readTest()
  {
    let inputTfs = window.document.getElementsByClassName("inputTf");
    for (let i = 0; i < 81; i++)
    {
      inputTfs.item(i).style.backgroundColor ="";
      inputTfs.item(i).value="";
    }
    inputTfs.item(1).value = 7;
    inputTfs.item(3).value = 1;
    inputTfs.item(5).value = 6;
    inputTfs.item(8).value = 5;
    inputTfs.item(9).value = 2;
    inputTfs.item(10).value = 3;
    inputTfs.item(11).value = 1;
    inputTfs.item(17).value = 4;
    inputTfs.item(22).value = 9;
    inputTfs.item(25).value = 3;
    inputTfs.item(34).value = 8;
    inputTfs.item(35).value = 2;
    inputTfs.item(38).value = 3;
    inputTfs.item(39).value = 9;
    inputTfs.item(41).value = 5;
    inputTfs.item(42).value = 1;
    inputTfs.item(45).value = 7;
    inputTfs.item(46).value = 4;
    inputTfs.item(55).value = 5;
    inputTfs.item(58).value = 7;
    inputTfs.item(63).value = 3;
    inputTfs.item(69).value = 5;
    inputTfs.item(70).value = 7;
    inputTfs.item(71).value = 9;
    inputTfs.item(72).value = 1;
    inputTfs.item(75).value = 2;
    inputTfs.item(77).value = 8;
    inputTfs.item(79).value = 4;
  }

  clear(){
    let inputTfs = window.document.getElementsByClassName("inputTf");
    for (let i = 0; i < 81; i++)
    {
      inputTfs.item(i).style.backgroundColor ="";
      inputTfs.item(i).value="";
    }
  }

  runGrid()
  {
    //
    let inputTfs = window.document.getElementsByClassName("inputTf");
    //这里是横竖排列和model是反的，没关系，因为是对称，都一样。
    let gridVals = [];
    for (let i = 0; i < 81; i++)
    {
      let inputVal = parseInt(inputTfs.item(i).value) || 0;
      if (inputVal >0)
        inputTfs.item(i).style.backgroundColor ="yellow";
      else
        inputTfs.item(i).style.backgroundColor ="";

      gridVals.push( inputVal );
    }
    this.setState({isLoading:true});

    this.model.runGrid( gridVals  , (result)=>{
      for (let i = 0; i < 81; i++)
      {
        inputTfs.item(i).value = result[i];
      }
      this.setState({isLoading:false});
    });
  }
}