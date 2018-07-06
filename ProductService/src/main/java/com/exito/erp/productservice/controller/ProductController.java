package com.exito.erp.productservice.controller;

import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.exito.erp.productservice.client.ConfigClient;
import com.exito.erp.productservice.model.Product;
import com.exito.erp.productservice.model.User;

@RestController
public class ProductController {
	
	@Autowired
	ConfigClient configClient;
	
	
	@GetMapping("/{id}")
	@PreAuthorize("#oauth2.hasScope('read')")
	public Product findAccount(@PathVariable("id") Long id) {
		/*RestTemplate template = new RestTemplate();
		Principal user = template.getForObject("http://localhost:8989/user?access_token=0b5dccc2-408f-4244-9e26-8f14d1f0c2e0", Principal.class);*/
		System.out.println(SecurityContextHolder.getContext().getAuthentication().getName());
		User user = configClient.loggedInUser();
		System.out.println(user);
		Product product = new Product();
		product.setId(id);
		product.setAddress("hiii");
		product.setManufacturer("exito Systems");
		product.setPrice("no bar");
		product.setProductName("developer");
		return product;
	}

	@GetMapping("/")
	@PreAuthorize("#oauth2.hasScope('read')")
	public List<Product> findAccounts() {
		Product product = new Product();
		product.setId(1);
		product.setAddress("hiii");
		product.setManufacturer("exito Systems");
		product.setPrice("no bar");
		product.setProductName("developer");
		return Arrays.asList(product);
	}
}
