<?php
if($_POST){
    $name 					= $_POST['fullname'];
    $email 					= $_POST['email'];
    $phone 					= $_POST['phone'];
    $budget_from 			= $_POST['budget_from'];
    $budget_to 				= $_POST['budget_to'];

    $aluminum_door_qty 		= $_POST['aluminum_door_qty'];
    $cast_aluminum_door_qty = $_POST['cast_aluminum_door_qty'];
    $stainless_door_qty 	= $_POST['stainless_door_qty'];
    $fly_screen_qty 		= $_POST['fly_screen_qty'];
    $design_style 			= $_POST['design_style'];
 
	$to = 'keepmout@netspace.net.au';
	$subject = 'Budget Estimator Submission';
	$mainbody = 
				'
				<div style="border:1px solid #fff; width:605px; padding:5px;" align="center">
					<table width="98%" border="0" cellspacing="2" cellpadding="2">
						<tr bgcolor="#fff">
							<td><img src="http://keepmout.com.au/wp-content/uploads/2014/03/keepmout-logo.png" alt="KeepMOut"></td>
						</tr>
						<tr>
							<td>&nbsp;</td>
						</tr>
						<tr>
							<td>
								<p>Dear Admin,</p>
								<p>&nbsp;</p>
								<p>You have just received a budget estimation submission - </p>
								<p><br/>
									<table width="650" border="0" cellspacing="0" cellpadding="0">
									  <tr>
									    <td width="139">Door Type</td>
									    <td width="151" align="center">Aluminum Door</td>
									    <td width="159" align="center">Cast Aluminum Door</td>
									    <td width="144" align="center">Stainless Steel Door</td>
									    <td width="117" align="center">Fly Screen</td>
									  </tr>
									  <tr>
									    <td>Number of Doors</td>
									    <td align="center">'.$aluminum_door_qty.'</td>
									    <td align="center">'.$cast_aluminum_door_qty.'</td>
									    <td align="center">'.$stainless_door_qty.'</td>
									    <td align="center">'.$fly_screen_qty.'</td>
									  </tr>
									</table>
									<p>&nbsp;</p>
									Style: '.$design_style.'<br/>
									Budget: from $'.$budget_from.' to $'.$budget_to.'<br/>
								</p>
								<p><br/>
									Name: '.$name.'<br/>
									Email: '.$email.'<br/>
									Phone: '.$phone.'<br/>
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