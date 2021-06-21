<?php
  $response = array("message"=>"", "code"=> 1, "body"=>'');

  //Congrats you created your website with SBC Tool.
  if ($_SERVER['REQUEST_METHOD'] == "POST"){
   $data = json_decode(file_get_contents('php://input'), true);



  $client = strtolower(str_replace(' ', '', $data['title']));  
  mkdir($client);
  mkdir("$client/css");
  mkdir("$client/js");
  $file = fopen("$client/website.html", "w");
  //echo fwrite($file,$data['html']);
  fwrite($file,$data['html']);
  fclose($file);

  $cssfile = fopen("$client/css/style.css", "w");
  fwrite($cssfile,$data['css']);
  fclose($cssfile);


  $jsfile = fopen("$client/js/app.js", "w");
  fwrite($jsfile,$data['js']);
  fclose($jsfile);

  $response['message'] = "Congrats you created your website with SBC Tool.";
  $response['code'] = 200;


} else {
  $response['message'] = "wrong submit";
  $response['code'] = 400;
};

json_encode($response);
print_r($response);
?>
