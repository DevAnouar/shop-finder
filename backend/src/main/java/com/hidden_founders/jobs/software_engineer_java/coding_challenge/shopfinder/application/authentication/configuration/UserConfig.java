package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application.authentication.configuration;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application.authentication.configuration.utils.Function;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
class UserConfig {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    UserConfig(BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Bean
    public Function<String, String, UserDetails> userFactory() {
        return this::user;
    }

    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Bean
    @Scope(value = "prototype")
    UserDetails user(String email, String password) {
        return User.builder()
                .passwordEncoder(bCryptPasswordEncoder::encode)
                .username(email)
                .password(password)
                .authorities("ROLE_USER")
                .build();
    }
}
