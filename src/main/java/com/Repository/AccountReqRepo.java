package com.Repository;

import com.Entity.AccountRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountReqRepo extends JpaRepository<AccountRequest,Integer> {
    
}
