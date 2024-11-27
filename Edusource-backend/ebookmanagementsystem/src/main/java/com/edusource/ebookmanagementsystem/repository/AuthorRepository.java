package com.edusource.ebookmanagementsystem.repository;

import com.edusource.ebookmanagementsystem.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author,Long> {
    Author findByEmail(String email);
}
