package com.Controller;

import com.DTO.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Entity.User;
import com.Service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	UserService userService;
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody User user) {
		return userService.registerUser(user);
	}

    @GetMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserDTO user) {
//        This functionality yet to be implemented
        return new ResponseEntity<>("", HttpStatus.OK);
    }
//   @PostMapping("/account-request")


}
