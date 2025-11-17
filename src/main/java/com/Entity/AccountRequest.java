package com.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AccountRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    private String accountType; // (SAVINGS/CURRENT)
    private String address;
    private Date dob;
    private long aadharNumber;
    private String panNumber;
    private String occupation;
    private String requestStatus; // (PENDING/APPROVED/REJECTED)
    private Date createdAt;
}
