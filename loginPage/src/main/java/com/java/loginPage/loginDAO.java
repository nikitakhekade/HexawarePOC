package com.java.loginPage;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


@Repository
public class loginDAO {
	
	@Autowired  
    JdbcTemplate jdbc;  
	public User authenticate(String user,String pwd) {
		String cmd = "select * from User where username=? "
				+ " AND password=?";
		List<User> User=jdbc.query(cmd,new Object[] {user,pwd}, new RowMapper() {

			@Override
			public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
				User User = new User();
				User.setId(rs.getInt("id"));
				User.setName(rs.getString("name"));
				User.setRole(rs.getString("role"));
				User.setUsername(rs.getString("username"));
				User.setPassword(rs.getString("password"));
				User.setEmail(rs.getString("email"));
				return User;
				
			
			}
			
		});
		return User.get(0);
	}
	public User searchByUserName(String userName) {
		String cmd = "select * from User where UserName=?";
		List<User> UserList = jdbc.query(cmd, new Object[] {userName}, new RowMapper<User>() {

			@Override
			public User mapRow(ResultSet rs, int rowNum) throws SQLException {
				User User = new User();
				User.setId(rs.getInt("id"));
				User.setName(rs.getString("name"));
				User.setRole(rs.getString("role"));
				User.setUsername(rs.getString("username"));
				User.setPassword(rs.getString("password"));
				User.setEmail(rs.getString("email"));
				return User;
			}
			
		});
		return UserList.get(0);
	}
	
	
}
