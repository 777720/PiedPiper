package com.qishaung.gsite.domain.dao;

import com.qishaung.gsite.domain.model.Article;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by geek720 on 2018/2/19.
 */
public interface ArticleRepository extends MongoRepository<Article, String> {

}
