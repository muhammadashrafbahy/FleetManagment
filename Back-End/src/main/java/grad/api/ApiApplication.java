package grad.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;

import grad.api.CRUD.employee_crud;
import grad.api.CRUD.mng_CRUD;


@SpringBootApplication
@CrossOrigin
//@EnableAutoConfiguration
//@ComponentScan({"grad.api","grad.api.CRUD","grad.api.authorization"})
//
//@EnableJpaRepositories("grad.api.CRUD")
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

	@Autowired
public void authenticationManager(AuthenticationManagerBuilder builder , mng_CRUD repo ) throws Exception {
	builder.userDetailsService(s -> new customUserDetails(repo.check_login(s)));
	
	
} 	
	
	
	
}
