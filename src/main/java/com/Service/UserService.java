package com.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.Entity.User;
import com.Repository.UserRepository;

@Service
public class UserService {

@Autowired
UserRepository userRepo;

@Autowired
PasswordEncoder passwordEncoder;

public ResponseEntity<String> registerUser(User user) {
	user.setPassword(passwordEncoder.encode(user.getPassword()));
	userRepo.save(user);
	return  ResponseEntity
	             .status(HttpStatus.CREATED)
	             .body("User Registed successfully!"); 
    }
}
