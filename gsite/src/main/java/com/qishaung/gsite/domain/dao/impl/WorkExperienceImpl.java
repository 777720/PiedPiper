package com.qishaung.gsite.domain.dao.impl;

import com.qishaung.gsite.domain.dao.ArticleDao;
import com.qishaung.gsite.domain.dao.WorkExperienceDao;
import com.qishaung.gsite.domain.model.Article;
import com.qishaung.gsite.domain.model.WorkExperience;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Service;

import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;
import static org.springframework.data.mongodb.core.query.Update.update;

/**
 * Created by geek720 on 2018/2/27.
 */
@Service("workExperienceDao")
public class WorkExperienceImpl implements WorkExperienceDao {

    @Autowired
    private MongoOperations mongoOperations;


    @Override
    public void updateWorkExperience(String id, String type, Object value) {
        mongoOperations.updateFirst(
                query(where("id").is(id)),
                update(type, value),
                Article.class
        );
    }
}
