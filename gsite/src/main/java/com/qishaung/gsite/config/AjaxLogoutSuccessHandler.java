package com.qishaung.gsite.config;

import com.qishaung.gsite.common.ApiCommonResult;
import com.qishaung.gsite.utils.AjaxResposeTools;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by geek720 on 2018/2/14.
 */
public class AjaxLogoutSuccessHandler implements LogoutSuccessHandler {
    @Override
    public void onLogoutSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
        AjaxResposeTools.writeJson(httpServletResponse, new ApiCommonResult(true, 1, "退出登录"));
    }
}
