var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['tansulpaduka','kongPaduka','CoffePaduka', 'bowlPaduka'],
        datasets: [{
            label: 'Variant of Paduka',
            data: [43, 19, 15, 5,],
            backgroundColor: [
                'rgba(41, 155,99, 1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
            ],
            borderColor: [
                'rgba(41, 155,99, 1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(120,46,139,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
});
