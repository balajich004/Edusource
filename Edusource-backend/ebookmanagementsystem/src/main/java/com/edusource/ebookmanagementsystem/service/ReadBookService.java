package com.edusource.ebookmanagementsystem.service;

import com.edusource.ebookmanagementsystem.dto.Response;

public interface ReadBookService {
    Response getUserReadingHistory(String email);

    Response addBookToUserReadingList(String email, Long bookId);

    Response removeBookFromUserReadingList(String email, Long bookId);
}
