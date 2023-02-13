
      Highcharts.chart("container_1", {
        chart: {
          type: "bar",
        },

        title: {
          text: "Lead Task Status",
        },

        xAxis: {
          categories: ["2020/21", "2019/20", "2018/19", "2017/18", "2016/17"],
        },

        yAxis: {
          min: 0,

          title: {
            text: "Goals",
          },
        },

        legend: {
          reversed: true,
        },

        plotOptions: {
          series: {
            stacking: "normal",
          },
        },

        series: [
          {
            name: "In-Progress",

            data: [4, 4, 6, 15, 12],
          },

          {
            name: "Not-Assigned",

            data: [5, 3, 12, 6, 11],
          },

          {
            name: "Completed",

            data: [5, 15, 8, 5, 8],
          },
        ],
      });
	  
	  
	  
	  
	  
	  ///////////////////////////////////////////////////////////////
	  
	  
	  
	  
	  
	   // Create the chart

      Highcharts.chart("container_2", {
        chart: {
          type: "pie",
        },

        title: {
          text: "Tasks Based on Discipline",

          align: "center",
        },

        subtitle: {
          text: " ",

          align: "left",
        },

        accessibility: {
          announceNewData: {
            enabled: true,
          },

          point: {
            valueSuffix: "%",
          },
        },

        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,

              format: "{point.name}: {point.y:.1f}%",
            },
          },
        },

        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',

          pointFormat:
            '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
        },

        series: [
          {
            name: "Browsers",

            colorByPoint: true,

            data: [
              {
                name: "Civil",

                y: 24,

                drilldown: "Civil",
              },

              {
                name: "Mechanic",

                y: 26,

                drilldown: "Mechanic",
              },

              {
                name: "Electrical",

                y: 12,

                drilldown: "Electrical",
              },

              {
                name: "TLC",

                y: 10,

                drilldown: "TLC",
              },

              {
                name: "Other",

                y: 28,

                drilldown: null,
              },
            ],
          },
        ],

        drilldown: {
          series: [
            {
              name: "Chrome",

              id: "Chrome",

              data: [
                ["v97.0", 36.89],

                ["v96.0", 18.16],

                ["v95.0", 0.54],

                ["v94.0", 0.7],

                ["v93.0", 0.8],

                ["v92.0", 0.41],

                ["v91.0", 0.31],

                ["v90.0", 0.13],

                ["v89.0", 0.14],

                ["v88.0", 0.1],

                ["v87.0", 0.35],

                ["v86.0", 0.17],

                ["v85.0", 0.18],

                ["v84.0", 0.17],

                ["v83.0", 0.21],

                ["v81.0", 0.1],

                ["v80.0", 0.16],

                ["v79.0", 0.43],

                ["v78.0", 0.11],

                ["v76.0", 0.16],

                ["v75.0", 0.15],

                ["v72.0", 0.14],

                ["v70.0", 0.11],

                ["v69.0", 0.13],

                ["v56.0", 0.12],

                ["v49.0", 0.17],
              ],
            },

            {
              name: "Safari",

              id: "Safari",

              data: [
                ["v15.3", 0.1],

                ["v15.2", 2.01],

                ["v15.1", 2.29],

                ["v15.0", 0.49],

                ["v14.1", 2.48],

                ["v14.0", 0.64],

                ["v13.1", 1.17],

                ["v13.0", 0.13],

                ["v12.1", 0.16],
              ],
            },

            {
              name: "Edge",

              id: "Edge",

              data: [
                ["v97", 6.62],

                ["v96", 2.55],

                ["v95", 0.15],
              ],
            },

            {
              name: "Firefox",

              id: "Firefox",

              data: [
                ["v96.0", 4.17],

                ["v95.0", 3.33],

                ["v94.0", 0.11],

                ["v91.0", 0.23],

                ["v78.0", 0.16],

                ["v52.0", 0.15],
              ],
            },
          ],
        },
      });
 const weeks = [];

      const OTD = [];

      const TARGET = [];

      const TOTAL_NO_PACKAGE = [];

      for (let i = 0; i < 52; i++) {
        weeks[i] = `week${i + 1}`;

        OTD[i] = Math.floor(Math.random() * i + 120);

        TARGET[i] = 80;

        TOTAL_NO_PACKAGE[i] = Math.floor(Math.random() * i + 30);
      }

      Highcharts.chart("container_3", {
        chart: {
          zoomType: "xy",
        },

        title: {
          text: "Average weekly Target and Total Number of Package deliverd ",

          align: "center",
        },

        subtitle: {
          text: " Average weekly Target and Total Number of Package deliverd ",

          align: "center",
        },

        xAxis: [
          {
            categories: weeks,

            crosshair: true,
          },
        ],

        yAxis: [
          {
            // Primary yAxis

            labels: {
              format: "{value} %",

              style: {
                color: Highcharts.getOptions().colors[1],
              },
            },

            title: {
              text: "OTD",

              style: {
                color: Highcharts.getOptions().colors[2],
              },
            },
          },

          {
            // Secondary yAxis

            title: {
              text: "Precipitation",

              style: {
                color: Highcharts.getOptions().colors[0],
              },
            },

            labels: {
              format: "{value}",

              style: {
                color: Highcharts.getOptions().colors[0],
              },
            },

            // Secondary yAxis

            title: {
              text: "Target",

              style: {
                color: Highcharts.getOptions().colors[0],
              },
            },

            labels: {
              format: "{value}",

              style: {
                color: Highcharts.getOptions().colors[0],
              },
            },

            opposite: true,
          },
        ],

        tooltip: {
          shared: true,
        },

        legend: {
          align: "center",

          x: 0,

          verticalAlign: "top",

          y: 20,

          floating: true,

          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            "white",
        },

        series: [
          {
            name: "OTD",

            type: "column",

            yAxis: 1,

            data: OTD,

            tooltip: {
              valueSuffix: "",
            },
          },

          {
            name: "Total No. of drwaings delivered",

            type: "spline",

            data: TOTAL_NO_PACKAGE,

            tooltip: {
              valueSuffix: "°C",
            },
          },

          {
            name: "Target",

            type: "spline",

            data: TARGET,

            tooltip: {
              valueSuffix: "°C",
            },
          },
        ],
      });

      var colors = Highcharts.getOptions().colors,
        categories = ["data available", "data not available"],
        data = [
          {
            y: 61.04,

            color: colors[9],

            drilldown: {
              name: "data available",

              categories: ["data available"],

              data: [40],
            },
          },

          {
            y: 9.47,

            color: colors[1],

            drilldown: {
              name: "data not available",

              categories: ["data not available"],

              data: [20],
            },
          },
        ],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;

      // Build the data arrays

      for (i = 0; i < dataLen; i += 1) {
        // add browser data

        browserData.push({
          name: categories[i],

          y: data[i].y,

          color: data[i].color,
        });

        // add version data

        drillDataLen = data[i].drilldown.data.length;

        for (j = 0; j < drillDataLen; j += 1) {
          brightness = 0.2 - j / drillDataLen / 5;

          versionsData.push({
            name: data[i].drilldown.categories[j],

            y: data[i].drilldown.data[j],

            color: Highcharts.color(data[i].color).brighten(brightness).get(),
          });
        }
      }
 
      // Create the chart

      Highcharts.chart("container_5", {
        chart: {
          type: "pie",
        },

        title: {
          text: "",

          align: "left",
        },

        subtitle: {
          text: "",

          align: "left",
        },

        plotOptions: {
          pie: {
            shadow: false,

            center: ["50%", "50%"],
          },
        },

        tooltip: {
          valueSuffix: "%",
        },

        series: [
          {
            name: "Browsers",

            data: browserData,

            size: "60%",

            dataLabels: {
              formatter: function () {
                return this.y > 5 ? this.point.name : null;
              },

              color: "#ffffff",

              distance: -30,
            },
          },
          {
            name: "Versions",

            data: versionsData,

            size: "80%",

            innerSize: "60%",

            dataLabels: {
              formatter: function () {
                // display only if larger than 1

                return this.y > 1
                  ? "<b>" + this.point.name + ":</b> " + this.y + "%"
                  : null;
              },
            },

            id: "versions",
          },
        ],

        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 400,
              },

              chartOptions: {
                series: [
                  {},
                  {
                    id: "versions",

                    dataLabels: {
                      enabled: false,
                    },
                  },
                ],
              },
            },
          ],
        },
      });