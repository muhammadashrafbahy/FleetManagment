package grad.api.controller;

import grad.api.CRUD.*;
import grad.api.Entities.*;

import java.util.ArrayList;
import java.util.List;


import java.security.Principal;


import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping(value="/emp")
public class emp_api {
	
	

	@RequestMapping(value="/all_tasks/{state}", method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public  List<task> get_alltasks(Principal p , @PathVariable("state") int state ){
		
		
		int id = Integer.parseInt(p.getName());
	employee_crud cr = new employee_crud();
	
		System.out.println("state ==" +state);
	return cr.get_ALlTasks_foremp(id, state);	
	}
	
	@RequestMapping(value="/show_profile", method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public  employee show_profile(Principal p){
		
		int id = Integer.parseInt(p.getName());
	employee_crud cr = new employee_crud();
	
		
	return cr.get_empl(id);	
	}
	
	
	@RequestMapping(value="/update_loc/{lat}/{lng}/{h}", method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public  boolean update_location(Principal p, @PathVariable("lat") double lat ,@PathVariable("lng") double lng,@PathVariable("h") double h){
		
		int id = Integer.parseInt(p.getName());
	employee_crud cr = new employee_crud();
	
		employee emp = new employee();
		System.out.println("latttttt"+lat+ "  "+lng+ "  "+h);
		emp.setEmp_lat(lat);
		emp.setEmp_long(lng);
		boolean empo=	cr.update_location(id, emp);
	return empo;
	}
	
//	@RequestMapping(value="/update_profile", method=RequestMethod.PUT,produces=MediaType.APPLICATION_JSON_VALUE)
//	public  employee update_profile(Principal p, @RequestBody employee emp){
//		
//		int id = Integer.parseInt(p.getName());
//	employee_crud cr = new employee_crud();
//	
//		
//	
//			cr.update_empl(id, emp);	
//	return emp;
//	}
	
	@RequestMapping(value="/update_task/{task_id}/{state}", method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public  boolean  update_task(Principal p ,  @PathVariable("state") int state ,  @PathVariable("task_id") int task_id ){
		int id = Integer.parseInt(p.getName());
	task_crud cr = new task_crud();
	   boolean res=  cr.update_task_state(task_id, state);
		
	return res;	
	}
	
	@RequestMapping(value="/search_task", method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	public  List<task> search_task( Principal p,  @RequestBody task task){
		employee_crud cr = new employee_crud();
		
		int id = Integer.parseInt(p.getName());
	return cr.public_search_forEmp(task, id);	
	}
	
		
}
