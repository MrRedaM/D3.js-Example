//==============================================================================
// BAR CHART
//==============================================================================
const width = 1000;
const height = 500;

const questions = [
    "Fumer",
    "Activité physique 2+ fois par semaine",
    "Marche/vélo au moins 10min par jour",
    "Manger des fruits 3+ fois par semaine",
    "Maladies chroniques dans la famille",
  ];

const barData = [
    {"x":questions[0], "z":"", "y":5.66},
    {"x":questions[1], "z":"", "y":45.28},
    {"x":questions[2], "z":"", "y":78.30},
    {"x":questions[3], "z":"", "y":77.36},
    {"x":questions[4], "z":"", "y":69.81}
];
const barDataSexe = [
    {"x":questions[0], "z":"hommes", "y":5.66},
    {"x":questions[0], "z":"femmes", "y":0},
    {"x":questions[1], "z":"hommes", "y":61.02},
    {"x":questions[1], "z":"femmes", "y":25.53},
    {"x":questions[2], "z":"hommes", "y":86.44},
    {"x":questions[2], "z":"femmes", "y":68.09},
    {"x":questions[3], "z":"hommes", "y":74.58},
    {"x":questions[3], "z":"femmes", "y":80.85},
    {"x":questions[4], "z":"hommes", "y":62.71},
    {"x":questions[4], "z":"femmes", "y":78.72}
];
const barDataAge = [
    {"x":questions[0], "z":"<=20ans", "y":5},
    {"x":questions[0], "z":">20ans et <=30ans", "y":0},
    {"x":questions[0], "z":">30ans", "y":17.39},
    {"x":questions[1], "z":"<=20ans", "y":35},
    {"x":questions[1], "z":">20ans et <=30ans", "y":46.51},
    {"x":questions[1], "z":">30ans", "y":60.87},
    {"x":questions[2], "z":"<=20ans", "y":80},
    {"x":questions[2], "z":">20ans et <=30ans", "y":76.74},
    {"x":questions[2], "z":">30ans", "y":78.26},
    {"x":questions[3], "z":"<=20ans", "y":75},
    {"x":questions[3], "z":">20ans et <=30ans", "y":81.40},
    {"x":questions[3], "z":">30ans", "y":73.91},
    {"x":questions[4], "z":"<=20ans", "y":72.50},
    {"x":questions[4], "z":">20ans et <=30ans", "y":69.76},
    {"x":questions[4], "z":">30ans", "y":65.21}
];

d3.select("#bar_chart").append(function() { 
    return GroupedBarChart(barData, {
        x: d => d.x,
        y: d => d.y,
        z: d => d.z,
        yLabel: "↑ Pourcentage (%)",
        colors: ["#f39026"],
        width: width,
        height: height,
      }); 
}).attr("id", "main_chart");

$("#apply").click(function(){
    $("#main_chart").remove();
    if($("#sexe:checked").val()){
        d3.select("#bar_chart").append(function() { 
            return GroupedBarChart(barDataSexe, {
                x: d => d.x,
                y: d => d.y,
                z: d => d.z,
                yLabel: "↑ Pourcentage (%)",
                zDomain: ["hommes", "femmes"],
                colors: ["#6ca0dc", "#f8b9d4"],
                width: width,
                height: height,
              }); 
        }).attr("id", "main_chart");
    }else if($("#age:checked").val()){
        d3.select("#bar_chart").append(function() { 
            return GroupedBarChart(barDataAge, {
                x: d => d.x,
                y: d => d.y,
                z: d => d.z,
                yLabel: "↑ Pourcentage (%)",
                zDomain: ["<=20ans", ">20ans et <=30ans", ">30ans"],
                colors: ["#025297", "#91071a", "#919595"],
                width: width,
                height: height,
              }); 
        }).attr("id", "main_chart");
    } else{
        d3.select("#bar_chart").append(function() { 
            return GroupedBarChart(barData, {
                x: d => d.x,
                y: d => d.y,
                z: d => d.z,
                yLabel: "↑ Pourcentage (%)",
                colors: ["#f39026"],
                width: width,
                height: height,
              }); 
        }).attr("id", "main_chart");
    }
    
});

//==============================================================================
// SEXE PIE CHART
//==============================================================================

const pieDataSexe = [
    {name: "Hommes", value: 59},
    {name: "Femmes", value: 47}
];

d3.select("#pie_graph_sexe").append(function() { 
    return DonutChart(pieDataSexe, {
        name: d => d.name,
        value: d => d.value,
        width: 200,
        height: 200,
        colors: ["#6ca0dc", "#f8b9d4"],
        innerRadius: 50
      });
})
.style("display", "block")
.style("margin", "auto");

//==============================================================================
// AGE PIE CHART
//==============================================================================

const pieDataAge = [
    {name: "<20", value: 40},
    {name: "18-30", value: 43},
    {name: ">30", value: 23}
];

d3.select("#pie_graph_age").append(function() { 
    return DonutChart(pieDataAge, {
        name: d => d.name,
        value: d => d.value,
        width: 200,
        height: 200,
        colors: ["#025297", "#91071a", "#919595"],
        innerRadius: 50
      });
})
.style("display", "block")
.style("margin", "auto");