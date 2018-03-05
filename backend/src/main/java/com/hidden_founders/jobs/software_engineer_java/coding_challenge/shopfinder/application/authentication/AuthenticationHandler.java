package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationHandler {

    @Autowired
    UserDetailsManager userDetailsManager;

    public void signUp(String email, String password) throws BadCredentialsException {
        UserDetails user = User.builder()
                .username(email)
                .password(password)
                .authorities("ROLE_USER")
                .build();
        userDetailsManager.createUser(user);
    }
}
