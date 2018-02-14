package com.qishaung.gsite.config;

import com.qishaung.gsite.common.ApiCommonResult;
import com.qishaung.gsite.utils.AjaxResposeTools;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by geek720 on 2018/2/12.
 */
public class AjaxAuthSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        AjaxResposeTools.writeJson(response, new ApiCommonResult(true, 1, request.getParameter("username")));
    }
}
