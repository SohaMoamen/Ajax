<!DOCTYPE html>
<html>
<head>
  <title>Comments Example</title>
  <script src="script.js"></script>
  <style>
  .comment {
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
</head>
<body>
  <h1>Comments</h1>
  
  <form id="commentForm">
    <textarea id="commentText" rows="4" cols="50"></textarea>
    <br>
    <input type="submit" value="Submit Comment">
  </form>

  <h2>Comments List</h2>
  <ul id="commentsList"></ul>
</body>
</html>