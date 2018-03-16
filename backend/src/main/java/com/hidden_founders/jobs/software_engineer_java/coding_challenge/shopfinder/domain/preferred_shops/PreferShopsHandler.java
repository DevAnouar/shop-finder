package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.preferred_shops;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PreferShopsHandler {

    @Autowired
    private IPreferredShopsDaoAdapter preferredShopsDaoAdapter;

    public boolean likeShop(String userEmail, String shopId) {
        return preferredShopsDaoAdapter.likeShop(userEmail, shopId);
    }

    public boolean unmarkShopAsPreferred(String userEmail, String shopId) {
        return preferredShopsDaoAdapter.unmarkShopAsPreferred(userEmail, shopId);
    }

    public List<Shop> findPreferredShopsByUser(String userEmail) {
        return preferredShopsDaoAdapter.findPreferredShopsByUser(userEmail);
    }
}
