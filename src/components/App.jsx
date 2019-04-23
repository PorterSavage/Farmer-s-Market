import React from "react";
import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";

function App(){
  return (
    <div className="grid">
    <style>{`
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr
      }
      `}</style>
      <MarketSchedule/>
      <SeasonalProduce/>
    </div>
  );
}

export default App;