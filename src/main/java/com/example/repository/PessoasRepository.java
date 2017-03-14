package com.example.repository;

import com.example.model.PessoasModel;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.transaction.Transactional;
import java.util.List;

@Repository

public class PessoasRepository {
    @PersistenceContext(type = PersistenceContextType.EXTENDED)
    private EntityManager manager;

    @Transactional //indica que as funções dessa classe são transações com o banco
    public void salvar(PessoasModel pessoasModel){

        manager.persist(pessoasModel);
    }

    @Transactional
    public void alterar(PessoasModel pessoasModel){
        manager.merge(pessoasModel);
    }

    @Transactional
    public PessoasModel consultarPorId(int id){

        return manager.find(PessoasModel.class, id);
    }

    @Transactional
    public void removerPorId(int id){

        manager.remove(this.consultarPorId(id));
    }

    @Transactional
    public List<PessoasModel> consultarTodos(){

        return manager.createQuery("SELECT pessoasModel FROM PessoasModel pessoasModel ORDER BY pessoasModel.id",
                PessoasModel.class).getResultList();
    }

}
