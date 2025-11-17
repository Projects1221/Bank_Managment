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
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
     @ManyToOne
     @JoinColumn(name = "user_id")
     private User user;
     private long account_number;
    private String account_type;
    private long balance;
    private String status;
    private Date created_at;
    private Date updated_at;

}
