package com.qishaung.gsite.domain.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.util.Collection;

/**
 * Created by geek720 on 2018/2/5.
 */
@Document(collection = "writter")
public class Writter implements Serializable {

    private static final long serialVersionUID = 4323377863858420388L;
    @Id
    private String id;
    private String writtername;
    private String password;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getWrittername() {
        return writtername;
    }

    public void setWrittername(String writtername) {
        this.writtername = writtername;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
