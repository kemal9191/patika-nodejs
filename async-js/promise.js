/* const promise = new Promise((resolve, reject)=>{
    let a = true;
    let b = false;
    if(a||b){
        resolve("Bu promise resolve oldu");

    }else{
        
        reject("promise is rejected bro");

    }
})

promise.then((response)=>{
    console.log(response);
}).catch((err)=>
{
    console.log(err);
})

console.log(promise)

const promise2 = new Promise((resolve, reject)=>{

}) */

/* const books = [
  { name: "Book 1", author: "Author 1" },
  { name: "Book 2", author: "Author 2" },
  { name: "Book 3", author: "Author 3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

//listeye kitap ekleyince aynı anda listeleme işlemi de yapılsın istiyoruz.
//Buna callback denir.
const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    resolve(newBook);
    reject("sdasdasd")
  });

  promise1.then((response=>{
    books.push(newBook);
    listBooks();
  }));

addBook({ name: "Book 4", author: "Yazar 4" }); */



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
    addBook({ name: "Book 4", author: "Yazar 4" }).then((response)=>{
      console.log("Yeni Liste:")
      listBooks();
    });
  
