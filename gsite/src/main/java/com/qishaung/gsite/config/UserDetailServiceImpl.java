package com.qishaung.gsite.config;

import com.qishaung.gsite.domain.dao.repository.WritterRepository;
import com.qishaung.gsite.domain.model.Writter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by geek720 on 2018/2/6.
 */
public class UserDetailServiceImpl implements UserDetailsService {
    @Autowired
    private WritterRepository writterRepository;

    @Override
    public UserDetails loadUserByUsername(String writtername) throws UsernameNotFoundException {
        Writter writter  = writterRepository.findByWritterName(writtername);
        if (writter == null) {
            throw new UsernameNotFoundException("writter not found");
        }
        System.err.println("writtername:" + writter.getWrittername() + ",password: " + writter.getPassword());
        List<GrantedAuthority> authorityList = new ArrayList<GrantedAuthority>();
        return  new User(writter.getWrittername(), writter.getPassword(), authorityList);
    }
}
