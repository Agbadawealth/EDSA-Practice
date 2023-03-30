class Book {
    constructor(author, title, pages, edition, isPublished) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.edition = edition;
        this.isPublished = true;
    }

    catalogue() {
        if (this.isPublished == false) {
            alert(
                'This book is published with the name ${this.author}, and the title is ${this.title}, it has ${this.pages} pages, and the edition is ${this.edition}
            );
        } else {
            alert(
                'This book is not published and cant be catalogued in our library'
            );
        }
    }
}

let toBeCatalogue = new Book(
    "Samson Olusegun"
    "Learning Javascript"
    "23"
    "2021"
);

class journal extends Book {
    constructor(author, title, pages, edition, isPublished, publication) {
        super();
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.edition = edition;
        this.isPublished = true;
        this.publication = publication;
    }

    journalPublication() {
        
    }
}