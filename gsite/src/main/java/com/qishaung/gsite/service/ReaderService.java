package com.qishaung.gsite.service;

import com.qishaung.gsite.domain.model.Article;
import com.qishaung.gsite.domain.model.ArticleCollection;
import com.qishaung.gsite.domain.model.LeaveMessage;

import java.util.List;

/**
 * Created by geek720 on 2018/2/21.
 */
public interface ReaderService {
    public List<Article> getAllArticle();
    public Article findOneArticleById(String id);
    public List<ArticleCollection> getAllCollection();
    public void postLeaveMessage(LeaveMessage lmes);
}
