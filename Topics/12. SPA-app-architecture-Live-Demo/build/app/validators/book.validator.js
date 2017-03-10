const BOOK_TITLE_MIN_LENGTH = 3;
const BOOK_TITLE_MAX_LENGTH = 100;

const BOOK_DESCRIPTION_MIN_LENGTH = 20;
const BOOK_DESCRIPTION_MAX_LENGTH = Number.MAX_VALUE;

const GENRE_MIN_LENGTH = 3;
const GENRE_MAX_LENGTH = 30;

const validator = {
    isTitleValid(title) {
        console.log("--Title");
        console.log(title);
        return (typeof title === "string") &&
            BOOK_TITLE_MIN_LENGTH <= title.length &&
            title.length <= BOOK_TITLE_MAX_LENGTH;
    },
    isDescriptionValid(description) {
        console.log("--Description");
        console.log(description);
        return (typeof description === "string") &&
            BOOK_DESCRIPTION_MIN_LENGTH <= description.length &&
            description.length <= BOOK_DESCRIPTION_MAX_LENGTH;
    },
    areGenresValid(genres) {
        console.log("--Genre");
        console.log(genres);
        return Array.isArray(genres) &&
            genres.every(this.isGenreValid);
    },
    isGenreValid(genre) {
        return typeof genre === "string" &&
            GENRE_MIN_LENGTH <= genre.length &&
            genre.length <= GENRE_MAX_LENGTH;
    },
    isBookValid(book) {
        return this.isTitleValid(book.title) &&
            this.isDescriptionValid(book.description) &&
            this.areGenresValid(book.genres);
    },
};

module.exports = validator;