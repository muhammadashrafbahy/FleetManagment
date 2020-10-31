package grad.api.controller;

import java.security.Principal;
import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import grad.api.CRUD.*;
import grad.api.Entities.login;
import grad.api.Entities.manager;

@CrossOrigin 
@RestController
public class Register {

    mng_CRUD mcr = new mng_CRUD();
  
 
    
    
    @RequestMapping (value = "/register" ,method = RequestMethod.POST)
    public  ResponseEntity<manager> register (@Valid @RequestBody manager mng){
        manager manager = mcr.add_mng(mng);   
    	
    	   login l = new login();	
    	l.setPassword(manager.getComp_passwd());
    	l.setType("manager");
    	l.setUsername(manager.getComp_email());
    	l.setUser_id(manager.getId());
           
    	mcr.insert_login(l);
           
           HttpHeaders http = new HttpHeaders();
           http.add("token", "bahy");
           
    return new ResponseEntity<manager>(mng,http,HttpStatus.ACCEPTED);
    
    
    }  
    @RequestMapping(value = "/list" , method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE )
    public List<manager> all_comp(){
//    public String all_comp(){
   
    List<manager> list = mcr.all_comp();
 for (manager manager : list) {
	System.out.println(manager.getComp_email());
}
    	
   return list;
    }
    
    @RequestMapping(value = "/mng_email/{email}/sure" , method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE )
    public boolean all_compEmail(@PathVariable("email") String email){
//    public String all_comp(){
   System.out.println(email);
    boolean result = mcr.check_email(email);
 
    	
   return result;
    }
    
}