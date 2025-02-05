import { useState, useEffect } from 'react';
import { SearchBar } from '../Components/SearchBar';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
IgrFinancialChartModule.register();

export function Stocks() {

  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState([]);
  const [metaData, setMetaData] = useState({}); 

  const onSearch = () => {
    //fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+"IBM"+"&interval=5min&apikey=XYHZPBM3BULB5BP4")
      fetch("test.json")
      .then(response => response.json())
      .then(data => {
        var DATA = [];
        //var m = data['Meta Data'];
        var m = {
          '1. Information': 'This is a test',
          '2. Symbol': search,
          '3. Last Refreshed': '2021-06-11 20:00:00',
          '4. Interval': '5min',
          '5. Output Size': 'Compact',
          '6. Time Zone': 'US/Eastern'
        };
        setMetaData(m);
        var t = data['Time Series (5min)'];
        var n = Object.keys(t).length;
        for (var i = n - 1; i >= 0; i--) {
          var d = Object.keys(t)[i];
          DATA.push({
            'Date': new Date(parseInt(d.slice(0, 4)), parseInt(d.slice(5, 7) - 1), parseInt(d.slice(8, 10)), parseInt(d.slice(11, 13)), parseInt(d.slice(14, 16))),
            'Open': parseFloat(t[d]['1. open']),
            'High': parseFloat(t[d]['2. high']),
            'Low': parseFloat(t[d]['3. low']),
            'Close': parseFloat(t[d]['4. close']),
            'Volume': parseFloat(t[d]['5. volume'])
          });
        }
        setDatas(DATA);
      })
      .catch(err => {
          console.error(err);
      })
  }

  // useEffect(() => {
  // fetch("test.json")
  // .then(response => response.json())
  // .then(data => {
  //   var DATA = [];
  //   var m = data['Meta Data'];
  //   setMetaData(m);
  //   var t = data['Time Series (5min)'];
  //   var n = Object.keys(t).length;
  //   for (var i = n - 1; i >= 0; i--) {
  //     var d = Object.keys(t)[i];
  //     DATA.push({
  //       'Date': new Date(parseInt(d.slice(0, 4)), parseInt(d.slice(5, 7) - 1), parseInt(d.slice(8, 10)), parseInt(d.slice(11, 13)), parseInt(d.slice(14, 16))),
  //       'Open': parseFloat(t[d]['1. open']),
  //       'High': parseFloat(t[d]['2. high']),
  //       'Low': parseFloat(t[d]['3. low']),
  //       'Close': parseFloat(t[d]['4. close']),
  //       'Volume': parseFloat(t[d]['5. volume'])
  //     });
  //   }
  //   setDatas(DATA);
  // })
  // .catch(err => {
  //   console.error(err);
  // })
  // }, []);

    return (
      <div className="container sample" >
        <SearchBar search={search} setSearch={setSearch} onSearch={onSearch}/>
        <div className="container" >
          <IgrFinancialChart
            width="750px"
            height="750px"
            isToolbarVisible={false}
            chartType="Candle"
            chartTitle={metaData['2. Symbol']}
            titleAlignment="Left"
            titleLeftMargin="25"
            titleTopMargin="10"
            titleBottomMargin="10"
            subtitle={metaData['1. Information']}
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