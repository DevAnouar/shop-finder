package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application.authentication;

import org.springframework.security.core.userdetails.UserDetails;

interface IUsersDaoAdapter {
    boolean save(UserDetails user);
}
