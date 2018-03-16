package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence;

import org.bson.types.ObjectId;
import org.springframework.data.geo.Circle;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

interface ShopsRepository extends CrudRepository<ShopEntity, String> {
    List<ShopEntity> findByLocationWithin(Circle circle);

    @Query("{ '_id' : ?0 }")
    ShopEntity findById(ObjectId shopId);
}
