import { book } from './constants'

export default function Button() {
    function handleClick() {
        book.title = "The Three-Body Problem"
        book.author = "Liu Cixin"
        book.genre = "Science fiction"
        book.isRead = true
        console.log(book);
    }

    return (
        <button onClick={handleClick}>Add book</button>
    )
}
