﻿<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1></h1>
    <label for="password-length">密码长度：</label>
    <input type="number" id="password-length" min="8" max="50" value="12">
    <div>
      <input type="checkbox" id="include-uppercase" checked>
      <label for="include-uppercase">包含大写字母</label>
    </div>
    <div>
      <input type="checkbox" id="include-lowercase" checked>
      <label for="include-lowercase">包含小写字母</label>
    </div>
    <div>
      <input type="checkbox" id="include-special" checked>
      <label for="include-special">包含特殊字符</label>
    </div>
    <label for="exclude-chars">排除字符：</label>
    <input type="text" id="exclude-chars">
    <button id="generate" class="btn" onclick="generatePassword()">生成</button>
    <input type="text" id="password-result" readonly>
  </div>
  <script src="script.js"></script>
</body>
</html>