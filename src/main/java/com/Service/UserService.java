package com.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Entity.User;
import com.Repository.UserRepository;

@Service
public class UserService {
@Autowired
UserRepository userRepo;
public ResponseEntity<?> registerUser(User user) {
	userRepo.save(user);
	return new ResponseEntity("User Registed successfully!",HttpStatus.OK);
}
}
