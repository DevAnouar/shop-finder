package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import static com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.security.SecurityConstants.AUTHENTICATE_HEADER_STRING;
import static com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.security.SecurityConstants.AUTHENTICATION_SCHEME;
import static com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.security.SecurityConstants.REALM_PREFIX;

@Component
public class CustomSignInFailureHandler implements AuthenticationFailureHandler {

    // TODO Implement custom error messages
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
        response.addHeader(AUTHENTICATE_HEADER_STRING, AUTHENTICATION_SCHEME + REALM_PREFIX + "\"Access to the Sign-in api\"" + ", charset=\"UTF-8\"");

        try (PrintWriter out = response.getWriter()) {
            out.println("{");
            if (exception instanceof BadCredentialsException) {
                out.println("\t\"status\": \"" + HttpStatus.UNAUTHORIZED.value() + "\",");
                out.println("\t\"message\": \"" + exception.getMessage() + "\"");
            }
            out.println("}");
        }
    }
}
