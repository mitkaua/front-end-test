<?php
//  << - stoned animations online mailform.php - >>
// <<< - Stoned Animations online � 2000 - 2001 - >>>


// All you need to change is the e-mail addy:
$email = 'dds85@mail.ru';
$subject = '������ � ����� metalprom.net.ua';

//foreach ($HTTP_POST_VARS as $var) {
foreach ($HTTP_POST_VARS as $key => $value) {
    $text .= "$key = $value \n";
}

$from = $HTTP_POST_VARS['name'] . ' ' . $HTTP_POST_VARS['email'];
mail($email,$subject,$text,"From: $from\nReply-To: $from\n");


echo "<script>alert('���� ������ ����������!'); document.location.href='contacts.html';</script>";
?>



		


