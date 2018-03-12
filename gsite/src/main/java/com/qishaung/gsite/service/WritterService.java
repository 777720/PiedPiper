package com.qishaung.gsite.service;

import com.qishaung.gsite.domain.model.Article;
import com.qishaung.gsite.domain.model.WorkExperience;
import com.qishaung.gsite.domain.model.Writter;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by geek720 on 2018/2/5.
 */
public interface WritterService {

    public Writter getByWritterName(String writtername);
    public Writter findById(String id);
    public Writter findByWritterName(String name);
    public List<Article> geyAllIssureArticle();
    public void postArticle(Article article);
    public List<String> updateIssure();
    public void postWorkExperience(WorkExperience we);
    public void updateWorkExperience(String id, String type, Object value);
}
