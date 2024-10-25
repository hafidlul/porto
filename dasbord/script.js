var ctx = document.getElementById('linenChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov', 'Dec'],
        datasets: [{
            label: 'Earning in $',
            data: [20, 30, 70, 50, 200, 30,78,88,91,22,300,400],
            backgroundColor: [
                'rgba(85,85,85,1)',
                
            ],
            borderColor: [
                'rgba(41,155,99)',
               
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
});
