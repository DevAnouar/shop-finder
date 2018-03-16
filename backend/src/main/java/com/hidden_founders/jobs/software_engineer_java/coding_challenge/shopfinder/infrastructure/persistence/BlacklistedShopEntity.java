package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "blacklisted_shops")
class BlacklistedShopEntity {

    @Id
    private ObjectId id;

    private String user;
    private ObjectId shop;
    private Date blacklisted_at;

    BlacklistedShopEntity() {
        this.blacklisted_at = new Date();
    }

    BlacklistedShopEntity(ObjectId id, String user, ObjectId shop) {
        this();
        this.id = id;
        this.user = user;
        this.shop = shop;
    }

    BlacklistedShopEntity(String user, ObjectId shop) {
        this();
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
        return "BlacklistedShop{\n" +
                "\tid: " + id + '\n' +
                "\tuser: " + user + '\n' +
                "\tshop: " + shop + '\n' +
                "\tblacklisted_at: " + blacklisted_at + '\n' +
                '}';
    }
}
