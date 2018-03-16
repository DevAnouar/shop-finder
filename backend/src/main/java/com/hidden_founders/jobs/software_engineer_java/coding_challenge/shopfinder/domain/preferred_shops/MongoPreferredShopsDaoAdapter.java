package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.preferred_shops;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence.MongoFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
class MongoPreferredShopsDaoAdapter implements IPreferredShopsDaoAdapter {

    private final MongoFacade mongoFacade;

    @Autowired
    MongoPreferredShopsDaoAdapter(MongoFacade mongoFacade) {
        this.mongoFacade = mongoFacade;
    }

    @Override
    public boolean likeShop(String userEmail, String shopId) {
        return mongoFacade.likeShop(userEmail, shopId);
    }

    @Override
    public boolean unmarkShopAsPreferred(String userEmail, String shopId) {
        return mongoFacade.unmarkShopAsPreferred(userEmail, shopId);
    }

    @Override
    public List<Shop> findPreferredShopsByUser(String userEmail) {
        return mongoFacade.findPreferredShopsByUser(userEmail);
    }
}
