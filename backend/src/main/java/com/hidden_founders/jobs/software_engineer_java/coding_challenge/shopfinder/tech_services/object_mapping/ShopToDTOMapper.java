package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.tech_services.object_mapping;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.presentation.dto.DTO;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.presentation.dto.ShopDTO;
import org.springframework.stereotype.Component;

@Component
class ShopToDTOMapper extends ModelToDTOMapper {

    DTO map(Object shop) {
        return getMapper().map(shop, ShopDTO.class);
    }
}
