package treino.com.br.models;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;

@Entity
@Table(name = "Pessoas")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotEmpty
    @Column
    private String nome;

    @NotEmpty
    @Column
    private String sobrenome;

    @NotEmpty
    @Column
    private String password;

    @NotEmpty
    @Column
    private String email;

    protected User() {

    }

    public User(String nome, String sobrenome, String password, String email) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.password = password;
        this.email = email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public Long getId() {

        return id;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public String getNome() {

        return nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", login='" + email + '\'' + ", password='" + password + '\'' + ", name='" + nome
                + '\'' + ", lastname='" + sobrenome + '\'' + '}';
    }

}
