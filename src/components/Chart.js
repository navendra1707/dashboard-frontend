import React from 'react';
import Plot from 'react-plotly.js';

const Chart = ({ data, xLabel, yLabel, type }) => {
  const xValues = data.map(item => item._id);
  const yValues = data.map(item => item.sum);
  console.log(type);

  return (
    <Plot
      data={[
        type === 'pie' ? ({
          labels: xValues,
          values: yValues,
          type: type,
        }) : ({
          x: xValues,
          y: yValues,
          type: type,
        })
      ]}
      layout={{
        width: '80rem',
        height: '40rem',
        title: `${xLabel} Vs ${yLabel}`,
        xaxis: {
          title: xLabel,
        },
        yaxis: {
          title: yLabel,
        },
      }}
    />
  );
};

export default Chart;
