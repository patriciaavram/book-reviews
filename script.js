
function pagechange(pagename) {
    console.log("Navigating to: " + pagename);
    window.location.href = pagename + ".html";
}

function filterBooks() {
    // 1. Get the values from the dropdowns
    const selectedMonth = document.getElementById('monthFilter').value;
    const selectedYear = document.getElementById('yearFilter').value;

    // 2. Get all book containers
    const books = document.querySelectorAll('.book-container');

    books.forEach(book => {
        // 3. Get the tags from this specific book
        const bookMonth = book.getAttribute('data-month');
        const bookYear = book.getAttribute('data-year');

        // 4. Logic: Should we show this book?
        const monthMatch = (selectedMonth === "all" || selectedMonth === bookMonth);
        const yearMatch = (selectedYear === "all" || selectedYear === bookYear);

        if (monthMatch && yearMatch) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}