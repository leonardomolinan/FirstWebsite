package com.estagio.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "log_login_user")
public class Login {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Override
    public String toString() {
        return "Login{" +
                "id=" + id +
                ", data=" + data +
                ", user=" + user +
                '}';
    }

    Date data;

    @ManyToOne
    User user;

    public Login() {
    }

    public Login(int id, Date data, User user) {
        this.id = id;
        this.data = data;
        this.user = user;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public User getuser() {
        return user;
    }

    public void setuser(User user) {
        this.user = user;
    }
}
