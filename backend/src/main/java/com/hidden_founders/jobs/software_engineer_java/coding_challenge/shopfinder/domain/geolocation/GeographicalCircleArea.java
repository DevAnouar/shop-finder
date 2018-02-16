package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.geolocation;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Location;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.List;

@Component("area")
@Scope(value = "prototype")
public class GeographicalCircleArea {
    private Location center;
    private double radius;

    private final IShopsProviderAdapter shopsProviderAdapter;

    @Autowired
    GeographicalCircleArea(IShopsProviderAdapter shopsProviderAdapter) {
        this.shopsProviderAdapter = shopsProviderAdapter;
    }

    List<Shop> getShopsWithin() {
        return shopsProviderAdapter.findShopsWithin(this);
    }

    public void setCenter(double centerLatitude, double centerLongitude) {
        this.center = makeCenter(centerLatitude, centerLongitude);
    }

    public void setCenter(Location center) {
        this.center = center;
    }

    public void setRadius(double radiusInKm) {
        this.radius = radiusInKm;
    }

    public Location getCenter() {
        return center;
    }

    public double getRadius() {
        return radius;
    }

    private Location makeCenter(double centerLatitude, double centerLongitude) {
        return new Location(centerLatitude, centerLongitude);
    }
}
