<?php
// 테마 설정
function react_theme_setup() {
  // 테마 지원 기능 추가
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'react_theme_setup');
?>