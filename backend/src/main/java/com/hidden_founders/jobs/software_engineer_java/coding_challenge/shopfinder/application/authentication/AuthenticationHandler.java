package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application.authentication;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application.authentication.configuration.utils.Function;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationHandler {

    @Autowired
    private UserDetailsManager userDetailsManager;
    @Autowired
    private Function userFactory;

    public void signUp(String email, String password) throws BadCredentialsException {
        UserDetails user = constructUser(email, password);
        userDetailsManager.createUser(user);
    }

    @SuppressWarnings("unchecked")
    private UserDetails constructUser(String email, String password) {
        return (User) userFactory.apply(email, password);
    }
}
