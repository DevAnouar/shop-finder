package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.presentation.api;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.geolocation.GeolocationInformationSystem;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.object_mapping.DTO;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.object_mapping.MappingFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/shops", produces = "application/json")
public class ShopsController {

    @Autowired
    private GeolocationInformationSystem geolocationInformationSystem;

    @Autowired
    private MappingFacade mappingFacade;

    @RequestMapping(value = "nearby/@{userLatitude},{userLongitude},{radiusOfSearchInKm}", method = RequestMethod.GET)
    @ResponseBody
    public List<DTO> nearbyShops(@PathVariable double userLatitude, @PathVariable double userLongitude, @PathVariable double radiusOfSearchInKm) {
        return mappingFacade.mapShopsListToShopDTOsList(getNearbyShops(userLatitude, userLongitude, radiusOfSearchInKm));
    }

    private List<Shop> getNearbyShops(double userLatitude, double userLongitude, double radiusOfSearchInKm) {
        return geolocationInformationSystem.searchForNearbyShops(userLatitude,userLongitude, radiusOfSearchInKm);
    }
}
