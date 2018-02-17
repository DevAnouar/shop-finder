package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.object_mapping;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MappingFacade {

    @Autowired
    private ModelToDTOMapper shopToDTOMapper;

    public DTO mapShopToShopDTO(Shop shop) {
        return shopToDTOMapper.map(shop);
    }

    public List<DTO> mapShopsListToShopDTOsList(List<Shop> shops) {
        List<DTO> shopDTOs = new ArrayList<>();
        for (Shop shop : shops) {
            shopDTOs.add(mapShopToShopDTO(shop));
        }

        return shopDTOs;
    }
}
