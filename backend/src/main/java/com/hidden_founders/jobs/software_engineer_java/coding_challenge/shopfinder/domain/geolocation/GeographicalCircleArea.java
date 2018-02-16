package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.geolocation;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Location;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;

import java.util.List;

@ComponentScan
public class GeographicalCircleArea {
    private Location center;
    private double radius;

    @Autowired
    private IShopsProviderAdapter shopsProviderAdapter;

    GeographicalCircleArea(double centerLatitude, double centerLongitude, double radius) {
        this.center = makeCenter(centerLatitude, centerLongitude);
        this.radius = radius;
    }

    List<Shop> getShopsWithin() {
        return shopsProviderAdapter.findShopsWithin(this);
    }

    public Location getCenter() {
        return center;
    }

    public double getRadius() {
        return radius;
    }

    private Location makeCenter(double latitude, double longitude) {
        return new Location(latitude, longitude);
    }
}
