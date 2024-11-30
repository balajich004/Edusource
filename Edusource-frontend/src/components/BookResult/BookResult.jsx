import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ApiService from '../../service/ApiService';
import "./BookResult.css"

const BookResult = ({ bookSearchResults }) => {
  const navigate = useNavigate();
  const isAdmin = ApiService.isAdmin();

  return (
    <section className="book-results">
      {bookSearchResults && bookSearchResults.length > 0 ? (
        <div className="book-list">
          {bookSearchResults.map((book) => (
            <div key={book.id} className="book-list-item">
              <img
                className="book-list-item-image"
                src={book.bookPhotoUrl}
                alt={book.bookTitle}
              />
              <div className="book-details">
                <h3>{book.bookTitle}</h3>
                <p>Type: {book.bookType}</p>
                <p>Description: {book.bookDescription}</p>
              </div>

              <div className="action-buttons">
                {isAdmin ? (
                  <button
                    className="edit-book-button"
                    onClick={() => navigate(`/admin/edit-book/${book.id}`)}
                  >
                    Edit Book
                  </button>
                ) : (
                  <button
                    className="view-download-button"
                    onClick={() => window.open(book.bookFileUrl, '_blank')}
                  >
                    View/Download
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No books found.</p>
      )}
    </section>
  );
};

export default BookResult;
