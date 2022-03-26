package com.example.fpis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.fpis.entity.User;
import com.example.fpis.service.LoginService;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private LoginService loginService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping
	public User getUser(@RequestBody User user) {
		return loginService.getUser(user);
	}
}
