package grad.api.CRUD;

import grad.api.recycle.manager_crud;
import grad.api.CRUD.*;
import grad.api.Entities.*;

import java.util.ArrayList;
import java.sql.Date;
import java.util.List;
import org.hibernate.*;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.LogicalExpression;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Service;
@Service
public class employee_crud {

	public employee add_empl(employee emp) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		try {
			tr= se.beginTransaction();
			se.save(emp);
		tr.commit();

		  } catch (Exception e) {
	            if (tr != null) {
	                tr.rollback();
	            }
	            e.printStackTrace();
	            System.out.println(e.getMessage() + "herererer");
	        } finally {
	            se.flush();
	            se.close();
	        }return emp;}  
	
	
	public employee delete_empl(int id) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		employee new_emp = new employee();
		try {
			tr= se.beginTransaction();
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(employee.class);
			new_emp= (employee) q.add(Restrictions.eq("emp_id", id)).list().get(0);
			se.delete(new_emp);
		tr.commit();

		  } catch (Exception e) {
	            if (tr != null) {
	                tr.rollback();
	            }
	            e.printStackTrace();
	            System.out.println(e.getMessage() + "herererer");
	        } finally {
	            se.flush();
	            se.close();
	        }
	return new_emp;	
	}  
	
	
	public String update_empl(int id , employee emp) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		employee new_emp ;
		try {
			
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(employee.class);
			new_emp= (employee) q.add(Restrictions.eq("emp_id", id)).list().get(0);
			if (new_emp!= null) {
				new_emp.setEmp_Bdate(emp.getEmp_Bdate());
				new_emp.setEmp_city(emp.getEmp_city());
				new_emp.setEmp_country(emp.getEmp_country());
				new_emp.setEmp_distr(emp.getEmp_distr());
				new_emp.setEmp_email(emp.getEmp_email());
				new_emp.setEmp_fname(emp.getEmp_fname());
				new_emp.setEmp_id(id);
				new_emp.setEmp_lat(emp.getEmp_lat());
				new_emp.setEmp_lname(emp.getEmp_lname());
				new_emp.setEmp_long(emp.getEmp_long());
				new_emp.setEmp_passwd(emp.getEmp_passwd());
				new_emp.setEmp_phone(emp.getEmp_phone());
				new_emp.setEmp_Regist_date(emp.getEmp_Regist_date());
				new_emp.setEmp_salary(emp.getEmp_salary());
				new_emp.setEmp_username(emp.getEmp_username());
System.out.println(new_emp.getEmp_username());
				se.update(new_emp);
				System.out.println("employee updated");
				return "employee updated";
		
			}
		tr.commit();

		  } catch (Exception e) {
	            if (tr != null) {
	                tr.rollback();
	            }
	            e.printStackTrace();
	            System.out.println(e.getMessage() + "herererer");
	        } finally {
	            se.flush();
	            se.close();
	        }
	return "cannot found this employee";	
	
	}  
	
	public boolean update_location(int id , employee emp) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		employee new_emp ;
		try {
			
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(employee.class);
			new_emp= (employee) q.add(Restrictions.eq("emp_id", id)).list().get(0);
			if (new_emp!= null) {
				new_emp.setEmp_Bdate(new_emp.getEmp_Bdate());
				new_emp.setEmp_city(new_emp.getEmp_city());
				new_emp.setEmp_country(new_emp.getEmp_country());
				new_emp.setEmp_distr(new_emp.getEmp_distr());
				new_emp.setEmp_email(new_emp.getEmp_email());
				new_emp.setEmp_fname(new_emp.getEmp_fname());
				new_emp.setEmp_id(id);
				new_emp.setEmp_lat(emp.getEmp_lat());
				new_emp.setEmp_lname(new_emp.getEmp_lname());
				new_emp.setEmp_long(emp.getEmp_long());
				new_emp.setEmp_passwd(new_emp.getEmp_passwd());
				new_emp.setEmp_phone(new_emp.getEmp_phone());
				new_emp.setEmp_Regist_date(new_emp.getEmp_Regist_date());
				new_emp.setEmp_salary(new_emp.getEmp_salary());
				new_emp.setEmp_username(new_emp.getEmp_username());

				se.update(new_emp);
				System.out.println("employee updated");
				return true;
		
			}
		tr.commit();

		  } catch (Exception e) {
	            if (tr != null) {
	                tr.rollback();
	            }
	            e.printStackTrace();
	            System.out.println(e.getMessage() + "herererer");
	        } finally {
	            se.flush();
	            se.close();
	        }
	return false;	
	
	}  
	
	
	public List<employee>  search_empl_name(String name) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		employee new_emp = new employee();
		List<employee> lem = new ArrayList<employee>();
		try {
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(employee.class);
			lem=  q.add(Restrictions.eq("emp_username", name)).list();
			System.out.println("found employeee  " + lem.size());
		    tr.commit();

		  } catch (Exception e) {
	            if (tr != null) {
	                tr.rollback();
	            }
	            e.printStackTrace();
	            System.out.println(e.getMessage() + "herererer");
	        } finally {
	            se.flush();
	            se.close();
	        }return lem;
	        
	}  
	
	public List<employee> search_empl_phone(String phone) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		employee new_emp = new employee();
		List<employee> lem = new ArrayList<employee>();
		try {
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(employee.class);
			lem=  q.add(Restrictions.eq("emp_phone", phone)).list();
		     System.out.println("found employeee " +lem.size());
		    tr.commit();

		  } catch (Exception e) {
	            if (tr != null) {
	                tr.rollback();
	            }
	            e.printStackTrace();
	            System.out.println(e.getMessage() + "herererer");
	        } finally {
	            se.flush();
	            se.close();
	        }return lem;
	        
	} 
	
	
	
	public String task_empl(int id , task tsk) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		List<task > tsk_list = new ArrayList<task>();
		
		employee new_emp ;
		try {
			
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(employee.class);
			new_emp= (employee) q.add(Restrictions.eq("emp_id", id)).list().get(0);
			if (new_emp!= null) {
				tsk_list= new_emp.getTask_list();
				tsk_list.add(tsk);
			      new_emp.setTask_list(tsk_list);
System.out.println(new_emp.getEmp_username());
				se.update(new_emp);
				System.out.println("employee updated");
				return "employee updated";
		
			}
		tr.commit();

		  } catch (Exception e) {
	            if (tr != null) {
	                tr.rollback();
	            }
	            e.printStackTrace();
	            System.out.println(e.getMessage() + "herererer");
	        } finally {
	            se.flush();
	            se.close();
	        }
	return "cannot found this employee";	
	
	}  
	
	public String delete_taskFORempl(int id ) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		List<task > tsk_list = new ArrayList<task>();
		
		employee new_emp ;
		try {
			
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(employee.class);
			new_emp= (employee) q.add(Restrictions.eq("emp_id", id)).list().get(0);
			if (new_emp!= null) {
				tsk_list= new_emp.getTask_list();
				tsk_list.clear();
			      new_emp.setTask_list(tsk_list);

				se.update(new_emp);
				System.out.println("employee updated");
				return "employee updated";
		
			}
		tr.commit();

		  } catch (Exception e) {
	            if (tr != null) {
	                tr.rollback();
	            }
	            e.printStackTrace();
	            System.out.println(e.getMessage() + "herererer");
	        } finally {
	            se.flush();
	            se.close();
	        }
	return "cannot found this employee";	
	
	}  

	public String delete_task_empl(int id ,int tsk_id) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		List<task > tsk_list = new ArrayList<task>();
		List<task > result = new ArrayList<task>();
		employee new_emp ;
		try {
			
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(employee.class);
			new_emp= (employee) q.add(Restrictions.eq("emp_id", id)).list().get(0);
			if (new_emp!= null) {
				tsk_list= new_emp.getTask_list();
				for (task task : tsk_list) {
					if(task.getTask_id()!=tsk_id) {
						
						result.add(task);
					}
					
				}
				
				
			      new_emp.setTask_list(result);

				se.update(new_emp);
				System.out.println("employee updated");
				return "employee updated";
		
			}
		tr.commit();

		  } catch (Exception e) {
	            if (tr != null) {
	                tr.rollback();
	            }
	            e.printStackTrace();
	            System.out.println(e.getMessage() + "herererer");
	        } finally {
	            se.flush();
	            se.close();
	        }
	return "cannot found this employee";	
	
	}  
	
	
	
	public employee get_empl ( int id) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		employee new_emp = new employee();

		try {
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(employee.class);
			new_emp= (employee) q.add(Restrictions.eq("emp_id", id)).list().get(0);
System.out.println("employee name => "+new_emp.getEmp_username());
		    tr.commit();

		  } catch (Exception e) {
	            if (tr != null) {
	                tr.rollback();
	            }
	            e.printStackTrace();
	            System.out.println(e.getMessage() + "herererer");
	        } finally {
	            se.flush();
	            se.close();
	        }return new_emp;
	     
		
	}
	
	
	
	public List<task> get_ALlTasks ( int id) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		employee new_emp = new employee();
		List<task> tsk_list = new ArrayList<task>();

		try {
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(employee.class);
			new_emp= (employee) q.add(Restrictions.eq("emp_id", id)).list().get(0);
//System.out.println("employee name => "+new_emp.getEmp_username());
        tsk_list=  new_emp.getTask_list();		  
for (task task : tsk_list) {
	System.out.println("task name => "+ task.getTask_name() );
}
tr.commit();

		  } catch (Exception e) {
	            if (tr != null) {
	                tr.rollback();
	            }
	            e.printStackTrace();
	            System.out.println(e.getMessage() + "herererer");
	        } finally {
	            se.flush();
	            se.close();
	        }return tsk_list;
	     
		
	}
    
	
	public List<task> get_ALlTasks_foremp( int id ,int state) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		employee new_emp = new employee();
		List<task> tsk_list = new ArrayList<task>();
		List<task> result = new ArrayList<task>();

		try {
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(employee.class);
			new_emp= (employee) q.add(Restrictions.eq("emp_id", id)).list().get(0);
//System.out.println("employee name => "+new_emp.getEmp_username());
        tsk_list=  new_emp.getTask_list();		  
       
	        if (state==1) {
	        	System.out.println("Done state");
	        	for (task task : tsk_list) {
					if(task.getState().equals("Done")) {
						result.add(task);
					}
				}
	        	
	        }
	        else  if (state==0) {
	        	
	        	for (task task : tsk_list) {
					if(task.getState().equals("notDone")) {
						
						result.add(task);
					}
				}
	        	
	        }
else  if (state==2) {
	        	
	        	for (task task : tsk_list) {
					if(task.getState().equals("inProgress")) {
						
						result.add(task);
					}
				}
	        	
	        }
         for (task task : result) {
        	System.out.println("task name => "+ task.getTask_name() );
        }
         
         System.out.println("result tasks size"+result.size());
        tr.commit();

		  } catch (Exception e) {
	            if (tr != null) {
	                tr.rollback();
	            }
	            e.printStackTrace();
	            System.out.println(e.getMessage() + "herererer");
	        } finally {
	            se.flush();
	            se.close();
	        }return result;
	     
		
	}
    
	
	
	public List<task> get_taskByname(task  tasks, int id){
        Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        task tsknew =new task();
        List<task> list = new ArrayList<task>();
        try {
            tr = se.beginTransaction();
            Criteria q = se.createCriteria(task.class);
            Criterion c1 = Restrictions.eq("emp_id", id);
            Criterion c2 =Restrictions.eq("client_name", tasks.getClient_name());
            LogicalExpression and =Restrictions.and(c1, c2);
            
            list = q.add(and).list();
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
    public List<task> get_taskBystatue(task  tasks, int id ){
        Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        task tsknew =new task();
        List<task> list = new ArrayList<task>();
        try {
            tr = se.beginTransaction();
            Criteria q = se.createCriteria(task.class);
            Criterion c1 = Restrictions.eq("emp_id", id);
            Criterion c2 =Restrictions.eq("state", tasks.getState());
            LogicalExpression and =Restrictions.and(c1, c2);
            
            list = q.add(and).list();
            
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
    public List<task> get_taskBydate(task tasks, int id ) {
        Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        task tsknew =new task();
        List<task> list = new ArrayList<task>();
        Date  from = tasks.getStart_date();
        Date  to = tasks.getExp_date();
        try {
            tr = se.beginTransaction();
            Criteria q = se.createCriteria(task.class);
            Criterion c1 = Restrictions.eq("emp_id", id);
            Criterion c2 =Restrictions.between("start_date", from, to);
            LogicalExpression and =Restrictions.and(c1, c2);
            
            list = q.add(and).list();
            
        
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
    
  
    public List<task> public_search_forEmp (task tsk , int id ){
    	employee_crud tcr = new employee_crud();
    	if (tsk.getClient_name()!=null) {
	       return 		tcr.get_taskByname(tsk, id);
		} 
    	
    	
    	if (tsk.getStart_date()!=null|| tsk.getExp_date()!=null) {
 	       return 		tcr.get_taskBydate(tsk, id );
 		} 
    	
    	return tcr.get_taskBystatue(tsk, id);
    }
    
    
    
    public employee check_employee (String email ) {
    	Session se = NewHibernateUtil.getSessionFactory().openSession();
    	Transaction tr = null;
    	
    	List<employee> list= new ArrayList<employee>();
    	    try {
    	        tr=se.beginTransaction();
    	        Criteria q = se.createCriteria(employee.class);
    	        
    	      Criterion c1 = Restrictions.eq("emp_email", email);

//    	        LogicalExpression and = Restrictions.and(c1, c2);
    	        

    	       list=  q.add(c1).list();
    	     if (list.size()>0) {
    			return list.get(0);
    		}
    	        
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

    	return null;
    	
    	
    	
    }

   
    
	
	public static void main(String[] args) {
		Date d  = new Date(13, 2, 1996);
employee emp = new employee("fname", "lname", "ashraf damn", "bahy_passwd", "bahy@gmail",
		600.1, "01009126166", "13/2/1996", d, "karf", "egypt", "future", 1.0, 1.0);
employee_crud cr = new employee_crud();

//mng_CRUD  mcr = new mng_CRUD();
//       mcr.emp_mng(1, cr.add_empl(emp)) ;


Date d1= new Date(2020, 12, 31);
Date d2 = new Date(2024, 12, 31);
//task tsk = new task( "bahy","notDone",1,1.0, 2.0, d1, d2,  "desc", "taskat ya bahy", "cairo", "egypt", "kafr");
 task_crud tcr = new task_crud();
 
 
 cr.get_ALlTasks_foremp(20, 0);
//cr.task_empl(5, tcr.add_task(tsk));

//employee e = new employee();
//e.setEmp_id(6);
//cr.delete_empl(e);

//cr.get_empl(5);

 
  
// cr.get_ALlTasks(5);
 
 
 
//System.out.println(cr.update_empl(5, emp));

//System.out.println(cr.search_empl_name("ashraf damn").get(0).getEmp_fname());

//System.out.println(cr.search_empl_phone("01009126166").get(0).getEmp_fname());
// task tsk_rsch = new task( );	
//tsk_rsch.setTask_name("bahy");
//cr.public_search_forEmp(tsk_rsch, 1);
	}

}
