import React, { useState, useEffect } from 'react';
import BookSearch from '../../components/BookSearch/BookSearch';
import BookResult from '../../components/BookResult/BookResult';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ApiService from '../../service/ApiService';

function Books() {
  const [bookSearchResults, setBookSearchResults] = useState([]);

  // Fetch all books on component mount
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await ApiService.getAllBooks();
        if (response.statusCode === 200) {
          setBookSearchResults(response.bookList);
        } else {
          console.error('Failed to retrieve books:', response.message);
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchAllBooks();
  }, []);

  const handleSearchResult = (results) => {
    setBookSearchResults(results);
  };

  return (
    <>
      <Navbar />
      <BookSearch handleSearchResult={handleSearchResult} />
      <BookResult bookSearchResults={bookSearchResults} />
      <Footer />
    </>
  );
}

export default Books;
