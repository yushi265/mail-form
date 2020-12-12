<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>メールフォーム</title>
</head>
<body>
    <div class="container">
        <div class="alert alert-primary" role="alert">
            お名前　　　　　:　<span><?php echo $_POST['name']; ?></span> <br>
            メールアドレス　:　<span><?php echo $_POST['email']; ?></span><br>    
            件名　　　　　　:　<span><?php echo $_POST['title']; ?></span><br>    
            お問い合わせ内容:　<span><?php echo $_POST['content']; ?></span><br>
            <form action="complete.html">
                <input class="btn btn-primary mt-5" type="submit" value="送信">
            </form>
        </div>
    </div>

</body>
</html>