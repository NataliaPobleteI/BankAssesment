package com.examplerest.demorest.user;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;


@Component
public class UserDaoService {

	private static int userId = 0;
	
	private static List<User> users = new ArrayList<>();
	
	static
	{
		users.add(new User(++userId,"Natalia" , "Poblete","solera@solera.com", "bootcamp5"));
		
	}
	
	public List<User> findAll()
	{
		return users;
	}
	public User findOne(int id) {
		Predicate<? super User> predicate = user -> user.getId().equals(id); 
		return users.stream().filter(predicate).findFirst().orElse(null);
	}
	public User save(User user) {
		user.setId(++userId);
		users.add(user);
		return user;
	}
	public void deleteOne(int id) {
		Predicate<? super User> predicate = user -> user.getId().equals(id); 
		users.removeIf(predicate);
	}
}
