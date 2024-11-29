package com.edusource.ebookmanagementsystem.model;

import jakarta.persistence.*;

@Entity
@Table(name="readbooks")
public class ReadBook {
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="book_id")
    private Book book;

    @Override
    public String toString() {
        return "ReadBook{" +
                "book=" + book +
                ", user=" + user +
                '}';
    }
}
