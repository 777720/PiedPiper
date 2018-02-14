package com.qishaung.gsite.service;

import com.qishaung.gsite.domain.model.Writter;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by geek720 on 2018/2/5.
 */
public interface WritterService {

    public Writter getByWritterName(String writtername);
    public Writter findById(String id);
    public Writter findByWritterName(String name);
}
