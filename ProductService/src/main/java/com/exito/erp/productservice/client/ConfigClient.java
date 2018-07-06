package com.exito.erp.productservice.client;

import java.security.Principal;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import com.exito.erp.productservice.model.User;

@FeignClient(name="config", configuration=ConfigClientConfiguration.class)
public interface ConfigClient {
	
	@GetMapping("/user")
	Principal user(Principal user);
	
	@GetMapping("/loggedInUser")
	User loggedInUser();
}
