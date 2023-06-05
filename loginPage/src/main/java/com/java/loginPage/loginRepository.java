package com.java.loginPage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;

@EnableJpaRepositories
public interface loginRepository  extends JpaRepository<User,Integer> {
	
	@Query("select u from User u where u.username=:username AND u.password=:password")
	public User authenticate(@Param("username") String username,@Param("password") String password);
	
	
		
		@Query("select count(*) from User where username=:username")
		public String preventDuplicate(@Param("username") String username);
		
		@Query("select u from User u where u.username=:username")
		public User searchByUserName(@Param("username") String username);
}