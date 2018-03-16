package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "preferred_shops")
class PreferredShopEntity {
    @Id
    private ObjectId id;

    private String user;
    private ObjectId shop;

    PreferredShopEntity() {}

    PreferredShopEntity(String user, ObjectId shop) {
        this.user = user;
        this.shop = shop;
    }

    PreferredShopEntity(ObjectId id, String user, ObjectId shop) {
        this.id = id;
        this.user = user;
        this.shop = shop;
    }

    ObjectId getId() {
        return id;
    }

    void setId(ObjectId id) {
        this.id = id;
    }

    String getUser() {
        return user;
    }

    void setUser(String user) {
        this.user = user;
    }

    ObjectId getShop() {
        return shop;
    }

    void setShop(ObjectId shop) {
        this.shop = shop;
    }

    @Override
    public String toString() {
        return "PreferredShop{\n" +
                "\tid: " + id + '\n' +
                "\tuser: " + user + '\n' +
                "\tshop: " + shop + '\n' +
                '}';
    }
}
