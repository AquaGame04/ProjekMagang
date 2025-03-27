document.addEventListener('DOMContentLoaded', () => {
    const rectangle1 = document.querySelector('.rectangle1');
    const dashboardContainer = document.querySelector('.dashboard-container');

    if (rectangle1) {
        console.log('Rectangle1 found'); // Debug log
        rectangle1.addEventListener('click', () => {
            console.log('Rectangle1 clicked'); // Debug log
            dashboardContainer.classList.toggle('active'); // Toggle the dashboard visibility
        });
    } else {
        console.error('Rectangle1 element not found'); // Debug log if element is missing
    }

    if (dashboardContainer) {
        console.log('Dashboard container found'); // Debug log
        dashboardContainer.addEventListener('click', () => {
            dashboardContainer.classList.remove('active'); // Hide the dashboard when clicked outside
        });
    } else {
        console.error('Dashboard container not found'); // Debug log if element is missing
    }

    const toggleButton = document.getElementById('toggleProfile');
    const profileContainer = document.getElementById('profileContainer');

    toggleButton.addEventListener('click', function () {
        // Toggle the visibility of the profile container
        if (profileContainer.style.display === 'none') {
            profileContainer.style.display = 'block';
        } else {
            profileContainer.style.display = 'none';
        }
    });
});
