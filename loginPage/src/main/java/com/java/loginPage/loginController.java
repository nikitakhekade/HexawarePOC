package com.java.loginPage;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




@RestController
public class loginController {
	
	@Autowired
	private loginService service;
	
	
	
	
	@CrossOrigin(origins = "*")
	@RequestMapping("/authenticate/{username}/{password}")
	public User authenticate(@PathVariable String username, @PathVariable String password) {
//		return service.authenticate(username, password);
		
		return service.authenticate(username, password);
			 
			
	}
	
	@CrossOrigin(origins = "http://localhost:7000")
	@PostMapping("/register")
	public User registerNewUser(@RequestBody User newUser) {
		return service.registerNewUser(newUser);
	}
	
	@CrossOrigin(origins = "http://localhost:7000")
	@RequestMapping("/users")
	public List<User> allUsers() {
		return service.allUsers();
	}
	
	@CrossOrigin(origins = "http://localhost:7000")
	@RequestMapping("/searchByUser/{username}")
	public ResponseEntity<User> searchByUserName(@PathVariable String username) {
		try {
		User user = service.searchByUserName(username);
		return new ResponseEntity<User>(user,HttpStatus.OK);
		} catch(NoSuchElementException e) {
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		}
	} 


}
