function previewFile(file) {
  // プレビュー画像を追加する要素
  const preview = document.getElementById('preview');

  // FileReaderオブジェクトを作成
  const reader = new FileReader();

  // ファイルが読み込まれたときに実行する
  reader.onload = function (e) {
    const imageUrl = e.target.result; // 画像のURLはevent.target.resultで呼び出せる
    const img = document.createElement("img"); // img要素を作成
    img.src = imageUrl; // 画像のURLをimg要素にセット
    preview.appendChild(img); // #previewの中に追加
  }

  // いざファイルを読み込む
  reader.readAsDataURL(file);
}

const file = document.getElementById("example").files[0];
// フォームデータを作成
const formData = new FormData();
// avatarというフィールド名でファイルを追加
formData.append("avatar", file);
// アップロード
fetch(送信先のURL, { method: "POST", body: formData });
