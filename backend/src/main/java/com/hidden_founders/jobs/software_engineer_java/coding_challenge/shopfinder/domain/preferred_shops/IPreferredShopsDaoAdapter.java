package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.preferred_shops;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;

import java.util.List;

interface IPreferredShopsDaoAdapter {
    boolean likeShop(String userEmail, String shopId);
    boolean unmarkShopAsPreferred(String userEmail, String shopId);
    List<Shop> findPreferredShopsByUser(String userEmail);
}
