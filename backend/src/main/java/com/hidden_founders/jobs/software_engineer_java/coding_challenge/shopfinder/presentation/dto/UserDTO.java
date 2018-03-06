package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.presentation.dto;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.object_mapping.DTO;

public class UserDTO implements DTO {
    private String email;
    private String password;

    public UserDTO() {}

    public UserDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
