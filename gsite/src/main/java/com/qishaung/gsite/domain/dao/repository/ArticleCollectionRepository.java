package com.qishaung.gsite.domain.dao.repository;

import com.qishaung.gsite.domain.model.Article;
import com.qishaung.gsite.domain.model.ArticleCollection;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by geek720 on 2018/2/19.
 */
public interface ArticleCollectionRepository extends MongoRepository<ArticleCollection, String> {

}
