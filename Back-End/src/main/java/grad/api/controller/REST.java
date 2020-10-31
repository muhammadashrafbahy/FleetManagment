/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package grad.api.controller;

import grad.api.CRUD.*;
import grad.api.Entities.*;

import java.util.ArrayList;
import java.util.List;

import java.security.*;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;



/**
 *
 * @author MUHAMMAD ASHRAF BAHY
 */


@CrossOrigin 
@RestController
@RequestMapping (value = "/up" )
public class REST {
	employee_crud cr = new employee_crud();
    mng_CRUD mcr = new mng_CRUD();
    client_crud ccr = new client_crud();
    category_crud ctc = new category_crud();
  
    task_crud tcr = new task_crud();
    
 
    
    
    @RequestMapping (value = "/login" , method = RequestMethod.POST , consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE  )
//    @RequestMapping (value = "/login" , method = RequestMethod.GET , consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE )
//    public manager login (@PathVariable("email") String email ,@PathVariable ("passwd") String passswd){
    public  ResponseEntity<manager> login (@RequestBody manager mng){
    manager manager = new  manager();
    manager=    mcr.login(mng.getComp_email(), mng.getComp_passwd());
        System.out.println("info -- "+mng.getComp_name());
        
        HttpHeaders http = new HttpHeaders();
        http.add("token", "bahy");
        
 return new ResponseEntity<manager>(manager,http,HttpStatus.ACCEPTED);
 
    
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    //update employee
    @RequestMapping(value = "/update_mng" , method = RequestMethod.PUT,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public manager update_mng( @RequestBody  manager mng , Principal p ) {
    	
    		int id =Integer.parseInt(p.getName());
    		System.out.println("updated manager id "+id);
    		
    		login log = new login(id, mng.getComp_email(), mng.getComp_passwd(), "manager");
    		mcr.update_login(id, log);
          manager res =mcr.update_mng(id, mng);
return res;
    } 
    
    
    
    //get all companies
   
    
    //get all employees for a manager
    @RequestMapping(value = "/mng/allempl" , method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE )
    public List<employee> mng_Allemp(Principal prin){
//    public String all_comp(){
//    prin.getName();//get the access user name
    	int id =Integer.parseInt(prin.getName());
    	List<employee> list = mcr.get_allEmp(id);
    
   return list;
    }
    
    //get all clients for a manager
    @RequestMapping(value = "/mng/allcl" , method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE )
    public List<clients> mng_Allcl(Principal prin){
//    public String all_comp(){
    	int id =Integer.parseInt(prin.getName());
    List<clients> list = mcr.get_allClients(id);
    
   return list;
    }
    
    //get all tasks for a manager
    @RequestMapping(value = "/mng/alltasks" , method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE )
    public List<task> mng_Alltsk(Principal prin){
//    public String all_comp(){
    	int id =Integer.parseInt(prin.getName());
    List<task> list = mcr.get_allTasks(id);
    
   return list;
    }
    
    
    //get manager information
    @RequestMapping(value = "/mng/{mng_id}" , method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE )
    public manager getManger(@PathVariable ("mng_id") int id){
//    public String all_comp(){
    
    manager list = mcr.get_info(id);
    
   return list;
    }
    
    //get manager info
    @RequestMapping(value = "/mng/get_info" , method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE )
    public manager getManger_info(Principal p){
//    public String all_comp(){
    
    	int id  = Integer.parseInt(p.getName());
    manager list = mcr.get_info(id);
    
   return list;
    }
 ////////////////////////////////////////////////////////////////////////TASKS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    
    @RequestMapping(value="/add_task" ,method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
    public task add_task(@RequestBody task task , Principal p ){
  
    manager mng = new manager();
    int id  = Integer.parseInt(p.getName());
    
    mng=mcr.get_info(id);
    employee emp = cr.get_empl(task.getEmp_id());
    task.setEmp_name(emp.getEmp_email());
    task tsk =tcr.add_task(task) ;
    cr.task_empl(tsk.getEmp_id(), tsk);	
      mcr.tsk_mng(id,tsk)  ;
     
    return task;
    }
   
    @RequestMapping (value="/delete_task/{task_id}" ,method = RequestMethod.DELETE ,produces = MediaType.APPLICATION_JSON_VALUE)
    public task delet(@PathVariable("task_id") int id ,Principal p){
    	int mng_id = Integer.parseInt(p.getName());
    	manager mng = mcr.delete_tsk_mng(mng_id, id);
    	
    	task tsk=tcr.get_task(id);
    	cr.delete_task_empl(tsk.getEmp_id(), id);
    
    task_crud cr= new task_crud();
    return cr.delete_task(id);
    }
    
    
    @RequestMapping (value="/get_task/{task_id}" ,method = RequestMethod.GET ,produces = MediaType.APPLICATION_JSON_VALUE)
    public task task_id(@PathVariable("task_id") int id){
    
    task_crud cr= new task_crud();
    return cr.get_task(id);
    }
    
    
    @RequestMapping (value="/update_tasks/{task_id}" ,method = RequestMethod.PUT ,produces = MediaType.APPLICATION_JSON_VALUE , consumes = MediaType.APPLICATION_JSON_VALUE)
    public task update(@PathVariable("task_id") int id ,@RequestBody task task){
    employee emp = cr.get_empl(task.getEmp_id());
    task.setEmp_name(emp.getEmp_email());
    task_crud cr= new task_crud();
    return cr.update_task(id, task);
    }
    
    @RequestMapping(value = "/tasks/search" , method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<task> search_task_name (@RequestBody task task ,Principal p){
    	int mng_id = Integer.parseInt(p.getName());
    List<task> res = new ArrayList<task>();
    task_crud cr  = new task_crud();
    res= cr.public_search(task , mng_id);
    return res;
    }
   
    @RequestMapping(value = "/tasks/assign/{emp_id}" , method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public task assign_task(@RequestBody task task, @PathVariable("emp_id") int emp_id){
    
    task_crud cr = new task_crud();
   return cr.assign_task(task.getTask_id(), task, emp_id);
    
    
    }
    
    @RequestMapping(value="/task/repeat/{task_id}" , method=RequestMethod.POST ,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE  )
    public task  repeat_task(@RequestBody task tsk , @PathVariable ("task_id") int id) {
    	
    	task_crud tcr = new task_crud();
    	
    return tcr.repeat_task(id, tsk);
    	
    }
    ///////////////////////////////////////////////////////////////////EMPLOYEE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    @RequestMapping(value = "/add_empl" , method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public employee add_emp(@RequestBody employee emp , Principal p) {
    	  manager mng = new manager();
    	  int id  = Integer.parseInt(p.getName()); 	  
    	  mng=mcr.get_info(id);
    	    
    	  employee empl =cr.add_empl(emp);
    	  
    	  login l = new login();	
      	l.setPassword(empl.getEmp_passwd());
      	l.setType("employee");
      	l.setUsername(empl.getEmp_email());
      	l.setUser_id(empl.getEmp_id());

      	mcr.insert_login(l);
      	
    	      mcr.emp_mng(id,	emp);
return emp;
    } 
    
    
    @RequestMapping(value = "/delet_empl/{emp_id}" , method = RequestMethod.DELETE,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public String  delete_emp(@PathVariable("emp_id") int id , Principal p ) {
    	int mng_id = Integer.parseInt(p.getName());
    mcr.delete_emp_mng(mng_id, id);
    cr.delete_taskFORempl(id);
    cr.delete_empl(id);
    
return "employee deleted";
    } 
    
    //get all tasks for employee
    @RequestMapping(value = "/tasks_for_empl/{emp_id}" , method = RequestMethod.GET,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public List<task>  getTask_emp(@PathVariable("emp_id") int id ) {
    List<task> emp =	cr.get_ALlTasks(id);
return emp;
    } 
    
    //get employee info
    @RequestMapping(value = "/get_empl/{emp_id}" , method = RequestMethod.GET,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public employee  emp_id(@PathVariable("emp_id") int id ) {
    employee emp =	cr.get_empl(id);
return emp;
    } 
    
    //update employee
    @RequestMapping(value = "/update_empl/{emp_id}" , method = RequestMethod.PUT,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public String update_emp(@PathVariable("emp_id") int id , @RequestBody  employee emp) {
          String res =cr.update_empl(id, emp);
return res;
    } 
    
    @RequestMapping(value = "/empl/search" , method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public List<employee> search_emp( @RequestBody  employee emp) {
    	
                    List<employee > res=  new ArrayList<employee>();
    	
    	if (emp.getEmp_username()!= null) {
						res= cr.search_empl_name(emp.getEmp_username());
					} else if(emp.getEmp_phone()!= null) {
                      res= cr.search_empl_phone(emp.getEmp_phone());
					}
return res;
    } 
    
    ///////////////////////////////////////////////////////////////////CLIENTS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    @RequestMapping(value = "/add_clients" , method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public clients add_client(@RequestBody clients cl, Principal p) {
    	  manager mng = new manager();
    	  int id  = Integer.parseInt(p.getName());
  	    mng=mcr.get_info(id);
  	    clients cls =ccr.add_client(cl);
  	      mcr.cl_mng(id,  cls);
  	      ctc.cl_cat(cls.getCat_id(), cls);
return cl;
    } 
    
    
    @RequestMapping(value = "/delete_clients/{client_id}/{cat_id}" , method = RequestMethod.DELETE,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public String  delete_client(@PathVariable("client_id") int id , Principal p ,@PathVariable("cat_id") int cat_id ) {
    	int mng_id =Integer.parseInt(p.getName());
    	manager mng = mcr.delete_cl_mng(mng_id, id);
    	ctc.delete_cl_cat(cat_id,id);
    	clients emp =	ccr.delete_client(id);
return "clients deleted";
    } 
    
    //get client info
    @RequestMapping(value = "/get_client/{client_id}" , method = RequestMethod.GET,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public clients  client_id(@PathVariable("client_id") int id ) {
    clients emp =	ccr.get_client(id);
return emp;
    } 
    
    @RequestMapping(value = "/update_clients/{client_id}" , method = RequestMethod.PUT,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public String update_emp(@PathVariable("client_id") int id , @RequestBody  clients cl) {
          String res =ccr.update_client(id, cl);
return res;
    } 
    
    @RequestMapping(value = "/clients/search" , method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public List<clients> update_emp( @RequestBody  clients cl) {
                    List<clients > res=  new ArrayList<clients>();
    	
    	if (cl.getClient_fname()!= null) {
						res= ccr.search_clients_name(cl.getClient_fname());
					} 
    	else if(cl.getClient_phone()!= null) {
                      
    		res= ccr.search_clients_phone(cl.getClient_phone());
     	}else if (cl.getClient_lname()!= null) {
	
     		res= ccr.search_clients_name(cl.getClient_lname());
					}
return res;
    } 
    
    
    
    /////////////////////////////////////////////////////category\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    @RequestMapping(value="/add_catg", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public category add_cat(@RequestBody category cat) {
    	
    	category ac =ctc.add_cat(cat);
    
    	return ac;
    	
    }
    
    
    @RequestMapping(value="/delete_catg/{cat_id}", method = RequestMethod.DELETE,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public category delete_cat(@PathVariable ("cat_id") int id) {
    	
    	category ac =ctc.delete_cat(id);
    
    	return ac;
    	
    }
    
    @RequestMapping(value="/update_catg/{cat_id}", method = RequestMethod.PUT,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public category update_cat(@RequestBody category cat, @PathVariable ("cat_id") int id) {
    	
    	category ac =ctc.update_cat(id, cat);
    
    	return ac;
    	
    }
    
    @RequestMapping(value="/get_catg/{cat_id}", method = RequestMethod.GET,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public category get_cat(@PathVariable ("cat_id") int id) {
    	
    	category ac =ctc.get_cat(id);
    
    	return ac;
    	
    }
    
    @RequestMapping(value="/cat/getall", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.APPLICATION_JSON_VALUE)
    public List<category> getAll_cat() {
    	
    	List<category> ac =ctc.get_allCat();
    
    	return ac;
    	
    }
    
    }


