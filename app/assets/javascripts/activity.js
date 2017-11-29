$.getJSON('/data/activity', function (data) {
  function adaptActivityData(data) {
    var adaptedData = [];
    for (var i = 0; i < data.length; ++i) {
      var activityData = data[i];
      var adaptedActivityData = {
        name: activityData['name'],
        data: adaptData(activityData['data'])
      };
      adaptedData.push(adaptedActivityData)
    }
    return adaptedData;
  }

  Highcharts.chart('activity', {
      title: {
          text: 'Activities'
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          type: 'datetime'
      },
      yAxis: {
          title: {
              text: 'Miles'
          }
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },

      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 2010
          }
      },

      series: adaptActivityData(data),

      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }

  });
});
