import { useState } from 'react';
import { SearchBar } from '../Components/SearchBar';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
IgrFinancialChartModule.register();

export function Stocks() {

  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState([]);
  const [overview, setOverview] = useState({}); 
  const [searchError, setSearchError] = useState(false);

  const onSearch = () => {
    fetch(`http://localhost:3001/ticker/${search.toUpperCase()}`)
      .then(response => response.json())
      .then(data => {
        setOverview(data.overview);
        const formattedData = data.data.map(data => ({
          ...data,
          Date: new Date(data.Date)
        }));
        setDatas(formattedData);
        setSearchError(false);
      })
      .catch(err => {
        setSearchError(true);
        console.log("Search no results with error : ", err);
      })
  }

    return (
      <div className="container sample" style={{width: "1000px"}}>
        <SearchBar search={search} setSearch={setSearch} onSearch={onSearch}/>
        <div className="container" >
          {!searchError ? (
            <IgrFinancialChart
              width="750px"
              height="750px"
              chartType="Line"
              thickness={2}
              chartTitle={overview.Name}
              subtitle={overview.Industry}
              yAxisMode="PercentChange"
              yAxisTitle="Percent Changed"
              dataSource={datas}
              xAxisLabelLocation="OutsideBottom"
              xAxisLabelAngle={45}
              axisLabelFormat="yyyy-MM-dd HH:mm"
            />
          ) : (
            <h2 className="d-flex align-items-center justify-content-center" style={{height: "750px"}}>Not found</h2>
          )     
        }       
        </div>
      </div>
    );
}