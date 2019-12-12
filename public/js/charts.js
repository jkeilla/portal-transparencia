let ctxCanvas1 = document.getElementsByClassName("principais-tributos");

let chartGraphCanvas1 = new Chart(ctxCanvas1, {
    
    type:'bar',
    
    data: {

        labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV"],
        datasets: [
            {
                label: "IPTU",
                borderWidth: 3,
                borderColor: 'blue',
                backgroundColor: 'transparent',
            },
            {
                label: "ITBI",
                borderWidth: 3,
                borderColor: 'yellow',
                backgroundColor: 'transparent',
            },
            {
                label: "ISS",
                borderWidth: 3,
                borderColor: 'red',
                backgroundColor: 'transparent',
            },
            {
                label: "COSIP",
                borderWidth: 3,
                borderColor: 'green',
                backgroundColor: 'transparent',
            },
        ]

    },

    options: {
        title: {
            display: true,
            text: "Arrecadação dos Principais Tributos Municipais - 2019",
            fontSize: 15,
        },

    }

});