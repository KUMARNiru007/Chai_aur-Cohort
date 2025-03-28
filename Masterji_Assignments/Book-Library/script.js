let books = [];
let currentPage = 1;
const pageLimit = 20;
let totalPages = 1;
const visiblePages = 3;

const cardContainer = document.querySelector('.card-container');
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('#search-btn');
const sortSelect = document.querySelector('#sort');
const prevButton = document.querySelector('.pagination .prev');
const nextButton = document.querySelector('.pagination .next');
const layoutToggleButton = document.querySelector('.layout-type button');


document.addEventListener('DOMContentLoaded', initializeApp);


async function initializeApp() {
    try {
        await fetchData();
        setupEventListeners();
    } catch (error) {
        console.error('App initialization failed:', error);
        displayErrorMessage('Failed to load ,Please try again later.');
    }
}

async function fetchData() {
    const url = `https://api.freeapi.app/api/v1/public/books?page=${currentPage}&limit=${pageLimit}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.success && data.data) {
            books = data.data.data;
            const totalBooks = data.data.totalItems;
            totalPages = Math.ceil(totalBooks / pageLimit);
            
            displayBooks(books);
            updatePagination();
        } else {
            throw new Error('Failed to fetch books');
        }
    } catch (error) {
        console.error('Error fetching books:', error);
        displayErrorMessage('Unable to load books. Please check your connection.');
    }
}

// Display Books
function displayBooks(books) {
    // Clear previous books
    cardContainer.innerHTML = '';

    // Check if books exist
    if (!books || books.length === 0) {
        displayNoResultsMessage();
        return;
    }

    // Create book cards
    books.forEach(book => {
        const volumeInfo = book.volumeInfo || {};
        
        const title = volumeInfo.title || 'Untitled';
        const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author';
        const publisher = volumeInfo.publisher || 'Unknown Publisher';
        const publishedDate = volumeInfo.publishedDate || 'Unknown Date';
        const imageLink = volumeInfo.imageLinks?.thumbnail || './assets/images/noCover.webp';
        const infoLink = volumeInfo.infoLink || '#';

        const bookCard = document.createElement('a');
        bookCard.href = infoLink;
        bookCard.target = '_blank';
        bookCard.classList.add('card');
        bookCard.innerHTML = `
            <div class="image-container">
                <div class="image">
                    <img src="${imageLink}" alt="${title} book cover" loading="lazy">
                </div>
            </div>
            <div class="about">
                <h2 class="title">${title}</h2>
                <div class="book-meta">
                    <div class="Author"><strong>Author:</strong> ${authors}</div>
                    <div class="Publisher"><strong>Publisher:</strong> ${publisher}</div>
                </div>
                <div class="publish-date"><strong>Published on:</strong> ${publishedDate}</div>
            </div>
        `;

        cardContainer.appendChild(bookCard);
    });
}

// Update Pagination
function updatePagination() {
    const pageNumbersContainer = document.querySelector('.pagination .numbers');
    pageNumbersContainer.innerHTML = '';

   
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

 
    if (endPage - startPage + 1 < visiblePages) {
        startPage = Math.max(1, endPage - visiblePages + 1);
    }

    // Create page number btn
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.add('number');
        
        if (i === currentPage) {
            pageButton.classList.add('active');
        }

        pageButton.addEventListener('click', () => {
            currentPage = i;
            fetchData();
        });

        pageNumbersContainer.appendChild(pageButton);
    }

    // Disable/enable 
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}


function setupEventListeners() {
    // Search functionality 
    searchButton.addEventListener('click', searchBooks);

    // Sort functionality
    sortSelect.addEventListener('change', sortBooks);

    // Pagination buttons
    prevButton.addEventListener('click', handlePrevPage);
    nextButton.addEventListener('click', handleNextPage);

    // Layout toggle
    layoutToggleButton.addEventListener('click', toggleLayout);
}


function searchBooks() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    // If search input is empty, reset to all books
    if (searchTerm === '') {
        displayBooks(books);
        return;
    }

    // Filter books based on search term
    const filteredBooks = books.filter(book => {
        const volumeInfo = book.volumeInfo || {};
        const title = (volumeInfo.title || '').toLowerCase();
        const authors = volumeInfo.authors 
            ? volumeInfo.authors.join(', ').toLowerCase() 
            : '';
        
        return title.includes(searchTerm) || authors.includes(searchTerm);
    });

    // Display filtered books
    if (filteredBooks.length > 0) {
        displayBooks(filteredBooks);
    } else {
        displayNoResultsMessage();
    }
}

// Sort Books
function sortBooks() {
    const sortValue = sortSelect.value;
    let sortedBooks = [...books];

    switch (sortValue) {
        case 'title-asc':
            sortedBooks.sort((a, b) => 
                (a.volumeInfo?.title || '').localeCompare(b.volumeInfo?.title || '')
            );
            break;
        case 'title-desc':
            sortedBooks.sort((a, b) => 
                (b.volumeInfo?.title || '').localeCompare(a.volumeInfo?.title || '')
            );
            break;
        case 'date-asc':
            sortedBooks.sort((a, b) => 
                (a.volumeInfo?.publishedDate || '').localeCompare(b.volumeInfo?.publishedDate || '')
            );
            break;
        case 'date-desc':
            sortedBooks.sort((a, b) => 
                (b.volumeInfo?.publishedDate || '').localeCompare(a.volumeInfo?.publishedDate || '')
            );
            break;
    }

    displayBooks(sortedBooks);
}


function handlePrevPage() {
    if (currentPage > 1) {
        currentPage--;
        fetchData();
    }
}

function handleNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        fetchData();
    }
}


function toggleLayout() {
    const layout = cardContainer.classList.contains('grid') ? 'list' : 'grid';
    
    // Update container class
    cardContainer.classList.remove('grid', 'list');
    cardContainer.classList.add(layout);
    
    // Update button text and icon
    const icon = layoutToggleButton.previousElementSibling;
    if (layout === 'list') {
        layoutToggleButton.textContent = 'Grid View';
        icon.className = 'ri-grid-line';
    } else {
        layoutToggleButton.textContent = 'List View';
        icon.className = 'ri-list-unordered';
    }
}

function displayErrorMessage(message) {
    cardContainer.innerHTML = `
        <div class="error-message">
            <p>${message}</p>
        </div>
    `;
}

function displayNoResultsMessage() {
    cardContainer.innerHTML = `
        <div class="no-results">
            <p>No books found matching your search.</p>
        </div>
    `;
}