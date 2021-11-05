//==============================================================================
// BAR CHART
//==============================================================================
const barDataSexe = [
    {"question":"Activité physique", "sexe":"hommes", "percentage":40},
    {"question":"Fumer", "sexe":"hommes", "percentage":30},
    {"question":"Manger des fruits", "sexe":"hommes", "percentage":70},
    {"question":"Activité physique", "sexe":"femmes", "percentage":20},
    {"question":"Fumer", "sexe":"femmes", "percentage":5},
    {"question":"Manger des fruits", "sexe":"femmes", "percentage":60}
];

d3.select("#bar_graph").append(function() { 
    return GroupedBarChart(barDataSexe, {
        x: d => d.question,
        y: d => d.percentage,
        z: d => d.sexe,
        yLabel: "↑ Pourcentage (%)",
        zDomain: ["hommes", "femmes"],
        colors: ["#6ca0dc", "#f8b9d4"],
        width: 800,
        height: 450,
      }); 
});

//==============================================================================
// SEXE PIE CHART
//==============================================================================

const pieDataSexe = [
    {name: "Hommes", value: 55},
    {name: "Femmes", value: 58}
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
    {name: "<18", value: 5},
    {name: "18-30", value: 67},
    {name: ">30", value: 32}
];

d3.select("#pie_graph_age").append(function() { 
    return DonutChart(pieDataAge, {
        name: d => d.name,
        value: d => d.value,
        width: 200,
        height: 200,
        innerRadius: 50
      });
})
.style("display", "block")
.style("margin", "auto");