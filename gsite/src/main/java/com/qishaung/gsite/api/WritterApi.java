package com.qishaung.gsite.api;

import com.qishaung.gsite.common.ApiCommonResult;
import com.qishaung.gsite.config.MySecurityContext;
import com.qishaung.gsite.domain.model.Writter;
import com.qishaung.gsite.service.WritterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
