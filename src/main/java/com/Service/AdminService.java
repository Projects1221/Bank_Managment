package com.Service;

import com.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    private UserRepository userRepository;
    public ResponseEntity<?> getAllUsers() {
       return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }
}
