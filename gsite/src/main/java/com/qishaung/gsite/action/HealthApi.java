package com.qishaung.gsite.action;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by geek720 on 2018/1/24.
 */
@Controller
public class HealthApi {
    @RequestMapping(value="/health", method = RequestMethod.GET)
    public String health() {
        return "homePage";
    }

    @RequestMapping(value="/welcome", method = RequestMethod.GET)
    public String home() {
        return "welcomePage";
    }

    @RequestMapping(value="/login", method = RequestMethod.GET)
    public String login() {
        return "loginPage";
    }

    @RequestMapping(value="/loginsuccess")
    public String loginSuccess() {
        return "welcomePage";
    }
}
