package treino.com.br.services;

import treino.com.br.models.User;

import java.util.List;

public interface LoginService {

    void delete(User user);
    User save(User user);
    List<User> findAll();
    User login(String usuario, String senha);
}
