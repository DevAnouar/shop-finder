package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.geolocation;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence.MongoFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

import java.util.List;

@ComponentScan(basePackages = "com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence")
@Component("shopsProviderAdapter")
class MongoShopsProviderAdapter implements IShopsProviderAdapter {

    private MongoFacade mongoFacade;

    @Autowired
    public MongoShopsProviderAdapter(MongoFacade mongoFacade) {
        this.mongoFacade = mongoFacade;
    }

    @Override
    public List<Shop> findShopsWithin(GeographicalCircleArea geographicalCircleArea) {
        return mongoFacade.findShopsWithin(geographicalCircleArea.getCenter().getLatitude(),
                geographicalCircleArea.getCenter().getLongitude(),
                geographicalCircleArea.getRadius());
    }
}
