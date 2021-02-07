package com.hunt.jobs.Kats;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestRestController {

    @RequestMapping("/hey")
    public String index() {
        return "Hey bitch!";
    }

}