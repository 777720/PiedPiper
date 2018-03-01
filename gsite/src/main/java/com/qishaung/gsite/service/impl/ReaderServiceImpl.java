package com.qishaung.gsite.service.impl;

import com.qishaung.gsite.common.exceptions.NotValidParamsException;
import com.qishaung.gsite.domain.dao.repository.ArticleCollectionRepository;
import com.qishaung.gsite.domain.dao.repository.ArticleRepository;
import com.qishaung.gsite.domain.dao.repository.LeaveMessageRepository;
import com.qishaung.gsite.domain.model.Article;
import com.qishaung.gsite.domain.model.ArticleCollection;
import com.qishaung.gsite.domain.model.LeaveMessage;
import com.qishaung.gsite.service.ReaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * Created by geek720 on 2018/2/21.
 */
@Service("readerService")
public class ReaderServiceImpl implements ReaderService {

    @Autowired
    private ArticleRepository  articleRepository;
    @Autowired
    private ArticleCollectionRepository articleCollectionRepository;
    @Autowired
    private LeaveMessageRepository leaveMessageRepository;


    @Override
    public List<Article> getAllArticle() {
        return articleRepository.findAll();
    }

    @Override
    public Article findOneArticleById(String id) {
        return articleRepository.findOne(id);
    }

    @Override
    public List<ArticleCollection> getAllCollection() {
        return articleCollectionRepository.findAll();
    }

    @Override
    public void postLeaveMessage(LeaveMessage lmes) {
        if (lmes.getContent() == null || lmes.getContact() == null) {
            throw new NotValidParamsException();
        }
        lmes.setId(String.valueOf(UUID.randomUUID()));
        lmes.setCreateTime(new Date());
        leaveMessageRepository.insert(lmes);
    }
}
