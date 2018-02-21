package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.presentation.dto;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.object_mapping.DTO;

public class ShopDTO implements DTO {
    private String id;
    private String name;
    private String picture;

    public ShopDTO() {}

    public ShopDTO(String id, String name, String picture) {
        this.id = id;
        this.name = name;
        this.picture = picture;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}
