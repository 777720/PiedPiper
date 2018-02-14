package com.qishaung.gsite.config;

import com.qishaung.gsite.common.ApiCommonResult;
import com.qishaung.gsite.utils.AjaxResposeTools;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by geek720 on 2018/2/12.
 */
public class AjaxAuthFailHandler extends SimpleUrlAuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        AjaxResposeTools.writeJson(response, new ApiCommonResult(false, 1, "登录失败"));
    }
}

