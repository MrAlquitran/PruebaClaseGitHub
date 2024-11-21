google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Partidos', 'Escaños'],
          ['PSOE', 121],
          ['SUMAR', 31],
          ['VOX', 33],
          ['PP', 137],
          ['ERC', 7],
          ['EH Bildu', 6],
          ['JUNTS', 7]
        ]);

        var options = {
          title: 'Resultados elecciones generales'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBarColors);

function drawBarColors() {
      var data = google.visualization.arrayToDataTable([
        ['Elecciones', '2023 Escaños', '2019 Escaños'],
        ['PSOE', 121, 120],
        ['SUMAR', 31, 0],
        ['VOX', 33, 52],
        ['PP', 137, 89],
        ['ERC', 7, 13],
        ['EH Bildu', 6, 5],
        ['JUNTS', 7, 8]
      ]);

      var options = {
        title: 'Elecciones generales 2023-2019',
        chartArea: {width: '30%', height:'100%'},
        colors: ['#b0120a', '#ffab91'],
        hAxis: {
          title: 'Total Escaños',
          minValue: 0
        },
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

    google.charts.load('current', {
        'packages':['geochart'],
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Spain', 82],
          ['United States', 79],
          ['China', 63],
          ['Italy', 61],
          ['France', 89],
          ['Germany', 39]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }