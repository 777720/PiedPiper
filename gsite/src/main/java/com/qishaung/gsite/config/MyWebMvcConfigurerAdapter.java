package com.qishaung.gsite.config;

import com.mongodb.MongoClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;
import org.springframework.web.servlet.config.annotation.*;

import java.net.UnknownHostException;

/**
 * Created by geek720 on 2018/1/24.
 */

@Configuration
public class MyWebMvcConfigurerAdapter extends WebMvcConfigurerAdapter {

    @Value("${endpoints.cors.allowed-origins}")
    private String allowedOrigins;
    @Value("${endpoints.cors.allowed-methods:*}")
    private String allowedMethods;
    @Value("${spring.data.mongodb.host}")
    private String mongoHost;


//    /**
//     * 配置静态访问资源
//     * @param registry
//     */
//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/my/**").addResourceLocations("classpath:/my/");
//        super.addResourceHandlers(registry);
//    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins(allowedOrigins)
                        .allowedMethods(allowedMethods);
            }
        };
    }
    @Bean
    public MongoDbFactory mongoDbFactory() throws UnknownHostException {
        return new SimpleMongoDbFactory(new MongoClient(mongoHost), "gsite");
    }

    @Bean
    public MongoOperations mongoOperations() throws UnknownHostException{
        return new MongoTemplate(mongoDbFactory());
    }

//    @Override
//    public void addViewControllers(ViewControllerRegistry registry) {
//        registry.addViewController("/api/login").setViewName("/loginPage");
//    }
}
