$(function(){
 
  // 入力キー配列
  var input_cmd = [];
  // コナミコマンド配列 [↑, ↑, ↓, ↓, ←, →, ←, →, B, A]
  var konami_cmd = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
 
  // キー入力後のキーアップイベントで発動条件を監視します
  $(window).keyup(function(event){
 
    // 入力されたキーコードを入力キー配列へ追加
    input_cmd.push( event.keyCode );
 
    // 入力されたキーが正しいか判定
    // ※ 入力キー配列の長さで何番目の文字を比較するかを判断する
    if ( input_cmd[ input_cmd.length - 1 ] != konami_cmd[ input_cmd.length - 1 ] ) {
      // 入力を間違えた場合、入力キー配列をリセット（最初からやり直し）
      input_cmd = [];
    }
    // 全ての入力コマンドが合致したら処理を発動
    else if ( input_cmd.length == konami_cmd.length ) {
      // コナミコマンドによる処理実行！
      konami_cmd_action();
      // 処理後、改めて入力キー配列をリセット
      input_cmd = [];
    }
  });
});
 
// コナミコマンド処理関数
function konami_cmd_action() {
  jQuery(function($){
    $('body').addClass('magictime vanishOut');
    setTimeout(function(){
      $('body').toggleClass('magictime vanishOut');
    }, 8000);
  });
}
