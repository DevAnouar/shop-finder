package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.presentation.dto.UserDTO;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collections;
import java.util.Date;

import static com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.security.SecurityConstants.*;

class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private AuthenticationManager authenticationManager;
    private AuthenticationFailureHandler authenticationFailureHandler;

    JWTAuthenticationFilter(AuthenticationManager authenticationManager, AuthenticationFailureHandler authenticationFailureHandler) {
        this.authenticationManager = authenticationManager;
        this.authenticationFailureHandler = authenticationFailureHandler;
        setFilterProcessesUrl("/api/users/sign-in");
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            UserDTO credentials = new ObjectMapper()
                    .readValue(request.getInputStream(), UserDTO.class);

            return authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            credentials.getEmail(),
                            credentials.getPassword(),
                            Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"))
                    )
            );
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {
        String token = Jwts.builder()
                .setSubject(((User) authResult.getPrincipal()).getUsername())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET.getBytes())
                .compact();
        response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
        response.addHeader(AUTHORIZATION_HEADER_STRING, TOKEN_PREFIX + token);

        try (PrintWriter out = response.getWriter()) {
            out.println("{");
            out.println("\t\"status\": \"" + HttpStatus.OK.value() + "\"");
            out.println("}");
        }
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
        authenticationFailureHandler.onAuthenticationFailure(request, response, failed);
    }
}
