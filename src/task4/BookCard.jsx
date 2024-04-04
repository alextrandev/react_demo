function BookCard({title, children}) {
 return (
    <div className="book">
    <h1>{title}</h1>
    <>{children}</>
    </div>
 );
}

export default BookCard;