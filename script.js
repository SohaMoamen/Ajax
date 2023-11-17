
document.addEventListener('DOMContentLoaded', function() {
  // Submit the comment form
  document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    var comment = document.getElementById('commentText').value; // Get the comment text

    // Send AJAX request to the server
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'save_comment.php'); // Replace with your server-side script URL
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      // Clear the comment form
      document.getElementById('commentText').value = '';

      // Fetch and display the updated comments list
      fetchComments();
    };
    xhr.onerror = function() {
      console.error('AJAX Error: ' + xhr.status + ' - ' + xhr.statusText);
    };
    xhr.send('comment=' + encodeURIComponent(comment));
  });

  // Fetch the comments list initially
  fetchComments();
});

// Fetch and display the comments list
function fetchComments() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'get_comments.php'); // Replace with your server-side script URL
  xhr.onreadystatechange = function() {
    // Clear the comments list
    var commentsList = document.getElementById('commentsList');
    while (commentsList.firstChild) {
      commentsList.removeChild(commentsList.firstChild);
    }

    // Append each comment to the comments list
    var comments = JSON.parse(xhr.responseText);
    comments.forEach(function(comment) {
      var commentDiv = document.createElement('div');
      commentDiv.textContent = comment;
      commentDiv.classList.add('comment');
      commentsList.appendChild(commentDiv);
    });
  };
  xhr.onerror = function() {
    console.error('AJAX Error: ' + xhr.status + ' - ' + xhr.statusText);
  };
  xhr.send();
}
