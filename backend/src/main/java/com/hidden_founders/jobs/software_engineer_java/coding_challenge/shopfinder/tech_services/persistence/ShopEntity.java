package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.tech_services.persistence;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "shops")
public class ShopEntity {

    @Id
    private ObjectId id;

    private String picture;
    private String name;
    private String email;
    private String city;
    private GeoJsonPoint location;

    public ShopEntity() {}

    public ShopEntity(ObjectId id, String picture, String name, String email, String city, GeoJsonPoint location) {
        this.id = id;
        this.picture = picture;
        this.name = name;
        this.email = email;
        this.city = city;
        this.location = location;
    }

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public GeoJsonPoint getLocation() {
        return location;
    }

    public void setLocation(GeoJsonPoint location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "Shop{\n" +
                "\tid: " + id + '\n' +
                "\tpicture: " + picture + '\n' +
                "\tname: " + name + '\n' +
                "\temail: " + email + '\n' +
                "\tcity: " + city + '\n' +
                "\tlocation: " + location + '\n' +
                '}';
    }
}
