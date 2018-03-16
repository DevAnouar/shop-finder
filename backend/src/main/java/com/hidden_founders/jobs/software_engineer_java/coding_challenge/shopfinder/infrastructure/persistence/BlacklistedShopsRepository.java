package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence;

import org.springframework.data.repository.CrudRepository;

interface BlacklistedShopsRepository extends CrudRepository<BlacklistedShopEntity, String> {
    BlacklistedShopEntity save(BlacklistedShopEntity blacklistedShop);
}
