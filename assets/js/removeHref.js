// Function to remove ".html" extension from the URL
function removeHtmlExtension() {
    var currentPath = window.location.pathname;
    if (currentPath.endsWith('.html')) {
      var newPath = currentPath.slice(0, -5);
      window.history.replaceState({}, '', newPath);
    }
  }
  
  // Call the function on page load
  window.addEventListener('load', removeHtmlExtension);
  
