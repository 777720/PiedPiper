package com.qishaung.gsite.config;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * Created by geek720 on 2018/2/10.
 */
public class MySecurityContext {
    public static User getUserDetails() {
        try {
            Object principalc = SecurityContextHolder.getContext()
                    .getAuthentication().getPrincipal();
            return (principalc instanceof User) ? (User) principalc : null;

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String getWritterName() {
        User user = getUserDetails();
        return (user != null) ? user.getUsername() : null;
    }

}
