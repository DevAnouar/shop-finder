package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Location;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Circle;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@EnableMongoRepositories
@Service
public class MongoFacade {

    @Autowired
    private ShopsRepository shopsRepository;

    public List<Shop> findShopsWithin(double centerLatitude, double centerLongitude, double radiusInKm) {
        List<ShopEntity> shopEntities = shopsRepository.findByLocationWithin(new Circle(centerLongitude, centerLatitude, radiusInKm/111.12));
        List<Shop> shops = new ArrayList<>();
        for (ShopEntity shopEntity : shopEntities) {
            shops.add(new Shop(shopEntity.getPicture(), shopEntity.getName(), shopEntity.getEmail(), shopEntity.getCity(),
                    new Location(shopEntity.getLocation().getY(), shopEntity.getLocation().getX())));
        }

        return shops;
    }
}
