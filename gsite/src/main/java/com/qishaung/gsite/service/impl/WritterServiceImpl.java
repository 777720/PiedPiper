package com.qishaung.gsite.service.impl;

import com.qishaung.gsite.domain.dao.WritterRepository;
import com.qishaung.gsite.domain.model.Writter;
import com.qishaung.gsite.service.WritterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by geek720 on 2018/2/5.
 */

@Service("writterService")
public class WritterServiceImpl implements WritterService {

    @Autowired
    private WritterRepository writterRepository;

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
}
