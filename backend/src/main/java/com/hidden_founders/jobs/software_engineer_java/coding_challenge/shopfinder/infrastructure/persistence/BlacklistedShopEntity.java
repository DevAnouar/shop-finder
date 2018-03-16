package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

class BlacklistedShopEntity {

    @Id
    private ObjectId id;

    private String user;
    private ObjectId shop;

    public BlacklistedShopEntity() {}

    public BlacklistedShopEntity(ObjectId id, String user, ObjectId shop) {
        this.id = id;
        this.user = user;
        this.shop = shop;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public ObjectId getShop() {
        return shop;
    }

    public void setShop(ObjectId shop) {
        this.shop = shop;
    }

    @Override
    public String toString() {
        return "BlacklistedShop{\n" +
                "\tid: " + id + '\n' +
                "\tuser: " + user + '\n' +
                "\tshop: " + shop + '\n' +
                '}';
    }
}
