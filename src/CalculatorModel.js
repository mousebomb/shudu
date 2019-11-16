export default class CalculatorModel
{

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
  chkIsCorrect()
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
        curNum = this.gridVal[CalculatorModel.calcCellIndex(i, j)];
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
        curNum = this.gridVal[CalculatorModel.calcCellIndex(i, j)];
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
            curNum = this.gridVal[CalculatorModel.calcCellIndex(i + k, j + l)];
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
        let x = subGridX + k;
        let y = subGridY + l;
        if (x != cellX && y != cellY)
        {
          withoutNums.push(gridVal[CalculatorModel.calcCellIndex(x, y)]);
        }
      }
    }

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
    console.log("CalculatorModel/trySolveCell", this.gridVal, this.tryCellIndex, this.posibilities);
    if (this.posibilities.length < 1)
    {
      this.finishCb(false);
      return false;
    }

    this.curPosibilityIndex = 0;

    setTimeout(() => {
      this.tryLoopNextPosibility();
    }, 50);

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
        }, 50);
      }
    });

    return m.trySolveCell();
  }

  /** 试运行， 产生题目并生产结果 */
  runRandom()
  {
    let grid = [];
    for (let i = 0; i < 81; i++)
    {
      grid[i] = 0;
    }
    this.beginWith(grid, 0, () => {
      console.log("found ", CalculatorModel.resultGrid);
    });
    this.trySolveCell();

  }

  static traceCb = function(){};

  /** 运行， 生产结果 */
  runGrid( inputGridVals ,displayCb )
  {
    CalculatorModel.traceCb = displayCb;
    this.beginWith(inputGridVals, 0, () => {
      console.log("found ", CalculatorModel.resultGrid);
      displayCb ( CalculatorModel.resultGrid);
    });
    this.trySolveCell();
  }
}