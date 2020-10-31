/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package grad.api.CRUD;

import java.util.ArrayList;
import java.util.Calendar;
import java.sql.Date;
//import java.util.Date;
import java.util.List;

import org.hibernate.*;
import org.hibernate.criterion.Restrictions;

import grad.api.Entities.employee;
import grad.api.Entities.manager;
import grad.api.Entities.task;
import grad.api.recycle.manager_crud;

/**
 *
 * @author MUHAMMAD ASHRAF BAHY
 */
public class task_crud {
    
    public task add_task(task tsk){
        Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        task tsknew = tsk;
        try {
            tr = se.beginTransaction();
            
            se.save(tsknew);
            System.out.println("added the task");
            tr.commit();
       } catch (Exception e) {
    if(tr!= null){
    tr.rollback();
    }
         e.printStackTrace();
            System.out.println(e.getMessage() + "herererer");
        } finally {
            se.flush();
            se.close();
        }
    return tsknew;
    }
    
    public task delete_task(int id){
        Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        task tsknew =new task();
        try {
            tr = se.beginTransaction();
            Criteria q = se.createCriteria(task.class);
            List<task> list = new ArrayList<task>();
            list = q.add(Restrictions.eq("task_id", id)).list();
            if (list.size() !=0) {
                tsknew= list.get(0);
                se.delete(tsknew);
          System.out.println("deleted the task");  }else{
            System.out.println("can not found  the task");}
            tr.commit();
       } catch (Exception e) {
    if(tr!= null){
    tr.rollback();
    }
         e.printStackTrace();
            System.out.println(e.getMessage() + "herererer");
        } finally {
            se.flush();
            se.close();
        }
    return tsknew;
    }
    

    public task update_task(int id , task task){
        Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        task tsknew =new task();
        try {
            tr = se.beginTransaction();
            Criteria q = se.createCriteria(task.class);
            List<task> list = new ArrayList<task>();
            list = q.add(Restrictions.eq("task_id", id)).list();
            if (list.size() !=0) {
                tsknew= list.get(0);
                tsknew.setExp_date(task.getExp_date());
                
                tsknew.setStart_date(task.getStart_date());
                
                
                
                tsknew.setTask_address(tsknew.getTask_address());
                
                
                tsknew.setTask_descript(task.getTask_descript());
              
                tsknew.setTask_name(task.getTask_name());
                tsknew.setTask_lat(tsknew.getTask_lat());
                tsknew.setTask_long(tsknew.getTask_long());
                tsknew.setClient_name(task.getClient_name());
                tsknew.setState(task.getState());
                tsknew.setEmp_name(task.getEmp_name());
                tsknew.setTask_id(id);
                
                
                se.update(tsknew);
          System.out.println("updated the task");  }else{
            System.out.println("can not found  the task");}
            tr.commit();
       } catch (Exception e) {
    if(tr!= null){
    tr.rollback();
    }
         e.printStackTrace();
            System.out.println(e.getMessage() + "herererer");
        } finally {
            se.flush();
            se.close();
       
    return tsknew;
    }}
  
    public boolean update_task_state(int id , int state){
        Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        task tsknew =new task();
        try {
            tr = se.beginTransaction();
            Criteria q = se.createCriteria(task.class);
            List<task> list = new ArrayList<task>();
            list = q.add(Restrictions.eq("task_id", id)).list();
            if (list.size() !=0) {
                tsknew= list.get(0);
                tsknew.setExp_date(tsknew.getExp_date());
                
                tsknew.setStart_date(tsknew.getStart_date());
                
                
                
                tsknew.setTask_address(tsknew.getTask_address());
                
                
                tsknew.setTask_descript(tsknew.getTask_descript());
              
                tsknew.setTask_name(tsknew.getTask_name());
                tsknew.setTask_lat(tsknew.getTask_lat());
                tsknew.setTask_long(tsknew.getTask_long());
                tsknew.setClient_name(tsknew.getClient_name());
                
                tsknew.setEmp_name(tsknew.getEmp_name());
                if (state==1) {
    	        	tsknew.setState("Done");	        	
    	        }
    	        else  if (state==0) {
    	        	tsknew.setState("notDone");
        	
    	        }
                else  if (state==2) {
    	            tsknew.setState("inProgress");   	
    	        	
    	        }
                
                tsknew.setTask_id(id);
                
                
                se.update(tsknew);
          System.out.println("updated the task"); 
          return true;
            }else{
            System.out.println("can not found  the task");}
            tr.commit();
       } catch (Exception e) {
    if(tr!= null){
    tr.rollback();
    }
         e.printStackTrace();
            System.out.println(e.getMessage() + "herererer");
        } finally {
            se.flush();
            se.close();
       
            return true;
    }}
  
    
    
    public task repeat_task(int id , task task){
        Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        task tsknew =new task();
        try {
            tr = se.beginTransaction();
            Criteria q = se.createCriteria(task.class);
            List<task> list = new ArrayList<task>();
            list = q.add(Restrictions.eq("task_id", id)).list();
            if (list.size() !=0) {
                tsknew= list.get(0);
                tsknew.setExp_date(task.getExp_date());
               
                tsknew.setStart_date(task.getStart_date());
      
                tsknew.setState("notDone");
                tsknew.setEmp_name(task.getEmp_name());
                tsknew.setTask_id(id);
                se.update(tsknew);
          System.out.println("repeated the task");  }else{
            System.out.println("can not found  the task");}
            tr.commit();
       } catch (Exception e) {
    if(tr!= null){
    tr.rollback();
    }
         e.printStackTrace();
            System.out.println(e.getMessage() + "herererer");
        } finally {
            se.flush();
            se.close();
       
    return tsknew;
    }}
  

    public task assign_task(int id , task task , int emp_id){
        Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        task tsknew =new task();
        try {
            tr = se.beginTransaction();
            Criteria q = se.createCriteria(task.class);
            List<task> list = new ArrayList<task>();
            list = q.add(Restrictions.eq("task_id", id)).list();
            if (list.size() !=0) {
                tsknew= list.get(0);
                
                employee_crud emcr = new employee_crud(); 
                emcr.delete_task_empl(tsknew.getEmp_id(), id);
                emcr.task_empl(emp_id, tsknew);
                
               employee emp = emcr.get_empl(emp_id);
               
                tsknew.setEmp_name(emp.getEmp_email());
                
                tsknew.setTask_id(id);
             
             tsknew.setEmp_id(emp_id);
             
             
             
                se.update(tsknew);
          System.out.println("asssigned the task");  }else{
            System.out.println("can not found  the task");}
            tr.commit();
       } catch (Exception e) {
    if(tr!= null){
    tr.rollback();
    }
         e.printStackTrace();
            System.out.println(e.getMessage() + "herererer");
        } finally {
            se.flush();
            se.close();
       
    return tsknew;
    }}
    
    public List<task> get_taskByname(task  tasks){
 
        Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        task tsknew =new task();
        List<task> list = new ArrayList<task>();
        try {
            tr = se.beginTransaction();
            Criteria q = se.createCriteria(task.class);
            
            list = q.add(Restrictions.eq("client_name", tasks.getClient_name())).list();
            if (list.size() !=0) {
            System.out.println("found the task "+list.size()); 
            return list;
              
          
            }else{   	System.out.println("here in task name search");
            System.out.println("can not found  the task");}
            tr.commit();
       } catch (Exception e) {
    if(tr!= null){
    tr.rollback();
    }
         e.printStackTrace();
            System.out.println(e.getMessage() + "herererer");
        } finally {
            se.flush();
            se.close();
       
    return list;
    }}
    public List<task> get_taskBystatue(task  tasks){
        Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        task tsknew =new task();
        List<task> list = new ArrayList<task>();
        try {
            tr = se.beginTransaction();
            Criteria q = se.createCriteria(task.class);
            
            list = q.add(Restrictions.eq("state", tasks.getState())).list();
            if (list.size() !=0) {
            System.out.println("found the task "+list.size()); 
            return list;
              
          
            }else{
            System.out.println("can not found  the task");}
            tr.commit();
       } catch (Exception e) {
    if(tr!= null){
    tr.rollback();
    }
         e.printStackTrace();
            System.out.println(e.getMessage() + "herererer");
        } finally {
            se.flush();
            se.close();
       
    return list;
    }}
    public List<task> get_taskBydate(task tasks ) {
        Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        task tsknew =new task();
        List<task> list = new ArrayList<task>();
        Date  from = tasks.getStart_date();
        Date  to = tasks.getExp_date();
        try {
            tr = se.beginTransaction();
            Criteria q = se.createCriteria(task.class);
            
            list = q.add(Restrictions.between("exp_date", from, to)).list();
            if (list.size() !=0) {
            System.out.println("found the task "+list.size()); 
            return list;
              
          
            }else{
            System.out.println("can not found  the task");}
            tr.commit();
       } catch (Exception e) {
    if(tr!= null){
    tr.rollback();
    }
         e.printStackTrace();
            System.out.println(e.getMessage() + "herererer");
        } finally {
            se.flush();
            se.close();
       
    return list;
    }}
    
  
    public List<task> public_search (task tsk, int id ){
    	System.out.println("start date "+tsk.getStart_date());
    	System.out.println("end date"+tsk.getExp_date());
    	task_crud tcr = new task_crud();
    	List<task> res = tcr.get_taskBydate(tsk);
    	List<task> result = new ArrayList<>();
    	mng_CRUD mc = new mng_CRUD();
    	
    	manager mng = mc.get_info(id);
    	
    	List<task> mng_ts= mng.getTsk_list();
    
    	for (task task : res) {
    		System.out.println("firrstttt "+task.getTask_id() );
    		for (task ss : mng_ts) {
    				System.out.println("secconnddd "+ ss.getTask_id() + mng.getComp_email());
    				
				if(task.getTask_id()==ss.getTask_id()) {
					System.out.println("founddddddddddd" +task.getTask_address());
					result.add(task);
				}
			}
		}
 	       return 	result;
 		
    	
    }
    
   
    
    
    public task get_task(int id ){
        Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        task tsknew =new task();
        try {
            tr = se.beginTransaction();
            Criteria q = se.createCriteria(task.class);
            List<task> list = new ArrayList<task>();
            list = q.add(Restrictions.eq("task_id", id)).list();
            if (list.size() !=0) {
                tsknew= list.get(0);
               
          System.out.println("found the task");  }else{
            System.out.println("can not found  the task");}
            tr.commit();
       } catch (Exception e) {
    if(tr!= null){
    tr.rollback();
    }
         e.printStackTrace();
            System.out.println(e.getMessage() + "herererer");
        } finally {
            se.flush();
            se.close();
       
    return tsknew;
    }}
  
    
    public static void main(String[] args) {
//        Calendar c = Calendar.getInstance();
///        Date d1= c.getTime();
        
        Date d1= new Date(2018, 7, 1);
        Date d2 = new Date(2018, 7, 10);
       task ts= new task();
       ts.setStart_date(d1);
       ts.setExp_date(d2);
//        task tsk = new task( "new","notDone",2,1.0, 2.0, d1, d2,  "desc", "taskat ya bahy", "cairo", "egypt", "kafr");
        task_crud cr = new task_crud();
//        cr.add_task(tsk);
//       cr.delete_task(9);
//        cr.update_task(1, tsk);
        cr.public_search(ts, 60);
        
        
   Date ds1= new Date(2016, 2, 13);
        Date ds2 = new Date(2019, 2, 13);
        task search = new task();

//        search.setStart_date(d1);
//        search.setExp_date(d2);
//        search.setTask_name("new");
//        List<task> list = cr.public_search(search);
////
//        for (int i = 0; i < list.size(); i++) {
//            task elem = list.get(i);
//              System.out.println("here U R  = "+elem.getTask_id());
//        }
//
//        
        
        
        
//        cr.get_task(8);
        
        
        
    }
}
