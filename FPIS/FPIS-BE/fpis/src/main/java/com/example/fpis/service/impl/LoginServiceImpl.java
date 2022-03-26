package com.example.fpis.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.fpis.entity.User;
import com.example.fpis.repository.UserRepository;
import com.example.fpis.service.LoginService;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User getUser(User user) {
		System.out.println(user);
		return userRepository.findByUsernameAndPassword(user.getUsername(),user.getPassword());
	}

}
