package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.geolocation;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.tech_services.persistence.MongoFacade;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.tech_services.persistence.ShopEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import java.util.List;

@ComponentScan(basePackages = "com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.tech_services.persistence")
@Service
class MongoShopsProviderAdapter implements IShopsProviderAdapter {

    @Autowired
    private MongoFacade mongoFacade;

    @Override
    public List<Shop> findShopsWithin(GeographicalCircleArea geographicalCircleArea) {
        return mongoFacade.findShopsWithin(geographicalCircleArea.getCenter().getLatitude(),
                geographicalCircleArea.getCenter().getLongitude(),
                geographicalCircleArea.getRadius());
    }
}
