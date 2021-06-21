<!DOCTYPE html>
<html>
<head>
  <title>SBC Tool</title>
  <link rel="stylesheet" href="style.css" type="text/css">
</head>
<body>


  <form id="websiteform">

     <label>Your website name</label>
     <input id="websitename" value="demo">
    <br />

    <label>Your site header</label>
    <input id="siteheader" value="hello world">

    <label>Your site header Background</label>
    <input id="siteheaderbg" type="color">

      <label>Create new btn</label>
      <input id="btnText" value="demobtn"><br />

      <label>Btn color</label>
      <input id="btnColor" type="color"> <br />

      <label>btn align</label>
      <select id="btn_align">
       <option value="flex-start">Left</option>
       <option value="center">Centered</option>
       <option value="flex-end">Right</option>
      </select>

      <label>select btn function</label>
       <select id="btnfunction">
        <option value="logMessage">Log message</option>
        <option value="alertMessage" >Alert Message</option>
       </select><br />

      <label>Enter the message for Log section</label>
      <input id="btnfunctionMessage" value="Hello World">


      <br /><br />

      <h2>Blog Contents</h2>
      <label>Add Post</label>
      <button type="button" id="postInputcreator">Add New Post</button>

      <br /><br />
       <input type="button" id="sendData" value="Create Website">
    </form>


    <div id="showresult">

    </div>

  <script src="script.js"></script>
  </body>
  </html>
