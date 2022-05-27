/* console.log("1. görev");
console.log("2. görev");
console.log("3. görev"); */

/* const func1 = ()=>{
    console.log("Func1 tamamlandı.")
}

const func2 = ()=>{
    console.log("Func2 tamamlandı.")
}
func2();

func1(); */

/* const func1 = ()=>{
    console.log("Func1 tamamlandı.");
    func2()
}


const func2 = ()=>{
    console.log("Func2 tamamlandı.")
    func3()
}

const func3 = ()=>{
    console.log("Func3 tamamlandı.")
}

func1(); */

/* const func1 = ()=>{
    console.log("Func1 tamamlandı.");
    func3()
}


const func2 = ()=>{
    console.log("Func2 tamamlandı.")
}

const func3 = ()=>{
    console.log("Func3 tamamlandı.")
    func2()
}

func1(); */

/* let x = 5;
console.log(x);

setTimeout(()=>{
    x=x+5;

},2000)
console.log(x);// Bunu settimeout içine alırsak sorunu çözmüş oluruz aslında.
//BUrada yaptığımız şey slında bir fonk. diğer fonksiyona arg olarak
//koymak. Burada console.log settimeout içerisinde bir callback olarak görev 
//yapıyor.

x=x+5;
console.log(x); */



const books = [
    {name: "Book 1", author: "Author 1"},
    {name: "Book 2", author: "Author 2"},
    {name: "Book 3", author: "Author 3"}
]

const listBooks = ()=>{
    books.map(book=>{
        console.log(book.name)
    })
}

//listeye kitap ekleyince aynı anda listeleme işlemi de yapılsın istiyoruz.
//Buna callback denir.
const addBook=(newBook, callback)=>{
books.push(newBook);
callback();
}
/* listBooks()
 */
addBook({name: "Book 4", author: "Yazar 4"}, listBooks)

