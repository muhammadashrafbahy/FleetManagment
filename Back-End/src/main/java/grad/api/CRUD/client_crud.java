package grad.api.CRUD;

import java.util.ArrayList;
import java.sql.Date;
import java.util.List;
import org.hibernate.*;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.LogicalExpression;
import org.hibernate.criterion.Restrictions;

import grad.api.Entities.*;

public class client_crud {

	public clients add_client(clients cl) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		try {
			tr= se.beginTransaction();
			se.save(cl);
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
		return cl;}  
	
	
	public clients delete_client(int id) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
          clients cl = new clients();
		try {
			tr= se.beginTransaction();
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(clients.class);
			cl= (clients) q.add(Restrictions.eq("clients_id", id)).list().get(0);
			se.delete(cl);
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
	return cl;	
	}  
	
	
	public String update_client(int id , clients cl) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		clients new_cl ;
		try {
			
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(clients.class);
			new_cl= (clients) q.add(Restrictions.eq("clients_id", id)).list().get(0);
			if (new_cl!= null) {
		        new_cl.setClient_city(cl.getClient_city());
		        new_cl.setClient_country(cl.getClient_country());
		        new_cl.setClient_distr(cl.getClient_distr());
		        new_cl.setClient_fname(cl.getClient_fname());
		        new_cl.setClient_lat(cl.getClient_lat());
		        new_cl.setClient_lname(cl.getClient_lname());
		        new_cl.setClient_long(cl.getClient_long());
		        new_cl.setClient_phone(cl.getClient_phone());
				
				
				
				se.update(new_cl);
				System.out.println("clients updated");
				return "clients updated";
		
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
	return "cannot found this clients";	
	
	}  
	
	public List<clients>  search_clients_name(String name) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		clients new_cl = new clients();
		List<clients> lem = new ArrayList<clients>();
		try {
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(clients.class);
			
			Criterion c1 =Restrictions.eq("client_fname", name);
			Criterion c2 =Restrictions.eq("client_lname", name);
	LogicalExpression l= Restrictions.or(c1, c2);
                  lem = 	q.add(l).list();
			System.out.println("found clients  " + lem.size());
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
	
	public List<clients> search_clients_phone(String phone) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		clients new_cl = new clients();
		List<clients> lem = new ArrayList<clients>();
		try {
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(clients.class);
			lem=  q.add(Restrictions.eq("client_phone", phone)).list();
		     System.out.println("found clientse " +lem.size());
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
	

	public clients get_client(int id ) {
		Session se = NewHibernateUtil.getSessionFactory().openSession();
		Transaction tr= null;
		clients new_cl = new  clients() ;
		try {
			
			tr= se.beginTransaction();
			Criteria q = se.createCriteria(clients.class);
			new_cl= (clients) q.add(Restrictions.eq("clients_id", id)).list().get(0);
			
				System.out.println("clients name =>" + new_cl.getClient_fname());
			
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
	return new_cl ;	
	
	}  	

	
	public static void main(String[] args) {
//clients cl = new clients(1, 1, "abed", "hamad", "01285684022", "egypt", "alex", "bishr");
client_crud cr = new client_crud();
//cr.add_client(cl);
cr.delete_client(15);
//		cr.update_empl(10, cl);
//System.out.println(cr.search_clients_name("aa").size());
//
//Date d1= new Date(2020, 12, 31);
//Date d2 = new Date(2024, 12, 31);
//task tsk = new task( "bahy",false,1,1.0, 2.0, d1, d2,  "desc", "taskat ya bahy", "cairo", "egypt", "kafr");
// task_crud tcr = new task_crud();
// cr.tsk_cl(4, tcr.add_task(tsk));


//cr.get_client(9);
//  cr.getAllTasks(4);
	}
}