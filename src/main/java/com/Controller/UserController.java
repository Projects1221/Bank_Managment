package com.Controller;


import java.util.HashMap;
import java.util.Map;

import com.Service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

// import com.DTO.UserDetails;
import com.Entity.User;
import com.Service.UserService;
import com.security.JwtUtil;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
    UserDetailsServiceImpl userDetailsService;
	@Autowired
	JwtUtil jwtUtil;

	@Autowired
	UserService userService;
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody User user) {
		return userService.registerUser(user);
	}

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword())
            );

            UserDetails userDetails = userDetailsService.loadUserByUsername(user.getEmail());
            String jwt = jwtUtil.generateToken(userDetails.getUsername());
            Map<String,String> response = new HashMap<>();
            String role = userDetails.getAuthorities().stream()
                    .findFirst()
                    .map(grantedAuthority -> grantedAuthority.getAuthority())
                    .orElse("CUSTOMER");
            response.put("token", jwt);
            response.put("role",role);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized User!");
        }
    }


}
