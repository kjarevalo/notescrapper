<!DOCTYPE html>
<html lang="en">
<head>
<link rel="shortcut icon" href="favicon.ico">


  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    body{
      /*background-color: #DECADE*/
      background-color: #00ffbf
    }
    #wrapper{
      width:960px;
      margin: 0 auto;
      padding-top: 5%;
    }
    #articles{
      width:60%;
      height:700px;
      display:inline-block;
      overflow: auto;
    }
    #notes{
      width:30%;
      float:right;
    }
    textarea, input{
      display:block;
      width:100%;
      background-color: #d0f0c0;
    }
    input{
      height:36px;
      font-size: 24px;
    }
    textarea{
      height:200px;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div id="wrapper">
    <h1>Scrape scrape!</h1>
    <h2><i>The Verge title scrape!</i></h2>
    <div id="articles"></div>
    <div id="notes"></div>
  </div>
  <script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
  <script src="app.js"></script>
</body>
</html>
