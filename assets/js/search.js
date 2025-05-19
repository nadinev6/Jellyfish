//Search Box

const searchBox = document.getElementById('searchBox');
const searchDropdown = document.getElementById('searchDropdown');

searchBox.addEventListener('input', function() {
  const searchTerm = searchBox.value.toLowerCase();
  const dropdownItems = searchDropdown.querySelectorAll('a');

  searchDropdown.style.display = searchTerm.length > 0 ? 'block' : 'none'; // Show/hide dropdown

  dropdownItems.forEach(item => {
    const itemText = item.textContent.toLowerCase();
    item.style.display = itemText.includes(searchTerm) ? 'block' : 'none';
  });
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.closest('.search-container')) {
    searchDropdown.style.display = 'none';
  }
});

// Handle clicks on dropdown items
searchDropdown.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    searchBox.value = event.target.textContent;
    searchDropdown.style.display = 'none';
    window.location.href = event.target.href;
    event.preventDefault();
  }
});