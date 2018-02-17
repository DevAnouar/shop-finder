package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.tech_services.object_mapping;

import org.modelmapper.ModelMapper;

public abstract class ModelToDTOMapper {
    private ModelMapper modelMapper = new ModelMapper();

    ModelMapper getMapper() {
        return modelMapper;
    }

    abstract DTO map(Object model);
}
