package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application;

import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.tech_services.persistence.MongoFacade;
import com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.tech_services.persistence.ShopEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.CommandLineRunner;

import java.util.List;

@SpringBootApplication
@ComponentScan(basePackages = "com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.tech_services.persistence")
public class ShopFinderApplication implements CommandLineRunner {

	@Autowired
	private MongoFacade mongoFacade;

	public static void main(String[] args) {
		SpringApplication.run(ShopFinderApplication.class, args);
	}

	@Override
	public void run(String[] args) {
		// fetch all shops within specified area
		List<ShopEntity> shops = mongoFacade.findShopsWithin(33.846978,-6.775816, 1);
		System.out.println();
		System.out.println("Shops found within specified area:");
		System.out.println("-------------------------------");
		for (ShopEntity shop : shops) {
			System.out.println(shop);
		}
		System.out.println(shops.size() + " shops found.");
		System.out.println();
	}
}
