import { useState } from 'react';
import { SearchBar } from '../Components/SearchBar';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
IgrFinancialChartModule.register();

export function Stocks() {

  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState([]);
  const [symbol, setSymbol] = useState({}); 

  const onSearch = () => {
    fetch(`http://localhost:3001/ticker/${search}`)
      .then(response => response.json())
      .then(data => {
        setSymbol(data.name);
        setDatas(data.data);
      })
      .catch(err => {
          console.error(err);
      })
  }

    return (
      <div className="container sample" >
        <SearchBar search={search} setSearch={setSearch} onSearch={onSearch}/>
        <div className="container" >
          <IgrFinancialChart
            width="750px"
            height="750px"
            isToolbarVisible={false}
            chartType="Candle"
            chartTitle={symbol}
            titleAlignment="Left"
            titleLeftMargin="25"
            titleTopMargin="10"
            titleBottomMargin="10"
            subtitle={'subtitle'}
            subtitleAlignment="Left"
            subtitleLeftMargin="25"
            subtitleTopMargin="5"
            subtitleBottomMargin="10"
            yAxisLabelLocation="OutsideLeft"
            yAxisMode="Numeric"
            yAxisTitle="Financial Prices"
            yAxisTitleLeftMargin="10"
            yAxisTitleRightMargin="5"
            yAxisLabelLeftMargin="0"
            zoomSliderType="None"
            dataSource={datas}/>
        </div>
      </div>
    );
}