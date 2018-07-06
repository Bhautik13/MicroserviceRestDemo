package com.exito.erp.Config.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.exito.erp.Config.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

//	User findByUserName(String username);

	User findByEmail(String email);
	
	@Query("SELECT u FROM User u WHERE LOWER(u.firstName) = LOWER(:firstName)")
	User findByFirstnameCaseInsensitive(@Param("firstName") String username);

}
