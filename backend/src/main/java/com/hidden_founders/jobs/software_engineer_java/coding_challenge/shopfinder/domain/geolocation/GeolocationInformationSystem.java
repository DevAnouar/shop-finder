package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.geolocation;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeolocationInformationSystem {

    @Autowired
    private GeographicalCircleArea area;

    public List<Shop> searchForNearbyShops(double centerLatitude, double centerLongitude, double radiusInKm) {
        area.setCenter(centerLatitude, centerLongitude);
        area.setRadius(radiusInKm);
        return area.getShopsWithin();
    }
}
