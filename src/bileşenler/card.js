import axios from "axios";

const Card = (makale) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const divHead = document.createElement("div");
  divHead.className = "headline";
  divHead.textContent = makale.anabaslik;
  div.append(divHead);

  const divAuthor = document.createElement("div");
  divAuthor.classList.add("author");
  div.append(divAuthor);

  const divImg = document.createElement("div");
  divImg.classList.add("img-container");
  divAuthor.append(divImg);

  const img = document.createElement("img");
  img.setAttribute("src", `${makale["yazarFoto"]}`);
  divImg.append(img);

  const span = document.createElement("span");
  span.textContent = `${makale["yazarAdi"]} tarafından`;
  divAuthor.append(span);

  div.addEventListener("click", () => {
    console.log(divHead.textContent);
  });

  return div;

  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
};

const cardEkleyici = (secici) => {
  const cardContainer = document.querySelector(secici);

  axios
    .get("http://localhost:5001/api/makaleler")
    .then((res) => {
      for (let konu in res.data.makaleler) {
        res.data.makaleler[konu].forEach((makale) => {
          cardContainer.append(Card(makale));
        });
      }
    })
    .catch((err) => {
      console.log("error ", err);
    });

  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Card, cardEkleyici };
