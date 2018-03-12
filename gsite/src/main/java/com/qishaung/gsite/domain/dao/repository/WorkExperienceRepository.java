package com.qishaung.gsite.domain.dao.repository;

import com.qishaung.gsite.domain.model.LeaveMessage;
import com.qishaung.gsite.domain.model.WorkExperience;
import com.qishaung.gsite.domain.model.Writter;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 * Created by geek720 on 2018/2/19.
 */
public interface WorkExperienceRepository extends MongoRepository<WorkExperience, String> {
    @Query("{'userName': ?0}")
    public WorkExperience findByUsername(String username);
}
