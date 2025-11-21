package com.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AccountRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    private String accountType;
    private String address;
    private Date dob;
    private long aadharNumber;
    private String panNumber;
    private String occupation;
    private String requestStatus; // (PENDING/APPROVED/REJECTED)
    private Date createdAt;
}
