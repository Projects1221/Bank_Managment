package com.Controller;

import com.Entity.AccountRequest;
import com.Service.AccountReqservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/request")
public class AccountReqController {
    @Autowired
    private AccountReqservice accountReqservice;

    @PostMapping("/create-account")
    public ResponseEntity<?> createAccount(@RequestBody AccountRequest accountRequest) {
        return accountReqservice.createAccountReq(accountRequest);
    }

}
