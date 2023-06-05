package com.java.loginPage;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import java.util.List;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class LoginPageApplicationTests {
	
	@Autowired
	loginRepository rRepo;

	@Test
	@Order(1)
	public void testCreate() {
		User r=new User();
		r.setId(7);
		r.setName("Yogesh");
		r.setUsername("yogeshK");
		r.setRole("ADMIN");
		r.setEmail("yogeshk@gmail.com");
		r.setPassword("Yogesh@1999");
		rRepo.save(r);
		assertNotNull(rRepo.findById(7));
		
	}
	
	@Test
	@Order(2)
	public void testReadAll() {
		List<User> list=rRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
	
	@Test
	@Order(3)
	
	public void testUpdate() {
		User r=rRepo.findById(7).get();
		r.setName("yogita");
		rRepo.save(r);
		assertNotEquals("yogesh", rRepo.findById(7).get().getName());
		
	}
	
	@Test
	@Order(4)
	public void testDelete() {
		rRepo.deleteById(7);
		assertThat(rRepo.existsById(7)).isFalse();
		
	}
}
