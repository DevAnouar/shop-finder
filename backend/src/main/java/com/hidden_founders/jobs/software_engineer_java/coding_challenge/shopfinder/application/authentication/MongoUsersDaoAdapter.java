package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application.authentication;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence.MongoFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component("usersDaoAdapter")
class MongoUsersDaoAdapter implements IUsersDaoAdapter {

    private MongoFacade mongoFacade;

    @Autowired
    public MongoUsersDaoAdapter(MongoFacade mongoFacade) {
        this.mongoFacade = mongoFacade;
    }

    @Override
    public boolean save(UserDetails user) {
        return mongoFacade.save(user);
    }

    @Override
    public UserDetails findByEmail(String email) {
        return mongoFacade.findByEmail(email);
    }
}
