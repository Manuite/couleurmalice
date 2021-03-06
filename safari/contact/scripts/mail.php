<?php
	
	// Configuration Settings
	// You can add multiple instances of to, cc, and bcc
	$mail_to = "zzandra@club-internet.fr";
	$subject = "Couleur Malice - Nouveau message";
	$from = "couleurmalice@alwaysdata.net";
	$success_message = "Votre message à bien été envoyé.<br/>Je vous réponds au plus tôt!";
	
	// Basic header information
	$header = "From: <$from>\n";
	$header .= "Return-path: <$from>\n";
	$header .= "X-Sender-IP: " .$_SERVER['REMOTE_ADDR']."\n";
	$header .= "Content-Type: text/html; \n charset=iso-8859-1 \n";
	
	// Construct the basic HTML for the message
	$head = "<html><body>";
	$table_start = "<table border='1' width='100%'><td align='center'><strong>Field</strong></td><td align='center'><strong>Value</strong></td>";
	
	// Fetch all the form fields and their values
	$text = "";
	foreach($_POST as $name => $value) {
		$text .= "<tr><td>$name</td><td>$value</td></tr>";
	}

	// End the table and add extra footer information
	$table_end = "</table>";
	$info = "<br />Message sent from: ".$_SERVER['SERVER_NAME'];
	$footer = "</body></html>";

	// Combine all the information
	$body = "$head $table_start $text $table_end $info $foot";

	// If everything is filled out correctly, send the e-mail
	if ($body != "") {
		echo $success_message;
		mail($mail_to, $subject, $body, $header);
	}

?>