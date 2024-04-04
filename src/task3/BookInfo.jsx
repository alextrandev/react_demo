/* Finalize BookInfo component component that displays information about a book. 
The BookInfo component should take two props - "title" and "author." 
It should output the received data between `<h2>` (title) and `<p>` (author) tags. */

function BookInfo(props) { // Destructure props
    return (
        <div className="book">
            <h2>Title: {props.title}</h2>
            <p>Author: {props.author}</p>
        </div>
    )
}

export default BookInfo;