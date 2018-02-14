package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.tech_services.persistence;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Circle;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Service;

import java.util.List;

@EnableMongoRepositories
@Service
public class MongoFacade {

    @Autowired
    private ShopsRepository shopsRepository;

    public List<ShopEntity> findShopsWithin(double centerLatitude, double centerLongitude, double radiusInKm) {
        return shopsRepository.findByLocationWithin(new Circle(centerLongitude, centerLatitude, radiusInKm/111.12));
    }
}
