package com.qishaung.gsite.utils;

import com.fasterxml.jackson.core.JsonEncoding;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by geek720 on 2018/2/12.
 */
public class AjaxResposeTools {
    public static void writeJson(HttpServletResponse response, Object o) throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        ObjectMapper objectMapper = new ObjectMapper();
        JsonGenerator jsonGenerator = objectMapper.getFactory()
                .createGenerator(response.getOutputStream(), JsonEncoding.UTF8);

        jsonGenerator.writeObject(o);
    }
}
