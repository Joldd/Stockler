import React, { useContext } from 'react';
import { SearchContext } from '../Components/SearchContext';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
IgrFinancialChartModule.register();

export function Stocks() {
  const { datas, overview, searchError } = useContext(SearchContext);
  if (searchError) {
    return <div>Erreur lors de la recherche. Veuillez réessayer.</div>;
  }

  if (datas.length === 0) {
    return <div>Aucun résultat trouvé.</div>;
  }
     
    return (
      <div className="container sample" style={{width: "1000px"}}>
       
        <div className="container" >
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
        </div>
      </div>
    );
}