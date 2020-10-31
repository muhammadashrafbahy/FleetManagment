/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package grad.api.recycle;

import grad.api.CRUD.NewHibernateUtil;
import grad.api.Entities.*;

import java.util.ArrayList;
import java.util.List;
import org.hibernate.*;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.LogicalExpression;
import org.hibernate.criterion.Restrictions;

/**
 *
 * @author MUHAMMAD ASHRAF BAHY
 */
public class manager_crud {
   public void add_mng(manager mng){
    Session se = NewHibernateUtil.getSessionFactory().openSession();
        Transaction tr = null;
        try {
            tr = se.beginTransaction();

            se.save(mng);
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
        }}   

public manager login(String email , String passwd){
Session se = NewHibernateUtil.getSessionFactory().openSession();
Transaction tr = null;
manager res = new manager(); ;
    try {
        tr=se.beginTransaction();
        Criteria q = se.createCriteria(manager.class);
        
        Criterion c1 = Restrictions.eq("comp_email", email);
        Criterion c2 = Restrictions.eq("comp_passwd", passwd);
        
        LogicalExpression and = Restrictions.and(c1, c2);
        
        q.add(and);
        
        if  (q.list().size() != 0) {
            System.out.println("success login");
        res = (manager) q.list().get(0);        
        
        }else {
            System.out.println("success failed");
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

return res;
} 

public List<manager> all_comp(){
Session se = NewHibernateUtil.getSessionFactory().openSession();
Transaction tr = null;
List<manager> res = new ArrayList<manager>();
    try {
        tr=se.beginTransaction();
        Criteria q = se.createCriteria(manager.class);
        
      
        
//        LogicalExpression and = Restrictions.and(c1, c2);
        
        res= q.add(Restrictions.gt("id", 0)).list();
        
        if  (res.size()!= 0) {
            System.out.println("success get");
       
        
        }else {
            System.out.println(" failed get");
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

return res;
} 
    public static void main(String[] args) {
        
      
        manager mng = new manager("bahy", "passwd1", "@yahoo", "www.com", "ball", "egypt", "cairo", "heleopilis", 0.0, 0.0, "01009126166");
        manager_crud cr = new manager_crud();
//        cr.add_mng(mng);
        
//mng= cr.login("@gmail","passwd");
        List<manager> list= cr.all_comp();
        for (int i = 0; i < list.size(); i++) {
            manager elem = list.get(i);
            System.out.println("info ---->"+elem.getComp_name());
        }
    }
}
