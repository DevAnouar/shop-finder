package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application.authentication.configuration.utils;

@FunctionalInterface
public interface Function<Email, Password, UserDetails> {
    UserDetails apply(Email email, Password password);
}
