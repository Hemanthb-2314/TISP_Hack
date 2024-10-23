// Threats over Time (Line Chart)
const threatCtx = document.getElementById('threatChart').getContext('2d');
const threatChart = new Chart(threatCtx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'On-hold',
                data: [30, 20, 50, 40, 30, 20, 10],
                borderColor: '#00d1ff',  // Teal Blue from image
                backgroundColor: 'rgba(0, 209, 255, 0.1)',
                fill: true
            },
            {
                label: 'Investigating',
                data: [40, 30, 20, 50, 40, 50, 40],
                borderColor: '#00ff85',  // Green Teal from image
                backgroundColor: 'rgba(0, 255, 133, 0.1)',
                fill: true
            },
            {
                label: 'In progress',
                data: [20, 40, 30, 20, 40, 30, 20],
                borderColor: '#0066ff',  // Neon Blue
                backgroundColor: 'rgba(0, 102, 255, 0.1)',
                fill: true
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    color: '#fff'
                }
            },
            y: {
                ticks: {
                    color: '#fff'
                }
            }
        }
    }
});

// Top Risk Categories (Donut Chart)
const riskCtx = document.getElementById('riskChart').getContext('2d');
const riskChart = new Chart(riskCtx, {
    type: 'doughnut',
    data: {
        labels: ['Search Engine', 'Direct', 'Email', 'Video Ads'],
        datasets: [
            {
                data: [32, 24, 16, 28],
                backgroundColor: ['#00ff85', '#0066ff', '#00d1ff', '#ff4f4f'], // Matching colors from image
                hoverBackgroundColor: ['#00ff85', '#0066ff', '#00d1ff', '#ff4f4f']
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right', // Align legend to the right
                labels: {
                    color: '#fff' // Legend text color
                }
            }
        }
    }
});

// Top Vendors (Donut Chart)
const vendorCtx = document.getElementById('vendorChart').getContext('2d');
const vendorChart = new Chart(vendorCtx, {
    type: 'doughnut',
    data: {
        labels: ['Search Engine', 'Direct', 'Email', 'Video Ads'],
        datasets: [
            {
                data: [196, 243, 641, 1554],
                backgroundColor: ['#00ff85', '#0066ff', '#00d1ff', '#ff4f4f'], // Same color scheme
                hoverBackgroundColor: ['#00ff85', '#0066ff', '#00d1ff', '#ff4f4f']
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right', // Align legend to the right
                labels: {
                    color: '#fff' // Legend text color
                }
            }
        }
    }
});
