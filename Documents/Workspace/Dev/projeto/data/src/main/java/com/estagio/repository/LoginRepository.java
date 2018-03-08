package com.estagio.repository;

import com.estagio.model.Login;
import com.estagio.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LoginRepository extends CrudRepository<Login, Long> {

    List<Login> findByUser(User user);
}