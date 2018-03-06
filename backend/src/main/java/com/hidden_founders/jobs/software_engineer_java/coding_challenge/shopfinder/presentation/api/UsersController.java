package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.presentation.api;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application.authentication.AuthenticationHandler;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.presentation.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping(value = "/api/users", produces = "application/json")
public class UsersController {

    @Autowired
    private AuthenticationHandler authenticationHandler;

    @PostMapping("/sign-up")
    public boolean signUp(@RequestBody UserDTO user) {
        boolean signUpSuccessful = true;
        try {
            authenticationHandler.signUp(user.getEmail(), user.getPassword());
        } catch (BadCredentialsException ex) {
            signUpSuccessful = false;
        } finally {
            return signUpSuccessful;
        }
    }
}
