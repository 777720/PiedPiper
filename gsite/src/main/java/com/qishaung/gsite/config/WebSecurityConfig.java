package com.qishaung.gsite.config;

import com.qishaung.gsite.common.ApiCommonResult;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.encoding.Md5PasswordEncoder;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;

/**
 * Created by geek720 on 2018/2/2.
 */

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    @Bean
    public UserDetailsService userDetailsService() {
        return new UserDetailServiceImpl();
    }

    @Bean
    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // auth.userDetailsService(userDetailsService());
        auth
                .inMemoryAuthentication()
                    .withUser("xws")
                    .password("85113251")
                    .roles("USER");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();

        http
                .authorizeRequests()
                .antMatchers(
                        "/",
                        "/health",
                        "/api/writter/self"
                )
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()

                .formLogin()
                    .loginPage("/api/login")
                    .successHandler(new AjaxAuthSuccessHandler())
                    .failureHandler(new AjaxAuthFailHandler())
                    .permitAll().and()
                    .httpBasic()
                    .and()
                .logout().logoutUrl("/api/logout").logoutSuccessHandler(new AjaxLogoutSuccessHandler());
    }
}
