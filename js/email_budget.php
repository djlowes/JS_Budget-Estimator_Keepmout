<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $budget_from = $_POST['budget_from'];
    $budget_to = $_POST['budget_to'];

	$to = 'gabstafari@yahoo.com';
	$subject = 'Budget Estimate for '.$name.'';
	$mainbody = 
				'
				<div style="border:1px solid #fff; width:605px; padding:5px;" align="center">
					<table width="98%" border="0" cellspacing="2" cellpadding="2">
						<tr bgcolor="#fff">
							<td><img src="'.$url_home.'/images/logo.png" alt="KeepMOut"></td>
						</tr>
						<tr>
							<td>&nbsp;</td>
						</tr>
						<tr>
							<td>
								<p>Dear Admin,</p>
								<p>'.$name.' is Estimating His Budget for Security Door, Please check Details Below</p>
								<p>
									Name: '.$name.'<br/>
									Email: '.$email.'<br/>
									Phone: '.$phone.'<br/>
									Budget: from '.$budget_from.' to '.$budget_to.'<br/>
								</p>
								<p>&nbsp;</p>
							</td>
						</tr>
					</table>
				</div>
				';


	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From: KeepMOut Budget Estimate <no-reply@keepmout.com.au>'."\r\n";
					
	 // Mail it
	$mail = @mail($to, $subject, $mainbody, $headers);
}
?>