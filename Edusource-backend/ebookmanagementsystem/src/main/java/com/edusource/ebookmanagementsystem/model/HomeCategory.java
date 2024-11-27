package com.edusource.ebookmanagementsystem.model;

import com.edusource.ebookmanagementsystem.domain.HomeCategorySection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class HomeCategory {
    public String getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
    }

    public HomeCategorySection getHomeCategorySection() {
        return homeCategorySection;
    }

    public void setHomeCategorySection(HomeCategorySection homeCategorySection) {
        this.homeCategorySection = homeCategorySection;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String image;

    private String categoryId;

    private HomeCategorySection homeCategorySection;

}
