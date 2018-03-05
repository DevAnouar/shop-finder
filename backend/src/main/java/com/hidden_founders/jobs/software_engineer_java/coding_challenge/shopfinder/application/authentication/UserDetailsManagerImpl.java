package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.provisioning.UserDetailsManager;

public abstract class UserDetailsManagerImpl implements UserDetailsManager {

    @Autowired
    IUsersDaoAdapter usersDaoAdapter;
}
