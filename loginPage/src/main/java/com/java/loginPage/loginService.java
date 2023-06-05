package com.java.loginPage;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class loginService {
	
	
	
	@Autowired
	private loginRepository repo;
	
	@Autowired
	private loginDAO dao;
	
	
	public User authenticate(String username,String pwd) {
		
		User user= repo.authenticate(username, pwd);
		if(user!=null){
			return user;
		}
		else {
			User userNull=new User();
		return userNull;
		}
	}
	public User registerNewUser(User register) {
		int cnt=Integer.parseInt(repo.preventDuplicate(register.getUsername()));
		if(cnt==0) {
			
			repo.save(register);
			
			return repo.searchByUserName(register.getUsername());
			
		}
		else {
			User userNull=new User();
		return userNull;
		}
		
		
	}
	public List<User> allUsers(){
		return repo.findAll();
	}
	
	public User searchByUserName(String username) {
		// TODO Auto-generated method stub
		return dao.searchByUserName(username);
	}

}
