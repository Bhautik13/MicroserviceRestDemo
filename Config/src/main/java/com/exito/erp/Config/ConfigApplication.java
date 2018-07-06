package com.exito.erp.Config;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jmx.JmxAutoConfiguration;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exito.erp.Config.model.User;
import com.exito.erp.Config.repository.UserRepository;

@EnableDiscoveryClient
@RestController
@SpringBootApplication(exclude = JmxAutoConfiguration.class)
public class ConfigApplication {
	public static void main(String[] args) {
		SpringApplication.run(ConfigApplication.class, args);
	}
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/user")
	public Principal user(Principal user) {
		return user;
	}
	
	@GetMapping("/loggedInUser")
	/*@PreAuthorize("#oauth2.hasScope('read')")*/
	public User loggedInUser(){
		return userRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName());
	}
	
	@GetMapping("/allUser")
	public List<User> allUser(){
		return userRepository.findAll();//userRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName());
	}
}
