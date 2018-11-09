<script type="text/javascript">
// ▼HTMLの読み込み直後に実行：
document.addEventListener('DOMContentLoaded', function() {

   // ▼サブBOXを全て非表示にする
   var SubBoxes1 = document.getElementsByClassName("subbox1");
   var SubBoxes2 = document.getElementsByClassName("subbox2");
   for( var i=0 ; i<SubBoxes1.length ; i++) {
      SubBoxes1[i].style.display = 'none';
   }
   for( var i=0 ; i<SubBoxes2.length ; i++) {
      SubBoxes2[i].style.display = 'none';
   }
   // ▼全てのプルダウンボックスごとに処理
   var mainBoxes = document.getElementsByClassName('pulldownset');
   for( var i=0 ; i<mainBoxes.length ; i++) {

      var mainSelect = mainBoxes[i].getElementsByClassName("mainselect");   // メインのプルダウンメニュー（※後でvalue属性値を参照するので、select要素である必要があります。）
      mainSelect[0].onchange = function () {
         // ▼同じ親要素に含まれている全サブBOXを消す
         var subBox1 = this.parentNode.getElementsByClassName("subbox1");
         var subBox2 = this.parentNode.getElementsByClassName("subbox2");   // 同じ親要素に含まれる.subbox（※select要素に限らず、どんな要素でも構いません。）
         for( var j=0 ; j<subBox1.length ; j++) {
            subBox1[j].style.display = 'none';
         }
         for( var j=0 ; j<subBox2.length ; j++) {
            subBox2[j].style.display = 'none';
         }
         // ▼指定されたサブBOXだけを表示する
         if( this.value ) {
            var targetSub = document.getElementById( this.value );   // 「メインのプルダウンメニューで選択されている項目のvalue属性値」と同じ文字列をid属性値に持つ要素を得る
            targetSub.style.display = 'inline';
         }
      }

   }

});
</script>
