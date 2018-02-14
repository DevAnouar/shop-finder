package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.geolocation;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;

import java.util.List;

interface IShopsProviderAdapter {
    List<Shop> findShopsWithin(GeographicalCircleArea geographicalCircleArea);
}
