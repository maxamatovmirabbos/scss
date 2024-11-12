document.getElementById('exampleImage').addEventListener('click', function() {
    var searchBarContainer = document.getElementById('searchBarContainer');
    if (searchBarContainer.style.display === 'none' || searchBarContainer.style.display === '') {
        searchBarContainer.style.display = 'block';
    } else {
        searchBarContainer.style.display = 'none';
    }
});
