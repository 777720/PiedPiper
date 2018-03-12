package com.qishaung.gsite.api;

import com.qishaung.gsite.common.ApiCommonResult;
import com.qishaung.gsite.common.exceptions.NotValidParamsException;
import com.qishaung.gsite.domain.model.Article;
import com.qishaung.gsite.domain.model.ArticleCollection;
import com.qishaung.gsite.domain.model.LeaveMessage;
import com.qishaung.gsite.domain.model.WorkExperience;
import com.qishaung.gsite.service.ReaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by geek720 on 2018/2/21.
 */
@RestController
@RequestMapping("/api/reader")
public class ReaderApi {

    @Autowired
    private ReaderService readerService;

    @GetMapping("/articles")
    public ApiCommonResult getAllArticle() {
        List<Article> articleList = readerService.getAllArticle();
        return new ApiCommonResult(true, 1, "查找成功！", articleList);
    }
    @GetMapping("/article/{id}")
    public ApiCommonResult getOneArticle(@PathVariable String id) {
        Article article = null;
        try {
            article = readerService.findOneArticleById(id);
        } catch (Exception e) {
            return new ApiCommonResult(false, 1, "未知错误");
        }
        return new ApiCommonResult(true, 1, "查找成功！", article);
    }
    @GetMapping("/articlecollections")
    public ApiCommonResult getAllCollection() {
        List<ArticleCollection> collections = readerService.getAllCollection();
        return new ApiCommonResult(true, 1, "找到了", collections);
    }
    @PostMapping("/leavemessage")
    public ApiCommonResult postLeaveMessage(@RequestBody LeaveMessage leaveMessage) {
        try {
            readerService.postLeaveMessage(leaveMessage);
        } catch (NotValidParamsException e) {
            return new ApiCommonResult(false, 1, "错误的参数！");
        }
        return new ApiCommonResult(true, 1, "上传成功！");
    }
    @GetMapping("/workexperience/{name}")
    public ApiCommonResult getWorkExperience(@PathVariable String name) {
        WorkExperience we = readerService.getWorkExperienceByName(name);
        return new ApiCommonResult(true, 1, "ok!", we);
    }
}
