package com.qishaung.gsite.api;

import com.qishaung.gsite.common.ApiCommonResult;
import com.qishaung.gsite.common.exceptions.DateFormatException;
import com.qishaung.gsite.config.MySecurityContext;
import com.qishaung.gsite.domain.model.Article;
import com.qishaung.gsite.domain.model.Writter;
import com.qishaung.gsite.service.WritterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by geek720 on 2018/2/5.
 */
@RestController
@RequestMapping("/api/writter")
public class WritterApi {

    @Autowired
    private WritterService writterService;


    @GetMapping("/self")
    public ApiCommonResult self() {
        String writterName = MySecurityContext.getWritterName();
        System.out.println(writterName);
        if (writterName == null) {
            return new ApiCommonResult(false, 1, "没有登录信息");
        }
        Writter writter = writterService.findByWritterName(writterName);
        return new ApiCommonResult(true, 2, "登录信息找到！", writter );
    }
    @PutMapping("/postissure")
    public ApiCommonResult postAllIssure() {
        List<Article> articleList =  writterService.geyAllIssureArticle();
        return new ApiCommonResult(true, 1, "12312");
    }
    @PostMapping("/article")
    public ApiCommonResult postArticle(@RequestBody Article article) {
        try {
            writterService.postArticle(article);
        } catch (Exception e) {
            return new ApiCommonResult(false, 1, "未知错误");
        }
        return new ApiCommonResult(true,1,"插入成功！");
    }
    @GetMapping("/updateissure")
    public ApiCommonResult updateIssure() {
        List<String> updatelist = null;
        try{
            updatelist = writterService.updateIssure();

        } catch (DateFormatException e) {
            return new ApiCommonResult(false, 1, "时间格式格式化错误！");
        }
        return new ApiCommonResult(true, 1, "更新成功！", updatelist);
    }
}
