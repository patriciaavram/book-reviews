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

// Function for filtering based on rating 
window.updateBooks = function() {
    const selectedMonth = document.getElementById('monthFilter').value;
    const selectedYear = document.getElementById('yearFilter').value;
    const sortValue = document.getElementById('sortFilter').value;
    const selectedGenre = document.getElementById('genreFilter').value; 
    
    const books = Array.from(document.querySelectorAll('.book-container'));
    const mainList = document.querySelector('.book-list'); 

    // 1. Sort the array of books
    books.sort((a, b) => {
        if (sortValue === 'rating') {
            const ratingA = parseFloat(a.getAttribute('data-rating')) || 0;
            const ratingB = parseFloat(b.getAttribute('data-rating')) || 0;
            return ratingB - ratingA; 
        } else {
            const indexA = parseInt(a.getAttribute('data-index')) || 0;
            const indexB = parseInt(b.getAttribute('data-index')) || 0;
            return indexB - indexA; 
        }
    });

    // 2. Apply sorting and filtering
    books.forEach(book => {
        mainList.appendChild(book); 

        const bookMonth = book.getAttribute('data-month');
        const bookYear = book.getAttribute('data-year');
        const bookGenre = book.getAttribute('data-genre') || "none"; 

        const monthMatch = (selectedMonth === "all" || selectedMonth === bookMonth);
        const yearMatch = (selectedYear === "all" || selectedYear === bookYear);
        const genreMatch = (selectedGenre === "all" || selectedGenre === bookGenre); 

        book.style.display = (monthMatch && yearMatch && genreMatch) ? "" : "none";
    });

    // 3. Hide any empty lists
    document.querySelectorAll('.book-list').forEach(list => {
        const visibleBooks = Array.from(list.querySelectorAll('.book-container'))
                                  .filter(book => book.style.display !== "none");
        
        list.style.display = visibleBooks.length === 0 ? "none" : "grid";
    });
}