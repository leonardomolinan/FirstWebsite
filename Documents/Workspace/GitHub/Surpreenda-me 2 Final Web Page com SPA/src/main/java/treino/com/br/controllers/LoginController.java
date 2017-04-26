package treino.com.br.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import treino.com.br.models.User;
import treino.com.br.services.LoginService;

import java.util.List;

@Controller
public class LoginController {

    private LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService){
        this.loginService = loginService;
    }

    @RequestMapping("/")
    public String index(){
        return "index";
    }

    @RequestMapping("/controle")
    public String controle(){
        return "controle";
    }

    @RequestMapping("/save")
    public @ResponseBody void save(@RequestBody User user){
        loginService.save(user);
    }

    @RequestMapping("/excluir")
    public @ResponseBody void excluir(@RequestBody User user){
        loginService.delete(user);
    }

    @RequestMapping("/pessoas")
    public @ResponseBody List<User> pessoas(){
        return loginService.findAll();
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public @ResponseBody User loginClient(@RequestBody String[] info){
        return loginService.login(info[0], info[1]);
    }
}
