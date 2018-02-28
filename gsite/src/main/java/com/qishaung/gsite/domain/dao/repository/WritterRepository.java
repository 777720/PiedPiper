package com.qishaung.gsite.domain.dao;

import com.qishaung.gsite.domain.model.Writter;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 * Created by geek720 on 2018/2/6.
 */
public interface WritterRepository extends MongoRepository<Writter, String> {

    @Query("{'writtername': ?0}")
    public  Writter findByWritterName(String writtername);

}
