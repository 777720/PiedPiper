package com.qishaung.gsite.service.impl;

import com.qishaung.gsite.common.exceptions.DateFormatException;
import com.qishaung.gsite.domain.dao.ArticleDao;
import com.qishaung.gsite.domain.dao.repository.ArticleRepository;
import com.qishaung.gsite.domain.dao.repository.WritterRepository;
import com.qishaung.gsite.domain.model.Article;
import com.qishaung.gsite.domain.model.Writter;
import com.qishaung.gsite.service.WritterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by geek720 on 2018/2/5.
 */

@Service("writterService")
public class WritterServiceImpl implements WritterService {

    @Autowired
    private WritterRepository writterRepository;
    @Autowired
    private ArticleRepository articleRepository;
    @Autowired
    private ArticleDao articleDao;

    @Override
    public Writter getByWritterName(String writtername) {
        return writterRepository.findByWritterName(writtername);
    }

    @Override
    public Writter findById(String id) {
        return writterRepository.findOne(id);
    }

    @Override
    public Writter findByWritterName(String name) {
        return writterRepository.findByWritterName(name);
    }

    @Override
    public List<Article> geyAllIssureArticle() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity = restTemplate.getForEntity("https://api.github.com/repos/777720/DidYouLearnToday/issues", List.class);
        List artlistList = new ArrayList<Article>();
        List<LinkedHashMap<String,Object>> bodyList = responseEntity.getBody();
        for(LinkedHashMap<String, Object> item: bodyList) {
            insertNewArticle(item);
        }
        return artlistList;

    }

    @Override
    public void postArticle(Article article) {
        UUID uuid = UUID.randomUUID();
        article.setId(String.valueOf((uuid)));
        Date nowDate = new Date();
        article.setCreateTime(nowDate);
        article.setUpdateTime(nowDate);
        articleRepository.insert(article);
    }

    @Override
    public List<String> updateIssure() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> responseEntity = restTemplate.getForEntity("https://api.github.com/repos/777720/DidYouLearnToday/issues", List.class);
        List<LinkedHashMap<String,Object>> bodyList = responseEntity.getBody();
        List<String> updateList = new LinkedList<String>();
        for (LinkedHashMap<String, Object> item: bodyList) {
            try {
                Article article = articleRepository.findOne(String.valueOf(item.get("id")));
                Date newUpdateTime = fromISODate(String.valueOf(item.get("updated_at")));
                if (newUpdateTime.after(article.getUpdateTime())) {
                    articleDao.updateArticle(article.getId(), "content", String.valueOf(item.get("body")));
                    articleDao.updateArticle(article.getId(), "updateTime", newUpdateTime);
                    articleDao.updateArticle(article.getId(), "title", String.valueOf(item.get("title")));
                    updateList.add(String.valueOf(item.get("id")));
                }
            } catch (ParseException e) {
                throw new DateFormatException();
            }
        }
        return updateList;
    }

    private void insertNewArticle(Map<String, Object> body) {
        Article article = new Article();
        article.setId(String.valueOf(body.get("id")));
        article.setIssureUrl(String.valueOf(body.get("html_url")));
        article.setTitle(String.valueOf(body.get("title")));
        Date nowDate = new Date();
        article.setCreateTime(nowDate);
        article.setUpdateTime(nowDate);
        article.setContent(String.valueOf(body.get("body")));
        articleRepository.save(article);
    }
    private void updateArticle(Map<String, Object> body) {

    }

    private Date fromISODate(String time) throws ParseException {
        if (! time.matches("\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z")) {
            return null;
        }
        time = time.replaceFirst("T", " ").replaceFirst(".\\d{3}Z", "");
        SimpleDateFormat sdf =   new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        return sdf.parse(time);

    }


}
