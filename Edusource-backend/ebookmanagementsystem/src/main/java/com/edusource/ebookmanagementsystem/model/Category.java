package com.edusource.ebookmanagementsystem.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public @NotNull String getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(@NotNull String categoryId) {
        this.categoryId = categoryId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotNull Integer getLevel() {
        return level;
    }

    public void setLevel(@NotNull Integer level) {
        this.level = level;
    }

    public Category getParentCategory() {
        return parentCategory;
    }

    public void setParentCategory(Category parentCategory) {
        this.parentCategory = parentCategory;
    }

    @NotNull
    @Column(unique = true)
    private String categoryId;

    @ManyToOne
    private Category parentCategory;

    @NotNull
    private Integer level;
}
