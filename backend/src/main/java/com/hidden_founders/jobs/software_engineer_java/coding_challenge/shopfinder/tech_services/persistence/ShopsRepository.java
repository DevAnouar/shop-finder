package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.tech_services.persistence;

import org.springframework.data.geo.Circle;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ShopsRepository extends CrudRepository<ShopEntity, String> {
    List<ShopEntity> findByLocationWithin(Circle circle);
}