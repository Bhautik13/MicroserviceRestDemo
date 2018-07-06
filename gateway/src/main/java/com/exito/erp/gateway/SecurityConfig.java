package com.exito.erp.gateway;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@Order(-10)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        	.authorizeRequests()
        	.antMatchers("/uaa").permitAll()
        	.and().csrf().disable();
    }
	
//	@Bean
//	public HttpFirewall allowUrlEncodedSlashHttpFirewall() {
//	    StrictHttpFirewall firewall = new StrictHttpFirewall();
//	    firewall.setAllowUrlEncodedSlash(true);
//	    firewall.setAllowSemicolon(true);
//	    return firewall;
//	}
//	@Override
//	public void configure(WebSecurity web) throws Exception {
//	  super.configure(web);
//	  // @formatter:off
//	  web.httpFirewall(allowUrlEncodedSlashHttpFirewall());
//	}
}
