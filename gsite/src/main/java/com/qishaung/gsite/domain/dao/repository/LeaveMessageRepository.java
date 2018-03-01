package com.qishaung.gsite.domain.dao.repository;

import com.qishaung.gsite.domain.model.Article;
import com.qishaung.gsite.domain.model.LeaveMessage;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by geek720 on 2018/2/19.
 */
public interface LeaveMessageRepository extends MongoRepository<LeaveMessage, String> {

}
