package com.Controller;

import com.Service.AdminService;
import com.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private UserService userService;

    @Autowired
    private AdminService adminService;
    @GetMapping
    public ResponseEntity<?> getUser(){
        return adminService.getAllUsers();
    }
}
