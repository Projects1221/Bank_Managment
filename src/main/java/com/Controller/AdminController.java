package com.Controller;

import com.Service.AccountReqservice;
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

    @Autowired
    private AccountReqservice accountReqservice;

    @GetMapping
    public ResponseEntity<?> getUser(){
        return adminService.getAllUsers();
    }

    @GetMapping("/pending-request")
    public ResponseEntity<?> getPendingRequest(){
        return accountReqservice.findAllPendingReq();
    }
    
}
