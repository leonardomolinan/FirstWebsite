package com.example.controller;

import com.example.model.PessoasModel;
import com.example.model.ResultadoModel;
import com.example.repository.PessoasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/pessoas")
public class PessoasController {

    @Autowired
    ResultadoModel resultadoModel;

    @Autowired
    PessoasRepository pessoasRepository;

    @RequestMapping(value = "/cadastrar.html", method = RequestMethod.GET)
    public ModelAndView cadastrar(){

        return new ModelAndView("cadastrar");
    }

    @RequestMapping(value = "/consultarPessoas.html", method = RequestMethod.GET)
    public ModelAndView consultarPessoas(){

        return new ModelAndView("consultarPessoas");
    }

    @RequestMapping(value = "/editarPessoas.html/{id}", method = RequestMethod.GET)
    public ModelAndView editarPessoas(@PathVariable int id){

        return new ModelAndView("editarPessoa", "pessoasModel",
                pessoasRepository.consultarPorId(id));
    }

    @RequestMapping(value = "/excluirPessoas/{id}", method = RequestMethod.DELETE)
    public @ResponseBody void excluirPessoas(@PathVariable int id){

        pessoasRepository.removerPorId(id);
    }

    @RequestMapping(value = "/salvarPessoas", method = RequestMethod.POST)
    public @ResponseBody ResultadoModel salvarPessoas(@RequestBody PessoasModel pessoasModel){

        System.out.println("----"+pessoasModel.toString());

        try{
            pessoasRepository.salvar(pessoasModel);
            resultadoModel.setCodigo(1);
            resultadoModel.setMensagem("Pessoa cadastrada com sucesso!");
        } catch(Exception e) {
            resultadoModel.setCodigo(0);
            resultadoModel.setMensagem("Erro ao inserir a pessoa: "+e.getMessage());
        }

        return resultadoModel;
    }

    @RequestMapping(value = "/editarPessoas", method = RequestMethod.POST)
    public @ResponseBody ResultadoModel editarPessoas(@RequestBody PessoasModel pessoasModel){

        try{
            pessoasRepository.alterar(pessoasModel);
            resultadoModel.setCodigo(1);
            resultadoModel.setMensagem("Cadastro alterado com sucesso!");
        } catch(Exception e) {
            resultadoModel.setCodigo(0);
            resultadoModel.setMensagem("Erro ao alterar pessoa: "+e.getMessage());
        }

        return resultadoModel;
    }

    @RequestMapping(value = "/consultarTodos", method = RequestMethod.GET)
    public @ResponseBody List<PessoasModel> consultarTodos(){

        return pessoasRepository.consultarTodos();
    }

}
