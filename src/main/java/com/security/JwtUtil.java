package com.security;

import java.util.Date;
import java.util.HashMap;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;



import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
    
    private String secret_key = "MY_SECURITY_@BANK_*%mANAGMENT";

    private SecretKey getSignKey()
    {
        return Keys.hmacShaKeyFor(secret_key.getBytes());
    }

    public String generateToken(String email){
        HashMap<String,Object> claims=new HashMap<>();
        return CreateToken(claims,email);
    }

    private String CreateToken(HashMap<String,Object> claims, String subject) {
       return Jwts.builder()
              .claims(claims)
              .subject(subject)
              .header().empty().add("typ","JWT")
              .and()
              .issuedAt(new Date (System.currentTimeMillis()))
              .expiration(new Date (System.currentTimeMillis()+1000*60*10))
              .signWith(getSignKey())
              .compact();
    }

    public String extractEmail(String token){
        return extractClaim(token, Claims::getSubject);
    }

    private <T> T extractClaim(String token, Function<Claims,T> claimResolver){
        final Claims claims = extractAllClaims(token);
        return claimResolver.apply(claims);
    }

    private Claims extractAllClaims(String token)
    {
        return Jwts.parser()
        .verifyWith(getSignKey())
        .build()
        .parseSignedClaims(token)
        .getPayload();
    }
    public boolean validateToken(String token,UserDetails userDetails){
        final String email=extractEmail(token);
        return (email.equals(userDetails.getUsername())&& !isTokenExpired(token));

    }

    private boolean isTokenExpired(String token) {
       return ExtractExpiration(token).before(new Date());
    }

    private Date ExtractExpiration(String token){
        return extractClaim(token,Claims::getExpiration);
    }
    
}
