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
    fetch(`http://localhost:3001/ticker/${search.toUpperCase()}`)
      .then(response => response.json())
      .then(data => {
        setSymbol(data.name);
        console.log(data);
        const formattedData = data.data.map(data => ({
          ...data,
          Date: new Date(data.Date)
        }));
        console.log(formattedData);
        setDatas(formattedData);
      })
      .catch(err => {
          console.error(err);
      })
  }

    return (
      <div className="container sample" style={{width: "1000px"}}>
        <SearchBar search={search} setSearch={setSearch} onSearch={onSearch}/>
        <div className="container" >
          <IgrFinancialChart
            width="750px"
            height="750px"
            chartType="Line"
            thickness={2}
            chartTitle="Google vs Microsoft Changes"
            subtitle="Between 2013 and 2017"
            yAxisMode="PercentChange"
            yAxisTitle="Percent Changed"
            dataSource={datas}
            xAxisLabelLocation="OutsideBottom"
            xAxisLabelAngle={45}
            axisLabelFormat="yyyy-MM-dd HH:mm"
             />
        </div>
      </div>
    );
}