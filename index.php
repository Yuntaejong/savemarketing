<?php
// 기본 헤더 가져오기
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
  <!-- 리액트 앱 CSS 파일 연결 -->
  <link href="<?php echo get_template_directory_uri(); ?>/static/css/main.de458e7a.css" rel="stylesheet">
</head>
<body <?php body_class(); ?>>
  <!-- 리액트 앱 마운트 포인트 -->
  <div id="root"></div>
  
  <?php wp_footer(); ?>
  <!-- 리액트 앱 JS 파일 연결 -->
  <script src="<?php echo get_template_directory_uri(); ?>/static/js/main.e6c56c39.js"></script>
</body>
</html>