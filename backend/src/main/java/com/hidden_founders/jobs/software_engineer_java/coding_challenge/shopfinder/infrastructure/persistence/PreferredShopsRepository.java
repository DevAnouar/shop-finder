package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

interface PreferredShopsRepository extends CrudRepository<PreferredShopEntity, String> {
    PreferredShopEntity save(PreferredShopEntity preferredShopEntity);

    @Query("{ 'user' : ?0 }")
    List<PreferredShopEntity> findByUser(String user);

    @Query(value = "{ 'user' : ?0, 'shop' : ?1 }", delete = true)
    PreferredShopEntity deleteByUserAndShop(String user, ObjectId shop);
}
