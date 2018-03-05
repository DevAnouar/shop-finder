package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application.authentication;

import org.springframework.security.provisioning.UserDetailsManager;

public abstract class UserDetailsManagerImpl implements UserDetailsManager {
    private IUsersDaoAdapter usersDaoAdapter;
}
