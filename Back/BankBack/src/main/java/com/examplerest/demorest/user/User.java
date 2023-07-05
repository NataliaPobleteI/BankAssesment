package com.examplerest.demorest.user;

import jakarta.validation.constraints.Size;

public class User {

	private Integer id;
	
	@Size(min=2 , message = "It should have more than 2 characters")
	private String name;
	
	private String password;
	
	
	public User(Integer id, String name, String password) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getBirthDate() {
		return password;
	}


	public void setBirthDate(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", password=" + password + "]";
	}
	
	
}
