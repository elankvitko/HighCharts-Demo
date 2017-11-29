$.getJSON('/data/calories', function (data) {
  Highcharts.chart('calories', {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Calories'
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          type: 'datetime'
      },
      yAxis: {
          title: {
              text: 'Consumed Per Day'
          }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true
              },
              enableMouseTracking: false
          }
      },
      series: [{
        data: adaptData(data)
      }]
  });
});
