// Function for page navigation handling
function pagechange(pagename) {
    console.log("Navigating to: " + pagename);
    window.location.href = pagename + ".html";
}

// Function to filter books on main page based on selected month and year
window.filterBooks = function() {
    const selectedMonth = document.getElementById('monthFilter').value;
    const selectedYear = document.getElementById('yearFilter').value;
    const books = document.querySelectorAll('.book-container');

    books.forEach(book => {
        const bookMonth = book.getAttribute('data-month');
        const bookYear = book.getAttribute('data-year');

        const monthMatch = (selectedMonth === "all" || selectedMonth === bookMonth);
        const yearMatch = (selectedYear === "all" || selectedYear === bookYear);

        book.style.display = (monthMatch && yearMatch) ? "block" : "none";
    });
}

// Filter for the TBR list based on the selected status
function filterTBR() {
    const filterValue = document.getElementById('statusFilter').value;
    const items = document.querySelectorAll('.tbr-item');

    items.forEach(item => {
        const itemStatus = item.getAttribute('data-status');
        
        if (filterValue === 'all' || filterValue === itemStatus) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}