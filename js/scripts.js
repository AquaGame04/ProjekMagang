document.addEventListener('DOMContentLoaded', () => {
    const frame6 = document.querySelector('.frame6');
    const ellipse2 = document.querySelector('.ellipse2');
    const ellipse3 = document.querySelector('.ellipse3');
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    if (frame6) {
        // frame 6 carousel
        frame6.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - frame6.offsetLeft;
            scrollLeft = frame6.scrollLeft;
            frame6.style.cursor = 'grabbing';
        });

        frame6.addEventListener('mouseleave', () => {
            isDragging = false;
            frame6.style.cursor = 'pointer';
        });

        frame6.addEventListener('mouseup', () => {
            isDragging = false;
            frame6.style.cursor = 'pointer';
        });

        frame6.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - frame6.offsetLeft;
            const walk = (x - startX) * 2; // Adjust scroll speed
            frame6.scrollLeft = scrollLeft - walk;
        });

        if (ellipse2) {
            ellipse2.addEventListener('click', () => {
                frame6.scrollBy({ left: -400, behavior: 'smooth' }); // Scroll left
            });
        }

        if (ellipse3) {
            ellipse3.addEventListener('click', () => {
                frame6.scrollBy({ left: 400, behavior: 'smooth' }); // Scroll right
            });
        }
    } else {
        console.error('frame6 element not found');
    }

    // frame 7 carousel
    const frame7 = document.querySelector('.frame7');
    const ellipse4 = document.querySelector('.ellipse4');
    const ellipse5 = document.querySelector('.ellipse5');

    frame7.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - frame7.offsetLeft;
        scrollLeft = frame7.scrollLeft;
        frame7.style.cursor = 'grabbing';
    });

    frame7.addEventListener('mouseleave', () => {
        isDragging = false;
        frame7.style.cursor = 'pointer';
    });

    frame7.addEventListener('mouseup', () => {
        isDragging = false;
        frame7.style.cursor = 'pointer';
    });

    frame7.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - frame7.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        frame7.scrollLeft = scrollLeft - walk;
    });

    ellipse4.addEventListener('click', () => {
        frame7.scrollBy({ left: -400, behavior: 'smooth' }); // Scroll left
    });

    ellipse5.addEventListener('click', () => {
        frame7.scrollBy({ left: 400, behavior: 'smooth' }); // Scroll right
    });

    // test
    const rectangletest = document.querySelector('.rectangletest');
    const frame5 = document.querySelector('.frame5');

    window.addEventListener('scroll', () => {
        const frame5Bottom = frame5.getBoundingClientRect().bottom;
        const frame6Top = frame6.getBoundingClientRect().top;

        if (frame5Bottom > 0 && frame6Top > rectangletest.offsetHeight + 20) {
            // If frame5 is visible and frame6 is not overlapping rectangletest
            rectangletest.style.position = 'fixed';
            rectangletest.style.top = '20px'; // Stick 20px from the top of the viewport
        } else if (frame6Top <= rectangletest.offsetHeight + 20) {
            // If frame6 overlaps rectangletest, stop moving
            rectangletest.style.position = 'absolute';
            rectangletest.style.top = `${frame6Top - rectangletest.offsetHeight}px`;
        } else {
            // Reset to its original position
            rectangletest.style.position = 'absolute';
            rectangletest.style.top = '200px'; // Original position
        }
    });

    // Example: Dynamically add a new payment history item
    const historyList = document.querySelector('.history-list');
    if (historyList) {
        const newHistoryItem = document.createElement('div');
        newHistoryItem.classList.add('history-item');
        newHistoryItem.innerHTML = `
            <p><strong>Game:</strong> PUBG</p>
            <p><strong>Amount:</strong> $20</p>
            <p><strong>Date:</strong> 2023-10-02</p>
        `;
        historyList.appendChild(newHistoryItem);
    }
});