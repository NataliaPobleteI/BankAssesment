package com.examplerest.demorest.user;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import java.util.List;

@RestController
public class UserController {

	private UserDaoService service; 
	
	
	public UserController(UserDaoService service) {
		
		this.service = service;
	}
	
	
	@GetMapping("/users")
	public List<User> retrieveAllUsers(){
		return service.findAll();
	}
	
	@GetMapping("/user/{id}")
	public User retrieveUser(@PathVariable int id){
		User user= service.findOne(id);
		
		if(user == null)
			throw new UserNotFoundException("id:"+id);
	
		return  user;
	
	}
	
	@PostMapping("/users")
	public ResponseEntity<User> createUser (@Valid @RequestBody User user){
		service.save(user);
		
		return ResponseEntity.created(null).build();
	}
	
	@DeleteMapping("/user/{id}")
	public void deleteUser(@PathVariable int id){
		service.deleteOne(id);
	
	}
	

}
