package com.exito.erp.Config.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.exito.erp.Config.configuration.AuthenticatedUser;
import com.exito.erp.Config.model.User;
import com.exito.erp.Config.repository.UserRepository;

@Service
public class UserServiceImpl implements userService {
	
	private final Logger log = LoggerFactory.getLogger(UserServiceImpl.class);
	
	@Autowired
    private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		// TODO Auto-generated method stub
		log.debug("Authenticating {}", username);
		String lowercaseLogin = username.toLowerCase();
		User user;
        if(lowercaseLogin.contains("@")) {
        	user = userRepository.findByEmail(lowercaseLogin);
        } else {
        	user = userRepository.findByFirstnameCaseInsensitive(lowercaseLogin);
        }
        if (user == null) {
            throw new UsernameNotFoundException("User " + lowercaseLogin + " was not found in the database");
        } else if (!user.isActive()) {
            throw new UserNotActivatedException("User " + lowercaseLogin + " is not activated");
        }
		//User user = userRepository.findByEmail(username);
//		if (user == null) {
//			throw new UsernameNotFoundException("Email " + username + " not found");
//		}
		return new AuthenticatedUser(user);
	}

}
