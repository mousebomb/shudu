export default class CalculatorModel
{
  static SLEEP_TIME = 1;
  //
  static resultGrid = [];

  //
  gridVal = [];
  //
  tryCellIndex = 0;
  finishCb = null;

  beginWith(inputGrid, tryCellIndex, finishCb)
  {
    this.tryCellIndex = tryCellIndex;
    this.gridVal = inputGrid.concat();
    this.finishCb = finishCb;
  }


  static calcCellIndex(cellX, cellY)
  {
    return cellX * 9 + cellY;
  }


  /** 校验81格是否都对 */
  static chkIsCorrect(gridVal)
  {
    let isCorrect = true;

    let tmpArr9Nums = [];
    let curNum = 0;
    //横
    for (let j = 0; j < 9; j++)
    {
      //each row
      tmpArr9Nums = [];
      for (let i = 0; i < 9; i++)
      {
        curNum = gridVal[CalculatorModel.calcCellIndex(i, j)];
        if (tmpArr9Nums.indexOf(curNum) != -1)
        {
          //找到重复
          return false;
        } else
        {
          tmpArr9Nums.push(curNum);
        }
      }
    }
    //竖
    for (let i = 0; i < 9; i++)
    {
      //each row
      tmpArr9Nums = [];
      for (let j = 0; j < 9; j++)
      {
        curNum = gridVal[CalculatorModel.calcCellIndex(i, j)];
        if (tmpArr9Nums.indexOf(curNum) != -1)
        {
          //找到重复
          return false;
        } else
        {
          tmpArr9Nums.push(curNum);
        }
      }
    }
    //九宫
    for (let i = 0; i < 9; i += 3)
    {
      for (let j = 0; j < 9; j += 3)
      {
        //each grid9
        tmpArr9Nums = [];
        for (let k = 0; k < 3; k++)
        {
          for (let l = 0; l < 3; l++)
          {
            curNum = gridVal[CalculatorModel.calcCellIndex(i + k, j + l)];
            if (tmpArr9Nums.indexOf(curNum) != -1)
            {
              //找到重复
              return false;
            } else
            {
              tmpArr9Nums.push(curNum);
            }
          }
        }
      }
    }


    return isCorrect;
  }


  /** 按当前局势推测一个坐标格的合法值 */
  static predictRange4Cell(gridVal, tryCellIndex)
  {
    // 如果是已知格，则只有一种被锁定的可能
    if ( CalculatorModel.inputGridVal[tryCellIndex] >0 )
    {
      console.log("CalculatorModel/predictRange4Cell 第"+tryCellIndex+"格已知确定为"+CalculatorModel.inputGridVal[tryCellIndex]);
      //已知
      return [CalculatorModel.inputGridVal[tryCellIndex]];
    }

    let cellX = Math.floor(tryCellIndex / 9);
    let cellY = tryCellIndex % 9;
    // 推测不可能的数值
    let withoutNums = [];
    //横
    for (let i = 0; i < 9; i++)
    {
      if (i != cellX)
      {
        let curNum = gridVal[CalculatorModel.calcCellIndex(i, cellY)];
        withoutNums.push(curNum);
      }
    }
    //竖
    for (let i = 0; i < 9; i++)
    {
      if (i != cellY)
      {
        withoutNums.push(gridVal[CalculatorModel.calcCellIndex(cellX, i)]);
      }
    }
    //九宫 先确定落在哪一宫
    let subGridX = Math.floor(cellX / 3); //[0~2]
    let subGridY = Math.floor(cellY / 3);
    for (let k = 0; k < 3; k++)
    {
      for (let l = 0; l < 3; l++)
      {
        let x = subGridX*3 + k;
        let y = subGridY*3 + l;
        if (x != cellX && y != cellY)
        {
          withoutNums.push(gridVal[CalculatorModel.calcCellIndex(x, y)]);
        }
      }
    }

    console.log("CalculatorModel/predictRange4Cell 第"+tryCellIndex+"格("+ cellX+","+cellY+")不可能是",withoutNums);

    return this.makeRangeArr(withoutNums);
  }

  static makeRangeArr(withoutNums)
  {
    let end = [];
    for (let i = 1; i <= 9; i++)
    {
      if (withoutNums.indexOf(i) === -1)
      {
        end.push(i);
      }
    }
    return end;
  }


  /** 迭代测试这一级别的所有组可能性
   *    * 为下一位做可能性循环测，直到一个合理的值被选出
   * 返回最后一级是否监测通过正确*/
  trySolveCell()
  {
    // 先监测当前局势这一格可能的选择，然后一个一个试过去
    this.posibilities = CalculatorModel.predictRange4Cell(this.gridVal, this.tryCellIndex);
    if (this.posibilities.length < 1)
    {
      console.log("CalculatorModel/trySolveCell 找不到["+ this.tryCellIndex+"]的可能性");
      this.finishCb(false);
      return false;
    }
    console.log("CalculatorModel/trySolveCell 找第"+this.tryCellIndex+"格的可能性有："+this.posibilities.join(","),this.gridVal);


    this.curPosibilityIndex = 0;

    setTimeout(() => {
      this.tryLoopNextPosibility();
    }, CalculatorModel.SLEEP_TIME);

  }

  posibilities = [];
  curPosibilityIndex = 0;

  tryLoopNextPosibility()
  {
    if (this.curPosibilityIndex < this.posibilities.length)
    {
      let li = this.posibilities[this.curPosibilityIndex++];
      this.tryPosibility(li)
    } else
    {
      console.log("CalculatorModel/tryLoopNextPosibility 可能性用完都不行，测试过都可能性:" , this.posibilities);
      this.finishCb(false);
      return false;
    }
  }

  tryPosibility(li)
  {
    //设本格 为可能性 li
    this.gridVal[this.tryCellIndex] = li;
    // 显示临时假设
    CalculatorModel.traceCb(this.gridVal);
    console.log("CalculatorModel/tryPosibility 假设digit"+this.tryCellIndex+"为：" +li +", 则81格序列为："+this.gridVal.join(",") );
    // 是否是最后一级 最后一级如果有有效的li则返回true
    if (this.tryCellIndex === 80)
    {
      CalculatorModel.resultGrid = this.gridVal.concat();
      this.finishCb(true);
      return true;
    }
    // 不是最后一级，继续递归
    let m = new CalculatorModel();
    m.beginWith(this.gridVal, this.tryCellIndex + 1, (result)=>{
      if(result==true)
      {
        //如果递归的下一级成功，则本级算做成功，回调上一级
        this.finishCb(true);
      }else{
        //如果递归的下一级失败 则本级待定，迭代下一个可能
        setTimeout(() => {
          this.tryLoopNextPosibility();
        }, CalculatorModel.SLEEP_TIME);
      }
    });

    return m.trySolveCell();
  }


  static traceCb = function(){};
  static inputGridVal=[];

  /** 运行， 生产结果 */
  runGrid( inputGridVals ,displayCb )
  {
    CalculatorModel.traceCb = displayCb;
    CalculatorModel.inputGridVal = inputGridVals;
    this.beginWith(inputGridVals, 0, () => {
      console.log("found ", CalculatorModel.chkIsCorrect(CalculatorModel.resultGrid),CalculatorModel.resultGrid );
      displayCb ( CalculatorModel.resultGrid);
    });
    this.trySolveCell();
  }
}