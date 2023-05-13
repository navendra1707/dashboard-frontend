import Plot from "react-plotly.js";

export default function LineChart({trace, title}) {
  const x = [];
  const y = [];

  trace?.forEach(item => {
    x.push(item._id);
    y.push(item.sum);
  });

  const dataTrace = {
    x: x,
    y: y,
    mode: "markers+lines",
    type: "scatter"
  };
  const data = [dataTrace];
  return (
    <div>
      <Plot
        data={data}
        layout={{
          title: title,
          width: '100%',
          height: 'auto'
        }}
        
      />
    </div>
  );
}