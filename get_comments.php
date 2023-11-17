<?php
// Establish database connection
$servername = 'localhost';
$username = 'id21454561_root';
$password = 'Root.123';
$dbname = 'id21454561_ajax';

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die('Database connection failed: ' . $conn->connect_error);
}

// Retrieve the comments from the database
$sql = 'SELECT comment FROM comments';
$result = $conn->query($sql);
$comments = array();

if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $comments[] = $row['comment'];
  }
}

$conn->close();

// Return the comments as a JSON response
header('Content-Type: application/json');
echo json_encode($comments);
?>