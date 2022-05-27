//bu yapı ile promise birbirine çok benziyor.
const getData = (data) => {
  console.log("Veriler alınmaya çalışılıyor...");
  return new Promise((resolve, reject) => {
    if (data) {
      resolve("Veriler başarıyla alındı.");
    } else {
      reject("Veriler alınırken sorun oluştu.");
    }
  });
};

const cleanData = (receivedData) => {
  console.log("Veriler temizleniyor...");
  return new Promise((resolve, reject) => {
    if (receivedData) {
      resolve("Veriler temizlendi.");
    } else {
      reject("Veriler temizlenirken bir hata oluştu.");
    }
  });
};

/* getData(true)
  .then((response) => {
    console.log(response);
    return cleanData(false);
  })
  .then((response) => {
    console.log(response);
  }).catch((err)=>{
      console.log(err)
  }); */

// Async - Await
//Öncelikle tüm yapıyı bir fonksiyonla kaplamamız lazım.

async function processData() {
  //Önce veriler alınmalı sonra temizlenmeli, yani buradaki sıraya dikkat etmek lazım.
  // İşte bu yüzden getDatayı await yapıyoruz.

  try {
    const receivedData = await getData(true);
    console.log(receivedData);
    const cleanedData = await cleanData(false);
    console.log(cleanedData);
  } catch (error) {
    console.log(error);
  }

  // Aşağıda ne işlem yaparsan yap, oraya gemesi için önce getDatayı tamamlaması lazım.
  //Bunu algılaması için de fonksiyona async keywordünü veriyoru.
}
//async en temel avantajı yazımı daha kolay. Aayrıca asenkron fonksiyon sırasını takip etmek zor. Ancak async
//bunu kolaylaştırıyor. Asenkron işlemi senkronmuş gibi takip edebiliyoruz.
/* processData(); */

//Hata yakalamak için try catch blogu kullanırız.


const books = [
    { name: "Book 1", author: "Author 1" },
    { name: "Book 2", author: "Author 2" },
    { name: "Book 3", author: "Author 3" },
  ];
  
  const listBooks = () => {
    books.map((book) => {
      console.log(book.name);
    });
  };

  const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook)
      resolve(books);
    });
    return promise1;
}
    /* addBook({ name: "Book 4", author: "Yazar 4" })
    .then((response)=>{
      console.log("Yeni Liste:")
      listBooks();
    }); */

async function processBook(newBook){
    const newOne = await addBook(newBook);
    console.log(newOne);
    listBooks()
}

processBook({ name: "Book 4", author: "Yazar 4" });