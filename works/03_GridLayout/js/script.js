$(function () {
    // ヘッダー/フッター読み込み
    $('#header').load('header.html', function () { });
    $('#footer').load('footer.html', function () { });


    // メニュー押下時
    $(document).on('click', '.menu', function () {
        $('.headerNav').fadeIn();

    });

    // メニュー解除時
    $(document).on('click', '.close', function () {
        $('.headerNav').fadeOut();
    });

    // ViewMore押下
    $('#openProduct').click(function () {
        // $('.hideProduct').css('display', 'flex')
        $('.ishide').slideDown(500);
        $('.viewMore').hide();
        $('.otherProduct').show();
    });

    //  別ページマウスオーバー
    $('.otherProduct li').hover(
        function () {
            if (!$(this).hasClass('displayed')) {
                $(this).css('opacity', '0.5');
            }
        }, function () {
            $(this).css('opacity', '1');
        }
    );

     /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  // ハンバーガーメニューのクリックイベント
    $(document).on('click', '.toggle_btn', function(){
    // #headerにopenクラスが存在する場合
    if ($('header').hasClass('open')) {
      // openクラスを削除
      // openクラスを削除すると、openクラスのCSSがはずれるため、
      // メニューが非表示になる
      $('header').removeClass('open');

    // #headerにopenクラスが存在しない場合
    } else {
      // openクラスを追加
      // openクラスを追加すると、openクラスのCSSが適応されるため、
      // メニューが表示される
      $('header').addClass('open');
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $('#mask').on('click', function() {
    // openクラスを削除して、メニューを閉じる
    $('#header').removeClass('open');
  });
});


$(window).on('load', function() {
    $('body').fadeIn(0);
});