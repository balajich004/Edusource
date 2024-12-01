import React, { useState, useEffect } from "react";
import ApiService from "../../service/ApiService";

const ViewBooks = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await ApiService.getAllBooks(); // Using ApiService
                if (response.statusCode === 200) {
                    setBooks(response.bookList); // Accessing bookList from the API response
                } else {
                    setError(response.message);
                }
            } catch (error) {
                setError(error.response?.data?.message || error.message);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="view-books">
            <h2>View All Books</h2>
            {error && <p className="error-message">{error}</p>}
            {books.length > 0 ? (
                <table className="books-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <tr key={book.id}>
                                <td>{book.bookTitle}</td>
                                <td>{book.bookType}</td>
                                <td>{book.bookDescription}</td>
                                <td>
                                    <img
                                        src={book.bookPhotoUrl}
                                        alt={book.bookTitle}
                                        className="book-photo"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No books available.</p>
            )}
        </div>
    );
};

export default ViewBooks;
