function previewFile(file) {
  const preview = document.getElementById('preview');
  const reader = new FileReader();
  reader.onload = function (e) {
    const imageUrl = e.target.result;
    const img = document.createElement("img");
    img.src = imageUrl;
    preview.appendChild(img);
  }

  reader.readAsDataURL(file);
}
const file = document.getElementById("example").files[0];
const formData = new FormData();
formData.append("avatar", file);
fetch(送信先URL, { method: "POST", body: formData });
