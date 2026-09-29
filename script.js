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

    // Filter the individual books
    books.forEach(book => {
        const bookMonth = book.getAttribute('data-month');
        const bookYear = book.getAttribute('data-year');

        const monthMatch = (selectedMonth === "all" || selectedMonth === bookMonth);
        const yearMatch = (selectedYear === "all" || selectedYear === bookYear);

        book.style.display = (monthMatch && yearMatch) ? "" : "none";
    });

    // Hide empty book-list containers so their padding doesn't stack and make a big empty space
    const bookLists = document.querySelectorAll('.book-list');
    bookLists.forEach(list => {
        // Check if there are any visible books inside this specific list
        const visibleBooks = Array.from(list.querySelectorAll('.book-container'))
                                  .filter(book => book.style.display !== "none");
        
        // If no visible books, hide the whole grid container. Otherwise, set it back to grid.
        if (visibleBooks.length === 0) {
            list.style.display = "none";
        } else {
            list.style.display = "grid"; 
        }
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