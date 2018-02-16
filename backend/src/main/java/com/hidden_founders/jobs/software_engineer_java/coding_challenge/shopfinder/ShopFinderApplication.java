package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.geolocation.GeolocationInformationSystem;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.model.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.CommandLineRunner;

import java.util.List;

@SpringBootApplication
@ComponentScan(basePackageClasses = com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.domain.geolocation.GeolocationInformationSystem.class)
public class ShopFinderApplication implements CommandLineRunner {

	private final GeolocationInformationSystem geolocationInformationSystem;

	@Autowired
	public ShopFinderApplication(GeolocationInformationSystem geolocationInformationSystem) {
		this.geolocationInformationSystem = geolocationInformationSystem;
	}

	public static void main(String[] args) {
		SpringApplication.run(ShopFinderApplication.class, args);
	}

	@Override
	public void run(String[] args) {
		// fetch all shops within specified area
		List<Shop> shops = geolocationInformationSystem.searchForNearbyShops(33.846978,-6.775816, 1);
		System.out.println();
		System.out.println("Shops found within specified area:");
		System.out.println("-------------------------------");
		for (Shop shop : shops) {
			System.out.println(shop);
		}
		System.out.println(shops.size() + " shops found.");
		System.out.println();
	}
}
