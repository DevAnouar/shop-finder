package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.blacklisting;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence.MongoFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
class MongoBlacklistedShopsDaoAdapter implements IBlacklistedShopsDaoAdapter {

    private final MongoFacade mongoFacade;

    @Autowired
    public MongoBlacklistedShopsDaoAdapter(MongoFacade mongoFacade) {
        this.mongoFacade = mongoFacade;
    }

    @Override
    public boolean blacklistShop(String userEmail, String shopId) {
        return mongoFacade.blacklistShop(userEmail, shopId);
    }
}
