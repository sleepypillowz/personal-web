<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="fb.css">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <title>Facebook</title>

    <!--Load Script-->

    <script
        src="https://code.jquery.com/jquery-3.3.1.js"
        integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
        crossorigin="anonymous">
    </script>

    <script> 
        $(function(){
        $("#header").load("/personal-web/layout/header.php"); 
    });
    </script> 
</head>

<body>
    <!--imported header-->
    <div id="header"></div>

    <img src="/personal-web/img/banner.jpg" alt="profile banner" class="responsive" id="banner">

    <div>
        <img id="profile" src="/personal-web/img/profile.png" alt="profile image">
        <h1 id="name">Alexander Acojido</h1>
    </div>

</body>

</html>