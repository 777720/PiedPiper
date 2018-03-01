package com.qishaung.gsite.domain.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by geek720 on 2018/2/17.
 */
@Document(collection = "article")
public class Article implements Serializable {
    private static final long serialVersionUID = 4123477363258420188L;

    @Id
    private String id;
    private String title;
    private String content;
    private Date createTime;
    private Date updateTime;
    private String issureUrl = "";
    private String issureApiUrl = "";
    private int likeNum = 0;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getIssureUrl() {
        return issureUrl;
    }

    public void setIssureUrl(String issureUrl) {
        this.issureUrl = issureUrl;
    }

    public int getLikeNum() {
        return likeNum;
    }

    public void setLikeNum(int likeNum) {
        this.likeNum = likeNum;
    }

    public String getIssureApiUrl() {
        return issureApiUrl;
    }

    public void setIssureApiUrl(String issureApiUrl) {
        this.issureApiUrl = issureApiUrl;
    }
}
