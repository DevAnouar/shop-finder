package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Location;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Circle;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@EnableMongoRepositories
@Service
public class MongoFacade {

    @Autowired
    private ShopsRepository shopsRepository;
    @Autowired
    private BlacklistedShopsRepository blacklistedShopsRepository;
    @Autowired
    private UsersRepository usersRepository;

    public List<Shop> findShopsWithin(double centerLatitude, double centerLongitude, double radiusInKm) {
        List<ShopEntity> shopEntities = shopsRepository.findByLocationWithin(new Circle(centerLongitude, centerLatitude, radiusInKm/111.12));
        filterShopEntities(shopEntities);

        List<Shop> shops = new ArrayList<>();
        for (ShopEntity shopEntity : shopEntities) {
            shops.add(new Shop(shopEntity.getId().toHexString(), shopEntity.getPicture(), shopEntity.getName(), shopEntity.getEmail(), shopEntity.getCity(),
                    new Location(shopEntity.getLocation().getY(), shopEntity.getLocation().getX())));
        }

        return shops;
    }

    public boolean blacklistShop(String userEmail, String shopId) {
        BlacklistedShopEntity blacklistedShopEntity = new BlacklistedShopEntity(userEmail, new ObjectId(shopId));
        try {
            blacklistedShopsRepository.save(blacklistedShopEntity);
        } catch (Exception exception) {
            return false;
        }

        return true;
    }

    public boolean saveUser(UserDetails user) {
        UserEntity userEntity = new UserEntity(user.getUsername(), user.getPassword());
        try {
            usersRepository.save(userEntity);
        } catch (Exception exception) {
            return false;
        }

        return true;
    }

    public User findUserByEmail(String email) {
        UserEntity userEntity = usersRepository.findByEmail(email);
        try {
            return new User(userEntity.getEmail(), userEntity.getPassword(), Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER")));
        } catch (NullPointerException e) {
            return null;
        }
    }

    private void filterShopEntities(List<ShopEntity> shopEntities) {
        String user = SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString();
        if (!user.equals("anonymousUser")) {
            List<BlacklistedShopEntity> blacklistedShopEntities = blacklistedShopsRepository.findByUser(user);
            List<ShopEntity> shopEntitiesToRemove = new ArrayList<>();
            for (ShopEntity shopEntity : shopEntities) {
                for (BlacklistedShopEntity blacklistedShopEntity : blacklistedShopEntities) {
                    if (shopEntity.getId().equals(blacklistedShopEntity.getShop()))
                        shopEntitiesToRemove.add(shopEntity);
                }
            }

            shopEntities.removeAll(shopEntitiesToRemove);
        }
    }
}
