//==============================================================================
// BAR CHART
//==============================================================================
const barData = [
    {"x":"Fumer", "z":"hommes", "y":5,66},
    {"x":"Faire de l'activité physique au moins 2 fois par semaine", "z":"hommes", "y":40},
    {"x":"Manger des fruits", "z":"hommes", "y":80},
];
const barDataSexe = [
    {"x":"Fumer", "z":"hommes", "y":5.66},
    {"x":"Fumer", "z":"femmes", "y":0},
    {"x":"Faire de l'activité physique au moins 2 fois par semaine", "z":"hommes", "y":40},
    {"x":"Faire de l'activité physique au moins 2 fois par semaine", "z":"femmes", "y":30},
    {"x":"Manger des fruits au moins 3 fois par semaine", "z":"hommes", "y":70},
    {"x":"Manger des fruits au moins 3 fois par semaine", "z":"femmes", "y":60}
];
const barDataAge = [
    {"x":"Fumer", "z":"<=20ans", "y":5},
    {"x":"Fumer", "z":">20ans et <=30ans", "y":0},
    {"x":"Fumer", "z":">30ans", "y":17.39},
    {"x":"Faire de l'activité physique au moins 2 fois par semaine", "z":"<=20ans", "y":50},
    {"x":"Faire de l'activité physique au moins 2 fois par semaine", "z":">20ans et <=30ans", "y":5},
    {"x":"Faire de l'activité physique au moins 2 fois par semaine", "z":">30ans", "y":5},
    {"x":"Manger des fruits au moins 3 fois par semaine", "z":"<=20ans", "y":50},
    {"x":"Manger des fruits au moins 3 fois par semaine", "z":">20ans et <=30ans", "y":5},
    {"x":"Manger des fruits au moins 3 fois par semaine", "z":">30ans", "y":5},
];

d3.select("#bar_chart").append(function() { 
    return GroupedBarChart(barData, {
        x: d => d.x,
        y: d => d.y,
        z: d => d.z,
        yLabel: "↑ Pourcentage (%)",
        colors: ["#f39026"],
        width: 800,
        height: 450,
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
                width: 800,
                height: 450,
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
                width: 800,
                height: 450,
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
                width: 800,
                height: 450,
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
        colors: d3.schemeTableau10,
        innerRadius: 50
      });
})
.style("display", "block")
.style("margin", "auto");