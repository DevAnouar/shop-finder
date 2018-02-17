package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.tech_services.object_mapping;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.presentation.dto.ShopDTO;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class ShopToDTOMapper {
    private ModelMapper modelMapper = new ModelMapper();

    public ShopDTO map(Shop shop) {
        return modelMapper.map(shop, ShopDTO.class);
    }
}
