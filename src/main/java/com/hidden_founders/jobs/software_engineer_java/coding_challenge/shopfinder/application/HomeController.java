package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HomeController {

    @RequestMapping
    public String index() {
        return "Hello World!";
    }
}
