
function pagechange(pagename) {
    console.log("Navigating to: " + pagename);
    window.location.href = pagename + ".html";
}

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