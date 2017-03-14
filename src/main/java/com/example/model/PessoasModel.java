package com.example.model;

import javax.persistence.*;

@Entity
@Table(name = "pessoasTable")

public class PessoasModel {

    @Id //pra deixar o id como chave primaria
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "nomePessoas", nullable = false)
    private String name;

    @Column(name = "nomeLogin", nullable = false)
    private String login;

    @Column(name = "nomeSenha", nullable = false)
    private String senha;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    @Override
    public String toString() {
        return "PessoasModel{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", login='" + login + '\'' +
                ", senha='" + senha + '\'' +
                '}';
    }
}
