package com.edusource.ebookmanagementsystem.service;

import com.edusource.ebookmanagementsystem.dto.Response;

public interface ReadBookService {
    Response getUserReadingHistory(Long userId);

    Response addBookToUserReadingList(Long userId, Long bookId);

    Response removeBookFromUserReadingList(Long userId, Long bookId);
}
