package com.edusource.ebookmanagementsystem.repository;

import com.edusource.ebookmanagementsystem.model.ReadBook;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReadBookRepository extends JpaRepository<ReadBook,Long> {

    List<ReadBook> findByUserId();

}
