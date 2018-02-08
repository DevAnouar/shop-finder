package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.application.api;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HomeController {

    @RequestMapping("/hello")
    public String hello() {
        return "Hello Boot!";
    }
}
