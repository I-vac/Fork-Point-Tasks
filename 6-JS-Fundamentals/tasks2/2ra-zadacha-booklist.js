
    let arrayOfBooks = [
        {title: "Red Rising",
         img: "https://upload.wikimedia.org/wikipedia/en/9/9b/Red_Rising_%282014%29.jpg",
         author: "Pierce Brown",
         alreadyRead: true
        },
        {title: "Red Mars",
         img: "https://i.ebayimg.com/images/g/b4cAAOSwEUdeTXTA/s-l500.jpg",
         author: "Kim Stanley Robinson",
         alreadyRead: false
      }];
  
      let bookList = document.createElement("ul");
  
      for (let i = 0; i < arrayOfBooks.length; i++) {
        let bookInfo = document.createElement("li");
        let bookImg = document.createElement("img");
  
        bookImg.src = arrayOfBooks[i].img;
        bookInfo.appendChild(bookImg);
  
        let bookDescription = document.createTextNode(arrayOfBooks[i].title + " by " + arrayOfBooks[i].author);
        bookInfo.appendChild(bookDescription);
  
        if (arrayOfBooks[i].alreadyRead) {
          bookInfo.style.color = "green";
        }
        bookList.appendChild(bookInfo);
      }
  
      document.body.appendChild(bookList);