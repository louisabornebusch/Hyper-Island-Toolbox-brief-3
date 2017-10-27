// Our labels along the x-axis
var years = [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017];
// For drawing the lines
var messi = [38,47,53,73,60,41,58,41,54,15];
var ronaldo = [26,33,53,60,55,51,61,51,42,7];


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
        { 
            data: messi,
            // Style the line
            label: "Messi",
            // Setting border color and remove the big gray area below the graph
            borderColor: "#3e95cd",
            fill: true,
        },
        { 
            data: ronaldo,
            label: "C.Ronaldo",
            borderColor: "#cd3e3e",
            fill: false
        }   
    ]
  }
});

