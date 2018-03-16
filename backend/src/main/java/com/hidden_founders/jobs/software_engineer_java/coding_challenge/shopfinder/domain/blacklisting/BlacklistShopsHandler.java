package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.blacklisting;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BlacklistShopsHandler {

    @Autowired
    private IBlacklistedShopsDaoAdapter blacklistedShopsDaoAdapter;

    public boolean blacklistShop(String userEmail, String shopId) {
        return blacklistedShopsDaoAdapter.blacklistShop(userEmail, shopId);
    }
}
