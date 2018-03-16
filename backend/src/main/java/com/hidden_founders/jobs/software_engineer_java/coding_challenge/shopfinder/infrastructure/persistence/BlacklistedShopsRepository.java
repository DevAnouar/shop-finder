package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

interface BlacklistedShopsRepository extends CrudRepository<BlacklistedShopEntity, String> {
    BlacklistedShopEntity save(BlacklistedShopEntity blacklistedShop);

    @Query("{ 'user' : ?0 }")
    List<BlacklistedShopEntity> findByUser(String user);
}
