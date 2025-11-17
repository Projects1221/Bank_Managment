package com.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {


	public SecurityFilterChain securityFilterChain( HttpSecurity http)throws Exception{
		http.csrf(csrf->csrf.disable())
		.cors(cors->{})
		.authorizeHttpRequests(auth->auth
				.requestMatchers("/**")
				.permitAll()
				.anyRequest()
				.authenticated()
				)
		.sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		);
		return http.build();
		
		
	}

}
