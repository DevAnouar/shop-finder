package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.blacklisting;

interface IBlacklistedShopsDaoAdapter {
    boolean blacklistShop(String userEmail, String shopId);
}
