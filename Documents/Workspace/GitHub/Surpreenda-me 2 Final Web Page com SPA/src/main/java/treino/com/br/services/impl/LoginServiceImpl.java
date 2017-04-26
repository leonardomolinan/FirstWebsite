package treino.com.br.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import treino.com.br.models.User;
import treino.com.br.repository.LoginRepository;
import treino.com.br.services.LoginService;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Service
public class LoginServiceImpl implements LoginService{

    EntityManager manager;

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public void delete(User user){
        loginRepository.delete(user);
    }

    @Override
    @RequestMapping(method = RequestMethod.POST)
    public User save(User user){
        return loginRepository.save(user);
    }

    @Override
    public List<User> findAll(){
        return (List)this.loginRepository.findAll();
    }

    @Transactional
    public User login(String usuario, String senha){
        User user;
        user = (User) manager.createQuery(
                "SELECT user FROM User user "+
                        "WHERE user.email = :usuario")
                .setParameter("usuario", usuario)
                .getSingleResult();
        if(user.getPassword().equals(senha)){
            return user;
        }else{
            return null;
        }
    }

}
