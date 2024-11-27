package com.edusource.ebookmanagementsystem.model;

import java.util.List;

public class Home {
    private List<HomeCategory> newlyAdded;

    public List<HomeCategory> getReadByCategory() {
        return readByCategory;
    }

    public void setReadByCategory(List<HomeCategory> readByCategory) {
        this.readByCategory = readByCategory;
    }

    public List<HomeCategory> getNewlyAdded() {
        return newlyAdded;
    }

    public void setNewlyAdded(List<HomeCategory> newlyAdded) {
        this.newlyAdded = newlyAdded;
    }

    public List<HomeCategory> getTrending() {
        return trending;
    }

    public void setTrending(List<HomeCategory> trending) {
        this.trending = trending;
    }

    private List<HomeCategory> readByCategory;
    private List<HomeCategory> trending;
}
