package treino.com.br.repository;

import org.springframework.data.repository.CrudRepository;
import treino.com.br.models.User;

public interface LoginRepository extends CrudRepository<User, Long> {
}
