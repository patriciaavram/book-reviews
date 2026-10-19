// Function for page navigation handling
function pagechange(pagename) {
    console.log("Navigating to: " + pagename);
    window.location.href = pagename + ".html";
}

// ==========================================
// MAIN INDEX PAGE LOGIC
// ==========================================

// Master function for filtering and sorting the main index page
window.updateBooks = function() {
    const monthFilter = document.getElementById('monthFilter');
    const yearFilter = document.getElementById('yearFilter');
    const sortFilter = document.getElementById('sortFilter');
    const genreFilter = document.getElementById('genreFilter');
    
    if (!monthFilter) return;

    const selectedMonth = monthFilter.value;
    const selectedYear = yearFilter.value;
    const sortValue = sortFilter ? sortFilter.value : 'default';
    const selectedGenre = genreFilter ? genreFilter.value : 'all'; 
    
    const books = Array.from(document.querySelectorAll('.book-container'));
    const mainList = document.querySelector('.book-list'); 
    
    if (!mainList) return;

    // 1. Sort the array of books mathematically
    books.sort((a, b) => {
        if (sortValue === 'rating') {
            const ratingA = parseFloat(a.getAttribute('data-rating')) || 0;
            const ratingB = parseFloat(b.getAttribute('data-rating')) || 0;
            return ratingB - ratingA; 
        } else {
            const indexA = parseInt(a.getAttribute('data-index'), 10) || 0;
            const indexB = parseInt(b.getAttribute('data-index'), 10) || 0;
            
            return indexB - indexA; // Descending: highest index (newest book) first
        }
    });

    // 2. Apply sorting and filtering to the master list
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
}

window.filterBooks = window.updateBooks;


// ==========================================
// TBR PAGE LOGIC
// ==========================================

// Master function for filtering the TBR page by status and genre
window.filterTBR = function() {
    const statusFilter = document.getElementById('statusFilter');
    const genreFilter = document.getElementById('genreFilter');
    if (!statusFilter) return;
    const status = statusFilter.value;
    const genre = genreFilter ? genreFilter.value : 'all';
    const books = document.querySelectorAll('.tbr-item');

    books.forEach(book => {
        const bookStatus = book.getAttribute('data-status');
        const bookGenre = book.getAttribute('data-genre');
        
        const matchesStatus = (status === 'all' || bookStatus === status);
        const matchesGenre = (genre === 'all' || bookGenre === genre);

        if (matchesStatus && matchesGenre) {
            book.style.display = 'flex'; 
        } else {
            book.style.display = 'none'; 
        }
    });
}

window.filterTBRBooks = window.filterTBR;