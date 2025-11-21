package com.Service;

import com.Entity.AccountRequest;
import com.Entity.User;
import com.Repository.AccountReqRepo;
import com.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class AccountReqservice {
    @Autowired
    private AccountReqRepo accountReqRepo;
    @Autowired
    UserRepository userRepository;
    
    public ResponseEntity<?> createAccountReq(AccountRequest accountRequest) {
        String email= SecurityContextHolder.getContext().getAuthentication().getName();
        User user=userRepository.findByEmail(email);
        if(user!=null){
        accountRequest.setUser(user);
        accountRequest.setCreatedAt(Date.valueOf(LocalDate.now()));
        accountRequest.setRequestStatus("PENDING");
        accountReqRepo.save(accountRequest);
        return new ResponseEntity<>("Request Submitted!", HttpStatus.CREATED);}
        else{
            return new ResponseEntity<>("Request Not Submitted!", HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> findAllPendingReq(){
        List<AccountRequest> allRequest = accountReqRepo.findAll();
        List<AccountRequest> pendingRequest = new ArrayList<>();
        for(AccountRequest acc : allRequest){
            if(acc.getRequestStatus().equals("PENDING")){
                pendingRequest.add(acc);
            }
        }
        if(pendingRequest.size()!=0){
            return new ResponseEntity<>(pendingRequest,HttpStatus.OK);
        }else{
            return new ResponseEntity<>("No Pending Request",HttpStatus.OK);
        }
    }
}
